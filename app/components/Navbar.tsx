"use client";
import SignInButton from "./SignInButton";
import { useSession } from "next-auth/react";
import Link from "next/link";
const Navbar = () => {
  const session = useSession();

  console.log(session);

  return (
    <div className="flex bg-gray-300 gap-2 justify-center text-gray-800">
      <Link href="/">Home</Link>
      <Link href="/anime/naruto">Featured</Link>

      <div>
        <SignInButton />
      </div>

      <div>{session.data?.user?.name}</div>
    </div>
  );
};

export default Navbar;
