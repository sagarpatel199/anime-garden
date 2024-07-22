"use client";
import SignInButton from "./SignInButton";
import { useSession } from "next-auth/react";

const Navbar = () => {
  const session = useSession();

  console.log(session);

  return (
    <div>
      <SignInButton />
      {session.data?.user?.name}
    </div>
  );
};

export default Navbar;
