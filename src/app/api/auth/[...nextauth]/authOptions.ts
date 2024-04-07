import { credentialsProvider } from "./credentialsProvider";
import type { NextAuthOptions } from "next-auth";
import { getClient } from "@/lib/client";
import { newTokens } from "./newTokens";
import { AuthPayload } from "@/__generated__/graphql";
import { NEW_TOKENS } from "@/app/graphql/mutations/auth";
import { FetchResult } from "@apollo/client";

export const authOptions: NextAuthOptions = {
  secret: "super secret",
  providers: [credentialsProvider],
  debug: process.env.NODE_ENV === "development" ? true : false,
  callbacks: {
    async jwt({ token, user, session, trigger }) {
      if (user) {
        return {
          ...token,
          id: user.id,
          name: user.name,
          email: user.email,
          accessTokenExpires: user.accessTokenExpires,
          accessToken: user.accessToken,
          refreshToken: user.refreshToken
        };
      }
      if (trigger === "update" && session.action === "New Tokens") {
        console.log("closer");
        const client = await getClient();
        console.log(token);
        const data: any = await client.mutate({
          mutation: NEW_TOKENS,
          variables: {
            refreshToken: token.refreshToken
          },
          context: {
            headers: {
              Authorization: token.refreshToken
                ? `Bearer ${token.refreshToken}`
                : ""
            }
          }
        });
        const resp = data.data.getNewTokens;
        return {
          ...token,
          id: resp?.user.id,
          name: resp?.user.userName,
          email: resp?.user.email,
          accessTokenExpires: Date.now() + 50000,
          accessToken: resp?.accessToken,
          refreshToken: resp?.refreshToken
        };
      }
      // if (token.accessTokenExpires && Date.now() > token.accessTokenExpires) {
      //   console.log(Date.now() - token.accessTokenExpires, token.refreshToken);
      //   const client = await getClient();
      //   console.log("nope");
      //   const { data }: any = await client.mutate({
      //     mutation: NEW_TOKENS,
      //     variables: {
      //       refreshToken: token.refreshToken
      //     },
      //     context: {
      //       headers: {
      //         Authorization: token.accessToken
      //           ? `Bearer ${token.accessToken}`
      //           : ""
      //       }
      //     }
      //   });
      //   console.log(data);

      // } else {
      //   console.log(token.accessTokenExpires - Date.now(), session);
      //   return token;
      // }
      // try {
      //   const data = await newTokens(token.refreshToken, token.accessToken);
      //   console.log("getting tokens", data);
      //   return {
      //     ...token
      //     // id: data.user.id,
      //     // name: data.user.userName,
      //     // email: data.user.email,
      //     // accessTokenExpires: Date.now() + 500000000,
      //     // accessToken: data.accessToken,
      //     // refreshToken: data.refreshToken
      //   };
      // } catch (error) {
      //   console.log(error);
      // }
      return token;
    },
    async session({ token, session, user }) {
      return {
        ...session,
        user: {
          id: token.id,
          name: token.name,
          email: token.email,
          accessToken: token.accessToken,
          refreshToken: token.refreshToken,
          accessTokenExpires: token.accessTokenExpires
        }
      };
    }
  }
} satisfies NextAuthOptions;
