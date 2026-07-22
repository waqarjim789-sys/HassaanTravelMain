// apps/admin/components/users/UserForm.tsx

"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";

import Link from "next/link";

import {
  ArrowLeft,
  Mail,
  Lock,
  User,
  Shield,
} from "react-feather";

// import { useToast } from "@repo/ui";

import { saveUserAction } from "./actions";

type UserRole =
  | "super_admin"
  | "admin"
  | "editor"
  | "user";

interface UserFormProps {
  user?: {
    id: string;
    email: string;
    name?: string;
    role: UserRole;
    status: "active" | "suspended";
  };
}

export default function UserForm({
  user,
}: UserFormProps) {
  const router = useRouter();

  // const { showToast } = useToast();

  const [isPending, startTransition] =
    useTransition();

  const [form, setForm] = useState({
    email: user?.email ?? "",
    name: user?.name ?? "",
    password: "",
    role: user?.role ?? "user",
    status: user?.status ?? "active",
  });

  async function handleSubmit(
    e: React.FormEvent
  ) {
    e.preventDefault();

    startTransition(async () => {
      try {
        await saveUserAction(
          user?.id ?? null,
          form
        );

        // showToast(
        //   "success",
        //   user
        //     ? "User updated successfully"
        //     : "User created successfully"
        // );

        router.push("/users");

        router.refresh();
      } catch (error) {
        console.error(error);

        // showToast(
        //   "error",
        //   "Failed to save user"
        // );
      }
    });
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-3xl mx-auto pb-10"
    >
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
        
        {/* Header */}
        <div className="px-8 py-6 border-b border-gray-100 bg-gray-50 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              {user
                ? "Edit User"
                : "Create User"}
            </h1>

            <p className="text-sm text-gray-500 mt-1">
              Manage user account and
              permissions.
            </p>
          </div>

          <Link
            href="/users"
            className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-[#0F91D5] transition"
          >
            <ArrowLeft size={16} />

            Back
          </Link>
        </div>

        {/* Body */}
        <div className="p-8 space-y-6">

          {/* Full Name */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">
              Full Name
            </label>

            <div className="relative">
              <User
                className="absolute left-3 top-3 text-gray-400"
                size={16}
              />

              <input
                type="text"
                required
                placeholder="John Doe"
                value={form.name}
                onChange={(e) =>
                  setForm({
                    ...form,
                    name: e.target.value,
                  })
                }
                className="w-full pl-10 pr-4 py-2 border border-gray-300 text-black rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Email */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">
              Email Address
            </label>

            <div className="relative">
              <Mail
                className="absolute left-3 top-3 text-gray-400"
                size={16}
              />

              <input
                type="email"
                required
                placeholder="john@example.com"
                value={form.email}
                onChange={(e) =>
                  setForm({
                    ...form,
                    email: e.target.value,
                  })
                }
                className="w-full pl-10 pr-4 py-2 border border-gray-300 text-black rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Password */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">
              Password
            </label>

            <div className="relative">
              <Lock
                className="absolute left-3 top-3 text-gray-400"
                size={16}
              />

              <input
                type="password"
                placeholder={
                  user
                    ? "Leave blank to keep current password"
                    : "Minimum 8 characters"
                }
                required={!user}
                value={form.password}
                onChange={(e) =>
                  setForm({
                    ...form,
                    password: e.target.value,
                  })
                }
                className="w-full pl-10 pr-4 py-2 border border-gray-300 text-black rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Role */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">
              Role
            </label>

            <div className="relative">
              <Shield
                className="absolute left-3 top-3 text-gray-400"
                size={16}
              />

              <select
                value={form.role}
                onChange={(e) =>
                  setForm({
                    ...form,
                    role:
                      e.target
                        .value as UserRole,
                  })
                }
                className="w-full pl-10 pr-4 py-2 border border-gray-300 text-black rounded-xl outline-none focus:ring-2 focus:ring-blue-500 bg-white"
              >
                <option value="user">
                  User
                </option>

                <option value="editor">
                  Editor
                </option>

                <option value="admin">
                  Admin
                </option>

                <option value="super_admin">
                  Super Admin
                </option>
              </select>
            </div>
          </div>

          {/* Status */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">
              Status
            </label>

            <select
              value={form.status}
              onChange={(e) =>
                setForm({
                  ...form,
                  status:
                    e.target.value as
                      | "active"
                      | "suspended",
                })
              }
              className="w-full px-4 py-2 border border-gray-300 rounded-xl text-black outline-none focus:ring-2 focus:ring-blue-500 bg-white"
            >
              <option value="active">
                Active
              </option>

              <option value="suspended">
                Suspended
              </option>
            </select>
          </div>
        </div>

        {/* Footer */}
        <div className="px-8 py-6 border-t border-gray-100 bg-gray-50 flex justify-end gap-3">
          <Link
            href="/users"
            className="px-6 py-2.5 rounded-xl text-sm font-semibold text-gray-600 hover:bg-gray-200 transition"
          >
            Cancel
          </Link>

          <button
            type="submit"
            disabled={isPending}
            className="px-8 py-2.5 rounded-xl text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 disabled:opacity-50 transition"
          >
            {isPending
              ? "Saving..."
              : user
              ? "Update User"
              : "Create User"}
          </button>
        </div>
      </div>
    </form>
  );
}