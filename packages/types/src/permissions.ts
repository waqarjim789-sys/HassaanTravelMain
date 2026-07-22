// packages/types/src/permissions.ts

export type Permission =
  | "users.read"
  | "users.write"
  | "users.delete"
  | "bookings.read"
  | "bookings.write"
  | "content.write"
  | "admin.access";