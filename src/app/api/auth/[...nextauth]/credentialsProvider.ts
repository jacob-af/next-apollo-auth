import CredentialsProvider from "next-auth/providers/credentials";
import { getClient } from "@/lib/client";
//import { request } from "graphql-request";
import { LOGIN } from "../../../graphql/mutations/auth";
import { AuthPayload } from "@/__generated__/graphql";
import { FetchResult, QueryResult } from "@apollo/client";

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
    const client = await getClient();
    console.log("ding");
    try {
      const { data }: FetchResult<{ login: AuthPayload }> = await client.mutate(
        {
          mutation: LOGIN,
          variables: {
            loginInput: {
              email: credentials?.email,
              password: credentials?.password
            }
          }
        }
      );
      const login = data?.login;
      console.log(login, ": data");
      if (login) {
        return {
          accessToken: login.accessToken,
          refreshToken: login.refreshToken,
          accessTokenExpires: Date.now() + 24 * 60 * 60 * 1000,
          id: login.user.id,
          email: login.user.email,
          name: login.user.userName
        };
      }
    } catch (err) {
      console.log(err);
    }
    return null;
  }
});
