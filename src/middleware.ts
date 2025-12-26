import { type NextRequest, NextResponse } from 'next/server';
import { createSupabaseServerClient } from '@/lib/supabase';

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();
  const supabase = createSupabaseServerClient(req.cookies);

  const {
    data: { session },
  } = await supabase.auth.getSession();

  const { pathname } = req.nextUrl;

  // Redirect to login if not authenticated and trying to access protected routes
  if (!session && pathname.startsWith('/rewards')) {
    const url = req.nextUrl.clone();
    url.pathname = '/login';
    return NextResponse.redirect(url);
  }

  // Redirect to rewards if authenticated and on login page
  if (session && (pathname === '/login' || pathname === '/signup' || pathname === '/forgot-password')) {
    const url = req.nextUrl.clone();
    url.pathname = '/rewards';
    return NextResponse.redirect(url);
  }

  return res;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * Feel free to modify this pattern to include more paths.
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
};
