"use client";
import { Suspense } from "react";
import {
  useReadQuery,
  useBackgroundQuery
} from "@apollo/experimental-nextjs-app-support/ssr";
import { useMutation, gql, TypedDocumentNode } from "@apollo/client";
import { QueryReference } from "@apollo/client/react";

import { useState, useCallback } from "react";

const HELLO: TypedDocumentNode<{
  hello: string;
}> = gql`
  query hello {
    hello
  }
`;

const LOGIN: TypedDocumentNode<{
  accessToken: string;
  refreshToken: string;
  user: {
    id: string;
    userName: string;
  };
}> = gql`
  mutation Mutation($loginInput: LoginInput!) {
    login(loginInput: $loginInput) {
      accessToken
      refreshToken
      user {
        id
        userName
      }
    }
  }
`;

export default function Hello() {
  const [queryRef] = useBackgroundQuery(HELLO);

  return (
    <Suspense fallback={<>Loading...</>}>
      <Poll queryRef={queryRef} />
    </Suspense>
  );
}

export function Poll({ queryRef }: any): any {
  const { data } = useReadQuery(queryRef);
  const [showResults, setShowResults] = useState("Nothing Yet");
  const [mutate, { loading: mutationLoading }] = useMutation(LOGIN);

  const handleClick = useCallback(async () => {
    console.log("ding");
    const result: any = await mutate({
      variables: {
        loginInput: {
          email: "admin@pocket.com",
          password: "1234"
        }
      }
    });
    console.log(result);
    setShowResults(result.data.login.user.userName);
  }, [mutate]);

  return (
    <div>
      <div>{(data as any).hello}</div>

      <div>
        <button onClick={handleClick}>CLickMe</button>
      </div>
      <div>{showResults}</div>
    </div>
  );
}
