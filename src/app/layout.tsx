import { Inter } from "next/font/google";
import "./globals.css";

import SessionProvider from "@/components/SessionProvider";
import { getServerSession } from "next-auth";
import ProfileButton from "@/components/ProfileButton";

const inter = Inter({ subsets: ["latin"] });

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession();

  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider session={session}>
          <div className="bg-green-600">
            <ProfileButton />
          </div>
          {children}
        </SessionProvider>
      </body>
    </html>
  );
}
