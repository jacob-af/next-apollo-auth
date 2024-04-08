"use client";

import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { useMutation } from "@apollo/client";
import { LOG_OUT } from "../../graphql/mutations/auth";
import { useRouter } from "next/navigation";

function Button() {
  const router = useRouter();
  const { data: session } = useSession();
  const [logOut, { loading }] = useMutation(LOG_OUT);

  const onClick = async () => {
    try {
      if (session) {
        await logOut({
          variables: { userId: session?.user.id },
          context: {
            headers: {
              Authorization: session?.user.accessToken
                ? `Bearer ${session?.user?.accessToken}`
                : ""
            }
          },
          onCompleted: () => {
            signOut({ callbackUrl: process.env.NEXTAUTH_URL, redirect: true });
          }
        });
      }
      return;
    } catch (err) {
      console.log(err);
      return;
    }
    if (!loading) {
      signOut({ redirect: false });
      router.push("/");
    }
  };

  if (session) {
    return (
      <>
        <button onClick={onClick}>Sign out</button>
      </>
    );
  }
  return <></>;
}

export default function AuthButton() {
  return (
    <div>
      <Button />
    </div>
  );
}
