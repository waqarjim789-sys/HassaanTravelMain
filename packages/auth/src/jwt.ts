// packages/auth/src/jwt.ts

import jwt from "jsonwebtoken";

import { getEnv } from "@repo/config";

import type { Role } from "@repo/types/roles";

import type { Permission } from "@repo/types/permissions";

// const env = getEnv();
function env() {
  return getEnv();
}

export type JwtPayload = {
  userId: string;

  email: string;

  role: Role;

  permissions: Permission[];
};

/**
 * Create JWT token
 */
export function signToken(
  payload: JwtPayload
) {
  return jwt.sign(
    payload,
    env().JWT_SECRET,
    {
      expiresIn: "7d",
    }
  );
}

/**
 * Verify JWT token
 */
export function verifyToken(
  token: string
): JwtPayload {
  return jwt.verify(
    token,
    env().JWT_SECRET
  ) as JwtPayload;
}

/**
 * Decode token without verification
 */
export function decodeToken(
  token: string
): JwtPayload | null {
  try {
    return jwt.decode(
      token
    ) as JwtPayload;
  } catch {
    return null;
  }
}