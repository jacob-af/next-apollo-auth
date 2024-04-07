import CredentialsProvider from "next-auth/providers/credentials";
import { getClient } from "@/lib/client";
//import { request } from "graphql-request";
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
    const client = await getClient();
    const { data }: any = await client.mutate({
      mutation: LOGIN,
      variables: {
        loginInput: {
          email: credentials?.email,
          password: credentials?.password
        }
      }
    });
    console.log(data, ": data");
    if (data?.login) {
      return {
        accessToken: data.login.accessToken,
        refreshToken: data.login.refreshToken,
        accessTokenExpires: Date.now() + 10000,
        id: data.login.user.id,
        email: data.login.user.email,
        name: data.login.user.userName
      };
    } else {
      return null;
    }
  }
});
