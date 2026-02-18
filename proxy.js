import { auth } from "@/app/_lib/auth";

// We use the auth function as our middleware
export default auth;

export const config = {
  matcher: ["/account/:path*"],
};
