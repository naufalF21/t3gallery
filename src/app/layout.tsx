import "~/styles/globals.css";

import { type Metadata } from "next";
import { Geist } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import TopNav from "./_components/top-nav";

export const metadata: Metadata = {
  title: "T3 Gallery App",
  description: "Generated by create-t3-app",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${geist.variable} flex flex-col gap-4`}>
          <TopNav />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
