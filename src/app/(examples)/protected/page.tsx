import { redirect } from "next/navigation";
import { auth } from "@/app/components/auth";

export default async function RecipeBook() {
  const session = await auth();
  if (!session || !session.user) {
    redirect("/");
  }

  return <div>Recipe Book</div>;
}
