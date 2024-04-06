import AuthButton from "@/app/components/SignOutButton";
import { Button } from "@mui/material";
import Link from "@mui/material/Link";
import NavMenu from "./components/NavMenu";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-24">
      <NavMenu />
      Weclome TO ssuper great recipe app!
      <Link href="signup">Sign Up</Link>
      <Link href="login">login</Link>
      <AuthButton />
    </main>
  );
}
