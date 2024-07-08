import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Header from "@/components/header";
import Footer from "@/components/footer";

import { NavigationLinks } from "@/data/navigationLinks";
import { SocialLinks } from "@/data/socialLinks";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Quakemap | Realtime Earthquakes",
  description:
    "Track earthquakes around the world in realtime from the comfort of your smartphone.",
  openGraph: {
    siteName: "Quakemap",
    title: "Quakemap",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header links={NavigationLinks} />
        {children}
        <Footer links={NavigationLinks} socials={SocialLinks} />
      </body>
    </html>
  );
}
