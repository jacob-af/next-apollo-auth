"use client";

import { ALL_INGREDIENTS, ALL_USERS } from "../../../graphql/queries/allUsers";
import { ApolloQueryResult, useQuery } from "@apollo/client";
import { Ingredient } from "@/__generated__/graphql";
import { useEffect } from "react";
import { useSession } from "next-auth/react";

export default function Inventory() {
  const { data: session } = useSession();
  console.log(session?.user);
  const { data, loading } = useQuery(ALL_INGREDIENTS, {
    context: {
      authorization: session?.user.accessToken
        ? `Bearer ${session?.user.accessToken}`
        : ""
    }
  });
  console.log(data);
  return (
    <div>
      This is a protected route.
      <br />
      You will see ingredients here
      <br />
      {data?.ingredients.map((ingredient: any) => {
        return <div key={ingredient?.id}>{ingredient?.name}</div>;
      })}
    </div>
  );
}
