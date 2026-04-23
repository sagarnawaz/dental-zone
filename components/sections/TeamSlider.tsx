"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import type { TeamMember } from "@/data/site";

function getTeamSlides(element: HTMLDivElement | null) {
  if (!element) {
    return [];
  }

  return Array.from(
    element.querySelectorAll<HTMLElement>("[data-team-slide='true']"),
  );
}

function getClosestTeamIndex(element: HTMLDivElement | null) {
  const slides = getTeamSlides(element);

  if (slides.length === 0 || !element) {
    return 0;
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

  return closestIndex;
}

function scrollToMember(element: HTMLDivElement | null, index: number) {
  const target = element?.querySelector<HTMLElement>(`[data-team-index='${index}']`);

  target?.scrollIntoView({
    behavior: "smooth",
    inline: "start",
    block: "nearest",
  });
}

function scrollTeam(element: HTMLDivElement | null, direction: "prev" | "next") {
  const slides = getTeamSlides(element);

  if (slides.length === 0) {
    return;
  }

  const closestIndex = getClosestTeamIndex(element);
  const targetIndex =
    direction === "next"
      ? (closestIndex + 1) % slides.length
      : (closestIndex - 1 + slides.length) % slides.length;

  scrollToMember(element, targetIndex);
}

export default function TeamSlider({ members }: { members: TeamMember[] }) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  const isAutoPausedRef = useRef(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isInViewport, setIsInViewport] = useState(false);
  const [isDocumentVisible, setIsDocumentVisible] = useState(true);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(true);

  useEffect(() => {
    const slider = sliderRef.current;

    if (!slider) {
      return;
    }

    const handleScroll = () => {
      const slides = getTeamSlides(slider);

      if (slides.length === 0) {
        return;
      }

      setActiveIndex(getClosestTeamIndex(slider));
    };

    handleScroll();
    slider.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      slider.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [members.length]);

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
    if (members.length < 2 || prefersReducedMotion || !isDocumentVisible || !isInViewport) {
      return;
    }

    const timer = window.setInterval(() => {
      if (isAutoPausedRef.current) {
        return;
      }

      scrollTeam(sliderRef.current, "next");
    }, 4500);

    return () => window.clearInterval(timer);
  }, [isDocumentVisible, isInViewport, members.length, prefersReducedMotion]);

  return (
    <div ref={sectionRef} className="space-y-8">
      <div
        ref={sliderRef}
        className="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        onMouseEnter={() => {
          isAutoPausedRef.current = true;
        }}
        onMouseLeave={() => {
          isAutoPausedRef.current = false;
        }}
      >
        {members.map((member, index) => (
          <article
            key={member.name}
            data-team-slide="true"
            data-team-index={index}
            className="group min-w-[15.5rem] basis-[82%] snap-start overflow-hidden rounded-[1.8rem] bg-[linear-gradient(180deg,#27818a_0%,#145f69_100%)] shadow-[0_18px_50px_rgba(15,23,42,0.1)] sm:basis-[44%] md:min-w-[17rem] lg:basis-[calc(25%-0.95rem)]"
          >
            <div className="relative h-[21rem] overflow-hidden sm:h-[22rem] lg:h-[23rem]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(117,226,231,0.36),transparent_22%),linear-gradient(180deg,#1c6f77_0%,#125861_100%)]" />
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover object-top transition duration-700 group-hover:scale-[1.03]"
                sizes="(min-width: 1280px) 22vw, (min-width: 768px) 44vw, 82vw"
              />
              <div className="absolute inset-x-0 bottom-0 h-24 bg-[linear-gradient(180deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0.46)_100%)]" />
            </div>
            <div className="bg-[#59c4d0] px-4 py-4 text-center text-white">
              <h3 className="text-[1.15rem] font-bold tracking-[-0.04em] sm:text-[1.28rem]">
                {member.name}
              </h3>
              <p className="mt-1 text-sm font-medium leading-5 text-white/92">
                {member.position}
              </p>
            </div>
          </article>
        ))}
      </div>

      <div className="flex justify-center gap-3">
        {members.map((member, index) => (
          <button
            key={member.name}
            type="button"
            onClick={() => scrollToMember(sliderRef.current, index)}
            className={`h-2.5 w-2.5 rounded-full transition duration-300 ${
              index === activeIndex ? "scale-110 bg-[#0f6670]" : "bg-[#c6d9dd] hover:bg-[#98b9bf]"
            }`}
            aria-label={`Show ${member.name}`}
            aria-pressed={index === activeIndex}
          />
        ))}
      </div>
    </div>
  );
}
