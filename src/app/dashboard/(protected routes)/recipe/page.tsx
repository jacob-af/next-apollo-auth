"use client";

import { ALL_INGREDIENTS, ALL_USERS } from "../../../graphql/queries/allUsers";
import { ApolloQueryResult, useQuery } from "@apollo/client";
import { Ingredient } from "@/__generated__/graphql";
import { useEffect } from "react";
import { useSession } from "next-auth/react";

export default function Recipe() {
  return (
    <div>
      This is a protected route.
      <br />
      You will see recipes here
    </div>
  );
}
