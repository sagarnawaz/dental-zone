"use client";

import Image from "next/image";
import { useRef } from "react";

import type { TeamMember } from "@/data/site";

function scrollByAmount(element: HTMLDivElement | null, direction: "prev" | "next") {
  if (!element) {
    return;
  }

  const amount = Math.round(element.clientWidth * 0.85);
  element.scrollBy({
    left: direction === "next" ? amount : -amount,
    behavior: "smooth",
  });
}

export default function TeamSlider({ members }: { members: TeamMember[] }) {
  const sliderRef = useRef<HTMLDivElement>(null);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between gap-4">
        <p className="text-sm text-[var(--color-text-soft)]">
          Team members are shown in a clean horizontal slider for easier browsing.
        </p>
        <div className="flex gap-3">
          <button
            type="button"
            onClick={() => scrollByAmount(sliderRef.current, "prev")}
            className="grid size-11 place-items-center rounded-full border border-[var(--border-soft)] bg-white text-[var(--color-primary)] shadow-[0_12px_30px_rgba(15,23,42,0.06)] transition duration-300 hover:-translate-y-0.5"
            aria-label="Previous team members"
          >
            <ArrowLeft />
          </button>
          <button
            type="button"
            onClick={() => scrollByAmount(sliderRef.current, "next")}
            className="grid size-11 place-items-center rounded-full border border-[var(--border-soft)] bg-[var(--color-primary)] text-white shadow-[0_12px_30px_rgba(0,56,87,0.2)] transition duration-300 hover:-translate-y-0.5"
            aria-label="Next team members"
          >
            <ArrowRight />
          </button>
        </div>
      </div>

      <div
        ref={sliderRef}
        className="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {members.map((member) => (
          <article
            key={member.name}
            className="card-surface min-w-[18rem] snap-start overflow-hidden md:min-w-[22rem]"
          >
            <div className="relative h-72">
              <Image src={member.image} alt={member.name} fill className="object-cover" sizes="(min-width: 768px) 28vw, 80vw" />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.02),rgba(0,56,87,0.55))]" />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-extrabold tracking-[-0.04em] text-[var(--color-primary)]">
                {member.name}
              </h3>
              <p className="mt-2 text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-secondary)]">
                {member.position}
              </p>
              <p className="mt-4 text-sm leading-7 text-[var(--color-text-soft)]">
                <strong className="font-bold text-[var(--color-text)]">Timing:</strong> {member.timing}
              </p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

function ArrowLeft() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="size-5" aria-hidden="true">
      <path d="M15 6 9 12l6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ArrowRight() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="size-5" aria-hidden="true">
      <path d="m9 6 6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
