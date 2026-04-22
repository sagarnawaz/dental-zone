import Image from "next/image";
import Link from "next/link";

const hadeedHighlights = [
  "Specialist Consultations",
  "Restorative Planning",
  "Cosmetic Smile Care",
];

const fcpsModules = [
  { label: "Program Format", value: "Case-Based Dental Mentorship" },
  { label: "Core Focus", value: "FCPS Guidance for Dentists" },
];

const dhabejiFeatures = [
  { label: "Digital Diagnostics", icon: DiagnosticsIcon },
  { label: "Routine Restorative Care", icon: ImplantIcon },
  { label: "Family-Friendly Visits", icon: SedationIcon },
];

const imageSources = {
  hadeed:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuA3sQJX05rx9R76bg9s9JrgUBs69R0ai0ppwqG3-JXRhijPe56OOhpu6Ti-Ogckc8fn60GLIga8Q7efFcVRNVO7NjThiPY4Oyo9rCC8Yk31JHHJLWSyQI4I2QbovgQMMO3POjEBQICR5FZ-_o6es222RFXb8-b8xk9mIlBj-8pQMncwp91ZWdNC9I-fh1BpHhO23pHTkeXyI-1Vx9u1KhapQ2zDHQy9enN4kyE9AsEdkbRIp1KNixcgC2ebRwtDX4WDoU5lJ_iNfjA",
  dhabeji:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuABWfSjSKTMB8J7tazznLjSp6muhCjoL0nCbVTUlVixaV4z0JiZEcFYE6REepX7SbH0JV49mogqQ6qW34uNOj6wQZ1LpSIuu8OoYEhDUNUTsylXP3CbMF5vRH6M5ftz5pcpHkEkcqDx23TS68ODjL_pTzMGZhZJapeXwMHeA141sL7ieBOXW_wJlCDnIS6mnQFsHF2B6AmAqLpYsqDh5kTxYUg1uV-dyQHGIOEVycVdapWFHgqqnr_lQkkR6QtY-fSBErovLaHrgrw",
};

export default function ServicesPage() {
  return (
    <div className="relative overflow-hidden">
      <section className="mx-auto max-w-7xl px-4 pb-14 pt-12 sm:px-6 sm:pt-16 md:pt-24 lg:px-10">
        <div className="grid gap-10 md:grid-cols-[minmax(0,1.45fr)_minmax(0,0.8fr)] md:items-end">
          <div className="max-w-4xl">
            <span className="inline-flex rounded-full bg-[#cce5ff] px-4 py-1.5 text-[0.65rem] font-extrabold uppercase tracking-[0.28em] text-[#001e31]">
              Master Brand Portal
            </span>
            <h1 className="mt-6 text-4xl font-extrabold tracking-[-0.06em] text-[#003857] sm:text-6xl lg:text-7xl">
              The Architecture of
              <span className="mt-1 block italic text-[#006a61]">Modern Wellness</span>
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-7 text-[#41474e] sm:mt-8 sm:text-xl sm:leading-9">
              A curated ecosystem bridging precision dental healthcare with focused postgraduate
              dental training. Select your destination to explore the right branch or program.
            </p>
          </div>

          <div className="justify-self-start md:justify-self-end">
            <div className="max-w-sm rounded-[1.5rem] border border-[#c1c7cf]/70 bg-white/80 p-6 shadow-[0_18px_48px_rgba(25,28,30,0.06)] backdrop-blur-md sm:rounded-[2rem] sm:p-8">
              <QuoteIcon className="h-7 w-7 text-[#1f2f45]" />
              <p className="mt-5 text-sm leading-7 text-[#41474e]">
                &quot;Precision in every procedure, compassion in every interaction. That is The
                Dental Zone promise.&quot;
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 sm:pb-28 lg:px-10">
        <div className="grid gap-6 lg:grid-cols-12">
          <article className="group relative overflow-hidden rounded-[1.5rem] border border-[#d9dfe4] bg-white shadow-[0_18px_60px_rgba(25,28,30,0.07)] transition duration-500 hover:-translate-y-1 hover:shadow-[0_24px_74px_rgba(25,28,30,0.1)] sm:rounded-[2rem] lg:col-span-7">
            <div className="absolute inset-y-0 left-0 w-1.5 bg-[#006a61]" />
            <div className="grid h-full md:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)]">
              <div className="relative z-10 flex flex-col justify-between px-6 py-8 sm:px-10 sm:py-12">
                <div>
                  <div className="flex items-center gap-4">
                    <div className="grid h-14 w-14 place-items-center rounded-full bg-[#86f2e4] text-[#005049] shadow-[inset_0_1px_0_rgba(255,255,255,0.65)] sm:h-16 sm:w-16">
                      <ToothIcon className="h-8 w-8" />
                    </div>
                    <h2 className="text-3xl font-extrabold tracking-[-0.05em] text-[#003857] sm:text-4xl">Hadeed</h2>
                  </div>
                  <p className="mt-5 text-[1.75rem] font-bold tracking-[-0.04em] text-[#006a61] sm:mt-6 sm:text-[2rem]">
                    The Dental Zone
                  </p>
                  <p className="mt-4 max-w-md text-base leading-7 text-[#41474e] sm:mt-5 sm:text-lg sm:leading-8">
                    Our flagship Hadeed branch is built around specialist-led consultations,
                    restorative planning, and polished dental care for patients who want clarity
                    and confidence at every step.
                  </p>
                  <ul className="mt-8 space-y-4">
                    {hadeedHighlights.map((item) => (
                      <li key={item} className="flex items-center gap-3 text-base font-medium text-[#191c1e]">
                        <CheckIcon className="h-5 w-5 text-[#006a61]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href="/clinics/hadeed"
                  className="mt-10 inline-flex w-fit items-center gap-3 rounded-full bg-[#006a61] px-8 py-4 text-sm font-bold text-white shadow-[0_14px_36px_rgba(0,106,97,0.22)] transition duration-300 hover:gap-4 hover:bg-[#00544d]"
                >
                  Explore Hadeed
                  <ArrowRightIcon className="h-4 w-4" />
                </Link>
              </div>

              <div className="relative min-h-[18rem] overflow-hidden bg-[#eef5f7] sm:min-h-[22rem]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.95)_0%,rgba(220,236,241,0.65)_40%,rgba(220,236,241,0.2)_68%,transparent_100%)]" />
                <Image
                  src={imageSources.hadeed}
                  alt="Soft teal clinical dental room with modern equipment and a polished healthcare atmosphere"
                  fill
                  className="object-cover opacity-25 transition duration-700 group-hover:scale-105 group-hover:opacity-35"
                  sizes="(min-width: 1024px) 28vw, 100vw"
                />
              </div>
            </div>
          </article>

          <article className="relative overflow-hidden rounded-[1.5rem] bg-[#392bce] shadow-[0_18px_60px_rgba(57,43,206,0.24)] transition duration-500 hover:-translate-y-1 hover:shadow-[0_26px_80px_rgba(57,43,206,0.32)] sm:rounded-[2rem] lg:col-span-5">
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0))]" />
            <div className="relative z-10 flex h-full flex-col px-6 py-8 text-white sm:px-10 sm:py-12">
              <div className="grid h-16 w-16 place-items-center rounded-full bg-white/16 backdrop-blur-md">
                <AcademyIcon className="h-8 w-8" />
              </div>
              <h2 className="mt-8 text-3xl font-extrabold tracking-[-0.05em] sm:mt-10 sm:text-4xl">FCPS Training</h2>
              <p className="mt-3 text-lg font-medium text-[#e2dfff]">Structured Dental Mentorship</p>
              <p className="mt-8 max-w-md text-base leading-8 text-white/82">
                A focused academic environment for dentists preparing with stronger case
                discussion, exam structure, consultant guidance, and a more disciplined FCPS
                study path.
              </p>

              <div className="mt-10 space-y-4">
                {fcpsModules.map((module) => (
                  <div
                    key={module.value}
                    className="rounded-[1.4rem] border border-white/10 bg-white/10 px-5 py-4 backdrop-blur-sm"
                  >
                    <p className="text-[0.65rem] font-extrabold uppercase tracking-[0.28em] text-[#e2dfff]">
                      {module.label}
                    </p>
                    <p className="mt-2 text-base font-semibold text-white">{module.value}</p>
                  </div>
                ))}
              </div>

              <Link
                href="/fcps-training"
                className="mt-10 inline-flex w-fit items-center gap-3 rounded-full bg-white px-8 py-4 text-sm font-bold text-[#392bce] shadow-[0_18px_40px_rgba(5,8,25,0.2)] transition duration-300 hover:gap-4 hover:bg-[#f7f9fb]"
              >
                Join Academy
                <AcademyCapMiniIcon className="h-4 w-4" />
              </Link>
            </div>
          </article>

          <article className="relative overflow-hidden rounded-[1.6rem] bg-[#003857] text-white shadow-[0_20px_68px_rgba(0,56,87,0.26)] sm:rounded-[2.2rem] lg:col-span-12">
            <div className="grid h-full md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
              <div className="relative z-10 px-6 py-8 sm:px-10 sm:py-10 lg:px-12 lg:py-14">
                <div className="inline-flex items-center gap-2 text-[#cce5ff]">
                  <ShieldIcon className="h-4 w-4" />
                  <span className="text-[0.65rem] font-extrabold uppercase tracking-[0.28em]">
                    Community Trust
                  </span>
                </div>

                <h2 className="mt-7 max-w-xl text-3xl font-extrabold tracking-[-0.06em] sm:mt-9 sm:text-5xl">
                  Dhabeji Dental
                  <span className="block">Clinic</span>
                </h2>

                <p className="mt-5 max-w-xl text-base leading-7 text-[#cce5ff] sm:mt-8 sm:text-lg sm:leading-9">
                  Designed for practical, dependable dentistry in and around Dhabeji. This branch
                  focuses on routine checkups, scaling, fillings, follow-ups, and comfortable
                  family care with clear communication.
                </p>

                <div className="mt-10 flex flex-wrap gap-x-8 gap-y-4">
                  {dhabejiFeatures.map((feature) => {
                    const Icon = feature.icon;

                    return (
                      <div key={feature.label} className="flex items-center gap-3 text-sm font-medium text-white">
                        <Icon className="h-4.5 w-4.5 text-[#cce5ff]" />
                        <span>{feature.label}</span>
                      </div>
                    );
                  })}
                </div>

                <Link
                  href="/clinics/dhabeji"
                  className="mt-12 inline-flex w-fit items-center gap-3 rounded-full bg-[#cce5ff] px-8 py-4 text-sm font-bold text-[#001e31] shadow-[0_20px_42px_rgba(0,0,0,0.18)] transition duration-300 hover:-translate-y-0.5 hover:bg-white"
                >
                  Explore Branch
                  <LocationPinIcon className="h-4 w-4" />
                </Link>
              </div>

              <div className="relative min-h-[18rem] sm:min-h-[23rem]">
                <div className="absolute inset-0 bg-[linear-gradient(90deg,#003857_3%,rgba(0,56,87,0.82)_28%,rgba(0,106,97,0.38)_100%)]" />
                <div className="absolute right-[7%] top-[8%] h-[84%] w-[78%] rounded-[2rem] bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_54%)] blur-2xl" />
                <Image
                  src={imageSources.dhabeji}
                  alt="Professional healthcare specialist in teal scrubs representing the Dhabeji dental branch"
                  fill
                  className="object-cover object-center opacity-82"
                  sizes="(min-width: 768px) 40vw, 100vw"
                />
              </div>
            </div>
          </article>
        </div>
      </section>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-72 -left-44 h-[34rem] w-[34rem] rounded-full bg-[linear-gradient(135deg,rgba(0,106,97,0.08),rgba(57,43,206,0.08))] blur-3xl"
      />
    </div>
  );
}

type IconProps = {
  className?: string;
};

function ToothIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M8.4 3.8c1.4 0 2.2.7 3.6.7s2.2-.7 3.6-.7c2.6 0 4.4 2.2 4.4 5.1 0 3.7-1.9 8.5-3.7 10.3-.5.5-1.4.3-1.7-.4l-1.1-4c-.2-.8-.7-1.2-1.5-1.2s-1.3.4-1.5 1.2l-1.1 4c-.2.7-1.2.9-1.7.4C5.9 17.4 4 12.6 4 8.9 4 6 5.8 3.8 8.4 3.8Z"
        fill="currentColor"
      />
    </svg>
  );
}

function QuoteIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M9 6H5.5A2.5 2.5 0 0 0 3 8.5V12a4 4 0 0 0 4 4h.5V12H5V8.5C5 7.7 5.7 7 6.5 7H9V6Z" fill="currentColor" />
      <path d="M21 6h-3.5A2.5 2.5 0 0 0 15 8.5V12a4 4 0 0 0 4 4h.5V12H17V8.5c0-.8.7-1.5 1.5-1.5H21V6Z" fill="currentColor" />
    </svg>
  );
}

function CheckIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="10" fill="currentColor" fillOpacity="0.16" />
      <path d="m8.2 12.5 2.4 2.4 5.2-5.4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function AcademyIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M12 4 3 8.5 12 13l7-3.5V15h2V8.5L12 4Z" fill="currentColor" />
      <path d="M7 12.5v3.2c0 .8 2.2 2.3 5 2.3s5-1.5 5-2.3v-3.2l-5 2.5-5-2.5Z" fill="currentColor" opacity="0.8" />
    </svg>
  );
}

function AcademyCapMiniIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M12 5.5 4 9.3l8 3.7 6.1-2.8V15h1.9V9.3L12 5.5Z" fill="currentColor" />
      <path d="M8 13.3v2c0 .6 1.7 1.8 4 1.8s4-1.2 4-1.8v-2L12 15l-4-1.7Z" fill="currentColor" opacity="0.75" />
    </svg>
  );
}

function ArrowRightIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M5 12h13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="m13 6 6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ShieldIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M12 3.8 5.5 6v5.1c0 4 2.7 7.4 6.5 8.9 3.8-1.5 6.5-4.9 6.5-8.9V6L12 3.8Z" fill="currentColor" />
      <path d="M12 9.2v5.6M9.2 12h5.6" stroke="#003857" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function DiagnosticsIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M6 5.5h5v5H6zM13 5.5h5v3h-5zM13 10.5h5V18h-5zM6 12.5h5V18H6z" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

function ImplantIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M10 4h4M9 7h6M9.5 10h5M10 13h4M10.5 16h3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M12 7v10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M9 20h6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function SedationIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M8 7.5h8M12 4v7M6 12.5h12M8 16.5h8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.5" opacity="0.55" />
    </svg>
  );
}

function LocationPinIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M12 20c3.2-3.5 5-6.1 5-8.8A5 5 0 0 0 7 11.2C7 13.9 8.8 16.5 12 20Z"
        fill="currentColor"
      />
      <circle cx="12" cy="11" r="1.8" fill="#cce5ff" />
    </svg>
  );
}
