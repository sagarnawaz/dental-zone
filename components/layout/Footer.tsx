import Link from "next/link";

import {
  appointmentHref,
  callHref,
  footerLinks,
  navItems,
  primaryPhone,
  secondaryPhone,
  siteName,
  whatsappHref,
} from "@/data/site";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-black/5 bg-[#f4f8fa] px-4 py-14 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_0.9fr_0.9fr_1fr]">
          <div className="space-y-5">
            <p className="text-2xl font-extrabold tracking-[-0.04em] text-[var(--color-primary)]">
              {siteName}
            </p>
            <p className="max-w-sm text-sm leading-7 text-[var(--color-text-soft)]">
              Clean modern dentistry, comfortable care, Dhabeji branch access, and FCPS online training in one structured experience.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href={appointmentHref}
                className="rounded-full bg-[var(--color-primary)] px-5 py-3 text-sm font-bold text-white"
              >
                Add Appointment
              </Link>
              <a
                href={callHref}
                className="rounded-full border border-[var(--border-soft)] px-5 py-3 text-sm font-semibold text-[var(--color-primary)]"
              >
                Call Now
              </a>
            </div>
          </div>

          <div>
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

          <div>
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

          <div>
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
              <a href={whatsappHref} target="_blank" rel="noreferrer" className="footer-link">
                WhatsApp
              </a>
              <a href="mailto:appointments@ziadentalcare.com" className="footer-link">
                appointments@ziadentalcare.com
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-[var(--border-soft)] pt-6 text-sm text-[var(--color-text-soft)] md:flex-row md:items-center md:justify-between">
          <p>© 2026 {siteName}. All rights reserved.</p>
          <p>Modern dental care with structured patient flow.</p>
        </div>
      </div>
    </footer>
  );
}
