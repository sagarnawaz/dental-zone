import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { appointmentHref, callHref, services } from "@/data/site";

type ServicePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);

  if (!service) {
    return {};
  }

  return {
    title: `${service.name} | The Dental Zone`,
    description: service.detail,
  };
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <div className="px-4 py-8 sm:px-6 sm:py-12 lg:px-10">
      <section className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <p className="section-eyebrow">Service Detail</p>
          <h1 className="mt-4 font-heading text-4xl font-extrabold tracking-[-0.06em] text-[var(--color-primary)] sm:text-6xl">
            {service.name}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--color-text-soft)] sm:text-lg">
            {service.detail}
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {service.highlights.map((item) => (
              <span key={item} className="rounded-full bg-[#edf3f6] px-3 py-1 text-[0.68rem] font-bold uppercase tracking-[0.18em] text-[var(--color-primary)]">
                {item}
              </span>
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
            src={service.image}
            alt={service.name}
            width={1200}
            height={1000}
            sizes="(min-width: 1024px) 55vw, 100vw"
            className="h-[28rem] w-full object-cover sm:h-[38rem]"
            preload
          />
        </div>
      </section>
    </div>
  );
}
