import Card from "@/components/ui/Card";
import SectionHeading from "@/components/ui/SectionHeading";

const pillars = [
  {
    title: "Unified ecosystem",
    description: "Users can move from clinic appointments to training discovery inside one polished, trustworthy experience.",
  },
  {
    title: "Premium presentation",
    description: "High-end visual design, conversion clarity, and cleaner decision paths make the platform feel credible from first glance.",
  },
  {
    title: "Multi-branch support",
    description: "The experience separates flagship care, community access, and educational growth without fragmenting the brand story.",
  },
  {
    title: "Senior-level structure",
    description: "Reusable components, scalable content patterns, and maintainable layout architecture support long-term growth.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="section-space">
      <div className="site-container grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="Built to convert trust into appointments, follow-ups, and enrollments."
          description="This is not a generic dental website. It is a brand system designed to clarify branch differences, simplify user decisions, and support real-world growth across clinics and FCPS training."
        />

        <div className="grid gap-5 sm:grid-cols-2">
          {pillars.map((pillar) => (
            <Card key={pillar.title} className="p-6">
              <div className="grid size-12 place-items-center rounded-full bg-[linear-gradient(135deg,#0a2540,#0d5e6e)] text-sm font-semibold text-white shadow-[0_12px_30px_rgba(10,37,64,0.16)]">
                0{pillars.indexOf(pillar) + 1}
              </div>
              <h3 className="mt-5 font-heading text-3xl text-[var(--color-primary)]">{pillar.title}</h3>
              <p className="mt-4 text-sm leading-7 text-[var(--color-text-soft)]">{pillar.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
