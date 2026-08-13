import { NextResponse } from "next/server";
import { esimRequest } from "@/lib/esim/client";

export async function POST() {
  try {
    const data = await esimRequest(
      "/api/v1/open/balance/query",
      {}
    );

    return NextResponse.json(data);
  } catch (error) {
    console.error("eSIM balance error:", error);

    return NextResponse.json(
      {
        success: false,
        error:
          error instanceof Error
            ? error.message
            : "Unknown eSIM API error",
      },
      { status: 500 }
    );
  }
}