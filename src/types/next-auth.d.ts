import NextAuth, { DefaultSession } from "next-auth";

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  export interface Session {
    user: User;
  }

  export interface User {
    accessToken: string;
    refreshToken: string;
    accessTokenExpires: Date;
    id: string;
    email: string;
    name: string;
  }
}
