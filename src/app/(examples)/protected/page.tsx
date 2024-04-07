import { redirect } from "next/navigation";
import { auth } from "@/app/components/auth";

export default async function ProtectedRoute() {
  const session = await auth();
  if (!session || !session.user) {
    redirect("/");
  }

  return (
    <div>
      This is a protected route.
      <br />
      You will only see this if you are authenticated.
    </div>
  );
}
