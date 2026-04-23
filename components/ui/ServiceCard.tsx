import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import type { ServiceItem } from "@/data/site";

export default function ServiceCard({ service }: { service: ServiceItem }) {
  return (
    <Card className="flex h-full flex-col gap-4 p-4 sm:gap-5 sm:p-6">
      <div className="inline-flex w-fit rounded-full bg-[var(--color-primary)]/6 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-[var(--color-primary)]/70 sm:text-xs">
        The Dental Zone
      </div>
      <div className="min-w-0">
        <h3 className="break-words font-heading text-xl leading-tight text-[var(--color-primary)] sm:text-3xl">
          {service.name}
        </h3>
        <p className="mt-4 text-sm leading-7 text-[var(--color-text-soft)]">{service.shortDescription}</p>
      </div>
      <p className="rounded-3xl border border-[var(--border-soft)] bg-[var(--surface-muted)] px-4 py-4 text-sm leading-7 text-[var(--color-text)]/75">
        {service.detail}
      </p>
      <div className="mt-auto">
        <Button href="/contact" variant="secondary">
          Request this service
        </Button>
      </div>
    </Card>
  );
}
