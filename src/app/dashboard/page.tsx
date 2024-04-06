import { getClient } from "@/lib/client";
import { ALL_INGREDIENTS, ALL_USERS } from "../graphql/queries/allUsers";
import { redirect } from "next/navigation";
import { auth } from "@/app/components/auth";
import { ApolloQueryResult } from "@apollo/client";
import { Ingredient } from "@/__generated__/graphql";

export default async function Landing() {
  const session = await auth();
  if (!session || !session.user) {
    redirect("/login");
  }

  console.log(session.user);
  const client = getClient();
  const res: any = await client.query({
    query: ALL_INGREDIENTS
  });

  console.log(res?.data);

  return (
    <div>
      This is a protected route.
      <br />
      You will only see this if you are authenticated.
      {res.data.ingredients.map((ingredient: any) => {
        return <div key={ingredient?.id}>{ingredient.name}</div>;
      })}
    </div>
  );
}
