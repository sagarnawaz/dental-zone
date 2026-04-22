import Card from "@/components/ui/Card";
import PageHero from "@/components/sections/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { brands } from "@/data/site";

const clinicBrands = brands.filter((brand) => brand.id !== "fcps");

export default function ClinicsPage() {
  return (
    <>
      <PageHero
        eyebrow="Clinic Overview"
        title="Choose the branch that fits your care journey."
        description="Explore our clinic locations directly without the older brand detour, with each branch presented in the same refined visual language."
        sideNote="Use the Clinics dropdown in the navigation for direct access to Hadeed and Dhabeji."
      />

      <section className="section-space">
        <div className="site-container">
          <SectionHeading
            eyebrow="Branches"
            title="Two clinics, one connected Dental Zone experience."
            description="Select the branch that best matches your location, treatment needs, and preferred style of care."
          />

          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            {clinicBrands.map((brand) => (
              <Card key={brand.id} className="flex h-full flex-col gap-6 p-6">
                <div
                  className={`inline-flex w-fit rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] ring-1 ${brand.accentClassName}`}
                >
                  {brand.accentLabel}
                </div>

                <div>
                  <p className="text-sm font-medium uppercase tracking-[0.22em] text-[var(--color-text-soft)]">
                    {brand.category}
                  </p>
                  <h2 className="mt-3 font-heading text-4xl text-[var(--color-primary)]">
                    {brand.name}
                  </h2>
                  <p className="mt-4 text-base leading-8 text-[var(--color-text-soft)]">
                    {brand.tagline}
                  </p>
                </div>

                <p className="text-sm leading-7 text-[var(--color-text)]/75">{brand.description}</p>

                <div className="mt-auto">
                  <Button href={brand.href} variant="secondary">
                    Open clinic page
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
