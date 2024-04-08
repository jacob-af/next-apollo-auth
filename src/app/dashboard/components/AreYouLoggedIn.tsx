"use client";

import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { useEffect } from "react";

export default function AmILoggedIn() {
  const { data: session, status, update } = useSession();
  useEffect(() => {
    if (status !== "authenticated") {
      redirect("/dashboard");
    }
    if (session.user.accessTokenExpires < Date.now()) {
      update({ action: "New Tokens" });
    }
  });

  return <div>You are logged in as {session?.user.name}</div>;
}