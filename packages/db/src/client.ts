// packages/db/src/client.ts
import { Pool, QueryResult, QueryResultRow } from "pg";

import { getEnv } from "@repo/config";

declare global {
  // eslint-disable-next-line no-var
  var pgPool: Pool | undefined;
}

// Pool should also be a singleton for Next.js dev mode

function createPool() {
  const env = getEnv();

  return new Pool({
    connectionString: env.DATABASE_URL,

    max: 20,
    idleTimeoutMillis: 30_000,
    connectionTimeoutMillis: 10_000,

    ssl: {
      rejectUnauthorized: false,
    },
  });
}

export function getPool() {
  if (!global.pgPool) {
    global.pgPool = createPool();
  }

  return global.pgPool;
}

// export const pool = global.pgPool ?? createPool();

// if (process.env.NODE_ENV !== "production") {
//   global.pgPool = pool;
// }

/**
 * Generic SQL query helper
 */
export async function runQuery<T extends QueryResultRow = any>(
  text: string,
  params: unknown[] = [],
): Promise<QueryResult<T>> {
  try {
    return await getPool().query<T>(text, params);
  } catch (error) {
    console.error("Database query error:", error);

    throw error;
  }
}

/**
 * Transaction helper
 */
export async function withTransaction<T>(
  callback: (client: Pool) => Promise<T>,
): Promise<T> {
  const client = await getPool().connect();

  try {
    await client.query("BEGIN");

    const result = await callback(client as unknown as Pool);

    await client.query("COMMIT");

    return result;
  } catch (error) {
    await client.query("ROLLBACK");

    throw error;
  } finally {
    client.release();
  }
}
