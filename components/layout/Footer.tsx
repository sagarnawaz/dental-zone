import Image from "next/image";
import Link from "next/link";

import {
  appointmentHref,
  callHref,
  footerLinks,
  navItems,
  primaryPhone,
  secondaryPhone,
  siteName,
} from "@/data/site";

export default function Footer() {
  const socialLinks = [
    { label: "Facebook", href: "#", icon: <FacebookIcon /> },
    { label: "Instagram", href: "#", icon: <InstagramIcon /> },
    {
      label: "Email",
      href: "mailto:appointments@thedentalzone.com",
      icon: <EmailIcon />,
    },
  ];

  return (
    <footer className="mt-20 border-t border-black/5 bg-[linear-gradient(180deg,#f4f8fa_0%,#eef4f7_100%)] px-4 py-14 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 md:gap-x-10 lg:grid-cols-[1.45fr_0.85fr_0.95fr_1fr] lg:items-start">
          <div className="col-span-2 space-y-6 text-left lg:col-span-1 xl:pr-8">
            <div className="grid grid-cols-[auto_minmax(0,1fr)] items-center gap-4">
              <Image
                src="/logo-transparent.png"
                alt={`${siteName} logo`}
                width={625}
                height={625}
                className="h-24 w-24 object-contain sm:h-28 sm:w-28 lg:h-32 lg:w-32"
              />
              <div className="min-w-0">
                <p className="font-heading text-2xl font-bold tracking-[-0.04em] text-[var(--color-primary)] sm:text-3xl">
                  {siteName}
                </p>
                <p className="mt-1 text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-[var(--color-text-soft)]">
                  Modern Dental Care
                </p>
              </div>
            </div>
            <p className="max-w-md text-sm leading-7 text-[var(--color-text-soft)] sm:text-[0.95rem]">
              Clean modern dentistry, comfortable care, Dhabeji branch access, and FCPS online
              training in one structured experience.
            </p>
            <div className="grid gap-3 sm:grid-cols-2">
              <Link
                href={appointmentHref}
                className="inline-flex items-center justify-center rounded-full bg-[var(--color-primary)] px-5 py-3 text-sm font-bold text-white shadow-[0_14px_34px_rgba(0,56,87,0.16)]"
              >
                Add Appointment
              </Link>
              <a
                href={callHref}
                className="inline-flex items-center justify-center rounded-full border border-[var(--border-soft)] bg-white/80 px-5 py-3 text-sm font-semibold text-[var(--color-primary)]"
              >
                Call Now
              </a>
            </div>
          </div>

          <div className="min-w-0 text-left">
            <p className="text-[0.72rem] font-bold uppercase tracking-[0.24em] text-[var(--color-primary)]">
              Company
            </p>
            <div className="mt-4 grid gap-3 text-sm text-[var(--color-text-soft)]">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href} className="footer-link">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="min-w-0 text-left">
            <p className="text-[0.72rem] font-bold uppercase tracking-[0.24em] text-[var(--color-primary)]">
              Treatments
            </p>
            <div className="mt-4 grid gap-3 text-sm text-[var(--color-text-soft)]">
              {footerLinks.services.map((item) => (
                <Link key={item.href} href={item.href} className="footer-link">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="col-span-2 min-w-0 text-left lg:col-span-1">
            <p className="text-[0.72rem] font-bold uppercase tracking-[0.24em] text-[var(--color-primary)]">
              Contact
            </p>
            <div className="mt-4 grid gap-3 text-sm text-[var(--color-text-soft)]">
              <a href={callHref} className="footer-link">
                {primaryPhone}
              </a>
              <a href={`tel:${secondaryPhone.replace(/[^+\d]/g, "")}`} className="footer-link">
                {secondaryPhone}
              </a>
              <a href="mailto:appointments@thedentalzone.com" className="footer-link">
                appointments@thedentalzone.com
              </a>
            </div>
            <div className="mt-6 grid grid-flow-col justify-start gap-3">
              {socialLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                  aria-label={item.label}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border-soft)] bg-white/84 text-[var(--color-primary)] transition duration-200 hover:border-[var(--color-primary)] hover:bg-white"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-3 border-t border-[var(--border-soft)] pt-6 text-left text-sm text-[var(--color-text-soft)] md:grid-cols-[1fr_auto] md:items-center">
          <p>&copy; 2026 {siteName}. All rights reserved.</p>
          <p className="md:text-right">Modern dental care with structured patient flow.</p>
        </div>
      </div>
    </footer>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="size-4" aria-hidden="true">
      <path d="M13.5 21v-7.4h2.5l.4-3h-2.9V8.7c0-.9.2-1.6 1.5-1.6H16.6V4.4c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.5-4 4.2v2.1H7.8v3h2.4V21h3.3Z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="size-4" aria-hidden="true">
      <rect x="4" y="4" width="16" height="16" rx="4.5" stroke="currentColor" strokeWidth="2" />
      <circle cx="12" cy="12" r="3.5" stroke="currentColor" strokeWidth="2" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="size-4" aria-hidden="true">
      <path d="M4 7.5h16v9H4z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <path
        d="m5 8 7 5 7-5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
