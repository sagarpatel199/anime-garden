"use client";
import { signIn, signOut, useSession } from "next-auth/react";

const SignInButton = () => {
  const { data: session } = useSession();
  if (session) {
    return <div onClick={() => signOut()}>Sign Out</div>;
  }
  return <div onClick={() => signIn()}>Sign In</div>;
};

export default SignInButton;
