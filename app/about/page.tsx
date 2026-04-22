import Image from "next/image";
import Link from "next/link";

const ecosystemPoints = [
  {
    title: "Live Clinical Feedback",
    description:
      "Insights from everyday clinic work can strengthen case discussion, planning habits, and patient communication across the wider ecosystem.",
    accent: "bg-[#89f5e7] text-[#006f66]",
  },
  {
    title: "Specialist Collaboration",
    description:
      "Our branches and training pathway share a culture of clear standards, thoughtful planning, and practical decision support.",
    accent: "bg-[#e2dfff] text-[#3424ca]",
  },
  {
    title: "Unified Resource Center",
    description:
      "Shared systems, reference material, and coordinated communication help each part of The Dental Zone feel connected without losing its own identity.",
    accent: "bg-[#cce5ff] text-[#154b6d]",
  },
];

const journey = [
  {
    year: "2012",
    title: "The Dental Zone Begins",
    description: "Starting with a single dental setup built around trust, clarity, and steady clinical standards.",
  },
  {
    year: "2016",
    title: "Dhabeji Expansion",
    description: "Expanding into more accessible community dentistry for families seeking dependable everyday care.",
  },
  {
    year: "2019",
    title: "FCPS Training Pathway",
    description: "Adding a structured mentorship track to support dentists preparing for stronger postgraduate growth.",
  },
  {
    year: "2024",
    title: "Digital Unification",
    description: "Bringing our clinics and training pathway together through one clearer digital experience.",
  },
];

const leadership = [
  {
    role: "Clinical Director",
    name: "Dr. Khubaib Ahmed Shaikh",
    title: "Lead Consultant and Branch Care Oversight",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCuHarleV-cX5V7MM0kjdxokOV4m9nZk--np28AWwLIPxWeeSD7bjFj-lbSovRKmnfzEbh4iYaJSpocj2U0x6w1Y5Cz1SnqY9dB2_22BGT2Cq56nFRPan0cIZQSmmgZLCqycx_mcEUxyQilHcmRlNzGdqbAfJcoYxT8-C-msqBsT9p9NRfnencDtlSYVHENkvsnKxr_I2yY4_lK1Em-4qy89XUD12WysFP5rrNHxaxzW6L1M3R625d0_yP2birU8rjnLKlLlf2uHKc",
  },
  {
    role: "Patient Care Lead",
    name: "Dr. Wajeeha Fayyaz",
    title: "General Dentistry and Experience Coordination",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCxzyMt_1SnUCUjFLZcbN-Zd4tAK4m9bF8iZplIp74l4EoHkkyPbjKDxjYxCF6Sc-Bb-5oIKNIIx2BBPPKd1nVFSVIvc6xNJM84xPreRw4NUK-d8SRB8f9idxPyDqcsLPurNnvnUP4nSFa7fESBGJs-3G-zoRjyPLbUO64Eq694VioyLYk04DqbIJ2SvLAJZri9QQtFY2wM8p7v-0zitxxRoYzybTeV8Z5DDaXK7TjLTrlsf2vjtuD8S1fkU8Q3HfgegJT7IErOGiY",
  },
  {
    role: "FCPS Program Lead",
    name: "Dr. Rana Hira Liaquat",
    title: "Mentorship Rhythm and Candidate Support",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCdf3IBNhAjcJYfWfXV5uh6SCf_WDd0wsjJM7J5x-FbMnCzRZYS3yXYv6vZZac_LOMCRPnW-igcF-sE2YHJ25yrWNEBtibu2DMI-M_YDqgYQeTuDuWhabKUaywojQUoH5QzYX616wL8J-irKRWpKc3WYN_WB1ktVCegTDSBeFDQKvyd4bAN1nY5OJtiz_nAOj6gJYLfmtUOBD0tzymdcOyNrEfsg8o-M0Qo0QPauzsNUxN-pZbj2Mq6vvhHTbG6GAkpXKCxSoNRcA0",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-4 pb-20 pt-12 sm:px-6 sm:pb-28 sm:pt-16 lg:px-10 lg:pb-32 lg:pt-24">
        <div className="grid gap-14 md:grid-cols-[1.15fr_0.85fr] md:items-center">
          <div>
            <span className="block text-[11px] font-semibold uppercase tracking-[0.28em] text-[#003857]/65">
              Our Genesis
            </span>
            <h1 className="mt-6 font-heading text-4xl font-extrabold leading-[0.9] tracking-[-0.07em] text-[#003857] sm:text-7xl lg:text-8xl">
              Precision in
              <br />
              <span className="text-[#006a61]">Practice.</span>
            </h1>
            <p className="mt-8 max-w-xl text-base leading-7 text-[#41474e] sm:mt-10 sm:text-lg sm:leading-8">
              The Dental Zone began with a simple idea: dental care should feel clear, trustworthy, and professionally led. Today, that same standard connects our Hadeed branch, our Dhabeji branch, and our FCPS training pathway.
            </p>
          </div>

          <div className="group relative">
            <div className="absolute -inset-3 rounded-[2rem] bg-[#003857]/5 -rotate-2 transition duration-700 group-hover:rotate-0" />
            <div className="relative overflow-hidden rounded-[2rem] shadow-[0_24px_70px_rgba(25,28,30,0.14)]">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBJmz7kfR6phMBx7BTqZYeP0YMVgDTCBrohkS8uAJDjvo-sZDCXu4sAzOe-Z-0vCBh-VNdElI33QlNZ3V5zs4_3nMBlPfkMTGwj-gHs4g_Awry3gijbbRxNC5MV0OHp_F1ZRPnXJmAtm2FQxM-aCX0WK11e8QoFiqVpxNRQBILpQfJMZpsAImS3N_2qkWbef6l1BOzk2UlcwYsDQbLqApED_T7hOsif53rQ1WVG9tkLTO_mKrkzBCVXXjTd4PNFvf6pQEfdrxFE9TI"
                alt="Modern dental interior with premium architectural light"
                width={760}
                height={980}
                className="h-[380px] w-full object-cover sm:h-[600px]"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f2f4f6] px-4 py-20 sm:px-6 sm:py-24 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 md:grid-cols-12">
            <article className="relative overflow-hidden rounded-[1.5rem] bg-white p-6 shadow-[0_18px_45px_rgba(25,28,30,0.05)] sm:rounded-[2rem] sm:p-10 md:col-span-8 md:p-14">
              <span className="absolute inset-y-0 left-0 w-1.5 bg-[#006a61]" />
              <div className="max-w-3xl">
                <div className="grid size-14 place-items-center rounded-full bg-[#86f2e4]/20 text-[#006a61]">
                  <span className="text-xl">♥</span>
                </div>
                <h2 className="mt-6 font-heading text-3xl font-bold tracking-[-0.04em] text-[#003857] sm:mt-8 sm:text-4xl">
                  The Mission of Empathy
                </h2>
                <p className="mt-4 text-base leading-7 text-[#41474e] sm:mt-5 sm:text-lg sm:leading-8">
                  We aim to make every appointment and learning interaction feel calm, respectful, and easy to understand so people can move forward with confidence.
                </p>
              </div>
            </article>

            <article className="rounded-[1.5rem] bg-[#003857] p-6 text-white shadow-[0_18px_45px_rgba(0,56,87,0.18)] sm:rounded-[2rem] sm:p-10 md:col-span-4 md:flex md:flex-col md:justify-end md:p-12">
              <h3 className="font-heading text-2xl font-bold tracking-[-0.04em] sm:text-3xl">The Vision</h3>
              <p className="mt-5 max-w-sm text-base leading-8 text-white/75">
                To build a connected dental ecosystem where community care, flagship treatment, and postgraduate mentorship strengthen one another.
              </p>
            </article>

            <article className="rounded-[1.5rem] bg-[#2000b1] p-6 text-white shadow-[0_18px_45px_rgba(32,0,177,0.22)] sm:rounded-[2rem] sm:p-10 md:col-span-4 md:p-12">
              <div className="grid size-14 place-items-center rounded-full bg-white/10 text-white">
                <span className="text-xl">✦</span>
              </div>
              <h3 className="mt-6 font-heading text-2xl font-bold tracking-[-0.04em] sm:mt-8 sm:text-3xl">Precision Training</h3>
              <p className="mt-4 text-base leading-8 text-white/76">
                Supporting dentists with structured FCPS preparation, case discussion, and steadier academic momentum.
              </p>
            </article>

            <article className="relative overflow-hidden rounded-[1.5rem] bg-white p-6 shadow-[0_18px_45px_rgba(25,28,30,0.05)] sm:rounded-[2rem] sm:p-10 md:col-span-8 md:p-14">
              <span className="absolute inset-y-0 left-0 w-1.5 bg-[#2000b1]" />
              <h3 className="font-heading text-3xl font-bold tracking-[-0.04em] text-[#003857] sm:text-4xl">
                Empowerment Through Education
              </h3>
              <p className="mt-4 max-w-3xl text-base leading-7 text-[#41474e] sm:mt-5 sm:text-lg sm:leading-8">
                Clear information improves outcomes. By supporting both patient understanding and clinician growth, we create a culture of better decisions and steadier long-term care.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <span className="rounded-full bg-[#eceef0] px-5 py-2 text-xs font-semibold text-[#003857]">
                  Academic Rigor
                </span>
                <span className="rounded-full bg-[#eceef0] px-5 py-2 text-xs font-semibold text-[#003857]">
                  Clinical Mastery
                </span>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:flex lg:gap-24 lg:px-10 lg:py-32">
        <div className="lg:sticky lg:top-32 lg:w-[32%] lg:self-start">
          <h2 className="font-heading text-4xl font-extrabold leading-tight tracking-[-0.06em] text-[#003857] sm:text-5xl">
            The
            <br />
            <span className="text-[#2000b1]">Ecosystem.</span>
          </h2>
          <p className="mt-8 max-w-md text-lg leading-8 text-[#41474e]">
            Why connect clinics with training? Because practical care and disciplined learning strengthen each other. The result is a clearer system where each branch serves its own audience while still benefiting from shared standards.
          </p>
        </div>

        <div className="mt-10 space-y-10 sm:mt-14 sm:space-y-14 lg:mt-0 lg:w-[68%]">
          {ecosystemPoints.map((point) => (
            <article key={point.title} className="flex gap-4 sm:gap-8">
              <div className={`grid size-14 shrink-0 place-items-center rounded-full sm:size-20 ${point.accent}`}>
                <span className="text-xl">✚</span>
              </div>
              <div>
                <h3 className="text-xl font-bold tracking-[-0.04em] text-[#003857] sm:text-2xl">{point.title}</h3>
                <p className="mt-3 max-w-2xl text-base leading-8 text-[#41474e]">{point.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="overflow-hidden bg-[#003857] px-4 py-20 text-white sm:px-6 sm:py-24 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16">
            <h2 className="font-heading text-4xl font-bold tracking-[-0.04em] text-[#cce5ff]">Our Journey</h2>
            <div className="mt-4 h-1 w-24 bg-[#006a61]" />
          </div>

          <div className="relative">
            <div className="absolute left-0 top-8 hidden h-px w-full -translate-y-1/2 bg-white/20 md:block" />
            <div className="grid gap-10 md:grid-cols-4">
              {journey.map((item) => (
                <article key={item.year} className="relative space-y-5">
                  <p className="font-heading text-5xl font-extrabold tracking-[-0.06em] text-[#006a61]/40 sm:text-6xl">
                    {item.year}
                  </p>
                  <div className="absolute left-1/2 top-[2.2rem] hidden size-4 -translate-x-1/2 rounded-full bg-[#006a61] md:block" />
                  <h3 className="text-lg font-bold tracking-[-0.03em] text-white">{item.title}</h3>
                  <p className="text-sm leading-7 text-white/70">{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-10 lg:py-32">
        <div className="text-center">
          <span className="block text-[11px] font-semibold uppercase tracking-[0.28em] text-[#006a61]">
            Architects of Excellence
          </span>
          <h2 className="mt-5 font-heading text-4xl font-extrabold tracking-[-0.05em] text-[#003857] sm:text-5xl">
            Leadership and Mentorship
          </h2>
        </div>

        <div className="mt-16 grid gap-10 md:grid-cols-3">
          {leadership.map((person) => (
            <article key={person.name} className="group space-y-6">
              <div className="aspect-[3/4] overflow-hidden rounded-[1.75rem] shadow-[0_18px_45px_rgba(25,28,30,0.08)]">
                <Image
                  src={person.image}
                  alt={person.name}
                  width={640}
                  height={860}
                  className="h-full w-full scale-110 object-cover grayscale transition duration-700 group-hover:scale-100 group-hover:grayscale-0"
                />
              </div>
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#2000b1]">
                  • {person.role}
                </p>
                <h3 className="mt-3 text-2xl font-bold tracking-[-0.03em] text-[#003857]">{person.name}</h3>
                <p className="mt-1 text-sm italic text-[#72787f]">{person.title}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="px-4 pb-20 sm:px-6 sm:pb-24 lg:px-10 lg:pb-32">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[1.5rem] bg-[#eceef0] px-6 py-10 sm:rounded-[2rem] sm:px-12 sm:py-12 lg:px-16 lg:py-16">
          <div className="relative">
            <div className="absolute inset-y-0 right-[-8%] hidden w-[28%] skew-x-[-14deg] bg-white/34 lg:block" />
            <div className="relative z-10 max-w-2xl">
              <h2 className="font-heading text-3xl font-bold tracking-[-0.04em] text-[#003857] sm:text-4xl">
                Ready to explore The Dental Zone ecosystem?
              </h2>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/fcps-training"
                  className="inline-flex items-center rounded-full bg-[#003857] px-7 py-3 text-sm font-bold text-white shadow-[0_14px_36px_rgba(0,56,87,0.16)] transition duration-300 hover:bg-[#0c476b]"
                >
                  Enroll in Training
                </Link>
                <Link
                  href="/clinics"
                  className="inline-flex items-center rounded-full bg-[#006a61] px-7 py-3 text-sm font-bold text-white shadow-[0_14px_36px_rgba(0,106,97,0.16)] transition duration-300 hover:bg-[#0a7e73]"
                >
                  Visit a Clinic
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
