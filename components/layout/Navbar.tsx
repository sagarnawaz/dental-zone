"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { appointmentHref, callHref, navItems, primaryPhone, siteName } from "@/data/site";
import { cn } from "@/lib/utils";

function isActive(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", isOpen);
    return () => document.body.classList.remove("overflow-hidden");
  }, [isOpen]);

  return (
    <>
      <header className="sticky top-0 z-50 px-3 pt-3 sm:px-5">
        <div
          className={cn(
            "mx-auto max-w-7xl rounded-[1.8rem] border bg-white/85 backdrop-blur-xl transition duration-300",
            isScrolled
              ? "border-[#d7e0e6] shadow-[0_24px_70px_rgba(15,23,42,0.12)]"
              : "border-white/80 shadow-[0_16px_50px_rgba(15,23,42,0.08)]"
          )}
        >
          <div className="flex min-h-[5.25rem] items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
            <Link href="/" className="flex min-w-0 items-center gap-3" aria-label={`${siteName} home`}>
              <div className="grid size-11 shrink-0 place-items-center rounded-2xl bg-[linear-gradient(135deg,#003857,#006a61)] text-sm font-extrabold tracking-[0.2em] text-white shadow-[0_16px_36px_rgba(0,56,87,0.22)]">
                ZD
              </div>
              <div className="min-w-0">
                <p className="truncate text-base font-extrabold tracking-[-0.04em] text-[var(--color-primary)]">
                  {siteName}
                </p>
                <p className="truncate text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-[var(--color-text-soft)]">
                  Modern dental care
                </p>
              </div>
            </Link>

            <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "rounded-full px-4 py-3 text-sm font-semibold transition duration-300",
                    isActive(pathname, item.href)
                      ? "bg-[var(--color-primary)] text-white"
                      : "text-[var(--color-text-soft)] hover:bg-[#edf3f6] hover:text-[var(--color-primary)]"
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="hidden items-center gap-3 lg:flex">
              <a
                href={callHref}
                className="rounded-full border border-[var(--border-soft)] px-5 py-3 text-sm font-semibold text-[var(--color-primary)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#edf3f6]"
              >
                Call Now
              </a>
              <Link
                href={appointmentHref}
                className="rounded-full bg-[linear-gradient(135deg,#003857,#006a61)] px-6 py-3 text-sm font-bold text-white shadow-[0_18px_40px_rgba(0,56,87,0.22)] transition duration-300 hover:-translate-y-0.5"
              >
                Add Appointment
              </Link>
            </div>

            <button
              type="button"
              className="grid size-11 place-items-center rounded-2xl border border-[var(--border-soft)] bg-white text-[var(--color-primary)] lg:hidden"
              onClick={() => setIsOpen((value) => !value)}
              aria-expanded={isOpen}
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </header>

      <div
        className={cn(
          "fixed inset-0 z-40 bg-[rgba(4,18,29,0.42)] backdrop-blur-sm transition duration-300 lg:hidden",
          isOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        )}
        onClick={() => setIsOpen(false)}
      />

      <aside
        className={cn(
          "fixed inset-y-3 right-3 z-50 w-[min(24rem,calc(100vw-1.5rem))] rounded-[2rem] border border-white/80 bg-white p-5 shadow-[0_30px_90px_rgba(15,23,42,0.18)] transition duration-300 lg:hidden",
          isOpen ? "translate-x-0 opacity-100" : "pointer-events-none translate-x-[110%] opacity-0"
        )}
      >
        <div className="flex h-full flex-col">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-sm font-bold text-[var(--color-primary)]">{siteName}</p>
              <p className="text-xs text-[var(--color-text-soft)]">{primaryPhone}</p>
            </div>
            <button
              type="button"
              className="grid size-11 place-items-center rounded-2xl border border-[var(--border-soft)]"
              onClick={() => setIsOpen(false)}
              aria-label="Close menu"
            >
              <CloseIcon />
            </button>
          </div>

          <div className="mt-8 grid gap-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-[1.3rem] border px-5 py-4 text-sm font-semibold transition duration-300",
                  isActive(pathname, item.href)
                    ? "border-[var(--color-primary)] bg-[var(--color-primary)] text-white"
                    : "border-[var(--border-soft)] bg-[#f9fbfc] text-[var(--color-primary)]"
                )}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="mt-auto grid gap-3 pt-8">
            <a
              href={callHref}
              className="inline-flex items-center justify-center rounded-full border border-[var(--border-soft)] px-6 py-3 text-sm font-semibold text-[var(--color-primary)]"
              onClick={() => setIsOpen(false)}
            >
              Call Now
            </a>
            <Link
              href={appointmentHref}
              className="inline-flex items-center justify-center rounded-full bg-[linear-gradient(135deg,#003857,#006a61)] px-6 py-3 text-sm font-bold text-white"
              onClick={() => setIsOpen(false)}
            >
              Add Appointment
            </Link>
          </div>
        </div>
      </aside>
    </>
  );
}

function MenuIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="size-5" aria-hidden="true">
      <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="size-5" aria-hidden="true">
      <path d="m6 6 12 12M18 6 6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
