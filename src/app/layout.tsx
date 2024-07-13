import type { Metadata } from "next";

import { Inter } from "next/font/google";

import "./globals.css";
import { Providers } from "./providers";

import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Header from "@/components/header";

import { NavigationLinks } from "@/data/navigationLinks";
import { SocialLinks } from "@/data/socialLinks";
import { GeneralLinks } from "@/data/generalLinks";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Quakemap | Realtime Earthquakes",
  description:
    "Track earthquakes around the world in realtime from the comfort of your smartphone.",
  openGraph: {
    siteName: "Quakemap",
    title: "Quakemap | Realtime Earthquakes",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          <Header links={NavigationLinks} />
          {children}
          <Contact mailLink={GeneralLinks.mail} />
          <Footer links={NavigationLinks} socials={SocialLinks} />
        </Providers>
      </body>
    </html>
  );
}
