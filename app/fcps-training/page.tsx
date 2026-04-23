import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { appointmentHref, callHref, fcpsTraining } from "@/data/site";

export const metadata: Metadata = {
  title: "FCPS Online Training | The Dental Zone",
  description: "Online FCPS mentoring with structured modules, case discussion, and exam-focused support.",
};

export default function FcpsTrainingPage() {
  return (
    <div className="px-4 py-8 sm:px-6 sm:py-12 lg:px-10">
      <section className="hero-shell mx-auto grid max-w-7xl gap-10 rounded-[2rem] px-6 py-10 sm:px-10 sm:py-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:px-14">
        <div>
          <p className="section-eyebrow">FCPS Online Training</p>
          <h1 className="mt-4 font-heading text-4xl font-extrabold tracking-[-0.06em] text-[var(--color-primary)] sm:text-6xl">
            Online guidance for stronger FCPS preparation
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--color-text-soft)] sm:text-lg">
            {fcpsTraining.description}
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
        <div className="relative overflow-hidden rounded-[2rem] shadow-[0_24px_70px_rgba(15,23,42,0.12)]">
          <Image
            src={fcpsTraining.image}
            alt={fcpsTraining.title}
            width={1200}
            height={1000}
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="h-[28rem] w-full object-cover sm:h-[36rem]"
            preload
          />
        </div>
      </section>

      <section className="mx-auto mt-14 max-w-7xl">
        <div className="grid grid-cols-2 items-stretch gap-4 sm:gap-5 lg:grid-cols-4">
          {fcpsTraining.modules.map((module) => (
            <article key={module} className="card-surface h-full min-w-0 p-4 sm:p-6">
              <p className="text-[0.72rem] font-bold uppercase tracking-[0.24em] text-[var(--color-secondary)]">
                Online Module
              </p>
              <h2 className="mt-4 break-words text-xl font-extrabold tracking-[-0.04em] text-[var(--color-primary)] sm:text-2xl">
                {module}
              </h2>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
