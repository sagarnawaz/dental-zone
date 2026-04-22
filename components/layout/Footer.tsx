"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { contactChannels } from "@/data/site";
import { cn } from "@/lib/utils";

const clinicLinks = [
  { label: "Hadeed Dental", href: "/clinics/hadeed" },
  { label: "Dhabeji Clinic", href: "/clinics/dhabeji" },
  { label: "Book Appointment", href: "/contact" },
];

const educationLinks = [
  { label: "FCPS Training", href: "/fcps-training" },
  { label: "Training Overview", href: "/fcps-training" },
  { label: "About the Ecosystem", href: "/about" },
];

const corporateLinks = [
  { label: "Staff Portal", href: "/about" },
  { label: "Privacy Policy", href: "/about" },
  { label: "Contact", href: "/contact" },
];

type IconProps = {
  className?: string;
};

function FacebookIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
      <path d="M13.5 21v-7.08h2.46l.37-2.92H13.5V9.14c0-.84.23-1.42 1.44-1.42H16.5V5.11c-.27-.04-1.2-.11-2.28-.11-2.25 0-3.79 1.37-3.79 3.89V11H8v2.92h2.43V21h3.07Z" />
    </svg>
  );
}

function InstagramIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="3.75" y="3.75" width="16.5" height="16.5" rx="4.5" />
      <circle cx="12" cy="12" r="3.9" />
      <circle cx="17.1" cy="6.9" r="1.05" fill="currentColor" stroke="none" />
    </svg>
  );
}

function MailIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="3.25" y="5.25" width="17.5" height="13.5" rx="2.75" />
      <path d="m4.5 7.25 7.5 6 7.5-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function WhatsAppIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
      <path d="M19.05 4.94A9.94 9.94 0 0 0 12 2C6.48 2 2 6.48 2 12c0 1.76.46 3.48 1.32 5l-1.4 5.1 5.22-1.37A10 10 0 0 0 12 22c5.52 0 10-4.48 10-10 0-2.67-1.04-5.18-2.95-7.06ZM12 20.17c-1.52 0-3-.4-4.3-1.17l-.31-.18-3.1.81.83-3.02-.2-.31A8.14 8.14 0 0 1 3.83 12c0-4.5 3.66-8.17 8.17-8.17 2.18 0 4.23.85 5.77 2.4A8.1 8.1 0 0 1 20.17 12c0 4.5-3.66 8.17-8.17 8.17Zm4.48-6.1c-.24-.12-1.42-.7-1.64-.77-.22-.08-.37-.12-.53.12-.16.24-.6.77-.74.93-.14.16-.27.18-.5.06-.24-.12-1-.37-1.9-1.2-.7-.62-1.17-1.38-1.31-1.62-.14-.24-.01-.36.1-.48.1-.1.24-.27.36-.4.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.53-1.28-.73-1.76-.19-.45-.39-.4-.53-.4h-.45c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2 0 1.18.86 2.31.98 2.47.12.16 1.68 2.56 4.08 3.59.57.25 1.02.4 1.37.51.58.18 1.11.15 1.53.09.47-.07 1.42-.58 1.62-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28Z" />
    </svg>
  );
}

const socialChannels = [
  { label: "Facebook", icon: FacebookIcon },
  { label: "Instagram", icon: InstagramIcon },
  {
    label: "Email",
    href: "mailto:appointments@thedentalzone.com",
    icon: MailIcon,
  },
] as const satisfies ReadonlyArray<{
  label: string;
  icon: (props: IconProps) => React.JSX.Element;
  href?: string;
}>;

const whatsappHref = "https://wa.me/923362130181";

export default function Footer() {
  const [showWhatsapp, setShowWhatsapp] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowWhatsapp(window.scrollY > 160);

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <footer className="border-t border-black/5 bg-[#f7f9fb] px-4 py-14 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.3fr_0.9fr_0.9fr_0.9fr]">
            <div className="space-y-5 md:col-span-2 lg:col-span-1">
              <p className="text-lg font-bold tracking-[-0.04em] text-[#003857]">The Dental Zone</p>
              <p className="max-w-sm text-sm leading-7 text-[#72787f]">
                Clear branch positioning, connected dental care, and structured FCPS guidance inside one refined ecosystem.
              </p>
              <div className="flex flex-wrap gap-3 text-[#003857]" aria-label="Brand contact icons">
                {socialChannels.map((channel) => {
                  const Icon = channel.icon;

                  const iconContent = (
                    <>
                      <Icon className="size-[18px]" />
                      <span className="sr-only">{channel.label}</span>
                    </>
                  );

                  if ("href" in channel) {
                    return (
                      <a
                        key={channel.label}
                        href={channel.href}
                        className="grid size-10 place-items-center rounded-full border border-[#c1c7cf] bg-white text-[#003857] shadow-[0_10px_24px_rgba(0,56,87,0.06)] transition duration-300 hover:-translate-y-0.5 hover:border-[#003857] hover:bg-[#003857] hover:text-white"
                        aria-label={channel.label}
                      >
                        {iconContent}
                      </a>
                    );
                  }

                  return (
                    <span
                      key={channel.label}
                      className="grid size-10 place-items-center rounded-full border border-[#c1c7cf] bg-white text-[#003857] shadow-[0_10px_24px_rgba(0,56,87,0.06)]"
                      aria-label={channel.label}
                      role="img"
                    >
                      {iconContent}
                    </span>
                  );
                })}
              </div>
            </div>

            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#003857]">Clinics</p>
              <div className="mt-4 grid gap-3 text-sm text-[#72787f]">
                {clinicLinks.map((link) => (
                  <Link key={link.href + link.label} href={link.href} className="footer-link">
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#003857]">Education</p>
              <div className="mt-4 grid gap-3 text-sm text-[#72787f]">
                {educationLinks.map((link) => (
                  <Link key={link.href + link.label} href={link.href} className="footer-link">
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#003857]">Corporate</p>
              <div className="mt-4 grid gap-3 text-sm text-[#72787f]">
                {corporateLinks.map((link) => (
                  <Link key={link.href + link.label} href={link.href} className="footer-link">
                    {link.label}
                  </Link>
                ))}
                {contactChannels.map((channel) => (
                  <a key={channel.href} href={channel.href} className="footer-link">
                    {channel.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-12 flex flex-col gap-3 border-t border-[#e0e3e5] pt-6 text-xs text-[#72787f] md:flex-row md:items-center md:justify-between">
            <p>&copy; 2026 The Dental Zone. Clear care, trusted branches, and focused FCPS guidance.</p>
            <p className="font-semibold text-[#003857]">The Dental Zone Ecosystem</p>
          </div>
        </div>
      </footer>

      <a
        href={whatsappHref}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className={cn(
          "fixed bottom-4 right-4 z-50 flex items-center gap-3 rounded-full bg-[#25D366] px-3 py-3 text-sm font-semibold text-white shadow-[0_20px_50px_rgba(37,211,102,0.28)] transition duration-300 sm:bottom-6 sm:right-6 sm:px-4",
          showWhatsapp ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-6 opacity-0"
        )}
      >
        <span className="grid size-9 place-items-center rounded-full bg-white/18">
          <WhatsAppIcon className="size-5" />
        </span>
        <span className="hidden sm:inline">WhatsApp</span>
      </a>
    </>
  );
}
