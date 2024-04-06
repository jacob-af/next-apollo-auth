import { NextRequest } from "next/server";
import { cookies } from "next/headers";
import tokenrefresh from "./lib/tokenrefresh";
import getCLient from "./lib/urql";

export default async function middleware(request: NextRequest) {
  // const authToken: string | undefined = cookies().get("ACCESS_TOKEN")?.value;
  // const refreshToken: string | undefined = cookies().get(
  //   "REFRequestCookieRESH_TOKEN"
  // )?.value;
  // if (
  //   !authToken &&
  //   !refreshToken &&
  //   !request.nextUrl.pathname.startsWith("/login")
  // ) {
  //   return Response.redirect(new URL("/", request.url));
  // }
  // if (!authToken && refreshToken) {
  //   //tokenrefresh(refreshToken);
  // }
  // if (authToken && !request.nextUrl.pathname.startsWith("/dashboard")) {
  //   return Response.redirect(new URL("/dashboard", request.url));
  // }
}
