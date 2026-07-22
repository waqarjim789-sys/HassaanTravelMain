// apps/admin/app/api/auth/login/route.ts

import { NextResponse } from "next/server";

import { comparePassword, signToken } from "@repo/auth";

import { runQuery } from "@repo/db";
import { rolePermissions } from "@repo/auth";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { email, password } = body;

    const result = await runQuery(
      `
      SELECT *
      FROM users
      WHERE email = $1
      LIMIT 1
      `,
      [email],
    );

    const user = result.rows[0];

    if (!user) {
      return NextResponse.json(
        { error: "Invalid credentials" },
        { status: 401 },
      );
    }

    const isValid = await comparePassword(password, user.password_hash);

    if (!isValid) {
      return NextResponse.json(
        { error: "Invalid credentials" },
        { status: 401 },
      );
    }

    if (user.role !== "super_admin" && user.role !== "admin") {
      return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
    }

    const permissions =
      rolePermissions[user.role as keyof typeof rolePermissions] || [];

    const token = signToken({
      userId: user.id,
      email: user.email,
      role: user.role,
      permissions,
    });

    const response = NextResponse.json({
      success: true,
    });

    response.cookies.set("admin_token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 7,
    });

    return response;
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
