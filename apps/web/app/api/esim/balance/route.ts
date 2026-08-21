import { timingSafeEqual } from "node:crypto";
import { NextRequest, NextResponse } from "next/server";
import { esimRequest } from "@/lib/esim/client";

function isAuthorized(request: NextRequest): boolean {
  const expectedToken = process.env.ESIM_ADMIN_API_TOKEN;
  const authorization = request.headers.get("authorization");

  if (!expectedToken || !authorization?.startsWith("Bearer ")) {
    return false;
  }

  const suppliedToken = authorization.slice("Bearer ".length).trim();
  const suppliedBuffer = Buffer.from(suppliedToken);
  const expectedBuffer = Buffer.from(expectedToken);

  return (
    suppliedBuffer.length === expectedBuffer.length &&
    timingSafeEqual(suppliedBuffer, expectedBuffer)
  );
}

export async function POST(request: NextRequest) {
  if (!isAuthorized(request)) {
    return NextResponse.json(
      {
        success: false,
        errorCode: "UNAUTHORIZED",
        errorMsg: "Unauthorized.",
      },
      {
        status: 401,
        headers: {
          "Cache-Control": "no-store",
          "WWW-Authenticate": "Bearer",
        },
      },
    );
  }

  try {
    const data = await esimRequest("/api/v1/open/balance/query", {});

    return NextResponse.json(data, {
      headers: { "Cache-Control": "no-store" },
    });
  } catch (error) {
    console.error("eSIM balance error:", error);

    return NextResponse.json(
      {
        success: false,
        error:
          error instanceof Error ? error.message : "Unknown eSIM API error",
      },
      { status: 500 },
    );
  }
}
