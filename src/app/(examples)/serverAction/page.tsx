import { getServerSession } from "next-auth";
import { auth } from "@/app/Apollo/auth";

import WhoAmIButton from "./WhoAmIButton";

export default async function ServerActionPage() {
  const whoAmI = async () => {
    "use server";
    const session = await auth();
    console.log(session, "seesion");
    return session?.user?.name || "Not Logged In";
  };
  return (
    <div>
      <WhoAmIButton whoAmIAction={whoAmI} />
    </div>
  );
}
