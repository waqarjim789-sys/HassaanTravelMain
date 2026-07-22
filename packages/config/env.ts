// packages/config/env.ts

import "dotenv/config";

function required(name: string) {
  const value = process.env[name];

  if (!value) {
    throw new Error(`${name} is missing`);
  }

  return value;
}

export function getEnv() {
  return {
    DATABASE_URL: required("DATABASE_URL"),

    JWT_SECRET: required("JWT_SECRET"),

    NODE_ENV:
      process.env.NODE_ENV || "development",
  };
}