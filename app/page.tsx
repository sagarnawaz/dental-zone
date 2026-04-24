import Image from "next/image";
import Link from "next/link";

import ClinicHeroSlider, {
  type ClinicHeroSlide,
} from "@/components/sections/ClinicHeroSlider";
import ClientReviewVideo from "@/components/sections/ClientReviewVideo";
import LazyReviewSlider from "@/components/sections/LazyReviewSlider";
import LazyTeamSlider from "@/components/sections/LazyTeamSlider";
import TransformationBanner from "@/components/sections/TransformationBanner";
import { transformationSlides } from "@/components/sections/transformation-slides";
import FaqAccordion from "@/components/ui/FaqAccordion";
import Card from "@/components/ui/Card";
import {
  appointmentHref,
  callHref,
  faqItems,
  founder,
  googleReviews,
  mainClinicLocation,
  primaryPhone,
  services,
  teamMembers,
  videoReview,
  weeklyHours,
  whyChooseUs,
} from "@/data/site";

const homeHeroSlides: ClinicHeroSlide[] = [
  {
    id: "home-founder",
    image: founder.image,
    alt: founder.name,
    eyebrow: "Founder Vision",
    title: "A calm, modern dental brand with sharper digital clarity",
    description:
      "Built around patient trust, structured care journeys, and a cleaner presentation across clinics, services, and mentoring.",
    objectPosition: "center top",
  },
  {
    id: "home-services",
    image: services[0].image,
    alt: services[0].name,
    eyebrow: "Service Detail",
    title: "Service discovery that moves patients toward real decisions",
    description:
      "From consultation to restorative treatment, the experience is designed to feel polished, direct, and easy to act on.",
  },
  {
    id: "home-review",
    image: videoReview.poster,
    alt: videoReview.title,
    eyebrow: "Patient Trust",
    title: "Testimonials, reviews, and clinic proof placed where they matter",
    description:
      "The homepage now opens with a stronger trust-first story before patients ever scroll into services or booking sections.",
  },
];

export default function HomePage() {
  return (
    <>
      <ClinicHeroSlider
        title="Modern Dentistry"
        accent="With Structured Clarity"
        description={founder.intro}
        slides={homeHeroSlides}
        primaryAction={{ href: appointmentHref, label: "Add Appointment" }}
        secondaryAction={{ href: "/clinics", label: "Explore Clinics" }}
        layout="minimal"
      />

      <div className="px-4 pb-10 sm:px-6 lg:px-10">
        <section className="section-fade mx-auto mt-16 max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div className="max-w-2xl">
              <p className="section-eyebrow">Founder Intro</p>
              <h2 className="mt-3 font-heading text-3xl font-extrabold tracking-[-0.05em] text-[var(--color-primary)] sm:text-5xl">
                Meet the Founder of The Dental Zone
              </h2>
              <p className="mt-5 text-base leading-8 text-[var(--color-text-soft)] sm:text-lg sm:leading-9">
                {founder.intro}
              </p>
              <div className="mt-6">
                <p className="text-lg font-bold tracking-[-0.03em] text-[var(--color-primary)]">
                  {founder.name}
                </p>
                <p className="mt-1 text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-text-soft)]">
                  {founder.title}
                </p>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[1.8rem] shadow-[0_24px_70px_rgba(15,23,42,0.1)]">
              <Image
                src="/founder.jpeg"
                alt={founder.name}
                width={1200}
                height={1400}
                sizes="(min-width: 1024px) 48vw, 100vw"
                className="h-[24rem] w-full object-cover object-top sm:h-[30rem] lg:h-[34rem]"
              />
            </div>
          </div>
        </section>

        <section className="section-fade mx-auto mt-20 max-w-7xl">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="section-eyebrow">All Services</p>
              <h2 className="mt-3 font-heading text-3xl font-extrabold tracking-[-0.05em] text-[var(--color-primary)] sm:text-5xl">
                Comprehensive Dental Services Designed Around Patient Needs
              </h2>
            </div>
          </div>

          <div className="mt-10 grid grid-cols-2 items-stretch gap-4 sm:gap-5 lg:grid-cols-4">
            {services.map((service) => (
              <Card
                key={service.slug}
                className="group relative min-h-[16.5rem] overflow-hidden rounded-[1.6rem] border border-[#dbe4ea] bg-[#0d3147] p-0 shadow-[0_16px_40px_rgba(15,23,42,0.08)] hover:-translate-y-1 hover:border-[#cad9e2] hover:shadow-[0_24px_54px_rgba(15,23,42,0.14)]"
              >
                <Image
                  src={service.image}
                  alt={service.name}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-[1.06]"
                  sizes="(min-width: 1024px) 23vw, 50vw"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,24,38,0.12)_0%,rgba(4,24,38,0.38)_42%,rgba(4,24,38,0.88)_100%)]" />
                <div className="absolute inset-x-0 bottom-0 flex min-w-0 flex-col p-4 sm:p-5">
                  <h3 className="min-w-0 break-words font-heading text-lg leading-tight text-white sm:text-[1.4rem]">
                    {service.name}
                  </h3>
                  <Link
                    href={`/services/${service.slug}`}
                    className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-white/92 transition duration-300 hover:gap-3 hover:text-white"
                  >
                    View detail
                    <ArrowUpRightIcon />
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </section>

      <section className="section-fade mx-auto mt-20 max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[1.12fr_0.88fr] lg:items-center">
          <div>
            <p className="section-eyebrow">Client Review</p>
            <h2 className="mt-3 font-heading text-3xl font-extrabold tracking-[-0.05em] text-[var(--color-primary)] sm:text-5xl">
              A Patient Experience That Reflects Our Standard of Care
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-[var(--color-text-soft)]">
              A stronger review section helps visitors connect with a real patient experience before they move into booking,
              treatment details, or direct contact.
            </p>
            <p className="mt-4 max-w-2xl text-base leading-8 text-[var(--color-text-soft)]">
              This featured video adds proof, tone, and trust at the right moment on the homepage, especially for patients who
              want reassurance about clinic behavior, communication, and treatment confidence.
            </p>
            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              <div className="rounded-[1.3rem] border border-[#d7e2e7] bg-white/84 px-4 py-4">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#5f7a83]">Why it helps</p>
                <p className="mt-2 text-sm leading-7 text-[var(--color-primary)]/82">
                  Visitors see authentic clinic trust before comparing services or doctors.
                </p>
              </div>
              <div className="rounded-[1.3rem] border border-[#d7e2e7] bg-white/84 px-4 py-4">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#5f7a83]">What it shows</p>
                <p className="mt-2 text-sm leading-7 text-[var(--color-primary)]/82">
                  Real feedback, patient comfort, and a more human side of treatment experience.
                </p>
              </div>
            </div>
            <div className="mt-7 rounded-[1.5rem] border border-[#d9e4e9] bg-[linear-gradient(180deg,#f8fbfc,#f1f7f8)] p-5">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#5f7a83]">Section value</p>
              <p className="mt-3 text-sm leading-7 text-[var(--color-text-soft)]">
                Patients usually want three things before they trust a clinic: visible proof, calm communication, and a sense
                that the team genuinely cares. This video section supports all three without pushing too much content at once.
              </p>
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

          <div className="flex justify-center">
            <ClientReviewVideo title={videoReview.title} />
          </div>
        </div>
      </section>

      <section className="section-fade mx-auto mt-20 max-w-7xl">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="section-eyebrow">Our Team</p>
            <h2 className="mt-3 font-heading text-3xl font-extrabold tracking-[-0.05em] text-[var(--color-primary)] sm:text-5xl">
              Meet the Dental Professionals Behind Our Care
            </h2>
          </div>
        </div>
        <div className="mt-10">
          <LazyTeamSlider members={teamMembers} />
        </div>
        <div className="mt-8 flex justify-center">
          <Link
            href="/doctors"
            className="rounded-full bg-[var(--color-primary)] px-7 py-3 text-sm font-bold text-white shadow-[0_16px_36px_rgba(0,56,87,0.18)] transition duration-300 hover:-translate-y-0.5"
          >
            Our Team
          </Link>
        </div>
      </section>

      <section className="section-fade mx-auto mt-20 max-w-7xl">
        <LazyReviewSlider
          title="Patient Reviews That Reflect Real Care Experiences"
          reviews={googleReviews}
        />
      </section>

      <section className="section-fade mx-auto mt-20 max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
          <div className="max-w-2xl">
            <p className="section-eyebrow">Why Choose Us</p>
            <h2 className="mt-3 font-heading text-3xl font-extrabold tracking-[-0.05em] text-[var(--color-primary)] sm:text-5xl">
              Why Patients Choose The Dental Zone for Modern Dental Care
            </h2>
            <p className="mt-5 text-base leading-8 text-[var(--color-text-soft)]">
              We keep the experience simple for patients: gentle treatment, updated technology, and a team that explains
              every step clearly before starting.
            </p>
            <p className="mt-4 text-base leading-8 text-[var(--color-text-soft)]">
              From pain-managed dentistry and laser procedures to sedation support and aesthetic care, each service is
              designed to feel more comfortable, more precise, and easier to trust.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              <div className="rounded-[1.2rem] border border-[#d9e5ea] bg-white/80 px-4 py-4">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#5f7a83]">Patient-first</p>
                <p className="mt-2 text-sm font-semibold text-[var(--color-primary)]">Clear guidance before treatment</p>
              </div>
              <div className="rounded-[1.2rem] border border-[#d9e5ea] bg-white/80 px-4 py-4">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#5f7a83]">Technology</p>
                <p className="mt-2 text-sm font-semibold text-[var(--color-primary)]">Modern tools with precise care</p>
              </div>
              <div className="rounded-[1.2rem] border border-[#d9e5ea] bg-white/80 px-4 py-4">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#5f7a83]">Comfort</p>
                <p className="mt-2 text-sm font-semibold text-[var(--color-primary)]">Pain-aware and sedation-ready</p>
              </div>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {whyChooseUs.map((item) => (
              <article
                key={item.title}
                className="rounded-[1.35rem] border border-[#dbe6eb] bg-white/88 p-4 shadow-[0_10px_26px_rgba(15,23,42,0.04)]"
              >
                <div className="flex items-start gap-3">
                  <div className="grid size-10 shrink-0 place-items-center rounded-xl bg-[#eef7f8] text-[var(--color-secondary)]">
                    <CheckIcon />
                  </div>
                  <div>
                    <h3 className="text-base font-extrabold tracking-[-0.03em] text-[var(--color-primary)]">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-[var(--color-text-soft)]">{item.description}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <TransformationBanner slides={transformationSlides} />

      <section className="section-fade mx-auto mt-20 max-w-7xl">
        <div className="grid gap-6 lg:grid-cols-[0.94fr_1.06fr]">
          <div className="card-surface flex h-full flex-col p-6 sm:p-8">
            <p className="section-eyebrow">{mainClinicLocation.title}</p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-[-0.05em] text-[var(--color-primary)]">
              Clinic Hours and Visit Information
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-[var(--color-text-soft)]">
              Visit during the hours below or call ahead for quick guidance before you arrive at the clinic.
            </p>
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
              Location: {mainClinicLocation.address}
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

          <div className="card-surface h-full overflow-hidden p-3 sm:p-4">
            <div className="h-full min-h-[24rem] overflow-hidden rounded-[1.6rem] sm:min-h-[28rem]">
              <iframe
                title="The Dental Zone Hadeed map"
                src={mainClinicLocation.mapEmbed}
                className="h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section-fade mx-auto mt-20 max-w-7xl">
        <div className="mx-auto max-w-4xl text-center">
          <p className="section-eyebrow">FAQ</p>
          <h2 className="mt-3 font-heading text-3xl font-extrabold tracking-[-0.05em] text-[var(--color-primary)] sm:text-5xl">
            Frequently Asked Questions About Our Dental Care
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-[var(--color-text-soft)]">
            If you need quick help before booking, call us directly on {primaryPhone}. Tap any question below to view the answer.
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-4xl">
          <FaqAccordion items={faqItems} />
        </div>
      </section>
      </div>
    </>
  );
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="size-6" aria-hidden="true">
      <path d="m6 12.5 4 4L18 8.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ArrowUpRightIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="size-4" aria-hidden="true">
      <path d="M7 17 17 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M9 7h8v8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
