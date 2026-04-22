import Button from "@/components/ui/Button";

type CtaBannerProps = {
  eyebrow: string;
  title: string;
  description: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
};

export default function CtaBanner({
  eyebrow,
  title,
  description,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
}: CtaBannerProps) {
  return (
    <section className="section-space">
      <div className="site-container">
        <div className="rounded-[2.5rem] border border-white/60 bg-[linear-gradient(135deg,#0a2540,#0d5e6e_58%,#c8a96e_150%)] px-6 py-10 text-white shadow-[0_24px_80px_rgba(10,37,64,0.16)] sm:px-8 lg:px-10">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/60">{eyebrow}</p>
          <div className="mt-5 grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <h2 className="max-w-3xl font-heading text-4xl leading-tight sm:text-5xl">{title}</h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-white/78">{description}</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button href={primaryHref}>{primaryLabel}</Button>
              {secondaryLabel && secondaryHref ? (
                <Button href={secondaryHref} variant="ghost">
                  {secondaryLabel}
                </Button>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
