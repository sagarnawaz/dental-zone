"use client";

import { useEffect, useRef, useState } from "react";

import { cn, toInitials } from "@/lib/utils";

type ReviewItem = {
  author: string;
  rating: number;
  text: string;
  timeAgo?: string;
  href?: string;
};

function scrollToReview(element: HTMLDivElement | null, direction: "prev" | "next") {
  if (!element) {
    return;
  }

  const slides = Array.from(
    element.querySelectorAll<HTMLElement>("[data-review-slide='true']"),
  );

  if (slides.length === 0) {
    return;
  }

  const sliderLeft = element.getBoundingClientRect().left;
  let closestIndex = 0;
  let closestDistance = Number.POSITIVE_INFINITY;

  slides.forEach((slide, index) => {
    const distance = Math.abs(slide.getBoundingClientRect().left - sliderLeft);

    if (distance < closestDistance) {
      closestDistance = distance;
      closestIndex = index;
    }
  });

  const targetIndex =
    direction === "next"
      ? (closestIndex + 1) % slides.length
      : (closestIndex - 1 + slides.length) % slides.length;

  const targetSlide = slides[targetIndex];

  if (!targetSlide) {
    return;
  }

  const targetLeft =
    element.scrollLeft +
    (targetSlide.getBoundingClientRect().left - element.getBoundingClientRect().left);

  element.scrollTo({
    left: targetLeft,
    behavior: "smooth",
  });
}

export default function ReviewSlider({
  title,
  reviews,
}: {
  title: string;
  reviews: ReviewItem[];
}) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  const isAutoPausedRef = useRef(false);
  const [isInViewport, setIsInViewport] = useState(false);
  const [isDocumentVisible, setIsDocumentVisible] = useState(true);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(true);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const syncMotionPreference = () => setPrefersReducedMotion(mediaQuery.matches);

    syncMotionPreference();

    if (typeof mediaQuery.addEventListener === "function") {
      mediaQuery.addEventListener("change", syncMotionPreference);

      return () => mediaQuery.removeEventListener("change", syncMotionPreference);
    }

    const legacyMediaQuery = mediaQuery as MediaQueryList & {
      addListener: (listener: (event: MediaQueryListEvent) => void) => void;
      removeListener: (listener: (event: MediaQueryListEvent) => void) => void;
    };

    legacyMediaQuery.addListener(syncMotionPreference);

    return () => legacyMediaQuery.removeListener(syncMotionPreference);
  }, []);

  useEffect(() => {
    const syncVisibility = () => setIsDocumentVisible(!document.hidden);

    syncVisibility();
    document.addEventListener("visibilitychange", syncVisibility);

    return () => document.removeEventListener("visibilitychange", syncVisibility);
  }, []);

  useEffect(() => {
    const element = sectionRef.current;

    if (!element) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInViewport(entry?.isIntersecting ?? false);
      },
      {
        threshold: 0.35,
      },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    let resumeTimer: number | undefined;

    const handleWindowScroll = () => {
      isAutoPausedRef.current = true;

      if (resumeTimer) {
        window.clearTimeout(resumeTimer);
      }

      resumeTimer = window.setTimeout(() => {
        isAutoPausedRef.current = false;
      }, 180);
    };

    window.addEventListener("scroll", handleWindowScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleWindowScroll);

      if (resumeTimer) {
        window.clearTimeout(resumeTimer);
      }
    };
  }, []);

  useEffect(() => {
    if (reviews.length < 2 || prefersReducedMotion || !isDocumentVisible || !isInViewport) {
      return;
    }

    const timer = window.setInterval(() => {
      if (isAutoPausedRef.current) {
        return;
      }

      scrollToReview(sliderRef.current, "next");
    }, 4500);

    return () => window.clearInterval(timer);
  }, [isDocumentVisible, isInViewport, prefersReducedMotion, reviews.length]);

  return (
    <div
      ref={sectionRef}
      className="rounded-[1.7rem] bg-[linear-gradient(180deg,rgba(255,255,255,0.82),rgba(247,249,251,0.92))] px-4 py-6 shadow-[0_18px_60px_rgba(15,23,42,0.04)] sm:rounded-[2rem] sm:px-6 sm:py-8 lg:px-10 lg:py-10"
    >
      <h3 className="mx-auto max-w-5xl text-center font-heading text-2xl font-extrabold leading-tight tracking-[-0.05em] text-[#0b6872] sm:text-4xl lg:text-5xl">
        {title}
      </h3>

      <div className="mt-6 grid gap-6 lg:mt-8 lg:grid-cols-[0.28fr_0.72fr] lg:items-center">
        <aside className="flex flex-col items-center justify-center rounded-[1.5rem] bg-white/70 px-5 py-6 text-center shadow-[0_12px_40px_rgba(15,23,42,0.04)] sm:rounded-[1.8rem] sm:px-6 sm:py-8">
          <p className="text-2xl font-black uppercase tracking-[-0.04em] text-[#111111] sm:text-3xl">
            Excellent
          </p>
          <div className="mt-4 flex items-center gap-1 text-[#f4b400]">
            {Array.from({ length: 5 }).map((_, index) => (
              <StarIcon key={index} className="size-8 sm:size-9" />
            ))}
          </div>
          <p className="mt-3 text-base text-[#2f363d] sm:text-lg">
            Based on <span className="font-bold">Google reviews</span>
          </p>
          <p className="mt-4 text-3xl font-bold tracking-[-0.06em] sm:text-4xl">
            <span className="text-[#4285f4]">G</span>
            <span className="text-[#ea4335]">o</span>
            <span className="text-[#f4b400]">o</span>
            <span className="text-[#4285f4]">g</span>
            <span className="text-[#34a853]">l</span>
            <span className="text-[#ea4335]">e</span>
          </p>
        </aside>

        <div
          className="relative min-w-0"
          onMouseEnter={() => {
            isAutoPausedRef.current = true;
          }}
          onMouseLeave={() => {
            isAutoPausedRef.current = false;
          }}
        >
          <div className="mb-3 flex items-center justify-end gap-3 lg:hidden">
            <button
              type="button"
              onClick={() => scrollToReview(sliderRef.current, "prev")}
              className="grid size-10 place-items-center rounded-full border border-[#e3e8ec] bg-white text-[var(--color-primary)] shadow-[0_12px_30px_rgba(15,23,42,0.06)] transition duration-300"
              aria-label={`Previous ${title}`}
            >
              <ArrowLeft />
            </button>
            <button
              type="button"
              onClick={() => scrollToReview(sliderRef.current, "next")}
              className="grid size-10 place-items-center rounded-full border border-[#e3e8ec] bg-white text-[var(--color-primary)] shadow-[0_12px_30px_rgba(15,23,42,0.06)] transition duration-300"
              aria-label={`Next ${title}`}
            >
              <ArrowRight />
            </button>
          </div>

          <button
            type="button"
            onClick={() => scrollToReview(sliderRef.current, "prev")}
            className="absolute left-3 top-1/2 z-10 hidden size-11 -translate-y-1/2 place-items-center rounded-full border border-[#e3e8ec] bg-white text-[var(--color-primary)] shadow-[0_12px_30px_rgba(15,23,42,0.08)] transition duration-300 hover:-translate-y-[52%] lg:grid"
            aria-label={`Previous ${title}`}
          >
            <ArrowLeft />
          </button>
          <button
            type="button"
            onClick={() => scrollToReview(sliderRef.current, "next")}
            className="absolute right-3 top-1/2 z-10 hidden size-11 -translate-y-1/2 place-items-center rounded-full border border-[#e3e8ec] bg-white text-[var(--color-primary)] shadow-[0_12px_30px_rgba(15,23,42,0.08)] transition duration-300 hover:-translate-y-[52%] lg:grid"
            aria-label={`Next ${title}`}
          >
            <ArrowRight />
          </button>

          <div
            ref={sliderRef}
            className="-mx-1 flex snap-x snap-mandatory gap-4 overflow-x-auto px-1 pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:px-14"
          >
            {reviews.map((review, index) => (
              <a
                key={`${review.author}-${review.text}`}
                href={review.href}
                target="_blank"
                rel="noopener noreferrer"
                data-review-slide="true"
                className="min-w-[85%] snap-start rounded-[1.1rem] bg-[#f7f5f5] p-4 shadow-[0_10px_30px_rgba(15,23,42,0.04)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_16px_34px_rgba(15,23,42,0.08)] sm:min-w-[22rem] sm:p-5 lg:min-w-[19rem]"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex min-w-0 items-center gap-3">
                    <div
                      className={cn(
                        "grid size-11 shrink-0 place-items-center rounded-full text-sm font-bold text-white",
                        avatarTone(index),
                      )}
                    >
                      {toInitials(review.author)}
                    </div>
                    <div className="min-w-0">
                      <p className="truncate text-base font-bold tracking-[-0.03em] text-[#111827] sm:text-lg">
                        {review.author}
                      </p>
                      <p className="text-sm text-[#6b7280]">
                        {review.timeAgo ?? defaultTimeAgo(index)}
                      </p>
                    </div>
                  </div>
                  <GoogleMark className="size-6 shrink-0" />
                </div>

                <div className="mt-4 flex items-center gap-2">
                  <div className="flex items-center gap-1 text-[#f4b400]">
                    {Array.from({ length: review.rating }).map((_, ratingIndex) => (
                      <StarIcon key={ratingIndex} className="size-4.5 sm:size-5" />
                    ))}
                  </div>
                  <VerifiedIcon className="size-4 text-[#4285f4]" />
                </div>

                <p className="mt-4 text-[0.96rem] leading-7 text-[#111827] sm:text-[1.02rem] sm:leading-8">
                  {review.text}
                </p>
              </a>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
}

function defaultTimeAgo(index: number) {
  const labels = ["8 months ago", "8 months ago", "8 months ago", "9 months ago"];
  return labels[index % labels.length];
}

function avatarTone(index: number) {
  const tones = [
    "bg-[linear-gradient(135deg,#d29f7a,#f3d4bc)]",
    "bg-[linear-gradient(135deg,#165a9f,#0c77c5)]",
    "bg-[linear-gradient(135deg,#c77459,#efb08d)]",
    "bg-[linear-gradient(135deg,#0f6670,#2f9aa4)]",
  ];

  return tones[index % tones.length];
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

function StarIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="m12 3.8 2.5 5.1 5.6.8-4.1 4 1 5.6L12 16.7 7 19.3l1-5.6-4.1-4 5.6-.8L12 3.8Z" />
    </svg>
  );
}

function VerifiedIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M12 3.8 14.1 5l2.4-.1 1.1 2.1 2 1.2-.2 2.4 1.2 2-1.5 1.9v2.4l-2.2.8-1.4 1.9-2.3-.5-2.3.5-1.4-1.9-2.2-.8v-2.4L4.3 15l1.2-2-.2-2.4 2-1.2L8.4 4.9l2.4.1L12 3.8Z"
        fill="currentColor"
      />
      <path
        d="m9.7 12.2 1.5 1.5 3.1-3.4"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function GoogleMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M21.8 12.2c0-.7-.1-1.3-.2-1.9H12v3.7h5.5a4.8 4.8 0 0 1-2 3.2v2.7h3.2c1.9-1.7 3.1-4.4 3.1-7.7Z"
        fill="#4285F4"
      />
      <path
        d="M12 22c2.8 0 5.1-.9 6.8-2.5l-3.2-2.7c-.9.6-2.1 1-3.6 1-2.8 0-5.1-1.9-5.9-4.4H2.8v2.8A10 10 0 0 0 12 22Z"
        fill="#34A853"
      />
      <path
        d="M6.1 13.4A6 6 0 0 1 5.8 12c0-.5.1-1 .3-1.4V7.8H2.8A10 10 0 0 0 2 12c0 1.6.4 3.2 1.1 4.6l3-2.2Z"
        fill="#FBBC05"
      />
      <path
        d="M12 6.1c1.5 0 2.8.5 3.8 1.5l2.9-2.9A10 10 0 0 0 2.8 7.8l3.3 2.8C6.9 8 9.2 6.1 12 6.1Z"
        fill="#EA4335"
      />
    </svg>
  );
}
