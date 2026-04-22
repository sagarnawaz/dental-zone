import Image from "next/image";
import Link from "next/link";

const brandCards = [
  {
    title: "The Dental Zone Hadeed",
    description:
      "Flagship branch care focused on specialist consultations, restorative planning, and a polished patient experience.",
    cta: "Visit Hadeed",
    href: "/clinics/hadeed",
    accent: "bg-[#006a61]",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="size-7" aria-hidden="true">
        <path
          d="M7.8 3.6c1.3 0 2.6.7 4.2.7 1.5 0 2.7-.7 4-.7 2.4 0 4.2 2 4.2 4.3 0 5.9-2.6 12.8-5.4 12.8-1.2 0-1.7-.9-2.8-.9-1 0-1.7.9-2.8.9-2.8 0-5.4-6.9-5.4-12.8 0-2.3 1.8-4.3 4-4.3Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Dental Clinic Dhabeji",
    description:
      "Dependable family dentistry for routine checkups, fillings, hygiene visits, and follow-up care close to home.",
    cta: "Visit Dhabeji",
    href: "/clinics/dhabeji",
    accent: "bg-[#1b4f72]",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="size-7" aria-hidden="true">
        <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path
          d="M12 4c-4.6 0-8 3.6-8 8 0 2.6 1.3 5.1 3.1 7.2.8 1 1.5 2.2 2 3.7.4 1 1.8 1 2.2 0 .5-1.5 1.2-2.7 2-3.7 1.8-2.1 3.1-4.6 3.1-7.2 0-4.4-3.4-8-8-8Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "FCPS Training",
    description:
      "Focused FCPS mentorship for dentists through case discussion, exam structure, and disciplined clinical preparation.",
    cta: "Enroll Now",
    href: "/fcps-training",
    accent: "bg-[linear-gradient(135deg,#2000b1,#392bce)] text-white shadow-[0_18px_50px_rgba(57,43,206,0.3)]",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="size-7" aria-hidden="true">
        <path d="M12 4 4 8.5 12 13l8-4.5L12 4Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        <path d="M7 11.4V16l5 2.8 5-2.8v-4.6" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      </svg>
    ),
  },
];

const whyChooseUs = [
  {
    title: "Connected Dental Care",
    description:
      "Patients can choose the branch that fits their location and care needs without losing trust in one connected standard.",
    accent: "bg-[#1b4f72]/10 text-[#003857]",
  },
  {
    title: "Focused FCPS Guidance",
    description:
      "Our FCPS pathway is built for dentists who want structured review, stronger case discussion, and consistent mentorship.",
    accent: "bg-[#006a61]/10 text-[#006a61]",
  },
  {
    title: "Clear Patient Experience",
    description:
      "Every clinic and training touchpoint is shaped around clarity, comfort, and confident next-step decision-making.",
    accent: "bg-[#392bce]/10 text-[#392bce]",
  },
];

const trainingCards = [
  {
    title: "Case Discussion Frameworks",
    label: "FCPS Module",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCKXJvl6UJiQZhykLF0FJihkjqRTWH4nqbvROp47Yv3G5Qzmy9Wde3H1nJU1HsOEP0CFLMXnkvGiWN0ovnI9oEI56a39c9-JvWM1QB8RFV5jc82Dk-_TvOEgasOPw4NWWV_6L6jjry3HSM3cVBMdXx1WzEM_5Z21F-IEAtju49huk-QlzfOyIFGe5mCPPFwhl9gfwuc5oJgEas0f9tPOrErE8__gll-b6DG7xYUdnNzgxgpmODGotbZor3v6tFB686DRvT3wMtYJ_s",
  },
  {
    title: "Diagnostic Review",
    label: "Theory Focus",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCPOMz4tyGuETt1IFfweLyn3ukyJO7YHgsfTD9uUTAquu6ylMrCgrJyVQ1PZAjM9SCzaYP8BJAYx0t6g5KlxdPQzsr16ivdxi1y2kiXqmtcLTqNsC6zZNAGQObQkuQcqO6uIU73wiaTfQlCG1YFuyXbAYZQ1cpvWR-QeEhTZPPcQcXpwANzMr6A73LsMUiQOaNQPqf82Nw6Ol8vgyYVx7pyBf-nFnag1czClRpg5a-HTxHzOQr3-mR1S66iLZDp3EARTg__JbcLazs",
  },
  {
    title: "Mentor-Led Planning",
    label: "Guidance Track",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC93Y68Kk2UnhXs8HIfZZvdwE_a0kvqY3yKtxj3D9P-UgG2sYzra0hER_kGw19DfGwZKewIRdDjXFUE6P-EPFQ010S7KhGyPlAVxWZI2rwH9LVUwjz-GomGX2cWKgna-tI7DXO7uyO9HOeby85nCVhDziPYAbAZ5CgzdmsH2EZWPoN3txIB2H9Nu8jqtcNyxDEpyWQZ-x5A20f2o0cJqiJuClPCr7py3pfuR6p6ih63aGIoOAdM6GzAY2STuvGaZuoYmZfsS76vqB8",
  },
];

const testimonials = [
  {
    quote:
      '"The Hadeed branch felt organized, reassuring, and very clear about each step of my treatment plan."',
    author: "Dr. Salman Farooq",
    role: "Patient, Hadeed",
    accent: "border-[#006a61]",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC_bO8_Dz5xiVKVEhKWADYfwC35I2epO8RmqDS_zluYCiVZy8lmt9lSokaiNcQnpEsm_rfoIkcs6lmPvxKLIU1VU5hmOI2Bb4ixP1_GPsVlTqwIAAHKdjPrm-W0f1mkDYCJ5eJ3l8teWaWoNzzNEEbrvVP1agyOLsW1V_hWXMQ5bzYIHExydOeHUahILi5hcHUMlhHTa9J9pkiz5xCovGm_WmHBuro6Mwo7pzkdg2diZ2H858aC20L-_KkAhv_1yRi0FeRHMyTHRT8",
  },
  {
    quote:
      '"The FCPS sessions gave me structure, better case presentation habits, and much more confidence in viva preparation."',
    author: "Dr. Amna Sheikh",
    role: "FCPS Resident, Year II",
    accent: "border-[#392bce]",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDXz4ap8vlccJv0uJ1xJNQlR4dbbgRHBXx4AoD7IqoULy2mBvM58FDtjy1TnRTCS_8QveiMQH-uC9yBvZD-gqh1yg4xeAQKv7ilZ0JKdBjti5mJ0HMvpOr9DOg6fH2MMhJADEnuOCOC4o5akmrsFnHRNetAze_PPzCHjQaBokOpijva4oaea-XW0a8qY2AlrXkQcPIn-TZqv23SySgX-H7YDQ5IRPrUtKkIW3va2BkBDePQFqBLlA-l_bQmbDh6Yfv9Z6cwadPSO1c",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden px-4 pb-20 pt-8 sm:px-6 sm:pb-28 lg:px-10 lg:pt-12">
        <div className="mx-auto max-w-7xl">
          <div className="relative min-h-[620px] overflow-hidden rounded-[1.5rem] bg-[linear-gradient(135deg,#f7f9fb_0%,#f2f4f6_40%,rgba(204,229,255,0.45)_100%)] px-5 pb-16 pt-12 sm:min-h-[760px] sm:px-10 sm:pb-24 sm:pt-16 lg:rounded-[2rem] lg:px-14 lg:pb-28 lg:pt-20">
            <div className="absolute inset-0">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAnsNGJ9jA8_W1xV_f3Nv_HZHHCWpuDYfKTLO-bj3zQxX0sF_DJxjdO7Vs4ehpPkqtQmkMtbBsXRAQy-NlBxCcBBf_PuXqqR-oWlyaWZOCbHaHYRtqhWsuJ-DVjbsn68PHomCh6ic4wpx1CR9YohwSp3_BYfLEUMIa8HLPF9H-vysh58KF2atjI9-prfGoLh7kaGfl14S03e2Wu6BZgr11KOyeYGC5L3kvYr2-o4Lv3YMD_En6dB8p-wxWNcMmlOu5iqVqLPoOs9S4"
                alt="Modern high-end dental clinic interior with soft clinical lighting"
                fill
                priority
                className="object-cover opacity-[0.12] mix-blend-multiply"
              />
              <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(247,249,251,0.96),rgba(247,249,251,0.84)_45%,rgba(204,229,255,0.18))]" />
            </div>

            <div className="relative z-10 max-w-3xl">
              <span className="inline-flex rounded-full bg-[#003857]/5 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#003857]">
                Two clinics, one training pathway
              </span>
              <h1 className="mt-6 font-heading text-4xl font-extrabold leading-[0.98] tracking-[-0.06em] text-[#003857] sm:text-6xl lg:text-7xl">
                Precision in Care.
                <br />
                Excellence in
                <br />
                Education.
              </h1>
              <p className="mt-6 max-w-xl text-base leading-7 text-[#41474e] sm:mt-7 sm:text-lg sm:leading-8">
                One connected destination for Hadeed, Dhabeji, and FCPS Training, designed to help patients and dentists reach the right branch without mixed messaging.
              </p>
              <div className="mt-8 flex flex-col items-stretch gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
                <Link
                  href="/clinics"
                  className="inline-flex items-center justify-center rounded-full bg-[#003857] px-7 py-4 text-sm font-bold text-white shadow-[0_18px_40px_rgba(0,56,87,0.22)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_24px_55px_rgba(0,56,87,0.26)] sm:px-8"
                >
                  Explore Our Clinics
                </Link>
                <Link
                  href="/fcps-training"
                  className="group inline-flex items-center justify-center gap-3 text-sm font-bold text-[#003857] transition duration-300 hover:text-[#1b4f72] sm:justify-start"
                >
                  <span>View Training Programs</span>
                  <span className="transition duration-300 group-hover:translate-x-1">→</span>
                </Link>
              </div>
            </div>
          </div>

          <div className="-mt-12 grid gap-5 sm:-mt-16 sm:gap-6 md:grid-cols-3">
            {brandCards.map((card, index) => (
              <article
                key={card.title}
                className={`relative flex min-h-[280px] flex-col overflow-hidden rounded-[1.5rem] border border-white/70 bg-white p-6 shadow-[0_18px_50px_rgba(25,28,30,0.08)] sm:min-h-[320px] sm:rounded-[2rem] sm:p-8 ${
                  index === 2 ? "text-white" : ""
                } ${index === 2 ? card.accent : ""}`}
              >
                {index === 2 ? <div className="absolute inset-0 bg-[linear-gradient(135deg,#2000b1,#392bce)]" /> : null}
                <div className="relative z-10 flex h-full flex-col">
                  <div className={`grid size-14 place-items-center rounded-2xl ${index === 2 ? "bg-white/10 text-white" : "bg-[#f2f4f6] text-[#003857]"}`}>
                    {card.icon}
                  </div>
                  <h2 className={`mt-6 max-w-[12rem] font-heading text-3xl leading-[1.05] tracking-[-0.05em] sm:mt-8 sm:text-4xl ${index === 2 ? "text-white" : "text-[#003857]"}`}>
                    {card.title}
                  </h2>
                  <p className={`mt-4 max-w-sm text-sm leading-7 ${index === 2 ? "text-white/78" : "text-[#41474e]"}`}>
                    {card.description}
                  </p>
                  <div className="mt-auto pt-8">
                    <Link
                      href={card.href}
                      className={`inline-flex w-full items-center justify-center rounded-full border px-6 py-3 text-sm font-semibold transition duration-300 ${
                        index === 2
                          ? "border-white/25 bg-white text-[#2000b1] hover:bg-[#e2dfff]"
                          : "border-[#c1c7cf] text-[#003857] hover:border-[#1b4f72]/30 hover:bg-[#f7f9fb]"
                      }`}
                    >
                      {card.cta}
                    </Link>
                  </div>
                </div>
                {index !== 2 ? <span className={`absolute inset-y-0 left-0 w-1 ${card.accent}`} /> : null}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 sm:py-24 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-10 sm:gap-14 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div className="relative">
            <div className="relative overflow-hidden rounded-[2rem] shadow-[0_24px_70px_rgba(25,28,30,0.12)]">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAATxB-9AyrY74elLxjqyAKjHIog7SHyJcm8NDGialA5T8ko0ItpTUQzuefltEkYs4kZ38QS-zRnDIk8e7Aj-pMSVRBmUoBkWcq53mNRUZJvl_VihPNPVIASQA7fmZ6TFOaNdn-JBvePWeQgc8AhLl2l1uS_dQvbWARcm3viax9xnYs1tsnfOtc6qr2pkYsWki6_hyFLLrMfIAPlSoN4knOUEMBqBLNvjsoczVtUvLq3De9wtBNtzCZlBbjkFrf2xGjpJfL7wXQQWY"
                alt="Medical specialist using a digital tablet in a bright modern healthcare setting"
                width={780}
                height={920}
                className="h-[420px] w-full object-cover sm:h-[600px]"
              />
            </div>
            <div className="mt-5 rounded-[1.5rem] border border-white/40 bg-white/86 p-5 shadow-[0_20px_50px_rgba(25,28,30,0.08)] backdrop-blur-xl sm:absolute sm:-bottom-10 sm:right-8 sm:mt-0 sm:rounded-[1.75rem] sm:p-6">
              <p className="font-heading text-4xl font-extrabold tracking-[-0.05em] text-[#003857] sm:text-5xl">10+</p>
              <p className="mt-2 font-semibold text-[#191c1e]">Years of Clinical Mastery</p>
              <p className="mt-2 max-w-[14rem] text-sm leading-6 text-[#41474e]">
                Building trust across community dentistry, flagship care, and postgraduate mentorship.
              </p>
            </div>
          </div>

          <div>
            <h2 className="font-heading text-4xl font-extrabold leading-tight tracking-[-0.05em] text-[#003857] sm:text-5xl">
              Why Choose The
              <br />
              Dental Zone?
            </h2>
            <div className="mt-10 space-y-8 sm:mt-12 sm:space-y-10">
              {whyChooseUs.map((item) => (
                <div key={item.title} className="flex items-start gap-4 sm:gap-5">
                  <div className={`grid size-12 shrink-0 place-items-center rounded-full sm:size-14 ${item.accent}`}>
                    <span className="size-3 rounded-full bg-current" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#003857]">{item.title}</h3>
                    <p className="mt-2 max-w-xl text-base leading-8 text-[#41474e]">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="overflow-hidden bg-[#03071c] px-4 py-20 text-white sm:px-6 sm:py-24 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="font-heading text-3xl font-extrabold leading-tight tracking-[-0.05em] sm:text-5xl">
                Future Specialists
                <br />
                in the Making
              </h2>
              <p className="mt-4 max-w-xl text-base leading-7 text-white/66 sm:mt-5 sm:text-lg sm:leading-8">
                A snapshot of the focused learning tracks inside our FCPS pathway for dentists.
              </p>
            </div>
            <Link
              href="/fcps-training"
              className="inline-flex w-fit items-center rounded-full bg-[#2000b1] px-7 py-3 text-sm font-bold text-white transition duration-300 hover:bg-[#392bce]"
            >
              Browse All Modules
            </Link>
          </div>

          <div className="mt-12 grid gap-4 md:mt-14 md:grid-cols-[1.6fr_1fr_1fr]">
            {trainingCards.map((card) => (
              <article key={card.title} className="group relative min-h-[280px] overflow-hidden rounded-[1.5rem] sm:min-h-[350px] sm:rounded-[1.75rem]">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,7,28,0.1),rgba(3,7,28,0.86))]" />
                <div className="absolute inset-x-0 bottom-0 p-7">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white/62">{card.label}</p>
                  <h3 className="mt-3 max-w-xs font-heading text-3xl leading-[1.05] tracking-[-0.04em]">{card.title}</h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 sm:py-24 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <h2 className="font-heading text-3xl font-extrabold tracking-[-0.05em] text-[#003857] sm:text-5xl">Voice of The Dental Zone</h2>
            <p className="mt-3 text-base text-[#72787f] sm:mt-4 sm:text-lg">
              Experiences from our clinics and training pathway.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:mt-16 sm:gap-8 md:grid-cols-2">
            {testimonials.map((item) => (
              <article
                key={item.author}
                className={`rounded-[1.5rem] border-l-[6px] bg-[#f2f4f6] p-6 shadow-[0_18px_45px_rgba(25,28,30,0.04)] sm:rounded-[2rem] sm:p-8 ${item.accent}`}
              >
                <p className="text-base italic leading-8 text-[#003857] sm:text-lg sm:leading-9">{item.quote}</p>
                <div className="mt-8 flex items-center gap-4">
                  <Image
                    src={item.image}
                    alt={item.author}
                    width={52}
                    height={52}
                    className="size-13 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-bold text-[#003857]">{item.author}</p>
                    <p className="text-sm text-[#72787f]">{item.role}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
