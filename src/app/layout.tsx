import type { Metadata } from "next";

import { Inter } from "next/font/google";

import "./globals.css";
import { Providers } from "./providers";

import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Header from "@/components/header";

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
          <Header />
          {children}
          <Contact />
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
