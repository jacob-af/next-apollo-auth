import NextAuth from "next-auth";
import { authOptions } from "./authOptions";

//export default NextAuth(authOptions);

export const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
