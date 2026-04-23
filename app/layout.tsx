import type { Metadata } from "next";

import Footer from "@/components/layout/Footer";
import FloatingWhatsApp from "@/components/layout/FloatingWhatsApp";
import Navbar from "@/components/layout/Navbar";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Dental Zone",
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
        <main className="pt-[6.5rem] sm:pt-[6.75rem]">{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
