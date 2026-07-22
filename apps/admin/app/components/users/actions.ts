// apps/admin/components/users/actions.ts

"use server";


import { revalidatePath } from "next/cache";
// import { requirePlatformAdminServer } from "@/lib/auth/server-guards";
import bcrypt from "bcryptjs";
// import { pool } from "@repo/db";
import { getPool } from "@repo/db";

export async function getReferenceData() {
  // await requirePlatformAdminServer();

  const pool = getPool();

  try {
    // 1. Fetch active stores
    const storesRes = await pool.query(
      `SELECT id, name FROM stores WHERE status = 'active' ORDER BY name ASC`
    );

    // 2. Fetch only 'store' scoped roles for the assignments dropdown
    // We exclude 'platform' roles because those are handled by the is_platform_admin toggle
    const rolesRes = await pool.query(
      `SELECT id, key, '' AS name FROM roles WHERE scope = 'store' ORDER BY key ASC`
    );

    return {
      stores: storesRes.rows,
      roles: rolesRes.rows.map(r => ({
        id: r.id,
        // Format the key for display (e.g., "store_admin" -> "Store Admin")
        name: r.name || r.key.split('_').map((word: string) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
      })),
    };
  } catch (error) {
    console.error("Failed to fetch reference data:", error);
    return { stores: [], roles: [] };
  }
}

export async function saveUserAction(userId: string | null, formData: any) {

  const pool = getPool();
  // const actor = await requirePlatformAdminServer();
  const client = await pool.connect();

  try {
    await client.query("BEGIN");

    let finalUserId = userId;

    if (!userId) {
      // CREATE USER
      const hashedPassword = await bcrypt.hash(formData.password, 10);
      const userRes = await client.query(
        `INSERT INTO users (email, name, password_hash, is_platform_admin, status)
         VALUES ($1, $2, $3, $4, $5) RETURNING id`,
        [formData.email, formData.name, hashedPassword, formData.is_platform_admin, formData.status]
      );
      finalUserId = userRes.rows[0].id;
    } else {
      // UPDATE USER
      await client.query(
        `UPDATE users SET email = $1, name = $2, is_platform_admin = $3, status = $4 WHERE id = $5`,
        [formData.email, formData.name, formData.is_platform_admin, formData.status, userId]
      );
    }

    // SYNC STORE ASSIGNMENTS
    // Simplest way: Delete existing and re-insert (or use a delta)
    await client.query(`DELETE FROM store_users WHERE user_id = $1`, [finalUserId]);
    
    if (formData.storeAssignments?.length > 0) {
      for (const assign of formData.storeAssignments) {
        await client.query(
          `INSERT INTO store_users (store_id, user_id, role_id) VALUES ($1, $2, $3)`,
          [assign.store_id, finalUserId, assign.role_id]
        );
      }
    }

    await client.query("COMMIT");
    revalidatePath("/users");
    return { success: true, id: finalUserId };
  } catch (e) {
    await client.query("ROLLBACK");
    throw e;
  } finally {
    client.release();
  }
}