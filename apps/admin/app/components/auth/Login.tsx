//  apps/admin/app/components/auth/Login.tsx

"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import FullLogo from "@/app/(DashboardLayout)/layout/shared/logo/FullLogo";
import CardBox from "../shared/CardBox";

import Link from "next/link";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const Login = () => {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async () => {
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Login failed");
      }

      // success → cookie already set by API
      router.push("/");

      router.refresh();
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="h-screen w-full flex justify-center items-center bg-lightprimary">
        <div className="md:min-w-[450px] min-w-max">
          <CardBox>
            <div className="flex justify-center mb-2">
              <FullLogo />
            </div>
            <p className="text-sm text-muted-foreground text-center mb-6">
              Where your journey begins.
              {/* Welcome to Traveling experience */}
            </p>

            {error && (
              <div className="mb-3 text-red-500 text-sm text-center">
                {error}
              </div>
            )}

            {/* EMAIL */}
            <div>
              <div className="mb-2 block">
                <Label htmlFor="email" className="font-medium">
                  Email
                </Label>
              </div>
              <Input
                id="email"
                type="text"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mt-2">
              <div className="mb-2 block">
                <Label htmlFor="password1" className="font-medium">
                  Password
                </Label>
              </div>
              <Input
                id="password1"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            {/* BUTTON */}
            <Button
              className="w-full mt-4"
              onClick={handleLogin}
              disabled={loading}
            >
              {loading ? "Signing in..." : "Sign In"}
            </Button>
            {/* <Button className="w-full mt-4" asChild>
              <Link href="/">Sign In</Link>
            </Button> */}
          </CardBox>
        </div>
      </div>
    </>
  );
};

// import { Checkbox } from '@/components/ui/checkbox'
{
  /* <div className='flex flex-wrap gap-6 items-center justify-between my-6'>
              <div className='flex items-center gap-2'>
                <Checkbox id='remember' checked />
                <Label
                  className='text-link font-normal text-sm'
                  htmlFor='remember'>
                  Remember this device
                </Label>
              </div>
              <Link
                href='#'
                className='text-sm font-medium text-primary hover:text-primaryemphasis'>
                Forgot Password ?
              </Link>
            </div> */
}
