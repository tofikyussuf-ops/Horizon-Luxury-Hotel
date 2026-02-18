// proxy.js
import { auth } from "@/app/_lib/auth";

// Next.js 16+ often expects the function to be exported as 'proxy'
// or the default export to be a specific handler.
export const proxy = auth;

export const config = {
  matcher: ["/account/:path*"],
};
