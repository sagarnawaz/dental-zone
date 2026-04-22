"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

const clinicLinks = [
  {
    label: "Hadeed",
    href: "/clinics/hadeed",
  },
  {
    label: "Dhabeji",
    href: "/clinics/dhabeji",
  },
] as const;

const navItems = [
  { label: "FCPS Training", href: "/fcps-training" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
] as const;

const utilityLinks = [
  { label: "Enroll Now", href: "/fcps-training" },
  { label: "Book Appointment", href: "/contact" },
] as const;

function isRouteActive(pathname: string, href: string) {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileClinicMenuOpen, setIsMobileClinicMenuOpen] = useState(false);
  const [isDesktopClinicMenuOpen, setIsDesktopClinicMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const desktopDropdownRef = useRef<HTMLDivElement>(null);
  const isClinicsActive = pathname === "/clinics" || pathname.startsWith("/clinics/");

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 12);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", isMobileMenuOpen);

    return () => document.body.classList.remove("overflow-hidden");
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const handlePointerDown = (event: MouseEvent) => {
      if (!desktopDropdownRef.current?.contains(event.target as Node)) {
        setIsDesktopClinicMenuOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsDesktopClinicMenuOpen(false);
        setIsMobileClinicMenuOpen(false);
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <>
      <header className="sticky top-0 z-50 px-3 pt-3 sm:px-5">
        <div
          className={cn(
            "mx-auto max-w-7xl rounded-[1.6rem] border border-white/75 bg-[linear-gradient(135deg,rgba(255,255,255,0.92),rgba(247,249,251,0.82))] shadow-[0_18px_55px_rgba(15,23,42,0.08)] backdrop-blur-2xl transition-all duration-300 sm:rounded-[1.9rem]",
            isScrolled
              ? "border-[#d9e0e6] shadow-[0_22px_70px_rgba(15,23,42,0.12)]"
              : "border-white/80"
          )}
        >
          <div
            className={cn(
              "flex items-center justify-between gap-3 px-3 sm:px-6 lg:px-8",
              isScrolled ? "min-h-[4.6rem] sm:min-h-[5rem]" : "min-h-[5rem] sm:min-h-[5.7rem]"
            )}
          >
            <Link
              href="/"
              aria-label="The Dental Zone home"
              className="group inline-flex min-w-0 items-center gap-3"
            >
              <div className="grid size-10 shrink-0 place-items-center rounded-2xl bg-[linear-gradient(135deg,#003857,#0d5e6e_58%,#006a61)] text-sm font-extrabold tracking-[0.18em] text-white shadow-[0_16px_36px_rgba(0,56,87,0.24)] transition duration-300 group-hover:-translate-y-0.5 sm:size-11">
                TZ
              </div>
              <div className="min-w-0">
                <p className="truncate text-[0.95rem] font-extrabold tracking-[-0.05em] text-[#003857] sm:text-[1.05rem]">
                  The Dental Zone
                </p>
                <p className="hidden text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-[#6f7a84] sm:block">
                  Clinics and FCPS Training
                </p>
              </div>
            </Link>

            <nav className="hidden items-center gap-2 lg:flex" aria-label="Primary">
              <div
                ref={desktopDropdownRef}
                className="relative"
                onMouseEnter={() => setIsDesktopClinicMenuOpen(true)}
                onMouseLeave={() => setIsDesktopClinicMenuOpen(false)}
              >
                <button
                  type="button"
                  className={cn(
                    "inline-flex items-center gap-2 rounded-full px-4 py-3 text-sm font-semibold transition duration-300",
                    isClinicsActive || isDesktopClinicMenuOpen
                      ? "bg-[#003857] text-white shadow-[0_14px_32px_rgba(0,56,87,0.18)]"
                      : "text-[#55606d] hover:bg-white hover:text-[#003857]"
                  )}
                  aria-haspopup="menu"
                  aria-expanded={isDesktopClinicMenuOpen}
                  aria-controls="desktop-clinics-menu"
                  onClick={() => setIsDesktopClinicMenuOpen((value) => !value)}
                >
                  Clinics
                  <ChevronDownIcon
                    className={cn(
                      "h-4 w-4 transition duration-300",
                      isDesktopClinicMenuOpen && "rotate-180"
                    )}
                  />
                </button>

                <div
                  id="desktop-clinics-menu"
                  className={cn(
                    "absolute left-0 top-full w-56 pt-4 transition duration-200",
                    isDesktopClinicMenuOpen
                      ? "pointer-events-auto translate-y-0 opacity-100"
                      : "pointer-events-none -translate-y-1 opacity-0"
                  )}
                >
                  <div className="overflow-hidden rounded-[1.6rem] border border-white/70 bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(247,249,251,0.95))] p-3 shadow-[0_20px_56px_rgba(15,23,42,0.14)] backdrop-blur-2xl">
                    <div className="grid gap-1.5">
                      {clinicLinks.map((clinic) => (
                        <Link
                          key={clinic.href}
                          href={clinic.href}
                          className={cn(
                            "rounded-[1rem] px-4 py-3 text-sm font-semibold transition duration-300 hover:bg-white",
                            pathname === clinic.href
                              ? "bg-white text-[#003857] shadow-[0_10px_24px_rgba(15,23,42,0.06)]"
                              : "text-[#66717c] hover:text-[#003857]"
                          )}
                          onClick={() => setIsDesktopClinicMenuOpen(false)}
                        >
                          {clinic.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {navItems.map((item) => {
                const isActive = isRouteActive(pathname, item.href);

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "rounded-full px-4 py-3 text-sm font-semibold transition duration-300",
                      isActive
                        ? "bg-white text-[#003857] shadow-[0_12px_28px_rgba(15,23,42,0.08)]"
                        : "text-[#55606d] hover:bg-[#003857] hover:text-white hover:shadow-[0_14px_32px_rgba(0,56,87,0.18)]"
                    )}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            <div className="hidden items-center gap-3 lg:flex">
              <Link
                href={utilityLinks[0].href}
                className="rounded-full border border-[#d4dbe1] bg-white/75 px-5 py-3 text-sm font-semibold text-[#003857] transition duration-300 hover:-translate-y-0.5 hover:border-[#003857]/18 hover:bg-white"
              >
                {utilityLinks[0].label}
              </Link>
              <Link
                href={utilityLinks[1].href}
                className="inline-flex items-center gap-2 rounded-full bg-[linear-gradient(135deg,#003857,#0d5e6e)] px-6 py-3 text-sm font-bold text-white shadow-[0_18px_40px_rgba(0,56,87,0.22)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_24px_52px_rgba(0,56,87,0.28)]"
              >
                <span>{utilityLinks[1].label}</span>
                <ArrowUpRightIcon className="h-4 w-4" />
              </Link>
            </div>

            <button
              type="button"
              onClick={() => setIsMobileMenuOpen((value) => !value)}
              aria-label={isMobileMenuOpen ? "Close mobile menu" : "Open mobile menu"}
              aria-expanded={isMobileMenuOpen}
              className="grid size-11 shrink-0 place-items-center rounded-2xl border border-[#d4dbe1] bg-white text-[#003857] shadow-[0_10px_24px_rgba(15,23,42,0.06)] transition duration-300 hover:border-[#003857]/16 hover:bg-[#f9fbfd] sm:size-12 lg:hidden"
            >
              {isMobileMenuOpen ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </header>

      <div
        className={cn(
          "fixed inset-0 z-40 bg-[rgba(2,12,20,0.42)] backdrop-blur-sm transition duration-300 lg:hidden",
          isMobileMenuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        )}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      <aside
        className={cn(
          "fixed inset-y-3 right-3 z-50 max-h-[calc(100dvh-1.5rem)] w-[min(26rem,calc(100vw-1.5rem))] overflow-hidden rounded-[2rem] border border-white/70 bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(247,249,251,0.96))] shadow-[0_24px_80px_rgba(15,23,42,0.18)] backdrop-blur-2xl transition duration-300 lg:hidden",
          isMobileMenuOpen
            ? "translate-x-0 opacity-100"
            : "pointer-events-none translate-x-[105%] opacity-0"
        )}
        aria-label="Mobile navigation"
      >
        <div className="flex h-full flex-col overflow-y-auto overscroll-contain p-4 sm:p-5">
          <div className="flex items-start justify-between gap-4">
            <div className="space-y-3">
              <div className="inline-flex max-w-full items-center gap-3 rounded-full border border-[#dbe3e7] bg-white px-4 py-2 shadow-[0_10px_24px_rgba(15,23,42,0.05)]">
                <div className="grid size-9 place-items-center rounded-xl bg-[linear-gradient(135deg,#003857,#0d5e6e_58%,#006a61)] text-xs font-extrabold tracking-[0.18em] text-white">
                  TZ
                </div>
                <div className="min-w-0">
                  <p className="truncate text-sm font-bold text-[#003857]">The Dental Zone</p>
                  <p className="truncate text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-[#73808b]">
                    Appointments and Training
                  </p>
                </div>
              </div>
              <div>
                <p className="text-[0.68rem] font-bold uppercase tracking-[0.24em] text-[#73808b]">
                  Premium Navigation
                </p>
                <p className="mt-2 text-xl font-bold tracking-[-0.05em] text-[#003857] sm:text-2xl">
                  Explore care, education, and appointments.
                </p>
              </div>
            </div>

            <button
              type="button"
              className="grid size-11 shrink-0 place-items-center rounded-2xl border border-[#d4dbe1] bg-white text-[#003857] shadow-[0_10px_24px_rgba(15,23,42,0.06)]"
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Close mobile menu"
            >
              <CloseIcon className="h-5 w-5" />
            </button>
          </div>

          <div className="mt-8 grid gap-3">
            <div className="overflow-hidden rounded-[1.7rem] border border-[#dbe3e7] bg-white/90 shadow-[0_14px_32px_rgba(15,23,42,0.04)]">
              <button
                type="button"
                className={cn(
                  "flex w-full items-center justify-between px-5 py-4 text-left text-sm font-semibold transition duration-300",
                  isClinicsActive || isMobileClinicMenuOpen
                    ? "bg-[#003857] text-white"
                    : "text-[#003857]"
                )}
                onClick={() => setIsMobileClinicMenuOpen((value) => !value)}
                aria-expanded={isMobileClinicMenuOpen}
                aria-controls="mobile-clinics-menu"
              >
                <span>Clinics</span>
                <ChevronDownIcon
                  className={cn(
                    "h-4 w-4 transition duration-300",
                    isMobileClinicMenuOpen && "rotate-180"
                  )}
                />
              </button>

              <div
                id="mobile-clinics-menu"
                className={cn(
                  "grid overflow-hidden transition-[grid-template-rows] duration-300",
                  isMobileClinicMenuOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                )}
              >
                <div className="min-h-0 space-y-2 overflow-hidden px-4 pb-4 pt-3">
                  {clinicLinks.map((clinic) => (
                    <Link
                      key={clinic.href}
                      href={clinic.href}
                      className={cn(
                        "block rounded-[1rem] bg-white px-4 py-3 text-sm font-semibold transition duration-300",
                        pathname === clinic.href ? "text-[#003857]" : "text-[#66717c]"
                      )}
                      onClick={() => {
                        setIsMobileClinicMenuOpen(false);
                        setIsMobileMenuOpen(false);
                      }}
                    >
                      {clinic.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {navItems.map((item) => {
              const isActive = isRouteActive(pathname, item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "rounded-[1.4rem] border px-5 py-4 text-sm font-semibold transition duration-300",
                    isActive
                      ? "border-[#003857]/12 bg-white text-[#003857] shadow-[0_12px_28px_rgba(15,23,42,0.06)]"
                      : "border-[#dbe3e7] bg-white/80 text-[#003857]"
                  )}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          <div className="mt-auto grid gap-3 pb-1 pt-8">
            <Link
              href={utilityLinks[0].href}
              className="inline-flex items-center justify-center rounded-full border border-[#d4dbe1] bg-white px-6 py-3 text-sm font-semibold text-[#003857]"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {utilityLinks[0].label}
            </Link>
            <Link
              href={utilityLinks[1].href}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[linear-gradient(135deg,#003857,#0d5e6e)] px-6 py-3 text-sm font-bold text-white shadow-[0_18px_40px_rgba(0,56,87,0.22)]"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <span>{utilityLinks[1].label}</span>
              <ArrowUpRightIcon className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </aside>
    </>
  );
}

type IconProps = {
  className?: string;
};

function ChevronDownIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="m6 9 6 6 6-6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowUpRightIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M8 16 16 8M10 8h6v6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MenuIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function CloseIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="m6 6 12 12M18 6 6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
