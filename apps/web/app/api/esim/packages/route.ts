import { NextRequest, NextResponse } from "next/server";
import { esimPost } from "@/lib/esim/client";
import {
  getCustomerPrice,
  formatCustomerPrice,
} from "@/lib/esim/pricing";

type PackageItem = {
  packageCode?: string;
  slug?: string;
  name?: string;
  price?: number;
  currencyCode?: string;
  volume?: number;
  duration?: number;
  durationUnit?: string;
  speed?: string;
  location?: string;
  locationCode?: string;
  description?: string;
  retailPrice?: number;
  locationNetworkList?: Array<{
    locationName?: string;
    locationCode?: string;
    operatorList?: Array<{
      operatorName?: string;
      networkType?: string;
    }>;
  }>;
};

type EsimAccessResponse = {
  success?: boolean;
  errorCode?: string | null;
  errorMsg?: string | null;
  obj?: {
    packageList?: PackageItem[];
  };
};

function getLocationCode(request: NextRequest): string | null {
  const { searchParams } = new URL(request.url);

  const value =
    searchParams.get("locationCode") ||
    searchParams.get("location") ||
    "";

  const normalized = value.trim().toUpperCase();

  if (!normalized) {
    return null;
  }

  // Only allow normal ISO-style country codes.
  // Global/regional codes such as GL-139 are also allowed.
  if (!/^[A-Z0-9,-]+$/.test(normalized)) {
    return null;
  }

  return normalized;
}

function bytesToGB(volume?: number): number | null {
  if (!volume || volume <= 0) {
    return null;
  }

  return volume / 1024 / 1024 / 1024;
}

function normalizeDuration(
  duration?: number,
  durationUnit?: string
): string | null {
  if (!duration) {
    return null;
  }

  const unit = (durationUnit || "DAY").toUpperCase();

  const labels: Record<string, string> = {
    DAY: duration === 1 ? "Day" : "Days",
    DAYS: duration === 1 ? "Day" : "Days",
    HOUR: duration === 1 ? "Hour" : "Hours",
    HOURS: duration === 1 ? "Hour" : "Hours",
    MONTH: duration === 1 ? "Month" : "Months",
    MONTHS: duration === 1 ? "Month" : "Months",
  };

  return `${duration} ${labels[unit] || unit}`;
}

function getNetwork(
  pkg: PackageItem
): string {
  if (pkg.speed) {
    return pkg.speed;
  }

  const networks =
    pkg.locationNetworkList
      ?.flatMap((location) =>
        location.operatorList?.map(
          (operator) => operator.networkType
        ) || []
      )
      .filter(Boolean);

  if (!networks || networks.length === 0) {
    return "4G / 5G";
  }

  return [...new Set(networks)].join(" / ");
}

function getCoverage(
  pkg: PackageItem
): string {
  if (pkg.locationCode) {
    return pkg.locationCode;
  }

  if (pkg.location) {
    return pkg.location;
  }

  return "";
}

export async function POST(request: NextRequest) {
  try {
    let body: Record<string, unknown> = {};

    try {
      body = await request.json();
    } catch {
      body = {};
    }

    const queryLocationCode = getLocationCode(request);

    const bodyLocationCode =
      typeof body.locationCode === "string"
        ? body.locationCode.trim().toUpperCase()
        : "";

    const locationCode =
      bodyLocationCode || queryLocationCode;

    if (!locationCode) {
      return NextResponse.json(
        {
          success: false,
          errorCode: "INVALID_LOCATION",
          errorMsg:
            "locationCode is required. Example: PK, NL, AE, SA, TR or IN.",
        },
        { status: 400 }
      );
    }

    if (!locationCode) {
      return NextResponse.json(
        {
          success: false,
          errorCode: "INVALID_LOCATION",
          errorMsg:
            "locationCode is required. Example: PK, NL, AE, SA, TR or IN.",
        },
        { status: 400 }
      );
    }

    /*
     * eSIMAccess package/list request.
     *
     * We deliberately send an empty body and perform
     * country filtering on our server.
     *
     * This is compatible with the working API request
     * you already tested:
     *
     * POST /api/v1/open/package/list
     * {}
     */
    const apiResponse = (await esimPost(
      "/api/v1/open/package/list",
      {}
    )) as EsimAccessResponse;

    if (!apiResponse?.success) {
      return NextResponse.json(
        {
          success: false,
          errorCode: apiResponse?.errorCode ?? "ESIM_API_ERROR",
          errorMsg:
            apiResponse?.errorMsg ||
            "Unable to retrieve eSIM packages.",
        },
        { status: 502 }
      );
    }

    const packageList = apiResponse?.obj?.packageList || [];

    /*
     * IMPORTANT:
     *
     * A package can contain multiple locations.
     * Therefore we check both:
     *
     * 1. package.locationCode
     * 2. package.location
     * 3. locationNetworkList[].locationCode
     *
     * This also prevents accidentally showing Global packages
     * when the customer selected a specific country.
     */
    const filteredPackages = packageList.filter((pkg) => {
      const target = locationCode;

      const directLocationCodes = [
        pkg.locationCode,
        pkg.location,
      ]
        .filter(Boolean)
        .flatMap((value) =>
          String(value)
            .split(",")
            .map((item) => item.trim().toUpperCase())
        );

      const networkLocationCodes =
        pkg.locationNetworkList
          ?.map((location) =>
            location.locationCode?.trim().toUpperCase()
          )
          .filter(Boolean) || [];

      return (
        directLocationCodes.includes(target) ||
        networkLocationCodes.includes(target)
      );
    });

    /*
     * Convert supplier packages into customer-safe objects.
     *
     * Supplier USD price and internal pricing calculations
     * are NOT returned to the browser.
     */
    const packages = filteredPackages
      .filter(
        (pkg) =>
          typeof pkg.price === "number" &&
          pkg.price > 0 &&
          pkg.packageCode
      )
      .map((pkg) => {
        const pricing = getCustomerPrice(
          pkg.price as number,
          pkg.currencyCode || "USD"
        );

        const gb = bytesToGB(pkg.volume);

        return {
          packageCode: pkg.packageCode,
          slug: pkg.slug || null,

          name:
            pkg.name ||
            pkg.description ||
            "eSIM Data Package",

          data:
            gb !== null
              ? `${Number(gb.toFixed(2))} GB`
              : null,

          volume: pkg.volume || null,

          duration: pkg.duration || null,

          durationUnit:
            pkg.durationUnit || "DAY",

          validity: normalizeDuration(
            pkg.duration,
            pkg.durationUnit
          ),

          network: getNetwork(pkg),

          coverage: getCoverage(pkg),

          countryCode: locationCode,

          /*
           * CUSTOMER PRICE
           *
           * Always EUR.
           * Always rounded.
           */
          price: pricing.customerPriceEUR,

          displayPrice: formatCustomerPrice(
            pricing.customerPriceEUR
          ),

          currency: "EUR",

          /*
           * Useful for internal/frontend display.
           * No supplier currency or supplier cost is exposed.
           */
          instantDelivery: true,
        };
      });

    /*
     * Sort cheapest first.
     */
    packages.sort(
      (a, b) => a.price - b.price
    );

    return NextResponse.json({
      success: true,
      errorCode: null,
      errorMsg: null,

      countryCode: locationCode,

      packageCount: packages.length,

      packages,
    });
  } catch (error) {
    console.error(
      "eSIM packages API error:",
      error
    );

    return NextResponse.json(
      {
        success: false,
        errorCode: "INTERNAL_ERROR",
        errorMsg:
          error instanceof Error
            ? error.message
            : "Unable to retrieve eSIM packages.",
      },
      { status: 500 }
    );
  }
}