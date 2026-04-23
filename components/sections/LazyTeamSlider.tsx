"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";

import type { TeamMember } from "@/data/site";

const TeamSlider = dynamic(() => import("@/components/sections/TeamSlider"), {
  loading: () => <SliderPlaceholder lines={4} />,
});

export default function LazyTeamSlider({ members }: { members: TeamMember[] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    const element = containerRef.current;

    if (!element || shouldRender) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) {
          return;
        }

        setShouldRender(true);
        observer.disconnect();
      },
      { rootMargin: "280px 0px" },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [shouldRender]);

  return <div ref={containerRef}>{shouldRender ? <TeamSlider members={members} /> : <SliderPlaceholder lines={4} />}</div>;
}

function SliderPlaceholder({ lines }: { lines: number }) {
  return (
    <div className="space-y-8" aria-hidden="true">
      <div className="grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4">
        {Array.from({ length: lines }).map((_, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-[1.8rem] bg-[linear-gradient(180deg,#dceef1_0%,#c6e4e8_100%)] shadow-[0_18px_50px_rgba(15,23,42,0.06)]"
          >
            <div className="h-[21rem] animate-pulse bg-[linear-gradient(180deg,rgba(255,255,255,0.3),rgba(255,255,255,0.08))] sm:h-[22rem] lg:h-[23rem]" />
            <div className="space-y-3 bg-[#d0edf0] px-4 py-5">
              <div className="h-4 w-3/4 rounded-full bg-white/80" />
              <div className="h-3 w-1/2 rounded-full bg-white/60" />
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center gap-3">
        {Array.from({ length: lines }).map((_, index) => (
          <span key={index} className="h-2.5 w-2.5 rounded-full bg-[#c6d9dd]" />
        ))}
      </div>
    </div>
  );
}
