import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Set to false to disable middleware if experiencing redirect loops
// Temporarily disabled to fix ERR_TOO_MANY_REDIRECTS - re-enable after verifying Vercel redirects
const ENABLE_MIDDLEWARE = false;

export function middleware(request: NextRequest) {
  // Temporarily disable if experiencing redirect loops
  if (!ENABLE_MIDDLEWARE) {
    return NextResponse.next();
  }

  const pathname = request.nextUrl.pathname;

  // Only remove trailing slash (except root) to prevent duplicate content
  // IMPORTANT: Vercel handles www→non-www and HTTP→HTTPS automatically
  // Do NOT add those redirects here to avoid conflicts
  
  // Skip if already a redirect or API route
  if (pathname.startsWith('/api') || pathname.startsWith('/_next')) {
    return NextResponse.next();
  }

  // Remove trailing slash (except root)
  if (pathname !== '/' && pathname.endsWith('/')) {
    const url = request.nextUrl.clone();
    url.pathname = pathname.slice(0, -1);
    // Preserve query parameters and hash
    url.search = request.nextUrl.search;
    url.hash = request.nextUrl.hash;
    return NextResponse.redirect(url, 301);
  }

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
