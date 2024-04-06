import { credentialsProvider } from "./credentialsProvider";
//import GoogleProvider from "next-auth/providers/google";
import type { NextAuthOptions } from "next-auth";

export const authOptions: NextAuthOptions = {
  secret: "super secret",
  providers: [
    // GoogleProvider({
    //   clientId: process.env.GOOGLE_CLIENT_ID || "default_client_id",
    //   clientSecret: process.env.GOOGLE_CLIENT_SECRET || "default_client_secret"
    // }),
    credentialsProvider
  ],
  callbacks: {
    async jwt({ token, user, session }) {
      //console.log(user, token, session);
      if (user) {
        return {
          ...token,
          id: user.id,
          name: user.name,
          email: user.email,
          accessToken: user.accessToken,
          refreshToken: user.refreshToken
        };
      }
      return token;
    },
    async session({ token, session }) {
      //console.log("session cb", session);
      return {
        ...session,
        user: {
          ...session.user,
          id: token.id,
          name: token.name,
          email: token.email,
          accessToken: token.accessToken,
          refreshToken: token.refreshToken
        }
      };
    },
    async redirect({ url, baseUrl }) {
      // Allows relative callback URLs
      if (url.startsWith("/")) return `${baseUrl}${url}`;
      // Allows callback URLs on the same origin
      else if (new URL(url).origin === baseUrl) return url;
      return baseUrl;
    }
  }
} satisfies NextAuthOptions;
