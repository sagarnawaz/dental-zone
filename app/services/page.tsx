import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { appointmentHref, callHref, services } from "@/data/site";

export const metadata: Metadata = {
  title: "Services | Zia Dental Care",
  description: "Explore all dental services and open each treatment through its dedicated detail page.",
};

export default function ServicesPage() {
  return (
    <div className="px-4 py-8 sm:px-6 sm:py-12 lg:px-10">
      <section className="hero-shell mx-auto max-w-7xl rounded-[2rem] px-6 py-10 sm:px-10 sm:py-14 lg:px-14">
        <p className="section-eyebrow">Services</p>
        <h1 className="mt-4 max-w-3xl font-heading text-4xl font-extrabold tracking-[-0.06em] text-[var(--color-primary)] sm:text-6xl">
          All treatments with clear detail pages
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-8 text-[var(--color-text-soft)] sm:text-lg">
          Browse our core dental services and open the relevant detail page for more focused information before booking.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link href={appointmentHref} className="rounded-full bg-[var(--color-primary)] px-6 py-3 text-sm font-bold text-white">
            Add Appointment
          </Link>
          <a href={callHref} className="rounded-full border border-[var(--border-soft)] bg-white px-6 py-3 text-sm font-semibold text-[var(--color-primary)]">
            Call Now
          </a>
        </div>
      </section>

      <section className="mx-auto mt-14 max-w-7xl">
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <article key={service.slug} className="card-surface overflow-hidden">
              <div className="relative h-64">
                <Image src={service.image} alt={service.name} fill className="object-cover" sizes="(min-width: 1280px) 30vw, (min-width: 768px) 46vw, 100vw" />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.02),rgba(0,56,87,0.62))]" />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-extrabold tracking-[-0.04em] text-[var(--color-primary)]">{service.name}</h2>
                <p className="mt-3 text-sm leading-7 text-[var(--color-text-soft)]">{service.detail}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {service.highlights.map((item) => (
                    <span key={item} className="rounded-full bg-[#edf3f6] px-3 py-1 text-[0.68rem] font-bold uppercase tracking-[0.18em] text-[var(--color-primary)]">
                      {item}
                    </span>
                  ))}
                </div>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <Link href={`/services/${service.slug}`} className="rounded-full bg-[var(--color-primary)] px-5 py-3 text-center text-sm font-bold text-white">
                    View Detail Page
                  </Link>
                  <a href={callHref} className="rounded-full border border-[var(--border-soft)] px-5 py-3 text-center text-sm font-semibold text-[var(--color-primary)]">
                    Call Now
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
