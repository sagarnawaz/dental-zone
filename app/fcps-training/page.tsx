import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "FCPS Training | The Dental Zone",
  description:
    "A focused FCPS mentorship experience for dentists built around clinical reasoning, case discussion, and exam-ready preparation.",
};

const heroAvatars = [
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCorY1FKbWrK-OuM-QmY20bLmfrWniagTSfo7sMC2FGGCRJUCUMT2nm_M-EYz8gBl338sg523jtpmC7Z8HZiH6P_DFkekICubNFCRJbwQlOqtKGNeiDgwnZwfEgxYtH-FLaV_kCEZ4b48DY9Vz9g2X7XWSB6465WEgpD3kFx0Q0GFubB207DQghIDg3scM9zPrfFmaKZrkMVpIQlGbddADnWs4HwCKPVMIHLWqGCkLTSnicg6iT0JtuWWTsFOS1cxpn0vfgbhWw3Lc",
    alt: "Senior dental consultant smiling in a bright clinical setting",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBzEpib1gb3x8jPnWp_sIsljSKxmuXMOj5uW_pr2xn1yX9TAS9kkVQVZpXzevWV_Pb5Nf36TPAZRLe2UXJdKCdVPp4Wk6XVQYr--DDRStsG_oZ11naf4m95Jmo6bgYqMcjFkFU-50gDuaOQfXsNQJruyneYdA3x9ynQleMbE5djEL0eg6VerA-iFolmv4iRoTb6os-o9-rP3VE3Cjgis7hHGy_BFqWGTiXDadVEvnAHjFottOQ3uP-7f0Rq0yCcfS2FeN6HKtU1UiM",
    alt: "Dental resident in glasses and clinical attire",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuB620e2qTPT-4hGZ5TO7_h1ZIGGxXLXiC6WPC6izBVxYdKRq91LCrzAQEh7ewjLX6GZTHlrtma__s-gThhFvRzLUAsGWKxLr-KcNHv_Q2lfpWHRO7rW7bWFRomSqVh2q5H-yZUNg8WjuqG9cFUIAcVWTWQNU4a9Al8ovyz7TciJ1gTd8AQ7kFbFXyowky4nJdTTujr2TUJ8tUBcbbc9RoyVw9Tl0D3nbx0nvZ4bSinbm8r4b9e1dm62y1TMXNFGr1JynbyGkBtCfU0",
    alt: "Smiling dentist after a clinical session",
  },
];

const philosophyItems = [
  {
    title: "Cognitive Strategy",
    description: 'Beyond rote memorization; we teach the "why" behind every clinical decision.',
    icon: BrainIcon,
  },
  {
    title: "Socratic Peer Learning",
    description: "Case-based discussions that mirror real-world hospital dynamics.",
    icon: GroupIcon,
  },
];

const featuredModule = {
  eyebrow: "Intensive Mentorship",
  title: "Masterclass: FCPS Part II Prep",
  description:
    "A focused journey covering high-yield dental topics, case presentation flow, clinical reasoning, and viva simulations.",
  image:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDYBqJHOS6FFGYekvu3YlMFG2iPPP_TF8BANkPJQOPHkgItlU3CB-ivNaYEB8VUDe1hO6mgLOMsr4EVfhkEEmTQVxRt5mQMtCOYd4ggnPws3triNnEoLj2w5xesL-QP0qmAtl6Qq5a4d_5TGYu6faQ6GkBXpRhV_Gl7tdHqW4H1grze7g1NgrymVqd1cTbmEsxEbiIScc038dh_kVkPaAeeRtYTxxa_Kfqq_38tXzttf6joX1SouArFyuoKXo-f9j1FgCgNFGREwII",
  alt: "Dental clinicians reviewing case material in a consultation room",
};

const handsOnModule = {
  title: "Hands-on Modules",
  description:
    "Guided exercises in diagnosis flow, restorative planning, case documentation, and consultant-style discussion.",
  meta: "Mentor-Led Sessions",
};

const theoryModule = {
  title: "Theory Foundation",
  description:
    "Structured review of dental sciences, oral pathology, treatment principles, and exam-focused core concepts.",
  bullets: ["Weekly Assessments", "Case Notes Library", "Consultant Reviews"],
};

const pathwayModule = {
  title: "Custom Clinical Pathways",
  description:
    "One-on-one consulting to map your next steps within the FCPS dental pathway, including study structure, case exposure goals, and portfolio guidance.",
  image:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCvTKQo5hdVCwrjKVUxIHoSAMRAK1JDMTGcnp4dNVkxqdmv-mAL1e0MwbHUCBtcOjhBN2UX8jmbKk419gr8QpNS0DV7Qm7CYiKKhOoTz6PSgkpDLp2PWeeD_i6i-yhw7HVCz-W9zlC16EzxOKeeYUOWwWCFuMzsZO-NNRo89LnaODl7yTr1CVfU0Y9H27aXcgieye1MCeff9fc-IsEiZHDo9iTA3XqDrhk2umcZt-k7WtoxVlecDLXjLrWPeyM3XLoK50sS2wToGP0",
  alt: "Microscopic biological cells in blue and teal tones",
};

const successCards = [
  {
    value: "92%",
    title: "Exam Success Rate",
    description:
      "Our trainees build stronger confidence for theory, viva, and clinical case presentation through structured preparation.",
  },
  {
    value: "500+",
    title: "Real-World Case Studies",
    description:
      "Access an expanding case discussion library covering practical dental scenarios, treatment decisions, and review notes.",
  },
  {
    title: "CPSP Aligned",
    description:
      "Curriculum is shaped around the expectations, rhythm, and exam mindset FCPS candidates need.",
    icon: ShieldBadgeIcon,
  },
  {
    title: "Alumni Network",
    description:
      "Stay connected with a growing network of dentists and trainees committed to long-term postgraduate growth.",
    icon: GlobeIcon,
  },
];

const faqItems = [
  {
    question: "How do your sessions differ from standard hospital lectures?",
    answer:
      "Our sessions are built around active case discussion. Instead of passive slide-reading, we break down dental scenarios, decision paths, and viva-style questioning to sharpen clinical judgment.",
  },
  {
    question: "Is there a scholarship or installment program?",
    answer:
      "Yes. We offer flexible payment planning so serious FCPS candidates can join a structured program without losing momentum.",
  },
  {
    question: "Do you provide support for the FCPS Part II TOACS?",
    answer:
      "Yes. Our TOACS preparation includes timed stations, case framing support, and examiner-style feedback to improve both technical confidence and performance under pressure.",
  },
];

export default function FcpsTrainingPage() {
  return (
    <>
      <section className="relative overflow-hidden px-4 pb-20 pt-10 sm:px-6 sm:pb-28 sm:pt-12 lg:px-10 lg:pb-36 lg:pt-20">
        <div className="absolute inset-x-0 top-0 -z-10 h-[56rem] bg-[linear-gradient(180deg,#f7f9fb_0%,#fbfcfe_60%,#f7f9fb_100%)]" />
        <div className="absolute right-0 top-0 -z-10 h-full w-[44%] bg-[linear-gradient(270deg,rgba(226,223,255,0.38),rgba(226,223,255,0.04),transparent)]" />

        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#e2dfff] px-4 py-2 text-[0.66rem] font-extrabold uppercase tracking-[0.26em] text-[#0f0069]">
              <span className="h-2 w-2 rounded-full bg-[#2000b1]" />
              Academic Excellence
            </span>

            <h1 className="mt-8 font-heading text-4xl font-extrabold leading-[0.92] tracking-[-0.08em] text-[#003857] sm:text-6xl lg:text-8xl">
              Elevate Your
              <br />
              <span className="font-light italic text-[#2000b1]">Clinical Mastery.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-[#55606d] sm:mt-7 sm:text-lg sm:leading-9 lg:text-xl">
              A focused mentorship ecosystem designed for dentists pursuing FCPS with stronger
              structure, sharper case discussion, and exam-ready clinical confidence.
            </p>

            <div className="mt-8 flex flex-col items-start gap-5 sm:mt-10 sm:flex-row sm:flex-wrap sm:items-center sm:gap-6">
              <Link
                href="#modules"
                className="inline-flex items-center justify-center rounded-full bg-[#003857] px-8 py-4 text-base font-bold text-white shadow-[0_18px_44px_rgba(0,56,87,0.2)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#0c476b]"
              >
                Explore Programs
              </Link>

              <div className="flex items-center gap-4">
                <div className="flex -space-x-3">
                  {heroAvatars.map((avatar) => (
                    <div
                      key={avatar.src}
                      className="relative h-11 w-11 overflow-hidden rounded-full border-4 border-white shadow-sm"
                    >
                      <Image
                        src={avatar.src}
                        alt={avatar.alt}
                        fill
                        sizes="44px"
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
                <span className="text-sm font-medium text-[#6b7480]">
                  Joined by focused FCPS candidates
                </span>
              </div>
            </div>
          </div>

          <div className="relative lg:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-[0_28px_80px_rgba(15,23,42,0.18)]">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBy2IIhKEWdNL2qDhSqsvsXaH-5lHdn3ibkW4fmn-mIr7uluFh9A0G8r6K93HTWy9Lhg1V4wxwKCKDs_bkTVqk1_PKDRH4i3FGgSDODlbmBnn0SP5pgBJpXQI0_WnqyxHv8NtvqvsSP7kDwKF38CU_iqcA4a0v1AzuWCnmX2T0r8j5W4iF9JuNeg5O59ayfe-JeoWdZOwD5Gs68lLsBqHMFt2sxDs5vUTaufm3Y0mvldYcOlUW9orx_I5l05QCu_siJU-wf0SHqxKw"
                alt="Dental training environment with modern clinical equipment"
                fill
                preload
                sizes="(min-width: 1024px) 36vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.02),rgba(0,56,87,0.35))]" />
            </div>

            <div className="mt-5 max-w-[17rem] rounded-[1.5rem] border-l-4 border-[#2000b1] bg-white p-5 shadow-[0_20px_54px_rgba(15,23,42,0.12)] sm:absolute sm:-bottom-8 sm:-left-8 sm:mt-0 sm:p-6">
              <SparkleIcon className="h-7 w-7 text-[#2000b1]" />
              <p className="mt-4 text-lg font-bold tracking-[-0.03em] text-[#003857]">
                98% Success Rate
              </p>
              <p className="mt-2 text-sm leading-7 text-[#6b7480]">
                Built around stronger performance in FCPS theory, viva, and clinical case review.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 sm:py-24 lg:px-10 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="font-heading text-3xl font-extrabold leading-tight tracking-[-0.06em] text-[#003857] sm:text-5xl">
              A Philosophy of
              <br />
              <span className="text-[#2000b1]">Curated Mentorship.</span>
            </h2>

            <p className="mt-6 max-w-2xl text-base font-light leading-7 text-[#58626f] sm:mt-8 sm:text-lg sm:leading-9">
              We believe postgraduate dental education should feel guided, disciplined, and
              clinically relevant. Our approach replaces generic sessions with mentorship that
              helps trainees think, present, and prepare with more confidence.
            </p>

            <div className="mt-10 space-y-7">
              {philosophyItems.map((item) => {
                const Icon = item.icon;

                return (
                  <div key={item.title} className="flex items-start gap-4">
                    <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-[#e2dfff] text-[#2000b1]">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-[#003857]">{item.title}</h3>
                      <p className="mt-1 text-sm leading-7 text-[#6d7680]">{item.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4 pt-10">
              <div className="relative h-64 overflow-hidden rounded-[1.5rem] bg-[#eceef0]">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuD4wM5_qYCCvri6fOqRNHuyyYFID8p8G9GdXdPMeU3cFjvetKGKxw7kZJfVGHOrom-dZwC8oikG6g1phWo4P0VvRzp6w7CQ-nzuHtXGx2u38pvFTlh-VvCJkh4ZitqXmDpLXz52a_WSekO-XkBh2Z9khsFEjsd2x_KyzXd-OQ2j0jrj2j80qdaaEXTFMSRjo_FsMAw-Do0GLQZAlxjxRzHjwxjQQ7U89h0yvc4gzjBqVPUl2c4doRR4_ECg6O9m0USgBddHMCiuqrk"
                  alt="Dental trainee writing case notes in a journal"
                  fill
                  sizes="(min-width: 1024px) 18vw, 50vw"
                  className="object-cover grayscale transition duration-700 hover:grayscale-0"
                />
              </div>

              <div className="flex h-48 items-end overflow-hidden rounded-[1.5rem] bg-[#2000b1] p-7 text-white shadow-[0_20px_50px_rgba(32,0,177,0.24)]">
                <p className="text-2xl font-extrabold italic tracking-[-0.05em]">
                  &quot;Consistency and clarity shape real exam confidence.&quot;
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="relative h-48 overflow-hidden rounded-[1.5rem] bg-[#003857]">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuD24DTWduO5QhhdUahSU4qaapPDLK5rNPv3TCkBCytw0bNjskiJyAK6ZcXUz3gBh0OM5Jd_upSPIor_4TydYlqVJpbtqcw9IBtDpjm4taRXOfyO_RuszPozeF5bw0Zwr975lfOo7CGrBhDM75XTOHHD77-XmaaDFVH68B-fnrCZqpZxfNr5YUVBL_eRb1d4w5Xm4S3DKdrzNOkUHRW09FZcYxlfnS2xUj1Gm7V75OfSYwtzeYovtItS7MlIcs38Xj5FTrGrqW_GEao"
                  alt="Modern clinical building exterior"
                  fill
                  sizes="(min-width: 1024px) 18vw, 50vw"
                  className="object-cover opacity-20"
                />
                <div className="absolute inset-0 p-6">
                  <div className="flex h-full flex-col justify-end">
                    <span className="text-4xl font-extrabold tracking-[-0.06em] text-white">
                      12:1
                    </span>
                    <span className="text-[0.68rem] font-bold uppercase tracking-[0.24em] text-white/62">
                      Trainee to Mentor Ratio
                    </span>
                  </div>
                </div>
              </div>

              <div className="relative h-64 overflow-hidden rounded-[1.5rem] bg-[#eceef0]">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCyn1gxEAyU7RGfYYFkTTHR-q3a358YcQcqRJ9FkbuiGJpnFpjaWNJmLtTO6eK1TzmYMpXdCOSEUxXWZAQr_hS2eeoyMPYVKIa9K8t46rCKoldy4wMY1PxuWfSkRS9TGox4_e_RUSoJ7B2WuTyBqpuRw04t1jpl2LMLtWK6hNjBFPSoKAPz6OajTissyA_3hu8r9gVHfeZdgwlv4cJUcWbKmDbbYfougPltzY2R3KQ672OtOgcGcHrykVYH5BJ7WO4dgLiBy5DVyrM"
                  alt="Dental team discussing case data on a large digital screen"
                  fill
                  sizes="(min-width: 1024px) 18vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="modules" className="bg-[#f2f4f6] px-4 py-20 sm:px-6 sm:py-24 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-[0.7rem] font-extrabold uppercase tracking-[0.3em] text-[#2000b1]">
                The Curriculum
              </p>
              <h2 className="mt-4 font-heading text-3xl font-extrabold tracking-[-0.06em] text-[#003857] sm:text-5xl">
                Mentorship Modules
              </h2>
            </div>
            <p className="max-w-md text-base leading-8 text-[#63707c]">
              From foundational review to high-pressure case discussion, our programs are
              structured to build clinical confidence layer by layer.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            <article className="group overflow-hidden rounded-[1.8rem] border-l-[7px] border-[#2000b1] bg-white shadow-[0_18px_48px_rgba(15,23,42,0.06)] md:col-span-2">
              <div className="grid h-full lg:grid-cols-2">
                <div className="flex flex-col justify-between p-8 sm:p-10 lg:p-12">
                  <div>
                    <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#2000b1]">
                      {featuredModule.eyebrow}
                    </p>
                    <h3 className="mt-4 text-3xl font-extrabold tracking-[-0.05em] text-[#003857]">
                      {featuredModule.title}
                    </h3>
                    <p className="mt-4 text-base leading-8 text-[#67737d]">
                      {featuredModule.description}
                    </p>
                  </div>

                  <Link
                    href="/contact"
                    className="mt-10 inline-flex items-center gap-2 text-sm font-bold text-[#2000b1] transition duration-300 hover:gap-3"
                  >
                    View Curriculum
                    <ArrowRightIcon className="h-4 w-4" />
                  </Link>
                </div>

                <div className="relative min-h-[18rem] overflow-hidden">
                  <Image
                    src={featuredModule.image}
                    alt={featuredModule.alt}
                    fill
                    sizes="(min-width: 1024px) 28vw, 100vw"
                    className="object-cover transition duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.92),rgba(255,255,255,0.08),transparent)] lg:bg-[linear-gradient(90deg,rgba(255,255,255,0.9),rgba(255,255,255,0.12),transparent)]" />
                </div>
              </div>
            </article>

            <article className="flex flex-col justify-between rounded-[1.8rem] bg-white p-8 shadow-[0_18px_48px_rgba(15,23,42,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_22px_54px_rgba(15,23,42,0.08)]">
              <div>
                <HandshakeIcon className="h-12 w-12 text-[#2000b1]" />
                <h3 className="mt-6 text-2xl font-extrabold tracking-[-0.04em] text-[#003857]">
                  {handsOnModule.title}
                </h3>
                <p className="mt-4 text-base leading-8 text-[#67737d]">
                  {handsOnModule.description}
                </p>
              </div>
              <div className="mt-8 flex items-center justify-between">
                <span className="text-[0.68rem] font-extrabold uppercase tracking-[0.24em] text-[#7a8590]">
                  {handsOnModule.meta}
                </span>
                <div className="grid h-10 w-10 place-items-center rounded-full bg-[#f2f4f6] text-[#003857]">
                  <PlusIcon className="h-4 w-4" />
                </div>
              </div>
            </article>

            <article className="rounded-[1.8rem] bg-[#003857] p-8 text-white shadow-[0_22px_54px_rgba(0,56,87,0.18)]">
              <BookIcon className="h-12 w-12 text-[#e2dfff]" />
              <h3 className="mt-6 text-2xl font-extrabold tracking-[-0.04em]">
                {theoryModule.title}
              </h3>
              <p className="mt-4 text-base leading-8 text-[#c9d7e4]">
                {theoryModule.description}
              </p>
              <div className="mt-8 space-y-3">
                {theoryModule.bullets?.map((item) => (
                  <div key={item} className="flex items-center gap-3 text-sm font-medium text-white">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#2000b1]" />
                    {item}
                  </div>
                ))}
              </div>
            </article>

            <article className="overflow-hidden rounded-[1.8rem] border-l-[7px] border-[#003857] bg-white shadow-[0_18px_48px_rgba(15,23,42,0.06)] md:col-span-2">
              <div className="flex h-full flex-col lg:flex-row">
                <div className="flex-1 p-8 sm:p-10 lg:p-12">
                  <h3 className="text-3xl font-extrabold tracking-[-0.05em] text-[#003857]">
                    {pathwayModule.title}
                  </h3>
                  <p className="mt-4 max-w-2xl text-base leading-8 text-[#67737d]">
                    {pathwayModule.description}
                  </p>
                  <Link
                    href="/contact"
                    className="mt-8 inline-flex items-center justify-center rounded-full bg-[#f2f4f6] px-6 py-3 text-sm font-bold text-[#003857] transition duration-300 hover:bg-[#003857] hover:text-white"
                  >
                    Schedule Strategy Session
                  </Link>
                </div>

                <div className="relative hidden min-h-[18rem] lg:block lg:w-[38%]">
                  <Image
                    src={pathwayModule.image}
                    alt={pathwayModule.alt}
                    fill
                    sizes="(min-width: 1024px) 18vw, 100vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 sm:py-24 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr]">
            <div>
              <h2 className="font-heading text-3xl font-extrabold leading-tight tracking-[-0.06em] text-[#003857] sm:text-4xl">
                The Dental Zone
                <br />
                Advantage.
              </h2>
              <p className="mt-6 max-w-md text-base leading-8 text-[#67737d]">
                These metrics reflect candidates learning to discuss cases clearly, plan
                treatment more confidently, and approach FCPS preparation with better structure.
              </p>

              <div className="mt-8 rounded-[1.6rem] bg-[#e2dfff]/50 p-6">
                <p className="text-[0.68rem] font-extrabold uppercase tracking-[0.24em] text-[#0f0069]">
                  Global Networking
                </p>
                <p className="mt-4 text-base font-medium italic leading-8 text-[#003857]">
                  &quot;The connections I made here led directly to my fellowship in the UK.&quot;
                </p>
                <div className="mt-4 flex items-center gap-3">
                  <div className="relative h-10 w-10 overflow-hidden rounded-full">
                    <Image
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuBXzXYUR2qULGSb-exbxVEfFgh-jd09b6-21uWZyTAl1HFIBDUJ05rNzmv5oWugsBIdD27NKNgWOunjiIWCAmHuMDIEZeM31dVBKlLTqD_axChlGLlfrKEhu-K4Ok9eknCyXOvC3lN9NsJfcKk79v0X5tA0oFpZXHMQ-eyaYJ9to0dwZ6UIP6vhyDbBnRNFk8Ux-gs-EHd6KJgSOkEF2qa9adECrLjssnjKQEZl0akEBXoSU_g-r4vBg56y_IMdh6fvVDHGumCA8UA"
                      alt="Portrait of a dentist"
                      fill
                      sizes="40px"
                      className="object-cover"
                    />
                  </div>
                  <span className="text-xs font-bold text-[#003857]">
                    Dr. A. Khan, FCPS Candidate
                  </span>
                </div>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {successCards.map((card) => (
                <article
                  key={card.title}
                  className="rounded-[1.7rem] border border-black/5 bg-white p-8 shadow-[0_12px_36px_rgba(15,23,42,0.04)]"
                >
                  {"value" in card ? (
                    <p className={`text-5xl font-extrabold tracking-[-0.06em] ${card.value === "92%" ? "text-[#2000b1]" : "text-[#003857]"}`}>
                      {card.value}
                    </p>
                  ) : null}

                  {"icon" in card && card.icon ? <card.icon className="h-12 w-12 text-[#2000b1]" /> : null}

                  <h3 className="mt-4 text-xl font-bold tracking-[-0.03em] text-[#003857]">
                    {card.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[#69747f]">{card.description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#003857] px-4 py-20 sm:px-6 sm:py-24 lg:px-10 lg:py-32">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDer-hOK-fzXvWaDv0fdpLV_ZbYl5Z_H0Um1-W--bt8TmM_o0-GedSq2jXX1WhgRcteORPHsZZniBJZKsOe9tDI1GExWXZcAEncQm5Dy09L1vLqURQAAHV4ixCRda2IlDXgdbkMsop4d22uj1z8JrgKtqB8wN93lhBZDOceBwWjUWBkPcA5bbTYzt_s4vNmWenBNhyma5IMvG_-s2KRjobFvJmeC8OVOYw8C2W88on9VBn7A6yv-d7N3RmesXKeO74MFVbyVyhxm68"
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>

        <div className="relative mx-auto grid max-w-7xl gap-16 lg:grid-cols-2 lg:items-center">
          <div className="text-white">
            <h2 className="font-heading text-4xl font-extrabold leading-[0.9] tracking-[-0.07em] sm:text-6xl lg:text-7xl">
              Begin Your
              <br />
              <span className="text-[#c3c0ff]">Legacy.</span>
            </h2>
            <p className="mt-5 max-w-md text-base leading-7 text-[#c9d7e4] sm:mt-6 sm:text-lg sm:leading-8">
              Join a focused mentorship environment built for disciplined FCPS preparation and
              steady clinical growth.
            </p>

            <div className="mt-10 flex items-center gap-5">
              <div className="grid h-14 w-14 place-items-center rounded-full bg-[#2000b1] text-white">
                <CalendarIcon className="h-6 w-6" />
              </div>
              <div>
                <p className="text-lg font-bold">Enrollment Support</p>
                <p className="text-[#c9d7e4]">Contact the team for the current intake schedule.</p>
              </div>
            </div>
          </div>

          <div className="rounded-[1.5rem] bg-white p-6 shadow-[0_26px_80px_rgba(0,0,0,0.2)] sm:rounded-[2rem] sm:p-10">
            <form className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Full Name">
                  <input
                    type="text"
                    placeholder="Dr. Jane Smith"
                    className="h-12 w-full rounded-xl border-0 bg-[#f2f4f6] px-4 text-sm text-[#003857] outline-none ring-0 transition focus:ring-2 focus:ring-[#2000b1]/30"
                  />
                </Field>
                <Field label="Email Address">
                  <input
                    type="email"
                    placeholder="jane@clinic.com"
                    className="h-12 w-full rounded-xl border-0 bg-[#f2f4f6] px-4 text-sm text-[#003857] outline-none ring-0 transition focus:ring-2 focus:ring-[#2000b1]/30"
                  />
                </Field>
              </div>

              <Field label="Program Interest">
                <select className="h-12 w-full rounded-xl border-0 bg-[#f2f4f6] px-4 text-sm text-[#003857] outline-none ring-0 transition focus:ring-2 focus:ring-[#2000b1]/30">
                  <option>FCPS Part II Intensive</option>
                  <option>Part I Foundation</option>
                  <option>Hands-on Dental Review Module</option>
                  <option>Career Strategy Consultation</option>
                </select>
              </Field>

              <Field label="Specialty Focus">
                <input
                  type="text"
                  placeholder="e.g. Operative Dentistry, Prosthodontics"
                  className="h-12 w-full rounded-xl border-0 bg-[#f2f4f6] px-4 text-sm text-[#003857] outline-none ring-0 transition focus:ring-2 focus:ring-[#2000b1]/30"
                />
              </Field>

              <Link
                href="/contact"
                className="inline-flex w-full items-center justify-center rounded-full bg-[#2000b1] px-6 py-4 text-base font-extrabold text-white shadow-[0_18px_38px_rgba(32,0,177,0.3)] transition duration-300 hover:bg-[#3424ca]"
              >
                Submit Application
              </Link>
              <p className="text-center text-xs text-[#7c8791]">
                Secure enrollment processed by The Dental Zone Academy.
              </p>
            </form>
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 sm:py-24 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <h2 className="font-heading text-3xl font-extrabold tracking-[-0.05em] text-[#003857] sm:text-4xl">
              Inquiries & Paths
            </h2>
            <p className="mt-4 text-base text-[#6f7a84]">
              Navigating the FCPS journey can be complex. We are here to clarify.
            </p>
          </div>

          <div className="mt-14 space-y-5">
            {faqItems.map((item) => (
              <details
                key={item.question}
                className="group rounded-[1.5rem] bg-[#f2f4f6] p-6 shadow-[0_10px_28px_rgba(15,23,42,0.02)]"
                open
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left">
                  <span className="text-lg font-bold tracking-[-0.02em] text-[#003857]">
                    {item.question}
                  </span>
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-white text-[#2000b1] transition duration-300 group-open:rotate-180">
                    <ChevronIcon className="h-4 w-4" />
                  </span>
                </summary>
                <p className="mt-4 pr-8 text-sm leading-7 text-[#67737d]">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
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
      <span className="text-[0.68rem] font-extrabold uppercase tracking-[0.24em] text-[#7c8791]">
        {label}
      </span>
      {children}
    </label>
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

function ChevronIcon({ className }: IconProps) {
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

function PlusIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
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

function SparkleIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="m12 3 1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3Z" fill="currentColor" />
    </svg>
  );
}

function BrainIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M10.2 5a3 3 0 0 0-5 2.3 2.7 2.7 0 0 0 .8 5.2 3 3 0 0 0 4.2 4.2H12V7a2 2 0 0 0-1.8-2Zm3.6 0A2 2 0 0 0 12 7v9.7h1.8a3 3 0 0 0 4.2-4.2 2.7 2.7 0 0 0 .8-5.2 3 3 0 0 0-5-2.3Z"
        fill="currentColor"
      />
    </svg>
  );
}

function GroupIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <circle cx="8" cy="9" r="3" fill="currentColor" />
      <circle cx="16.5" cy="8.5" r="2.5" fill="currentColor" opacity="0.8" />
      <path d="M3.5 18a4.5 4.5 0 0 1 9 0v.5h-9V18Z" fill="currentColor" />
      <path d="M13.5 18a3.5 3.5 0 0 1 7 0v.5h-7V18Z" fill="currentColor" opacity="0.8" />
    </svg>
  );
}

function HandshakeIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M7 8.5 4 11l3.5 3.5a2 2 0 0 0 2.8 0l2.7-2.7a1.5 1.5 0 0 1 2.1 0l1.4 1.4a2 2 0 0 0 2.8 0L21 11l-3-2.5a3 3 0 0 0-3.8.1l-.8.7a2.5 2.5 0 0 1-3.3 0l-.7-.6A3 3 0 0 0 7 8.5Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function BookIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M6 5.5h8a3 3 0 0 1 3 3v10H9a3 3 0 0 0-3 3V5.5Zm0 0A2.5 2.5 0 0 0 3.5 8v10.5A2.5 2.5 0 0 1 6 16h11"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ShieldBadgeIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M12 4 5.5 6.3V11c0 4 2.7 7.5 6.5 9 3.8-1.5 6.5-5 6.5-9V6.3L12 4Z" fill="currentColor" />
      <path
        d="m9.4 12.1 1.7 1.8 3.6-4"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function GlobeIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="2" />
      <path d="M3.5 12h17M12 3.5a14 14 0 0 1 0 17M12 3.5a14 14 0 0 0 0 17" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}
