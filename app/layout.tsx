import type { Metadata } from "next";

import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import "./globals.css";

export const metadata: Metadata = {
  title: "Zia Dental Care",
  description:
    "Modern dental care with service detail pages, Dhabeji clinic access, FCPS online training, and clear booking CTAs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning className="min-h-screen bg-[var(--color-background)] text-[var(--color-text)] antialiased">
        <div className="site-background fixed inset-0 -z-10" />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
