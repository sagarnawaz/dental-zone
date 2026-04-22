import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import SectionHeading from "@/components/ui/SectionHeading";
import { brands } from "@/data/site";

export default function BrandShowcase() {
  return (
    <section className="section-space">
      <div className="site-container">
        <SectionHeading
          eyebrow="Connected Brands"
          title="Three focused brands, one cohesive trust-first experience."
          description="The platform is designed so users can instantly understand where to go for flagship care, community dentistry, or FCPS mentorship without losing brand consistency."
        />
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {brands.map((brand) => (
            <Card key={brand.id} className="flex h-full flex-col gap-5 p-6">
              <div className={`inline-flex w-fit rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] ring-1 ${brand.accentClassName}`}>
                {brand.category}
              </div>
              <div>
                <h3 className="font-heading text-3xl text-[var(--color-primary)]">{brand.name}</h3>
                <p className="mt-3 text-base leading-7 text-[var(--color-text-soft)]">{brand.tagline}</p>
              </div>
              <p className="text-sm leading-7 text-[var(--color-text)]/75">{brand.description}</p>
              <div className="mt-auto">
                <Button href={brand.href} variant="secondary">
                  View details
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
