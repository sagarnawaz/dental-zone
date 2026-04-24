import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import {
  appointmentHref,
  mainClinicLocation,
  profiles,
  teamMembers,
} from "@/data/site";

export const metadata: Metadata = {
  title: "Doctors | The Dental Zone",
  description:
    "Meet the doctors of The Dental Zone and view their roles and clinic timings.",
};

const doctorProfiles = teamMembers.map((member, index) => {
  const profile = profiles[index];

  return {
    ...member,
    qualifications: profile?.qualifications ?? [],
    specialties: profile?.specialties ?? [],
    summary: profile?.summary ?? `${member.position} at The Dental Zone.`,
  };
});

export default function DoctorsPage() {
  return (
    <div className="px-4 py-10 sm:px-6 sm:py-12 lg:px-10">
      <section className="mx-auto max-w-6xl">
        <div className="flex items-center gap-4 sm:gap-6">
          <span className="h-px flex-1 bg-[#b7cbd2]" />
          <h1 className="text-center font-heading text-3xl font-extrabold tracking-[-0.05em] text-[var(--color-secondary)] sm:text-5xl">
            Our Expert Dental Surgeons
          </h1>
          <span className="h-px flex-1 bg-[#b7cbd2]" />
        </div>

        <p className="mx-auto mt-5 max-w-3xl text-center text-sm leading-7 text-[var(--color-text-soft)] sm:text-base">
          Meet the doctors serving at The Dental Zone and review their care
          focus and timings in one simple page.
        </p>

        <div className="mt-14 grid gap-x-12 gap-y-14 lg:grid-cols-2">
          {doctorProfiles.map((doctor) => (
            <article
              key={doctor.name}
              className="flex items-start gap-4 min-[480px]:gap-5 sm:gap-6"
            >
              <div className="relative h-28 w-28 shrink-0 overflow-hidden rounded-full bg-[#21466a] ring-4 ring-white shadow-[0_14px_34px_rgba(15,23,42,0.1)] sm:h-32 sm:w-32">
                <Image
                  src={doctor.image}
                  alt={doctor.name}
                  fill
                  className="object-cover object-top"
                  sizes="(min-width: 1024px) 9rem, 7rem"
                />
              </div>

              <div className="min-w-0 flex-1 pt-1">
                <h2 className="break-words font-heading text-3xl font-extrabold tracking-[-0.05em] text-[var(--color-secondary)] sm:text-4xl">
                  {doctor.name}
                </h2>
                <p className="mt-4 break-words text-base font-medium leading-8 text-[var(--color-text)]">
                  {doctor.qualifications.join(", ")}
                </p>
                <p className="mt-2 break-words text-base leading-8 text-[var(--color-text)]">
                  {doctor.position}
                </p>
                <p className="mt-2 break-words text-base leading-8 text-[var(--color-text)]">
                  Care focus: {doctor.specialties.join(", ")}
                </p>
                <p className="mt-2 break-words text-base leading-8 text-[var(--color-text)]">
                  Timings: {doctor.timing}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 border-t border-[#d8e3e8] pt-8 text-center">
          <p className="text-sm leading-7 text-[var(--color-text-soft)] sm:text-base">
            Main location: {mainClinicLocation.address}
          </p>
          <div className="mt-5 flex justify-center">
            <Link
              href={appointmentHref}
              className="rounded-full bg-[var(--color-primary)] px-7 py-3 text-sm font-bold text-white shadow-[0_16px_36px_rgba(0,56,87,0.18)] transition duration-300 hover:-translate-y-0.5"
            >
              Add Appointment
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
