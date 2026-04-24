"use client";

import Image from "next/image";
import { startTransition, useEffect, useEffectEvent, useState, type FocusEvent } from "react";

import Button from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export type ClinicHeroSlide = {
  id: string;
  image: string;
  alt: string;
  eyebrow: string;
  title: string;
  description: string;
  objectPosition?: string;
};

export type ClinicHeroHighlight = {
  title: string;
  description: string;
};

export type ClinicHeroMetric = {
  label: string;
  value: string;
};

type ClinicHeroSliderProps = {
  badge?: string;
  title: string;
  accent: string;
  description: string;
  slides: ClinicHeroSlide[];
  highlights?: ClinicHeroHighlight[];
  metrics?: ClinicHeroMetric[];
  primaryAction: {
    label: string;
    href: string;
  };
  secondaryAction?: {
    label: string;
    href: string;
  };
  intervalMs?: number;
  layout?: "default" | "minimal";
};

export default function ClinicHeroSlider({
  badge,
  title,
  accent,
  description,
  slides,
  highlights = [],
  metrics = [],
  primaryAction,
  secondaryAction,
  intervalMs = 4800,
  layout = "default",
}: ClinicHeroSliderProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(true);
  const [isPointerPaused, setIsPointerPaused] = useState(false);
  const [isFocusPaused, setIsFocusPaused] = useState(false);
  const [isDocumentVisible, setIsDocumentVisible] = useState(true);

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

  const advanceSlide = useEffectEvent((direction: number) => {
    startTransition(() => {
      setActiveIndex((currentIndex) => normalizeIndex(currentIndex + direction, slides.length));
    });
  });

  useEffect(() => {
    if (
      slides.length < 2 ||
      prefersReducedMotion ||
      isPointerPaused ||
      isFocusPaused ||
      !isDocumentVisible
    ) {
      return;
    }

    const timer = window.setInterval(() => {
      advanceSlide(1);
    }, intervalMs);

    return () => window.clearInterval(timer);
  }, [intervalMs, isDocumentVisible, isFocusPaused, isPointerPaused, prefersReducedMotion, slides.length]);

  if (slides.length === 0) {
    return null;
  }

  const isMinimal = layout === "minimal";
  const activeSlide = slides[activeIndex];
  const autoplayStatus = prefersReducedMotion
    ? "Autoplay disabled for reduced motion."
    : isPointerPaused || isFocusPaused
      ? "Autoplay paused while you interact."
      : `Autoplay active every ${Math.round(intervalMs / 1000)}s.`;

  function handleBlur(event: FocusEvent<HTMLDivElement>) {
    if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
      setIsFocusPaused(false);
    }
  }

  function handleSetSlide(nextIndex: number) {
    startTransition(() => {
      setActiveIndex(normalizeIndex(nextIndex, slides.length));
    });
  }

  function handleStepSlide(direction: number) {
    startTransition(() => {
      setActiveIndex((currentIndex) => normalizeIndex(currentIndex + direction, slides.length));
    });
  }

  return (
    <section
      className="relative isolate -mt-[6.5rem] overflow-hidden bg-[#03141f] pt-[6.5rem] text-white sm:-mt-[6.75rem] sm:pt-[6.75rem]"
      onPointerEnter={() => setIsPointerPaused(true)}
      onPointerLeave={() => setIsPointerPaused(false)}
      onFocusCapture={() => setIsFocusPaused(true)}
      onBlurCapture={handleBlur}
    >
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={cn(
              "absolute inset-0 transition-opacity duration-[1400ms] ease-out",
              index === activeIndex ? "opacity-100" : "opacity-0",
            )}
            aria-hidden={index !== activeIndex}
          >
            <Image
              src={slide.image}
              alt={slide.alt}
              fill
              preload={index === 0}
              sizes="100vw"
              className="object-cover"
              style={slide.objectPosition ? { objectPosition: slide.objectPosition } : undefined}
            />
          </div>
        ))}
      </div>

      <div className="absolute inset-0 bg-[linear-gradient(110deg,rgba(3,12,18,0.9)_6%,rgba(3,20,31,0.82)_40%,rgba(3,20,31,0.38)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,166,154,0.26),transparent_24%),radial-gradient(circle_at_top_right,rgba(147,197,253,0.22),transparent_20%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.08),transparent_22%)]" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-[linear-gradient(180deg,rgba(3,20,31,0),rgba(3,20,31,0.55))]" />

      <div className="site-container relative z-10 py-6 sm:py-8 lg:py-10">
        <div
          className={cn(
            "min-h-[58svh] sm:min-h-[62svh] lg:min-h-[66svh]",
            isMinimal
              ? "flex items-center"
              : "grid gap-10 lg:grid-cols-[minmax(0,1.12fr)_minmax(320px,0.88fr)] lg:items-end",
          )}
        >
          <div className={cn("self-center", isMinimal ? "max-w-3xl" : "max-w-3xl lg:self-end")}>
            {badge ? (
              <span className="inline-flex rounded-full border border-white/16 bg-white/10 px-4 py-2 text-[0.68rem] font-extrabold uppercase tracking-[0.34em] text-white/72 backdrop-blur-md">
                {badge}
              </span>
            ) : null}
            <h1 className="mt-6 font-heading text-5xl font-extrabold leading-[0.92] tracking-[-0.07em] text-white sm:text-6xl lg:text-7xl">
              {title}
              <br />
              <span className="text-[#95f0dc]">{accent}</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-white/78 sm:text-lg sm:leading-9">
              {description}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button
                href={primaryAction.href}
                className="bg-white text-[#052033] shadow-[0_20px_60px_rgba(6,32,51,0.28)] hover:bg-[#f4fbff]"
              >
                {primaryAction.label}
              </Button>
              {secondaryAction ? (
                <Button
                  href={secondaryAction.href}
                  variant="ghost"
                  className="border-white/18 bg-white/8 text-white backdrop-blur-md hover:bg-white/14"
                >
                  {secondaryAction.label}
                </Button>
              ) : null}
            </div>

            {!isMinimal && highlights.length > 0 ? (
              <div className="mt-10 grid gap-3 sm:grid-cols-3">
                {highlights.map((item) => (
                  <article
                    key={item.title}
                    className="rounded-[1.6rem] border border-white/12 bg-white/[0.08] p-4 shadow-[0_18px_50px_rgba(2,12,18,0.18)] backdrop-blur-md"
                  >
                    <p className="text-sm font-bold tracking-[-0.02em] text-white">{item.title}</p>
                    <p className="mt-2 text-sm leading-6 text-white/64">{item.description}</p>
                  </article>
                ))}
              </div>
            ) : null}
          </div>

          {!isMinimal ? (
            <div className="w-full max-w-[34rem] justify-self-end">
              <div className="rounded-[2rem] border border-white/14 bg-white/[0.08] p-5 shadow-[0_26px_90px_rgba(2,12,18,0.24)] backdrop-blur-xl sm:p-6">
                <div className="flex items-start justify-between gap-5">
                  <div className="min-w-0">
                    <p className="text-[0.65rem] font-extrabold uppercase tracking-[0.32em] text-white/56">
                      Now Showing
                    </p>
                    <p className="mt-4 text-sm font-semibold uppercase tracking-[0.22em] text-[#95f0dc]">
                      {activeSlide.eyebrow}
                    </p>
                    <h2 className="mt-3 font-heading text-3xl font-bold leading-tight tracking-[-0.05em] text-white">
                      {activeSlide.title}
                    </h2>
                    <p className="mt-4 text-sm leading-7 text-white/72">{activeSlide.description}</p>
                  </div>

                  <div className="hidden rounded-[1.25rem] border border-white/10 bg-black/10 px-4 py-3 text-right sm:block">
                    <p className="text-[0.58rem] font-extrabold uppercase tracking-[0.3em] text-white/48">
                      Slide
                    </p>
                    <p className="mt-2 font-heading text-3xl font-bold text-white">
                      {String(activeIndex + 1).padStart(2, "0")}
                    </p>
                    <p className="text-xs text-white/56">/ {String(slides.length).padStart(2, "0")}</p>
                  </div>
                </div>

                <div className="mt-6 border-t border-white/10 pt-5">
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex flex-wrap items-center gap-2">
                      {slides.map((slide, index) => (
                        <button
                          key={slide.id}
                          type="button"
                          onClick={() => handleSetSlide(index)}
                          className={cn(
                            "h-2.5 rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/90 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent",
                            index === activeIndex
                              ? "w-10 bg-white"
                              : "w-2.5 bg-white/30 hover:bg-white/55",
                          )}
                          aria-label={`Show slide ${index + 1}: ${slide.title}`}
                          aria-pressed={index === activeIndex}
                        />
                      ))}
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => handleStepSlide(-1)}
                        className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/14 bg-white/8 text-white transition duration-300 hover:bg-white/14 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/90 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
                        aria-label="Show previous hero slide"
                      >
                        <ArrowLeftIcon className="h-4 w-4" />
                      </button>
                      <button
                        type="button"
                        onClick={() => handleStepSlide(1)}
                        className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/14 bg-white/8 text-white transition duration-300 hover:bg-white/14 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/90 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
                        aria-label="Show next hero slide"
                      >
                        <ArrowRightIcon className="h-4 w-4" />
                      </button>
                    </div>
                  </div>

                  <p className="mt-4 text-xs font-medium uppercase tracking-[0.24em] text-white/46">
                    {autoplayStatus}
                  </p>
                </div>
              </div>

              {metrics.length > 0 ? (
                <div className="mt-4 grid gap-3 sm:grid-cols-3">
                  {metrics.map((metric) => (
                    <article
                      key={metric.label}
                      className="rounded-[1.5rem] border border-white/12 bg-black/10 px-4 py-4 shadow-[0_18px_48px_rgba(2,12,18,0.18)] backdrop-blur-md"
                    >
                      <p className="text-[0.6rem] font-extrabold uppercase tracking-[0.28em] text-white/48">
                        {metric.label}
                      </p>
                      <p className="mt-3 text-sm font-semibold leading-6 text-white">{metric.value}</p>
                    </article>
                  ))}
                </div>
              ) : null}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}

function normalizeIndex(index: number, length: number) {
  if (length === 0) {
    return 0;
  }

  return ((index % length) + length) % length;
}

function ArrowLeftIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M19 12H5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path
        d="m11 6-6 6 6 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowRightIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path
        d="m13 6 6 6-6 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
