import type { Metadata } from "next";
import Link from "next/link";

import {
  appointmentHref,
  callHref,
  locationInfo,
  primaryPhone,
  secondaryPhone,
  whatsappHref,
} from "@/data/site";

export const metadata: Metadata = {
  title: "Contact Us | The Dental Zone",
  description: "Book an appointment, call the clinic, or reach out for FCPS online training and Dhabeji clinic support.",
};

export default function ContactPage() {
  return (
    <div className="px-4 py-8 sm:px-6 sm:py-12 lg:px-10">
      <section className="hero-shell mx-auto max-w-7xl rounded-[2rem] px-6 py-10 sm:px-10 sm:py-14 lg:px-14">
        <p className="section-eyebrow">Contact Us</p>
        <h1 className="mt-4 max-w-3xl font-heading text-4xl font-extrabold tracking-[-0.06em] text-[var(--color-primary)] sm:text-6xl">
          Book quickly through call, WhatsApp, or appointment request
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--color-text-soft)] sm:text-lg">
          Reach us for appointments, follow-ups, Dhabeji clinic inquiries, and FCPS online training information.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <Link href={appointmentHref} className="rounded-full bg-[var(--color-primary)] px-6 py-3 text-sm font-bold text-white">
            Add Appointment
          </Link>
          <a href={callHref} className="rounded-full border border-[var(--border-soft)] bg-white px-6 py-3 text-sm font-semibold text-[var(--color-primary)]">
            Call Now
          </a>
          <a href={whatsappHref} target="_blank" rel="noreferrer" className="rounded-full border border-[var(--border-soft)] bg-white px-6 py-3 text-sm font-semibold text-[var(--color-primary)]">
            WhatsApp
          </a>
        </div>
      </section>

      <section className="mx-auto mt-14 grid max-w-7xl gap-6 lg:grid-cols-[0.75fr_1.25fr]">
        <div className="space-y-5">
          <article className="card-surface p-6">
            <p className="text-[0.72rem] font-bold uppercase tracking-[0.24em] text-[var(--color-secondary)]">Call</p>
            <p className="mt-4 text-xl font-bold text-[var(--color-primary)]">{primaryPhone}</p>
            <p className="mt-2 text-sm text-[var(--color-text-soft)]">{secondaryPhone}</p>
          </article>
          <article className="card-surface p-6">
            <p className="text-[0.72rem] font-bold uppercase tracking-[0.24em] text-[var(--color-secondary)]">Location</p>
            <p className="mt-4 text-xl font-bold text-[var(--color-primary)]">{locationInfo.address}</p>
            <p className="mt-2 text-sm text-[var(--color-text-soft)]">Open all 7 days for patient convenience.</p>
          </article>
        </div>

        <div className="card-surface overflow-hidden p-4">
          <div className="overflow-hidden rounded-[1.6rem]">
            <iframe
              title="Clinic location"
              src={locationInfo.mapEmbed}
              className="h-[30rem] w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
