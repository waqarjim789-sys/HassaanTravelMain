// apps/admin/middleware.ts
import { NextResponse } from 'next/server';
import { verifyToken } from '@repo/auth';

export function middleware(req: any) {
  const token = req.cookies.get('admin_token')?.value;

  if (!token) {
    return NextResponse.redirect(
      new URL('/auth/login', req.url)
    );
  }

  try {
    const user = verifyToken(token);

    if (user.role === 'user') {
      return NextResponse.redirect(
        new URL('/auth/login', req.url)
      );
    }

    return NextResponse.next();
  } catch {
    return NextResponse.redirect(
      new URL('/auth/login', req.url)
    );
  }
}

export const config = {
  matcher: ['/:path*']
};