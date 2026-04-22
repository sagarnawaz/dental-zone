import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Book Appointment | The Dental Zone",
  description:
    "Scheduling for Hadeed, Dhabeji, and FCPS Training inquiries across The Dental Zone ecosystem.",
};

const clinicCards = [
  {
    name: "Dhabeji Clinic",
    label: "Community Dental Care",
    description: "Main Port Road, Block 42, Dhabeji Industrial Zone.",
    accent: "border-[#1b4f72]",
    icon: MapIcon,
    hasMap: true,
  },
  {
    name: "Hadeed Branch",
    label: "Flagship Dental Care",
    description: "Steel Town Plaza, Suite 204, National Highway.",
    accent: "border-[#006a61]",
    icon: LeafMapIcon,
    hasMap: false,
  },
  {
    name: "FCPS Training",
    label: "Dental Mentorship Pathway",
    description: "Academic Square, North Campus, Karachi.",
    accent: "border-[#2000b1]",
    icon: CapIcon,
    hasMap: false,
  },
];

export default function ContactPage() {
  return (
    <div className="px-4 py-12 sm:px-6 sm:py-16 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <section className="mb-14 max-w-3xl sm:mb-20">
          <span className="inline-flex rounded-full bg-[#cce5ff] px-4 py-2 text-[0.68rem] font-extrabold uppercase tracking-[0.24em] text-[#001e31]">
            Concierge Scheduling
          </span>
          <h1 className="mt-6 font-heading text-4xl font-extrabold leading-[1.02] tracking-[-0.08em] text-[#003857] sm:mt-7 sm:text-6xl lg:text-7xl">
            Your journey to
            <br />
            <span className="italic text-[#006a61]">clear dental care</span> begins here.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-[#596470] sm:mt-8 sm:text-xl sm:leading-9">
            Select the branch or FCPS pathway you need. This page is designed to route each inquiry to the right team without mixing clinic and training requests.
          </p>
        </section>

        <section className="grid gap-12 lg:grid-cols-12 lg:items-start">
          <div className="space-y-8 lg:col-span-8">
            <div className="rounded-[1.5rem] bg-white p-5 shadow-[0_32px_64px_-12px_rgba(0,56,87,0.08)] sm:rounded-[2rem] sm:p-10 lg:p-12">
              <form className="space-y-12">
                <div className="space-y-8">
                  <StepHeader
                    step="Step 01"
                    title="Service Selection"
                    accentClassName="border-[#006a61]"
                    textClassName="text-[#006a61]"
                  />
                  <div className="grid gap-8 md:grid-cols-2">
                    <Field label="Preferred Location / Brand">
                      <div className="relative">
                        <select className="h-14 w-full appearance-none rounded-[1.2rem] border-0 bg-[#f2f4f6] px-5 pr-12 text-sm text-[#003857] outline-none transition focus:ring-2 focus:ring-[#003857]/20">
                          <option>Select a Branch</option>
                          <option>Hadeed Branch</option>
                          <option>Dhabeji Clinic</option>
                          <option>FCPS Training</option>
                        </select>
                        <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#72787f]">
                          <ChevronDownIcon className="h-4 w-4" />
                        </span>
                      </div>
                    </Field>
                    <Field label="Reason for Visit / Course Inquiry">
                      <div className="relative">
                        <select className="h-14 w-full appearance-none rounded-[1.2rem] border-0 bg-[#f2f4f6] px-5 pr-12 text-sm text-[#003857] outline-none transition focus:ring-2 focus:ring-[#003857]/20">
                          <option>Select Option</option>
                          <option>Consultation</option>
                          <option>Routine Dental Care</option>
                          <option>Specialist Treatment Planning</option>
                          <option>FCPS Training Inquiry</option>
                        </select>
                        <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#72787f]">
                          <ChevronDownIcon className="h-4 w-4" />
                        </span>
                      </div>
                    </Field>
                  </div>
                </div>

                <div className="space-y-8">
                  <StepHeader
                    step="Step 02"
                    title="Personal Details"
                    accentClassName="border-[#2000b1]"
                    textClassName="text-[#2000b1]"
                  />
                  <div className="grid gap-8 md:grid-cols-2">
                    <TextInput placeholder="Full Name" />
                    <TextInput placeholder="Email Address" type="email" />
                    <TextInput placeholder="Phone Number" type="tel" />
                    <TextInput placeholder="Identity / Patient ID (Optional)" />
                  </div>
                </div>

                <div className="space-y-8">
                  <StepHeader
                    step="Step 03"
                    title="Preferred Schedule"
                    accentClassName="border-[#1b4f72]"
                    textClassName="text-[#1b4f72]"
                  />
                  <div className="grid gap-8 md:grid-cols-2">
                    <Field label="Date">
                      <div className="relative">
                        <input
                          type="date"
                          className="h-14 w-full rounded-[1.2rem] border-0 bg-[#f2f4f6] px-5 pr-12 text-sm text-[#003857] outline-none transition focus:ring-2 focus:ring-[#003857]/20"
                        />
                        <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#72787f]">
                          <CalendarIcon className="h-4 w-4" />
                        </span>
                      </div>
                    </Field>
                    <Field label="Time">
                      <div className="relative">
                        <input
                          type="time"
                          className="h-14 w-full rounded-[1.2rem] border-0 bg-[#f2f4f6] px-5 pr-12 text-sm text-[#003857] outline-none transition focus:ring-2 focus:ring-[#003857]/20"
                        />
                        <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#72787f]">
                          <ClockIcon className="h-4 w-4" />
                        </span>
                      </div>
                    </Field>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="button"
                    className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#003857] px-10 py-5 text-lg font-bold text-white shadow-[0_18px_42px_rgba(0,56,87,0.2)] transition duration-300 hover:scale-[1.01] md:w-auto"
                  >
                    Confirm Appointment
                    <ArrowRightIcon className="h-5 w-5" />
                  </button>
                <p className="mt-4 text-xs text-[#72787f]">
                    By submitting, you agree to our inquiry handling and confidentiality protocols.
                  </p>
                </div>
              </form>
            </div>
          </div>

          <div className="space-y-8 lg:col-span-4">
            <div className="relative overflow-hidden rounded-[1.5rem] bg-[#ffdad6] p-6 sm:rounded-[2rem] sm:p-8">
              <div className="relative z-10">
                <div className="flex items-center gap-3 text-[#93000a]">
                  <EmergencyIcon className="h-5 w-5" />
                  <span className="text-[0.68rem] font-extrabold uppercase tracking-[0.24em]">
                    Immediate Assistance
                  </span>
                </div>
                <h2 className="mt-4 text-3xl font-extrabold tracking-[-0.05em] text-[#93000a] sm:mt-5 sm:text-4xl">
                  24/7 Hotline
                </h2>
                <p className="mt-3 max-w-sm text-sm leading-7 text-[#93000a]/78">
                  In case of urgent dental pain or an immediate branch concern, call our dedicated triage line.
                </p>
                <a
                  href="tel:08007262"
                  className="mt-7 inline-flex items-center justify-center rounded-full bg-[#93000a] px-6 py-3 text-sm font-bold text-white"
                >
                  0800-SANCTUARY
                </a>
              </div>
              <div className="absolute -bottom-8 -right-8 text-[#93000a]/10">
                <MedicalCrossIcon className="h-40 w-40" />
              </div>
            </div>

            <div>
              <h3 className="pl-1 text-xl font-bold tracking-[-0.03em] text-[#003857]">
                Branches and Training
              </h3>
              <div className="mt-6 space-y-5">
                {clinicCards.map((card) => {
                  const Icon = card.icon;

                  return (
                    <article
                      key={card.name}
                      className={`rounded-[1.5rem] border-l-4 bg-[#f2f4f6] p-5 sm:rounded-[1.8rem] sm:p-6 ${card.accent}`}
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h4 className="font-bold leading-tight text-[#003857]">{card.name}</h4>
                          <p className="mt-1 text-xs text-[#72787f]">{card.label}</p>
                        </div>
                        <Icon className="h-5 w-5 text-[#1b4f72]" />
                      </div>
                      <p className="mt-4 text-sm leading-7 text-[#67737d]">{card.description}</p>

                      {card.hasMap ? (
                        <div className="relative mt-5 h-32 overflow-hidden rounded-[1.4rem] bg-[#e0e3e5]">
                          <Image
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCf0M0vI60EcdADd8nUPcVFTU9TY0Lsnn3z_-Q2PI_1PouBVClbsYOufDoxYl6imj3wEuz1kwV7jAeLCZKTuWGA9wICjE4qHFk4mWQo3ej17oXrq7Zd4Jfp2WW4nh-rLxxY17aAseSmX4wnPaaf9WJtEJi_fRiQNad5la0jMTa5R1nyaDXKBIxsKB7-0s4Ur3F_NEzswF93NCBvIhxAqRYpwc6yncn_QeMosCFe_hF_c3pRQC9PG4JCY8Nu6G9S0WLFA20AORPZoZM"
                            alt="Simplified map illustration for the Dhabeji clinic area"
                            fill
                            sizes="(min-width: 1024px) 24vw, 100vw"
                            className="object-cover grayscale opacity-55"
                          />
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="grid h-10 w-10 place-items-center rounded-full bg-[#1b4f72] text-white shadow-lg">
                              <PinIcon className="h-4 w-4" />
                            </div>
                          </div>
                        </div>
                      ) : null}
                    </article>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="relative mt-16 overflow-hidden rounded-[1.6rem] bg-[#003857] sm:mt-24 sm:rounded-[2.2rem]">
          <div className="grid min-h-[21rem] lg:grid-cols-[1.2fr_0.8fr]">
            <div className="relative z-10 px-6 py-10 sm:px-10 sm:py-14 lg:px-14 lg:py-16">
              <h2 className="text-3xl font-bold tracking-[-0.05em] text-white sm:text-4xl">
                Need specialized assistance?
              </h2>
              <p className="mt-5 max-w-xl text-base leading-7 text-[#c3d3df] sm:mt-6 sm:text-lg sm:leading-9">
                If you are a referring dentist, institution, or organization looking to coordinate with our branches or FCPS team, please connect with our administrative concierge.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:gap-4">
                <Link
                  href="/about"
                  className="inline-flex items-center justify-center rounded-full bg-[#89f5e7] px-8 py-3 text-sm font-bold text-[#00201d]"
                >
                  Contact Team
                </Link>
                <Link
                  href="/about"
                  className="inline-flex items-center justify-center rounded-full border border-white/25 px-8 py-3 text-sm font-bold text-white transition duration-300 hover:bg-white/10"
                >
                  Download Portal Guide
                </Link>
              </div>
            </div>

            <div className="relative hidden lg:block">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAxhbTeUsp0VBR9eREY2-2C13ZnqoYzPzqEPmsQ5x70f4w6oCI1TRDnPYig6gAWS8FJzjEjbfJXyF25KJ0Q_mEpnOfD81NzLyhUvEvbA8w1SfSEEUcVMurypkKn2auCjPqJJImRmd0Rz7ms-aETw3GH9QoyFFct5sElEUgrSsK9_H5U6S5ShwvOtihJVRP5HMT1y9YXJCETPfAsTJR3ylKkQ1GMvVLTp2Rp9N2FlImXOpenDi7Wg26bB3aVP5KQ0x1NxD6imKw_cGA"
                alt="Modern reception environment with warm architectural lighting"
                fill
                sizes="(min-width: 1024px) 30vw, 100vw"
                className="object-cover opacity-30 mix-blend-overlay"
              />
              <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,56,87,0.15),rgba(0,56,87,0.35))]" />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

function StepHeader({
  step,
  title,
  accentClassName,
  textClassName,
}: {
  step: string;
  title: string;
  accentClassName: string;
  textClassName: string;
}) {
  return (
    <div className={`flex flex-col items-start gap-1 border-l-4 pl-4 sm:flex-row sm:items-center sm:gap-4 sm:pl-6 ${accentClassName}`}>
      <span className={`text-[0.68rem] font-extrabold uppercase tracking-[0.24em] ${textClassName}`}>
        {step}
      </span>
      <h3 className="text-xl font-bold tracking-[-0.03em] text-[#003857] sm:text-2xl">{title}</h3>
    </div>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block space-y-2">
      <span className="ml-1 text-sm font-medium text-[#72787f]">{label}</span>
      {children}
    </label>
  );
}

function TextInput({
  placeholder,
  type = "text",
}: {
  placeholder: string;
  type?: string;
}) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="h-14 w-full rounded-[1.2rem] border-0 bg-[#f2f4f6] px-5 text-sm text-[#003857] outline-none transition focus:ring-2 focus:ring-[#003857]/20"
    />
  );
}

type IconProps = {
  className?: string;
};

function ArrowRightIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M5 12h13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path
        d="m13 6 6 6-6 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ChevronDownIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="m6 9 6 6 6-6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CalendarIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="4" y="6" width="16" height="14" rx="2" stroke="currentColor" strokeWidth="2" />
      <path d="M8 4v4M16 4v4M4 10h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function ClockIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="2" />
      <path d="M12 7.8v4.7l3 1.7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function EmergencyIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M12 4 4 20h16L12 4Z" fill="currentColor" />
      <path d="M12 9v4.5M12 17h.01" stroke="white" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function MedicalCrossIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M10 4h4v6h6v4h-6v6h-4v-6H4v-4h6V4Z" fill="currentColor" />
    </svg>
  );
}

function MapIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="m4 7 5-2 6 2 5-2v12l-5 2-6-2-5 2V7Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M9 5v12M15 7v12" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

function LeafMapIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="m4 7 5-2 6 2 5-2v12l-5 2-6-2-5 2V7Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M16.5 8.5c1.8.2 3 1.4 3.2 3.2-1.8-.2-3-1.4-3.2-3.2Z" fill="currentColor" />
    </svg>
  );
}

function CapIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M12 5 4 9.2 12 13l8-3.8L12 5Z" fill="currentColor" />
      <path d="M7 11.8V15c0 .8 2.2 2 5 2s5-1.2 5-2v-3.2" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
    </svg>
  );
}

function PinIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M12 20c3.2-3.5 5-6.1 5-8.8A5 5 0 0 0 7 11.2C7 13.9 8.8 16.5 12 20Z" fill="currentColor" />
      <circle cx="12" cy="11" r="1.8" fill="white" />
    </svg>
  );
}
