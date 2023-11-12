"use client";
import { signIn, signOut, useSession } from "next-auth/react";

export default function ProfileButton() {
  const { data: session } = useSession();

  if (session) {
    return (
      <div>
        <p>{session.user?.name}</p>
        <hr/>
        <button onClick={() => signOut()}>Sign out</button>
      </div>
    );
  }

  return (
    <div>
      <p>Guest</p>
      <hr/>
      <button onClick={() => signIn()}>Sign in</button>
    </div>
  );
}
