import Button from "@/components/ui/Button";
import { brands, trustStats } from "@/data/site";

export default function HomeHero() {
  return (
    <section className="px-3 pt-6 sm:px-5">
      <div className="hero-shell mx-auto max-w-[min(1380px,100%)] overflow-hidden rounded-[2.5rem] px-6 py-12 sm:px-8 lg:px-12 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
          <div className="relative z-[1]">
            <div className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-white/75">
              Connected dental care and FCPS guidance
            </div>
            <h1 className="mt-6 max-w-3xl font-heading text-5xl leading-[0.96] text-white sm:text-6xl lg:text-7xl">
              One refined digital home for two dental clinics and one FCPS training journey.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/78">
              Explore flagship care in Hadeed, community dentistry in Dhabeji, and structured FCPS mentorship for dentists. Built to guide appointments, trust, and long-term growth.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/contact">Book Appointment</Button>
              <Button href="/clinics" variant="ghost">
                Explore the ecosystem
              </Button>
            </div>
          </div>

          <div className="grid gap-4">
            {brands.map((brand) => (
              <article
                key={brand.id}
                className={`rounded-[1.75rem] border bg-[linear-gradient(135deg,var(--tw-gradient-stops))] p-5 shadow-[0_24px_60px_rgba(0,0,0,0.14)] ${brand.panelClassName}`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/55">{brand.category}</p>
                    <h2 className="mt-3 font-heading text-3xl">{brand.name}</h2>
                  </div>
                  <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-white/75">
                    {brand.accentLabel}
                  </span>
                </div>
                <p className="mt-4 max-w-xl text-sm leading-7 text-white/72">{brand.description}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-3 border-t border-white/10 pt-8 sm:gap-4 lg:grid-cols-4">
          {trustStats.map((stat) => (
            <div key={stat.label} className="min-w-0 rounded-[1.5rem] border border-white/10 bg-white/8 px-4 py-4 backdrop-blur-sm sm:px-5 sm:py-5">
              <p className="break-words font-heading text-2xl leading-tight text-white sm:text-4xl">{stat.value}</p>
              <p className="mt-2 text-[0.68rem] uppercase tracking-[0.18em] text-white/55 sm:text-sm sm:tracking-[0.22em]">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
