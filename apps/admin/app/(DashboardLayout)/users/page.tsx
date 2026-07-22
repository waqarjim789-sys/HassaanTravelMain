// apps/admin/app/(DashboardLayout)/users/page.tsx

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import { verifyToken } from "@repo/auth";

import UsersListComponent from "@/app/components/users/UsersList";

export default async function UsersPage() {
  const cookieStore = await cookies();

  const token =
    cookieStore.get("admin_token")?.value;

  if (!token) {
    redirect("/auth/login");
  }

  const user = verifyToken(token);

  if (
    !user.permissions.includes("users.read")
  ) {
    redirect("/");
  }

  return (
    <div className="page-wrapper">
      <div className="content">
        <h1 className="text-2xl font-bold mb-4">
          Users
        </h1>

        <UsersListComponent />
      </div>
    </div>
  );
}

/* import UsersListComponent from "@/app/components/users/UsersList";


export default function UsersPage() {
  return (
    <div className="page-wrapper">
      <div className="content">
        <h1 className="text-2xl font-bold mb-4">Users</h1>
        <UsersListComponent />
      </div>
    </div>
  );
}
 */