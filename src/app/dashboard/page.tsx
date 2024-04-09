import { getClient } from "@/lib/client";
import { ALL_INGREDIENTS, ALL_USERS } from "../graphql/queries/allUsers";
import { redirect } from "next/navigation";
import { auth } from "@/app/Apollo/auth";
import { ApolloQueryResult } from "@apollo/client";
import { Ingredient } from "@/__generated__/graphql";
import AuthButton from "./components/SignOutButton";

export default async function Landing() {
  const session = await auth();
  if (!session?.user) {
    redirect("/");
  }

  // const client = await getClient();
  // const res: ApolloQueryResult<{ ingredients: Ingredient[] }> =
  //   await client.query({
  //     query: ALL_INGREDIENTS
  //   });
  // console.log(res);

  return (
    <div>
      This is a protected route.
      <br />
      You will only see this if you are authenticated.
      {/* {res.data.ingredients.map((ingredient: any) => {
        return <div key={ingredient?.id}>{ingredient?.name}</div>;
      })} */}
      <AuthButton />
    </div>
  );
}
