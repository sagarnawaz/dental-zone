import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { appointmentHref, callHref, founder, siteName, whyChooseUs } from "@/data/site";

export const metadata: Metadata = {
  title: "About Us | Zia Dental Care",
  description: "Learn about the founder vision, treatment philosophy, and modern patient-focused approach at Zia Dental Care.",
};

export default function AboutPage() {
  return (
    <div className="px-4 py-8 sm:px-6 sm:py-12 lg:px-10">
      <section className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div>
          <p className="section-eyebrow">About Us</p>
          <h1 className="mt-4 font-heading text-4xl font-extrabold tracking-[-0.06em] text-[var(--color-primary)] sm:text-6xl">
            {siteName} is built around comfort, clarity, and trust.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--color-text-soft)] sm:text-lg">
            {founder.intro}
          </p>
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
          <Image src={founder.image} alt={founder.name} width={1000} height={1080} className="h-[28rem] w-full object-cover sm:h-[38rem]" />
        </div>
      </section>

      <section className="mx-auto mt-16 max-w-7xl">
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {whyChooseUs.map((item) => (
            <article key={item.title} className="card-surface p-6">
              <h2 className="text-2xl font-extrabold tracking-[-0.04em] text-[var(--color-primary)]">{item.title}</h2>
              <p className="mt-4 text-sm leading-7 text-[var(--color-text-soft)]">{item.description}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
