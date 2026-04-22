type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  sideNote?: string;
};

export default function PageHero({ eyebrow, title, description, sideNote }: PageHeroProps) {
  return (
    <section className="px-3 pt-6 sm:px-5">
      <div className="page-hero-shell mx-auto max-w-[min(1380px,100%)] rounded-[2.25rem] px-6 py-10 sm:px-8 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.42fr] lg:items-end">
          <div>
            <p className="section-eyebrow text-white/68">{eyebrow}</p>
            <h1 className="mt-5 max-w-4xl font-heading text-5xl leading-[0.98] text-white sm:text-6xl">
              {title}
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/78">{description}</p>
          </div>
          {sideNote ? (
            <div className="rounded-[1.75rem] border border-white/15 bg-white/10 p-5 text-sm leading-7 text-white/76 backdrop-blur-sm">
              {sideNote}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
