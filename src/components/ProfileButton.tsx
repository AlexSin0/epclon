"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function ProfileButton() {
  const { data: session } = useSession();

  const [clickState, setClickState] = useState<boolean>();

  if (!session) {
    return (
      <button className="text-white" onClick={() => signIn()}>
        Sign in
      </button>
    );
  }

  return (
    <div>
      <button
        title="User profile button"
        onClick={() => setClickState(!clickState)}
      >
        <Image
          src={session.user?.image ?? "/logo.jpg"}
          alt="User profile picture"
          className="rounded-full"
          width={50}
          height={50}
        />
      </button>
      {clickState && (
        <div className="absolute right-5 z-10 mt-2 w-47 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5">
          <p>{session.user?.name}</p>
          <button onClick={() => signOut()}>Sign out</button>

          <Link
            href="/profile"
            className="block px-4 py-2 text-sm text-gray-700"
          >
            Your Profile
          </Link>
        </div>
      )}
    </div>
  );
}
