"use client";
export const dynamic = "force-dynamic";

import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import {
  ApolloPayloadResult,
  FetchResult,
  QueryResult,
  useMutation
} from "@apollo/client";
import { LOG_OUT } from "../../graphql/mutations/auth";
import { useRouter } from "next/navigation";
import { authTokens } from "@/app/Apollo/authTokens";

function Button() {
  const router = useRouter();
  const { data: session } = useSession();
  const [logOut, { loading }] = useMutation(LOG_OUT);
  authTokens(session?.user.accessToken);

  const onClick = async () => {
    try {
      if (session) {
        const { data }: FetchResult<{ loggedOut: boolean }> = await logOut({
          variables: { userId: session?.user.id }
          // context: {
          //   headers: {
          //     Authorization: authTokens() ? `Bearer ${authTokens()}` : ""
          //   }
          // }
        });
        console.log(data?.loggedOut);
        await signOut({ callbackUrl: "/welcome", redirect: true });
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
