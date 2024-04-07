import { NEW_TOKENS } from "@/app/graphql/mutations/auth";
import { getClient } from "@/lib/client";
import { AuthPayload, NewTokenResponse } from "@/__generated__/graphql";
import { request } from "graphql-request";

export async function newTokens(refreshToken: string, userId: string) {
  console.log("bip");
  const client = await getClient();

  console.log("beep");
  const { data }: any = await client.mutate({
    mutation: NEW_TOKENS,
    variables: {
      refreshToken
    }
  });

  // console.log("beep", data);

  return "return accessed";
  //return data.AuthPayload;
}
