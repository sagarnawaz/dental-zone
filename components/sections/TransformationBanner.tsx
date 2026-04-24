"use client";

import Image from "next/image";
import { startTransition, useEffect, useEffectEvent, useState } from "react";

import { cn } from "@/lib/utils";

export type TransformationSlide = {
  id: string;
  image: string;
  alt: string;
  eyebrow: string;
  title: string;
  description: string;
  result: string;
  objectPosition?: string;
};

export default function TransformationBanner({
  slides,
}: {
  slides: TransformationSlide[];
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(true);
  const [isPointerPaused, setIsPointerPaused] = useState(false);
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
    if (slides.length < 2 || prefersReducedMotion || isPointerPaused || !isDocumentVisible) {
      return;
    }

    const timer = window.setInterval(() => {
      advanceSlide(1);
    }, 4200);

    return () => window.clearInterval(timer);
  }, [advanceSlide, isDocumentVisible, isPointerPaused, prefersReducedMotion, slides.length]);

  if (slides.length === 0) {
    return null;
  }

  const activeSlide = slides[activeIndex];

  return (
    <section className="section-fade mx-auto mt-20 max-w-7xl">
      <h2 className="text-center font-heading text-3xl font-extrabold tracking-[-0.05em] text-[var(--color-primary)] sm:text-5xl">
        Brighter smile presentation with refined whitening support
      </h2>

      <div
        className="relative mt-10 overflow-hidden rounded-[2rem] border border-white/70 shadow-[0_18px_54px_rgba(15,23,42,0.08)]"
        onPointerEnter={() => setIsPointerPaused(true)}
        onPointerLeave={() => setIsPointerPaused(false)}
      >
        <div className="relative min-h-[24rem] bg-[#052033] sm:min-h-[28rem] lg:min-h-[31rem]">
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
                sizes="(min-width: 1024px) 80vw, 100vw"
                className="object-cover"
                style={slide.objectPosition ? { objectPosition: slide.objectPosition } : undefined}
              />
            </div>
          ))}

          <div className="absolute inset-0 bg-[linear-gradient(110deg,rgba(5,24,39,0.9)_8%,rgba(5,24,39,0.72)_42%,rgba(5,24,39,0.24)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(149,240,220,0.26),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(204,229,255,0.22),transparent_24%)]" />

          <div className="relative z-10 flex min-h-[24rem] items-end px-5 py-6 sm:min-h-[28rem] sm:px-8 sm:py-8 lg:min-h-[31rem] lg:px-12 lg:py-10">
            <div className="grid w-full gap-6 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
              <div className="max-w-2xl">
                <h3 className="mt-5 font-heading text-3xl font-extrabold tracking-[-0.05em] text-white sm:text-5xl">
                  {activeSlide.title}
                </h3>
                
              </div>

              <div className="w-full max-w-[18rem] rounded-[1.6rem] border border-white/14 bg-white/10 p-4 shadow-[0_12px_34px_rgba(5,24,39,0.12)] backdrop-blur-md sm:p-5">
                <p className="text-[0.65rem] font-extrabold uppercase tracking-[0.28em] text-white/56">
                  Visible Result
                </p>
                <p className="mt-3 text-lg font-bold leading-7 tracking-[-0.03em] text-white sm:text-xl">
                  {activeSlide.result}
                </p>
                <div className="mt-5 flex items-center gap-2">
                  {slides.map((slide, index) => (
                    <button
                      key={slide.id}
                      type="button"
                      onClick={() => setActiveIndex(index)}
                      className={cn(
                        "h-2.5 rounded-full transition-all duration-300",
                        index === activeIndex
                          ? "w-10 bg-white"
                          : "w-2.5 bg-white/34 hover:bg-white/58",
                      )}
                      aria-label={`Show transformation slide ${index + 1}: ${slide.title}`}
                      aria-pressed={index === activeIndex}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
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
