"use client";

import { ALL_INGREDIENTS, ALL_USERS } from "../../../graphql/queries/allUsers";
import { redirect } from "next/navigation";
import { ApolloQueryResult, useQuery } from "@apollo/client";
import { Ingredient } from "@/__generated__/graphql";
import { useEffect } from "react";
import { useSession } from "next-auth/react";

export default function Recipe() {
  return (
    <div>
      This is a protected route.
      <br />
      You will only see this if you are authenticated.
      {/* {ingredients?.ingredients?.map((ingredient: any) => {
        return <div key={ingredient?.id}>{ingredient.name}</div>;
      })} */}
    </div>
  );
}
