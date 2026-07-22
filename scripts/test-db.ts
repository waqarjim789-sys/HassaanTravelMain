// scripts/test-db.ts

import "dotenv/config";
import { Pool } from "pg";

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

async function test() {
  const res = await pool.query("SELECT NOW()");
  console.log(res.rows);
}

test().catch(console.error);