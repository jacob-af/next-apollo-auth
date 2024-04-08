import { DefaultSession, DefaultUser } from "next-auth";
import { DefaultJWT } from "next-auth/jwt";

declare module "next-auth" {
  interface Session {
    user: User;
    status: string;
  }

  interface User {
    id: string;
    login: string;
    email: string;
    accessToken: string;
    refreshToken: string;
    accessTokenExpires: number;
  }
}

declare module "next-auth/jwt" {
  interface JWT extends DefaultJWT {
    refreshToken: string;
    accessToken: string;
    accessTokenExpires: number;
  }
}
