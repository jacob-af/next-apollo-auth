"use client";

import { HttpLink, ApolloLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import {
  ApolloNextAppProvider,
  NextSSRApolloClient,
  SSRMultipartLink,
  NextSSRInMemoryCache
} from "@apollo/experimental-nextjs-app-support/ssr";

import { authTokens } from "@/app/Apollo/authTokens";

const authLink = setContext(async (_, { headers }) => {
  if (!authTokens()) return { headers: { ...headers } };
  const token = authTokens();

  return {
    headers: {
      ...headers,
      Authorization: token ? `Bearer ${token}` : ""
    }
  };
});

function makeClient() {
  const httpLink = new HttpLink({
    uri: process.env.NEXT_PUBLIC_GQL_API_URL,
    fetchOptions: { cache: "no-store" }
  });
  return new NextSSRApolloClient({
    cache: new NextSSRInMemoryCache(),
    link:
      typeof window === "undefined"
        ? ApolloLink.from([
            new SSRMultipartLink({
              stripDefer: true
            }),
            authLink.concat(httpLink)
          ])
        : authLink.concat(httpLink)
  });
}

export function ApolloWrapper({ children }: React.PropsWithChildren) {
  return (
    <ApolloNextAppProvider makeClient={makeClient}>
      {children}
    </ApolloNextAppProvider>
  );
}
