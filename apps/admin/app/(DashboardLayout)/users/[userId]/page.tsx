// apps/admin/app/(DashboardLayout)/users/[userId]/page.tsx

import { notFound } from "next/navigation";

import UserForm from "@/app/components/users/UserForm";

import { runQuery } from "@repo/db";

type PageProps = {
  params: Promise<{
    userId: string;
  }>;
};

type User = {
  id: string;

  email: string;

  name: string | null;

  role: "super_admin" | "admin" | "editor" | "user";

  status: "active" | "suspended";
};

export default async function EditUserPage({ params }: PageProps) {
  const { userId } = await params;

  /*
  |--------------------------------------------------------------------------
  | FETCH USER
  |--------------------------------------------------------------------------
  */

  const result = await runQuery<User>(
    `
      SELECT
        id,
        email,
        name,
        role,
        status
      FROM users
      WHERE id = $1
      LIMIT 1
    `,
    [userId],
  );

  const user = result.rows[0];

  /*
  |--------------------------------------------------------------------------
  | NOT FOUND
  |--------------------------------------------------------------------------
  */

  if (!user) {
    notFound();
  }

  /*
  |--------------------------------------------------------------------------
  | PAGE
  |--------------------------------------------------------------------------
  */

  return (
    <div className="page-wrapper">
      <div className="content">
        <UserForm
          user={{
            ...user,
            name: user.name ?? undefined,
          }}
        />
      </div>
    </div>
  );
}
