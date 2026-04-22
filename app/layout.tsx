import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";

import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import "./globals.css";

const fontBody = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
});

const fontLabel = Inter({
  variable: "--font-label",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "The Dental Zone",
  description:
    "A connected platform for The Dental Zone Hadeed, Dhabeji Clinic, and FCPS Training.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${fontBody.variable} ${fontLabel.variable}`}>
      <body suppressHydrationWarning className="min-h-screen bg-[var(--color-background)] text-[var(--color-text)] antialiased">
        <div className="site-background fixed inset-0 -z-10" />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
