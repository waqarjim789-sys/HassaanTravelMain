// scripts/create-super-admin.ts

import "dotenv/config";
import { hashPassword } from "../packages/auth/src";
import { runQuery } from "../packages/db/src";

async function main() {
  const email = "admin@hassan-travels.com";
  const password = "h@ssan-tr@vels786";

  const passwordHash = await hashPassword(password);

  const result = await runQuery(
    `
    INSERT INTO users (
      email,
      password_hash,
      name,
      role
    )
    VALUES ($1, $2, $3, $4)
    RETURNING id, email, role
    `,
    [
      email,
      passwordHash,
      "Super Admin",
      "super_admin",
    ]
  );

  console.log("Admin created:");
  console.log(result.rows[0]);

  process.exit(0);
}

main().catch((err) => {
  console.error(err);

  process.exit(1);
});