import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { appointmentHref, callHref, dhabejiClinicPage, locationInfo, services, weeklyHours } from "@/data/site";

export const metadata: Metadata = {
  title: "Dhabeji Clinic | The Dental Zone",
  description: dhabejiClinicPage.description,
};

export default function DhabejiClinicPage() {
  return (
    <div className="px-4 py-8 sm:px-6 sm:py-12 lg:px-10">
      <section className="hero-shell mx-auto grid max-w-7xl gap-10 rounded-[2rem] px-6 py-10 sm:px-10 sm:py-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:px-14">
        <div>
          <p className="section-eyebrow">Dhabeji Clinic</p>
          <h1 className="mt-4 font-heading text-4xl font-extrabold tracking-[-0.06em] text-[var(--color-primary)] sm:text-6xl">
            A modern clinic for comfortable daily dental care
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--color-text-soft)] sm:text-lg">
            {dhabejiClinicPage.description}
          </p>
          <div className="mt-6 space-y-3">
            {dhabejiClinicPage.points.map((point) => (
              <div key={point} className="flex items-center gap-3 text-sm font-semibold text-[var(--color-primary)]">
                <span className="size-2 rounded-full bg-[var(--color-secondary)]" />
                {point}
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href={appointmentHref} className="rounded-full bg-[var(--color-primary)] px-6 py-3 text-sm font-bold text-white">
              Add Appointment
            </Link>
            <a href={callHref} className="rounded-full border border-[var(--border-soft)] bg-white px-6 py-3 text-sm font-semibold text-[var(--color-primary)]">
              Call Now
            </a>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-[2rem] shadow-[0_28px_80px_rgba(15,23,42,0.12)]">
          <Image
            src={dhabejiClinicPage.heroImage}
            alt={dhabejiClinicPage.title}
            width={1200}
            height={1000}
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="h-[28rem] w-full object-cover sm:h-[36rem]"
            preload
          />
        </div>
      </section>

      <section className="mx-auto mt-14 grid max-w-7xl gap-6 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="card-surface p-6">
          <h2 className="text-2xl font-extrabold tracking-[-0.04em] text-[var(--color-primary)]">Weekly hours</h2>
          <div className="mt-6 space-y-3">
            {weeklyHours.map((item) => (
              <div key={item.day} className="flex items-center justify-between rounded-[1.1rem] bg-[#f5f9fb] px-4 py-3">
                <span className="font-bold text-[var(--color-primary)]">{item.day}</span>
                <span className="text-sm font-semibold text-[var(--color-text-soft)]">{item.hours}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="card-surface p-6">
          <h2 className="text-2xl font-extrabold tracking-[-0.04em] text-[var(--color-primary)]">Popular services</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {services.slice(0, 4).map((service) => (
              <Link key={service.slug} href={`/services/${service.slug}`} className="rounded-[1.2rem] bg-[#f5f9fb] px-4 py-4 text-sm font-semibold text-[var(--color-primary)] transition duration-300 hover:-translate-y-0.5">
                {service.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto mt-14 max-w-7xl">
        <div className="card-surface overflow-hidden p-4">
          <div className="overflow-hidden rounded-[1.6rem]">
            <iframe
              title="Dhabeji clinic map"
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
