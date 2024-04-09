"server only";

import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import { registerApolloClient } from "@apollo/experimental-nextjs-app-support/rsc";
import { auth } from "@/app/Apollo/auth";

export const { getClient } = registerApolloClient(async () => {
  const session = await auth();

  return new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
      uri: process.env.NEXT_PUBLIC_GQL_API_URL,
      headers: {
        authorization: session?.user.accessToken
          ? `Bearer ${session?.user.accessToken}`
          : ""
      }
    })
  });
});
