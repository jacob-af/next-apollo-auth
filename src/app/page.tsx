import Link from "@mui/material/Link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-24">
      Weclome TO ssuper great recipe app!
      <Link href="signup">Sign Up</Link>
      <Link href="login">login</Link>
    </main>
  );
}
