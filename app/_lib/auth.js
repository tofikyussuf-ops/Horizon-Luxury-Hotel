import NextAuth from "next-auth";
import Google from "next-auth/providers/google";

const authConfig = {
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
  ],
  // 1. Tell Auth.js where your custom login page is
  pages: {
    signIn: "/login",
  },
  callbacks: {
    // 2. This is the "Security Guard" logic for Middleware
    authorized({ auth, request }) {
      // Returns true (authorized) if there is a user, false if not
      return !!auth?.user;
    },
  },
};

export const {
  auth,
  signIn,
  signOut,
  handlers: { GET, POST },
} = NextAuth(authConfig);
