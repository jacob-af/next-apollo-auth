import AuthButton from "@/app/dashboard/components/SignOutButton";
import { Button } from "@mui/material";
import Link from "@mui/material/Link";
import NavMenu from "./SharedComponents/NavMenu";
import { redirect } from "next/navigation";
import { auth } from "./Apollo/auth";

export default async function Home() {
  const session = await auth();

  if (!session?.user) {
    redirect("/welcome");
  }
  redirect("/dashboard");

  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-24 bg-black">
      Welcome - you will be redirected shortly.
    </main>
  );
}
