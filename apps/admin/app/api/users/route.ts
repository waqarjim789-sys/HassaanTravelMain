// apps\admin\app\api\users\route.ts

import { NextRequest, NextResponse } from "next/server";

import { cookies } from "next/headers";

import { runQuery } from "@repo/db";

import { verifyToken, hasPermission } from "@repo/auth";

const PAGE_SIZE = 10;

export async function GET(request: NextRequest) {
  try {
    /*
    |--------------------------------------------------------------------------
    | AUTH
    |--------------------------------------------------------------------------
    */

    const cookieStore = await cookies();

    const token = cookieStore.get("admin_token")?.value;

    if (!token) {
      return NextResponse.json(
        {
          message: "Unauthorized",
        },
        {
          status: 401,
        },
      );
    }

    const user = verifyToken(token);

    /*
    |--------------------------------------------------------------------------
    | PERMISSION CHECK
    |--------------------------------------------------------------------------
    */

    const allowed = hasPermission(user.permissions, "users.read");

    if (!allowed) {
      return NextResponse.json(
        {
          message: "Forbidden",
        },
        {
          status: 403,
        },
      );
    }

    /*
    |--------------------------------------------------------------------------
    | QUERY PARAMS
    |--------------------------------------------------------------------------
    */

    const { searchParams } = new URL(request.url);

    const page = Number(searchParams.get("page") || "1");

    const search = searchParams.get("search") || "";

    const offset = (page - 1) * PAGE_SIZE;

    /*
    |--------------------------------------------------------------------------
    | FILTERS
    |--------------------------------------------------------------------------
    */

    let whereClause = "";
    const values: unknown[] = [];

    if (search.trim()) {
      whereClause = `
        WHERE
          email ILIKE $1
          OR name ILIKE $1
      `;

      values.push(`%${search}%`);
    }

    /*
    |--------------------------------------------------------------------------
    | TOTAL COUNT
    |--------------------------------------------------------------------------
    */

    const totalQuery = `
      SELECT COUNT(*)::int AS total
      FROM users
      ${whereClause}
    `;

    const totalResult = await runQuery<{
      total: number;
    }>(totalQuery, values);

    const total = totalResult.rows[0]?.total || 0;

    /*
    |--------------------------------------------------------------------------
    | USERS QUERY
    |--------------------------------------------------------------------------
    */

    const usersQuery = `
      SELECT
        id,
        email,
        name,
        role,
        status,
        created_at
      FROM users
      ${whereClause}
      ORDER BY created_at DESC
      LIMIT $${values.length + 1}
      OFFSET $${values.length + 2}
    `;

    const usersResult = await runQuery(usersQuery, [
      ...values,
      PAGE_SIZE,
      offset,
    ]);

    /*
    |--------------------------------------------------------------------------
    | RESPONSE
    |--------------------------------------------------------------------------
    */

    return NextResponse.json({
      items: usersResult.rows,

      total,

      page,

      pageSize: PAGE_SIZE,
    });
  } catch (error) {
    console.error("GET /api/users error:", error);

    return NextResponse.json(
      {
        message: "Failed to fetch users",
      },
      {
        status: 500,
      },
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    /*
    |--------------------------------------------------------------------------
    | AUTH
    |--------------------------------------------------------------------------
    */

    const cookieStore = await cookies();

    const token = cookieStore.get("admin_token")?.value;

    if (!token) {
      return NextResponse.json(
        {
          message: "Unauthorized",
        },
        {
          status: 401,
        },
      );
    }

    const currentUser = verifyToken(token);

    /*
    |--------------------------------------------------------------------------
    | PERMISSION CHECK
    |--------------------------------------------------------------------------
    */

    const allowed = hasPermission(currentUser.permissions, "users.write");

    if (!allowed) {
      return NextResponse.json(
        {
          message: "Forbidden",
        },
        {
          status: 403,
        },
      );
    }

    /*
    |--------------------------------------------------------------------------
    | BODY
    |--------------------------------------------------------------------------
    */

    const body = await request.json();

    const { email, name, password_hash, role, status } = body;

    /*
    |--------------------------------------------------------------------------
    | VALIDATION
    |--------------------------------------------------------------------------
    */

    if (!email || !password_hash || !role) {
      return NextResponse.json(
        {
          message: "Missing required fields",
        },
        {
          status: 400,
        },
      );
    }

    /*
    |--------------------------------------------------------------------------
    | SUPER ADMIN SECURITY
    |--------------------------------------------------------------------------
    */

    if (role === "super_admin" && currentUser.role !== "super_admin") {
      return NextResponse.json(
        {
          message: "Only super admins can create super admins",
        },
        {
          status: 403,
        },
      );
    }

    /*
    |--------------------------------------------------------------------------
    | CHECK EXISTING EMAIL
    |--------------------------------------------------------------------------
    */

    const existingUser = await runQuery(
      `
        SELECT id
        FROM users
        WHERE email = $1
      `,
      [email],
    );

    if (existingUser.rows.length > 0) {
      return NextResponse.json(
        {
          message: "Email already exists",
        },
        {
          status: 409,
        },
      );
    }

    /*
    |--------------------------------------------------------------------------
    | CREATE USER
    |--------------------------------------------------------------------------
    */

    const result = await runQuery(
      `
      INSERT INTO users (
        email,
        name,
        password_hash,
        role,
        status
      )
      VALUES (
        $1,
        $2,
        $3,
        $4,
        $5
      )
      RETURNING
        id,
        email,
        name,
        role,
        status,
        created_at
    `,
      [email, name || null, password_hash, role, status || "active"],
    );

    return NextResponse.json(
      {
        message: "User created successfully",

        user: result.rows[0],
      },
      {
        status: 201,
      },
    );
  } catch (error) {
    console.error("POST /api/users error:", error);

    return NextResponse.json(
      {
        message: "Failed to create user",
      },
      {
        status: 500,
      },
    );
  }
}
