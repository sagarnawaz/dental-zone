"use client";

import { useRef } from "react";

function scrollByAmount(element: HTMLDivElement | null, direction: "prev" | "next") {
  if (!element) {
    return;
  }

  const amount = Math.round(element.clientWidth * 0.8);
  element.scrollBy({
    left: direction === "next" ? amount : -amount,
    behavior: "smooth",
  });
}

type ReviewItem = {
  author: string;
  rating: number;
  text: string;
};

export default function ReviewSlider({
  title,
  reviews,
}: {
  title: string;
  reviews: ReviewItem[];
}) {
  const sliderRef = useRef<HTMLDivElement>(null);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between gap-4">
        <h3 className="text-2xl font-extrabold tracking-[-0.04em] text-[var(--color-primary)]">
          {title}
        </h3>
        <div className="flex gap-3">
          <button
            type="button"
            onClick={() => scrollByAmount(sliderRef.current, "prev")}
            className="grid size-11 place-items-center rounded-full border border-[var(--border-soft)] bg-white text-[var(--color-primary)] shadow-[0_12px_30px_rgba(15,23,42,0.06)] transition duration-300 hover:-translate-y-0.5"
            aria-label={`Previous ${title}`}
          >
            <ArrowLeft />
          </button>
          <button
            type="button"
            onClick={() => scrollByAmount(sliderRef.current, "next")}
            className="grid size-11 place-items-center rounded-full border border-[var(--border-soft)] bg-white text-[var(--color-primary)] shadow-[0_12px_30px_rgba(15,23,42,0.06)] transition duration-300 hover:-translate-y-0.5"
            aria-label={`Next ${title}`}
          >
            <ArrowRight />
          </button>
        </div>
      </div>

      <div
        ref={sliderRef}
        className="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {reviews.map((review) => (
          <article
            key={`${review.author}-${review.text}`}
            className="card-surface min-w-[18rem] snap-start p-6 md:min-w-[24rem]"
          >
            <p className="text-lg tracking-[0.2em] text-[#f4b400]">
              {"★".repeat(review.rating)}
            </p>
            <p className="mt-4 text-base leading-8 text-[var(--color-text-soft)]">
              &ldquo;{review.text}&rdquo;
            </p>
            <p className="mt-5 font-bold text-[var(--color-primary)]">{review.author}</p>
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
