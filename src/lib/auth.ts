import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import dbRegister from "./dbRegister";

export const { auth, handlers, signIn, signOut } = NextAuth({
  providers: [GitHub, Google],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      dbRegister(user);
      return true;
    },
  },
});
