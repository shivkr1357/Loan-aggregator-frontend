import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  const pathname = url.pathname;
  const hostname = request.headers.get('host') || '';

  // 1. Normalize www (redirect www to non-www)
  // This prevents duplicate content issues
  const preferredDomain = process.env.NEXT_PUBLIC_DOMAIN || 'loanpilot.in';
  
  if (hostname.startsWith('www.')) {
    url.hostname = preferredDomain;
    return NextResponse.redirect(url, 301);
  }

  // 2. Remove trailing slash (except for root)
  // This ensures consistent URLs and prevents duplicate content
  if (pathname !== '/' && pathname.endsWith('/')) {
    url.pathname = pathname.slice(0, -1);
    return NextResponse.redirect(url, 301);
  }

  // Note: HTTPS redirect is typically handled by your hosting provider (Vercel, etc.)
  // Query parameters are preserved as they're needed for filtering/search functionality

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - api routes
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public files (images, etc.)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico)).*)',
  ],
};
