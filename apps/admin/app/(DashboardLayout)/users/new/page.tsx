// apps/admin/app/(DashboardLayout)/users/new/page.tsx

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import { verifyToken } from "@repo/auth";

import UserForm from "@/app/components/users/UserForm";

export default async function NewUserPage() {
  const cookieStore = await cookies();

  const token =
    cookieStore.get("admin_token")?.value;

  if (!token) {
    redirect("/auth/login");
  }

  const user = verifyToken(token);

  if (
    !user.permissions.includes("users.write")
  ) {
    redirect("/dashboard/users");
  }

  return (
    <div className="page-wrapper">
      <div className="content">
        <UserForm />
      </div>
    </div>
  );
}

/* import UserForm from "@/app/components/users/UserForm";

export default function NewUserPage() {
  return (
    <div className="page-wrapper">
      <div className="content">
        <UserForm />
      </div>
    </div>
  );
} */
