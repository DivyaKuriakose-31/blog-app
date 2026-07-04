// Before: export function middleware(request: NextRequest) { ... }

// After:
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function proxy(request: NextRequest) {
  const isLoggedIn = request.cookies.get('isLoggedIn');

  if (!isLoggedIn && request.nextUrl.pathname === '/') {
    return NextResponse.redirect(new URL('/auth/signin', request.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: '/', // Ensure your matcher is still here
};