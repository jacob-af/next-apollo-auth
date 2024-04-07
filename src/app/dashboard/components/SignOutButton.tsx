"use client";

import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { useMutation } from "@apollo/client";
import { LOG_OUT } from "../../graphql/mutations/auth";

function Button() {
  const { data: session } = useSession();
  const [logOut, { loading }] = useMutation(LOG_OUT);

  const onClick = async () => {
    await logOut({
      variables: { userId: session?.user.id },
      context: {
        headers: {
          Authorization: session?.user.accessToken
            ? `Bearer ${session?.user.accessToken}`
            : ""
        }
      }
    });

    signOut();
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
