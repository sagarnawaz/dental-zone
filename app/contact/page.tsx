import type { Metadata } from "next";
import Link from "next/link";

import {
  callHref,
  contactChannels,
  mainClinicLocation,
  whatsappHref,
} from "@/data/site";
import InquiryForm from "@/components/ui/InquiryForm";

export const metadata: Metadata = {
  title: "Contact Us | The Dental Zone",
  description: "Book an appointment, call the clinic, or reach out to The Dental Zone Hadeed directly.",
};

export default function ContactPage() {
  return (
    <div className="px-4 py-8 sm:px-6 sm:py-12 lg:px-10">
      <section className="hero-shell mx-auto max-w-7xl rounded-[2rem] px-6 py-10 sm:px-10 sm:py-14 lg:px-14">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
          <div>
            <p className="section-eyebrow">Contact Us</p>
            <h1 className="mt-4 max-w-3xl font-heading text-4xl font-extrabold tracking-[-0.06em] text-[var(--color-primary)] sm:text-6xl">
              Reach the clinic quickly without the clutter
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--color-text-soft)] sm:text-lg">
              Use the form for appointments and inquiries, or contact the clinic directly through call or WhatsApp for faster coordination.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a href={callHref} className="rounded-full bg-[var(--color-primary)] px-6 py-3 text-sm font-bold text-white">
                Call Now
              </a>
              <a href={whatsappHref} target="_blank" rel="noreferrer" className="rounded-full border border-[var(--border-soft)] bg-white px-6 py-3 text-sm font-semibold text-[var(--color-primary)]">
                WhatsApp
              </a>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {contactChannels.map((channel) => (
              <a
                key={channel.label}
                href={channel.href}
                className="rounded-[1.4rem] border border-[#d6e0e6] bg-white/78 px-5 py-5 text-[var(--color-primary)] transition duration-300 hover:border-[#bfd0da] hover:bg-white"
              >
                <p className="text-[0.68rem] font-bold uppercase tracking-[0.22em] text-[var(--color-text-soft)]">
                  Contact Line
                </p>
                <p className="mt-3 text-lg font-bold tracking-[-0.03em]">{channel.label}</p>
              </a>
            ))}
            <a
              href={whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="rounded-[1.4rem] border border-[#d6e0e6] bg-white/78 px-5 py-5 text-[var(--color-primary)] transition duration-300 hover:border-[#bfd0da] hover:bg-white"
            >
              <p className="text-[0.68rem] font-bold uppercase tracking-[0.22em] text-[var(--color-text-soft)]">
                WhatsApp
              </p>
              <p className="mt-3 text-lg font-bold tracking-[-0.03em]">Instant message support</p>
            </a>
            <div className="rounded-[1.4rem] border border-[#d6e0e6] bg-white/78 px-5 py-5 text-[var(--color-primary)] sm:col-span-2">
              <p className="text-[0.68rem] font-bold uppercase tracking-[0.22em] text-[var(--color-text-soft)]">
                Clinic Location
              </p>
              <p className="mt-3 text-lg font-bold tracking-[-0.03em]">{mainClinicLocation.address}</p>
              <p className="mt-2 text-sm leading-7 text-[var(--color-text-soft)]">
                Open all 7 days for appointments, follow-ups, and routine support.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-14 grid max-w-7xl gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-start">
        <div className="min-w-0">
          <InquiryForm />
        </div>

        <div className="min-w-0 space-y-8">
          <div>
            <p className="section-eyebrow">Visit Us</p>
            <h2 className="mt-3 font-heading text-3xl font-extrabold tracking-[-0.05em] text-[var(--color-primary)] sm:text-4xl">
              Find the clinic without extra sections
            </h2>
            <p className="mt-4 text-base leading-8 text-[var(--color-text-soft)]">
              The contact page is now focused on what matters most: direct contact, appointment form, and a clear map for location support.
            </p>
          </div>

          <div className="overflow-hidden rounded-[1.8rem] border border-[#d9e3e8] bg-white">
            <iframe
              title="Clinic location"
              src={mainClinicLocation.mapEmbed}
              className="h-[28rem] w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            <a href={callHref} className="rounded-[1.2rem] border border-[#d9e3e8] px-4 py-4 text-sm font-semibold text-[var(--color-primary)] transition duration-300 hover:bg-white">
              Call for quick appointment help
            </a>
            <Link href="/services" className="rounded-[1.2rem] border border-[#d9e3e8] px-4 py-4 text-sm font-semibold text-[var(--color-primary)] transition duration-300 hover:bg-white">
              Explore services before booking
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
