import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import SectionHeading from "@/components/ui/SectionHeading";
import { trainingModules } from "@/data/site";

export default function FcpsPreview() {
  return (
    <section className="section-space">
      <div className="site-container grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
        <SectionHeading
          eyebrow="FCPS Training"
          title="A premium training preview for dentists who need serious structure."
          description="The education arm is presented as part of the same ecosystem, but with its own focused identity around mentorship, case discussion, and exam-oriented progress."
        />
        <Card className="overflow-hidden p-0">
          <div className="bg-[linear-gradient(135deg,#101f35,#17304d_55%,#5f4c1a)] px-6 py-7 text-white">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/55">Program snapshot</p>
            <h3 className="mt-4 font-heading text-4xl">Mentorship-led FCPS preparation</h3>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-white/75">
              Structured for ambition, clarity, and stronger clinical confidence.
            </p>
          </div>
          <div className="grid gap-4 p-6">
            {trainingModules.slice(0, 4).map((module) => (
              <div
                key={module}
                className="rounded-[1.4rem] border border-[var(--border-soft)] bg-[var(--surface-muted)] px-4 py-4 text-sm text-[var(--color-text)]/80"
              >
                {module}
              </div>
            ))}
            <div className="pt-2">
              <Button href="/fcps-training" variant="secondary">
                Explore FCPS training
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
