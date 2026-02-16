import NextAuth from "next-auth";
import Google from "next-auth/providers/google";

const authConfig = {
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
  ],
  callbacks: {
    authorized({ auth, request }) {
      // Return true if the user is logged in (auth exists)
      return !!auth?.user;
    },
  },
};

// V5 exports these specific methods for you to use globally
export const {
  auth,
  handlers: { GET, POST },
} = NextAuth(authConfig);
