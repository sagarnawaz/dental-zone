import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import type { Service } from "@/data/site";

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <Card className="flex h-full flex-col gap-5 p-6">
      <div className="inline-flex w-fit rounded-full bg-[var(--color-primary)]/6 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-primary)]/70">
        Dental Care
      </div>
      <div>
        <h3 className="font-heading text-3xl text-[var(--color-primary)]">{service.title}</h3>
        <p className="mt-4 text-sm leading-7 text-[var(--color-text-soft)]">{service.description}</p>
      </div>
      <p className="rounded-3xl border border-[var(--border-soft)] bg-[var(--surface-muted)] px-4 py-4 text-sm leading-7 text-[var(--color-text)]/75">
        {service.benefit}
      </p>
      <div className="mt-auto">
        <Button href="/contact" variant="secondary">
          Request this service
        </Button>
      </div>
    </Card>
  );
}
