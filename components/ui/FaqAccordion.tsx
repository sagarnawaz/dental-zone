"use client";

import { useState } from "react";

import type { FaqItem } from "@/data/site";
import { cn } from "@/lib/utils";

export default function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="grid gap-4">
      {items.map((item, index) => {
        const isOpen = index === openIndex;

        return (
          <div
            key={item.question}
            className="overflow-hidden rounded-[1.5rem] border border-[var(--border-soft)] bg-white shadow-[0_18px_45px_rgba(15,23,42,0.06)]"
          >
            <button
              type="button"
              className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left"
              onClick={() => setOpenIndex(isOpen ? -1 : index)}
              aria-expanded={isOpen}
            >
              <span className="text-lg font-semibold text-[var(--color-primary)]">{item.question}</span>
              <span
                className={cn(
                  "grid size-9 place-items-center rounded-full bg-[var(--surface-muted)] text-[var(--color-primary)] transition duration-300",
                  isOpen && "rotate-45"
                )}
              >
                +
              </span>
            </button>
            <div className={cn("grid transition-[grid-template-rows] duration-300", isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]")}>
              <div className="overflow-hidden">
                <p className="px-5 pb-5 text-sm leading-7 text-[var(--color-text-soft)]">{item.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
