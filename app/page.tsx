import Image from "next/image";
import Link from "next/link";

import ReviewSlider from "@/components/sections/ReviewSlider";
import TeamSlider from "@/components/sections/TeamSlider";
import FaqAccordion from "@/components/ui/FaqAccordion";
import {
  appointmentHref,
  callHref,
  faqItems,
  founder,
  googleReviews,
  locationInfo,
  primaryPhone,
  services,
  teamMembers,
  videoReview,
  weeklyHours,
  whyChooseUs,
} from "@/data/site";

export default function HomePage() {
  return (
    <div className="px-4 pb-10 sm:px-6 lg:px-10">
      <section className="section-fade pt-6 sm:pt-10">
        <div className="hero-shell mx-auto max-w-7xl overflow-hidden rounded-[2rem] px-6 py-10 sm:px-10 sm:py-14 lg:grid lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-10 lg:px-14 lg:py-18">
          <div>
            <span className="inline-flex rounded-full bg-[var(--color-highlight)] px-4 py-2 text-[0.7rem] font-bold uppercase tracking-[0.24em] text-[var(--color-secondary)]">
              Founder Introduction
            </span>
            <h1 className="mt-6 max-w-2xl font-heading text-4xl font-extrabold leading-[0.95] tracking-[-0.07em] text-[var(--color-primary)] sm:text-6xl lg:text-7xl">
              Modern Dentistry
              <br />
              with a calm,
              <br />
              structured feel.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--color-text-soft)] sm:text-lg sm:leading-9">
              {founder.intro}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link
                href={appointmentHref}
                className="inline-flex items-center justify-center rounded-full bg-[var(--color-primary)] px-7 py-4 text-sm font-bold text-white shadow-[0_18px_40px_rgba(0,56,87,0.22)] transition duration-300 hover:-translate-y-0.5"
              >
                Add Appointment
              </Link>
              <a
                href={callHref}
                className="inline-flex items-center justify-center rounded-full border border-[var(--border-strong)] bg-white px-7 py-4 text-sm font-semibold text-[var(--color-primary)] transition duration-300 hover:-translate-y-0.5"
              >
                Call Now
              </a>
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {founder.stats.map((stat) => (
                <div key={stat.label} className="card-surface p-5">
                  <p className="text-3xl font-extrabold tracking-[-0.04em] text-[var(--color-primary)]">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-[var(--color-text-soft)]">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 lg:mt-0">
            <div className="relative mx-auto max-w-xl">
              <div className="float-card absolute -left-4 top-8 hidden rounded-[1.4rem] bg-white px-5 py-4 shadow-[0_16px_40px_rgba(15,23,42,0.08)] md:block">
                <p className="text-sm font-bold text-[var(--color-primary)]">{founder.name}</p>
                <p className="text-xs uppercase tracking-[0.18em] text-[var(--color-text-soft)]">
                  {founder.title}
                </p>
              </div>
              <div className="relative overflow-hidden rounded-[2rem] bg-white shadow-[0_28px_80px_rgba(15,23,42,0.12)]">
                <Image
                  src={founder.image}
                  alt={founder.name}
                  width={900}
                  height={980}
                  priority
                  className="h-[28rem] w-full object-cover sm:h-[36rem]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-fade mx-auto mt-20 max-w-7xl">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="section-eyebrow">All Services</p>
            <h2 className="mt-3 font-heading text-3xl font-extrabold tracking-[-0.05em] text-[var(--color-primary)] sm:text-5xl">
              Services with clear detail pages
            </h2>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link href={appointmentHref} className="rounded-full bg-[var(--color-primary)] px-6 py-3 text-sm font-bold text-white">
              Add Appointment
            </Link>
            <a href={callHref} className="rounded-full border border-[var(--border-soft)] bg-white px-6 py-3 text-sm font-semibold text-[var(--color-primary)]">
              Call Now
            </a>
          </div>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => (
            <article key={service.slug} className="card-surface overflow-hidden">
              <div className="relative h-56">
                <Image src={service.image} alt={service.name} fill className="object-cover" sizes="(min-width: 1280px) 22vw, (min-width: 768px) 46vw, 100vw" />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.02),rgba(0,56,87,0.6))]" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-extrabold tracking-[-0.04em] text-[var(--color-primary)]">
                  {service.name}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[var(--color-text-soft)]">
                  {service.shortDescription}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {service.highlights.map((highlight) => (
                    <span
                      key={highlight}
                      className="rounded-full bg-[#edf3f6] px-3 py-1 text-[0.68rem] font-bold uppercase tracking-[0.18em] text-[var(--color-primary)]"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
                <Link
                  href={`/services/${service.slug}`}
                  className="mt-6 inline-flex items-center text-sm font-bold text-[var(--color-secondary)] transition duration-300 hover:translate-x-1"
                >
                  View detail page
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-fade mx-auto mt-20 max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="section-eyebrow">Client Review</p>
            <h2 className="mt-3 font-heading text-3xl font-extrabold tracking-[-0.05em] text-[var(--color-primary)] sm:text-5xl">
              One featured review video section
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-[var(--color-text-soft)]">
              {videoReview.summary}
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

          <div className="card-surface overflow-hidden p-4">
            <div className="relative h-[22rem] overflow-hidden rounded-[1.6rem]">
              <Image
                src={videoReview.poster}
                alt={videoReview.title}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 40vw, 100vw"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.1),rgba(0,56,87,0.72))]" />
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-5 text-center text-white">
                <span className="grid size-20 place-items-center rounded-full bg-white/16 backdrop-blur">
                  <PlayIcon />
                </span>
                <div className="max-w-sm">
                  <p className="text-2xl font-extrabold tracking-[-0.04em]">{videoReview.title}</p>
                  <p className="mt-2 text-sm leading-7 text-white/84">
                    Patient testimonial display block with strong visual emphasis and direct CTA below.
                  </p>
                </div>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <Link href={appointmentHref} className="rounded-full bg-white px-5 py-3 text-sm font-bold text-[var(--color-primary)]">
                    Add Appointment
                  </Link>
                  <a href={callHref} className="rounded-full border border-white/25 px-5 py-3 text-sm font-semibold text-white">
                    Call Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-fade mx-auto mt-20 max-w-7xl">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="section-eyebrow">Our Team</p>
            <h2 className="mt-3 font-heading text-3xl font-extrabold tracking-[-0.05em] text-[var(--color-primary)] sm:text-5xl">
              Team members in a clean slider
            </h2>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link href={appointmentHref} className="rounded-full bg-[var(--color-primary)] px-6 py-3 text-sm font-bold text-white">
              Add Appointment
            </Link>
            <a href={callHref} className="rounded-full border border-[var(--border-soft)] bg-white px-6 py-3 text-sm font-semibold text-[var(--color-primary)]">
              Call Now
            </a>
          </div>
        </div>
        <div className="mt-10">
          <TeamSlider members={teamMembers} />
        </div>
      </section>

      <section className="section-fade mx-auto mt-20 max-w-7xl">
        <ReviewSlider title="Google Reviews" reviews={googleReviews} />
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link href={appointmentHref} className="rounded-full bg-[var(--color-primary)] px-6 py-3 text-sm font-bold text-white">
            Add Appointment
          </Link>
          <a href={callHref} className="rounded-full border border-[var(--border-soft)] bg-white px-6 py-3 text-sm font-semibold text-[var(--color-primary)]">
            Call Now
          </a>
        </div>
      </section>

      <section className="section-fade mx-auto mt-20 max-w-7xl">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="section-eyebrow">Why Choose Us</p>
            <h2 className="mt-3 font-heading text-3xl font-extrabold tracking-[-0.05em] text-[var(--color-primary)] sm:text-5xl">
              Trusted reasons patients choose us
            </h2>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link href={appointmentHref} className="rounded-full bg-[var(--color-primary)] px-6 py-3 text-sm font-bold text-white">
              Add Appointment
            </Link>
            <a href={callHref} className="rounded-full border border-[var(--border-soft)] bg-white px-6 py-3 text-sm font-semibold text-[var(--color-primary)]">
              Call Now
            </a>
          </div>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {whyChooseUs.map((item) => (
            <article key={item.title} className="card-surface p-6">
              <div className="grid size-12 place-items-center rounded-2xl bg-[var(--color-highlight)] text-[var(--color-secondary)]">
                <CheckIcon />
              </div>
              <h3 className="mt-5 text-2xl font-extrabold tracking-[-0.04em] text-[var(--color-primary)]">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-[var(--color-text-soft)]">{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-fade mx-auto mt-20 max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="card-surface p-6 sm:p-8">
            <p className="section-eyebrow">{locationInfo.title}</p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-[-0.05em] text-[var(--color-primary)]">
              Clinic timings
            </h2>
            <div className="mt-8 space-y-3">
              {weeklyHours.map((item) => (
                <div
                  key={item.day}
                  className="flex items-center justify-between rounded-[1.2rem] bg-[#f5f9fb] px-4 py-4"
                >
                  <span className="font-bold text-[var(--color-primary)]">{item.day}</span>
                  <span className="text-sm font-semibold text-[var(--color-text-soft)]">{item.hours}</span>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm leading-7 text-[var(--color-text-soft)]">
              Location: {locationInfo.address}
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link href={appointmentHref} className="rounded-full bg-[var(--color-primary)] px-6 py-3 text-sm font-bold text-white">
                Add Appointment
              </Link>
              <a href={callHref} className="rounded-full border border-[var(--border-soft)] bg-white px-6 py-3 text-sm font-semibold text-[var(--color-primary)]">
                Call Now
              </a>
            </div>
          </div>

          <div className="card-surface overflow-hidden p-4">
            <div className="overflow-hidden rounded-[1.6rem]">
              <iframe
                title="Dhabeji Clinic map"
                src={locationInfo.mapEmbed}
                className="h-[34rem] w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section-fade mx-auto mt-20 max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="section-eyebrow">FAQ</p>
            <h2 className="mt-3 font-heading text-3xl font-extrabold tracking-[-0.05em] text-[var(--color-primary)] sm:text-5xl">
              Frequently asked questions
            </h2>
            <p className="mt-5 text-base leading-8 text-[var(--color-text-soft)]">
              If you need quick help before booking, call us directly on {primaryPhone}.
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
          <FaqAccordion items={faqItems} />
        </div>
      </section>
    </div>
  );
}

function PlayIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="size-8" aria-hidden="true">
      <path d="m9 7 8 5-8 5V7Z" fill="currentColor" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="size-6" aria-hidden="true">
      <path d="m6 12.5 4 4L18 8.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
