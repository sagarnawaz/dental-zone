"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { appointmentHref, callHref, navItems, primaryPhone, services, siteName } from "@/data/site";
import { cn } from "@/lib/utils";

function isActive(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDesktopServicesOpen, setIsDesktopServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);

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
      <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5">
        <div
          className={cn(
            "mx-auto max-w-7xl rounded-[1.8rem] border backdrop-blur-xl transition duration-300",
            isScrolled
              ? "border-[#d7e0e6] bg-white/88 shadow-[0_24px_70px_rgba(15,23,42,0.12)]"
              : "border-white/20 bg-white/10 shadow-[0_20px_60px_rgba(3,20,31,0.16)]"
          )}
        >
          <div className="flex min-h-[5.25rem] items-center justify-between gap-4 px-4 sm:px-6 xl:grid xl:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] xl:gap-6 xl:px-8">
            <Link href="/" className="flex min-w-0 items-center gap-3 xl:justify-self-start" aria-label={`${siteName} home`}>
              <div className="shrink-0">
                <Image
                  src="/logo-transparent.png"
                  alt={`${siteName} logo`}
                  width={625}
                  height={625}
                  className="h-14 w-14 rounded-[1.35rem] object-contain sm:h-16 sm:w-16"
                  preload
                />
              </div>
              <div className="hidden min-w-0 sm:block">
                <p
                  className={cn(
                    "truncate text-sm font-bold tracking-[-0.03em] transition duration-300",
                    isScrolled ? "text-[var(--color-primary)]" : "text-white",
                  )}
                >
                  {siteName}
                </p>
                <p
                  className={cn(
                    "mt-0.5 truncate text-[0.68rem] font-semibold uppercase tracking-[0.22em] transition duration-300",
                    isScrolled ? "text-[var(--color-text-soft)]" : "text-white/68",
                  )}
                >
                  Modern Dental Care
                </p>
              </div>
            </Link>

            <nav className="hidden items-center justify-center gap-1 xl:flex xl:justify-self-center" aria-label="Primary">
              {navItems.map((item) => (
                item.href === "/services" ? (
                  <div
                    key={item.href}
                    className="relative"
                    onMouseEnter={() => setIsDesktopServicesOpen(true)}
                    onMouseLeave={() => setIsDesktopServicesOpen(false)}
                  >
                    <div
                      className={cn(
                        "flex items-center rounded-full pl-4 pr-2 py-2 text-sm font-semibold transition duration-300",
                        isActive(pathname, item.href)
                          ? "bg-[var(--color-primary)] text-white"
                          : isScrolled
                            ? "text-[var(--color-text-soft)] hover:bg-[#edf3f6] hover:text-[var(--color-primary)]"
                            : "text-white/84 hover:bg-white/12 hover:text-white",
                      )}
                    >
                      <button
                        type="button"
                        className="py-1 pr-2"
                        aria-expanded={isDesktopServicesOpen}
                        aria-controls="desktop-services-menu"
                        onClick={() => setIsDesktopServicesOpen((value) => !value)}
                      >
                        {item.label}
                      </button>
                      <button
                        type="button"
                        className="grid size-9 place-items-center rounded-full transition hover:bg-black/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
                        aria-expanded={isDesktopServicesOpen}
                        aria-controls="desktop-services-menu"
                        aria-label="Toggle services menu"
                        onClick={() => setIsDesktopServicesOpen((value) => !value)}
                      >
                        <ChevronDownIcon className={cn("size-4 transition duration-300", isDesktopServicesOpen && "rotate-180")} />
                      </button>
                    </div>

                    <div
                      id="desktop-services-menu"
                      className={cn(
                        "absolute left-0 top-[calc(100%+0.85rem)] w-[19rem] rounded-[1.5rem] border border-white/80 bg-white/96 p-3 text-[var(--color-primary)] shadow-[0_28px_80px_rgba(15,23,42,0.16)] backdrop-blur-xl transition duration-200",
                        isDesktopServicesOpen
                          ? "pointer-events-auto translate-y-0 opacity-100"
                          : "pointer-events-none -translate-y-2 opacity-0",
                      )}
                    >
                      <div className="grid max-h-[20rem] gap-1 overflow-y-auto pr-1 [scrollbar-width:thin]">
                        {services.map((service) => (
                          <Link
                            key={service.slug}
                            href={`/services/${service.slug}`}
                            className="rounded-[1rem] px-4 py-3 text-sm font-semibold tracking-[-0.02em] text-[var(--color-primary)] transition duration-300 hover:bg-[#f7fafc]"
                            onClick={() => setIsDesktopServicesOpen(false)}
                          >
                            {service.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "rounded-full px-4 py-3 text-sm font-semibold transition duration-300",
                      isActive(pathname, item.href)
                        ? "bg-[var(--color-primary)] text-white"
                        : isScrolled
                          ? "text-[var(--color-text-soft)] hover:bg-[#edf3f6] hover:text-[var(--color-primary)]"
                          : "text-white/84 hover:bg-white/12 hover:text-white",
                    )}
                  >
                    {item.label}
                  </Link>
                )
              ))}
            </nav>

            <div className="hidden items-center justify-end gap-3 xl:flex xl:justify-self-end">
              <a
                href={callHref}
                className={cn(
                  "rounded-full px-5 py-3 text-sm font-semibold transition duration-300 hover:-translate-y-0.5",
                  isScrolled
                    ? "border border-[var(--border-soft)] text-[var(--color-primary)] hover:bg-[#edf3f6]"
                    : "border border-white/18 bg-white/8 text-white hover:bg-white/14",
                )}
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
              className={cn(
                "grid size-11 place-items-center rounded-2xl xl:hidden",
                isScrolled
                  ? "border border-[var(--border-soft)] bg-white text-[var(--color-primary)]"
                  : "border border-white/18 bg-white/10 text-white",
              )}
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
          "fixed inset-0 z-40 bg-[rgba(4,18,29,0.42)] backdrop-blur-sm transition duration-300 xl:hidden",
          isOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        )}
        onClick={() => setIsOpen(false)}
      />

      <aside
        className={cn(
          "fixed inset-y-3 right-3 z-50 w-[min(24rem,calc(100vw-1.5rem))] rounded-[2rem] border border-white/80 bg-white p-5 shadow-[0_30px_90px_rgba(15,23,42,0.18)] transition duration-300 xl:hidden",
          isOpen ? "translate-x-0 opacity-100" : "pointer-events-none translate-x-[110%] opacity-0"
        )}
      >
        <div className="flex h-full flex-col">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Image
                src="/logo-transparent.png"
                alt={`${siteName} logo`}
                width={625}
                height={625}
                className="h-14 w-14 rounded-[1.35rem] object-contain"
              />
              <div>
                <p className="text-sm font-bold text-[var(--color-primary)]">{siteName}</p>
                <p className="text-xs text-[var(--color-text-soft)]">{primaryPhone}</p>
              </div>
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
              item.href === "/services" ? (
                <div key={item.href} className="rounded-[1.4rem] border border-[var(--border-soft)] bg-[#f9fbfc] p-2">
                  <button
                    type="button"
                    className={cn(
                      "flex w-full items-center justify-between rounded-[1rem] px-3 py-3 text-left text-sm font-semibold transition duration-300",
                      isActive(pathname, item.href)
                        ? "bg-[var(--color-primary)] text-white"
                        : "text-[var(--color-primary)] hover:bg-white",
                    )}
                    aria-expanded={isMobileServicesOpen}
                    aria-controls="mobile-services-menu"
                    onClick={() => setIsMobileServicesOpen((value) => !value)}
                  >
                    <span>Services</span>
                    <ChevronDownIcon className={cn("size-4 transition duration-300", isMobileServicesOpen && "rotate-180")} />
                  </button>

                  <div
                    id="mobile-services-menu"
                    className={cn(
                      "grid overflow-hidden transition-all duration-300",
                      isMobileServicesOpen ? "mt-2 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
                    )}
                  >
                    <div className="min-h-0">
                      <div className="grid gap-1">
                        {services.map((service) => (
                          <Link
                            key={service.slug}
                            href={`/services/${service.slug}`}
                            className="rounded-[1rem] px-3 py-3 text-sm font-semibold text-[var(--color-primary)] transition duration-300 hover:bg-white"
                            onClick={() => setIsOpen(false)}
                          >
                            {service.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "rounded-[1.3rem] border px-5 py-4 text-sm font-semibold transition duration-300",
                    isActive(pathname, item.href)
                      ? "border-[var(--color-primary)] bg-[var(--color-primary)] text-white"
                      : "border-[var(--border-soft)] bg-[#f9fbfc] text-[var(--color-primary)]",
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              )
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

function ChevronDownIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="m6 9 6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
