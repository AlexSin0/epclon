import { AuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import dbRegister from "./dbRegister";

export const authOptions: AuthOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      dbRegister(user);
      return true;
    },
  },
};

export const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
