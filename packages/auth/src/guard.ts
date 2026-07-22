// packages/auth/src/guard.ts

import { verifyToken } from "./jwt";

export function requireAuth(token?: string) {
  if (!token) throw new Error("Unauthorized");

  return verifyToken(token);
}

export function requireRole(
  payload: any,
  roles: string[]
) {
  if (!roles.includes(payload.role)) {
    throw new Error("Forbidden");
  }

  return true;
}

export function requirePermission(
  payload: any,
  permission: string
) {
  if (!payload.permissions?.includes(permission)) {
    throw new Error("Forbidden");
  }

  return true;
}