"use client";
export const dynamic = "force-dynamic";

import { ALL_INGREDIENTS, ALL_USERS } from "../../../graphql/queries/allUsers";
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import { useQuery } from "@apollo/client";
import { authTokens } from "../../../Apollo/authTokens";

export default function Csr() {
  console.log(authTokens());

  const { data, error } = useQuery(ALL_INGREDIENTS);

  console.log(error);
  return (
    <div>
      This is a protected route.
      <br />
      You will see ingredients here
      <br />
      {error ? (
        <p>Oh no, there was an error</p>
      ) : !data ? (
        <p>Loading...</p>
      ) : data ? (
        <div>
          {data?.ingredients.map((ingredient: any) => {
            return <div key={ingredient?.id}>{ingredient?.name}</div>;
          })}
        </div>
      ) : null}
    </div>
  );
}
