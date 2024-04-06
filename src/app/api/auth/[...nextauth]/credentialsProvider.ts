import CredentialsProvider from "next-auth/providers/credentials";

import { request } from "graphql-request";
import { LOGIN } from "../../../graphql/mutations/auth";

const uri = "http://localhost:4000/graphql";

export const credentialsProvider = CredentialsProvider({
  name: "Credentials",
  credentials: {
    email: {
      label: "Email",
      type: "text",
      placeholder: "jsmith@email.com"
    },
    password: { label: "Password", type: "password" }
  },
  async authorize(credentials, req) {
    const { login }: any = await request(uri, LOGIN, {
      loginInput: {
        email: credentials?.email,
        password: credentials?.password
      }
    });
    if (login) {
      console.log("ding-tong");
      return {
        accessToken: login.accessToken,
        refreshToken: login.refreshToken,
        id: login.user.id,
        email: login.user.email,
        name: login.user.userName
      };
    } else {
      return null;
    }
  }
});
