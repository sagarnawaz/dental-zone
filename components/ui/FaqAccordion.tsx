import type { FaqItem } from "@/data/site";

export default function FaqAccordion({ items }: { items: FaqItem[] }) {
  return (
    <div className="grid gap-3">
      {items.map((item) => (
        <details
          key={item.question}
          className="group overflow-hidden rounded-[1.35rem] border border-[var(--border-soft)] bg-white shadow-[0_14px_34px_rgba(15,23,42,0.05)]"
        >
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 text-left [&::-webkit-details-marker]:hidden">
            <span className="text-base font-semibold leading-7 text-[var(--color-primary)] sm:text-lg">
              {item.question}
            </span>
            <span className="grid size-8 shrink-0 place-items-center rounded-full bg-[var(--surface-muted)] text-[var(--color-primary)] transition duration-300 group-open:rotate-45">
              +
            </span>
          </summary>
          <div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-300 group-open:grid-rows-[1fr]">
            <div className="overflow-hidden">
              <p className="px-5 pb-5 text-sm leading-7 text-[var(--color-text-soft)]">{item.answer}</p>
            </div>
          </div>
        </details>
      ))}
    </div>
  );
}
