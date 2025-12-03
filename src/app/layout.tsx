import { Inter } from "next/font/google";
import "./globals.css";

import SessionProvider from "@/components/SessionProvider";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { auth } from "@/lib/auth";

const inter = Inter({ subsets: ["latin"] });

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider session={session}>
          <Header />
          {children}
          <Footer />
        </SessionProvider>
      </body>
    </html>
  );
}
