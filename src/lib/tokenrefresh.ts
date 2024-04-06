import { cookies } from "next/headers";
import { NEW_TOKENS } from "../app/graphql/mutations/auth";
import { getClient } from "@/lib/client";

export default async function tokenrefresh(refreshToken: string) {
  const result: any = await getClient().mutate({
    mutation: NEW_TOKENS,
    variables: {
      refreshToken: refreshToken
    }
  });
  cookies().set("ACCESS_TOKEN", result.accessToken, {
    expires: new Date(Date.now() + 10 * 1000)
  });
  cookies().set("REFRESH_TOKEN", result.refreshToken, {
    expires: new Date(Date.now() + 500 * 1000)
  });
}
