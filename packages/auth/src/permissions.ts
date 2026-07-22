// packages/auth/src/permissions.ts

import type { Role } from "@repo/types/roles";

import type { Permission } from "@repo/types/permissions";

export const rolePermissions: Record<
  Role,
  Permission[]
> = {
  super_admin: [
    "users.read",
    "users.write",
    "users.delete",

    "bookings.read",
    "bookings.write",

    "content.write",

    "admin.access",
  ],

  admin: [
    "users.read",
    "users.write",

    "bookings.read",
    "bookings.write",

    "admin.access",
  ],

  editor: [
    "content.write",
  ],

  user: [],
};

/**
 * Check if user has permission
 */
export function hasPermission(
  userPermissions: Permission[],
  permission: Permission
) {
  return userPermissions.includes(
    permission
  );
}

/**
 * Get permissions from role
 */
export function getRolePermissions(
  role: Role
): Permission[] {
  return rolePermissions[role] || [];
}