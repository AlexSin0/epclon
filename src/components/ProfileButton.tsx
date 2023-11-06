"use client";
import { signIn, signOut, useSession } from "next-auth/react";

export default function ProfileButton() {
  const { data: session } = useSession();

  if (session) {
    return (
      <div>
        <button onClick={() => signOut()} className="hover:underline">
          Sign out
        </button>
      </div>
    );
  }

  return (
    <div>
     
      <button onClick={() => signIn()} className="hover:underline">
      Sign in
      </button>
    </div>
  );
}
