"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";

const ReviewSlider = dynamic(() => import("@/components/sections/ReviewSlider"), {
  loading: () => <ReviewSliderPlaceholder />,
});

type ReviewItem = {
  author: string;
  rating: number;
  text: string;
  timeAgo?: string;
};

export default function LazyReviewSlider({
  title,
  reviews,
}: {
  title: string;
  reviews: ReviewItem[];
}) {
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
      { rootMargin: "320px 0px" },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [shouldRender]);

  return (
    <div ref={containerRef}>
      {shouldRender ? <ReviewSlider title={title} reviews={reviews} /> : <ReviewSliderPlaceholder />}
    </div>
  );
}

function ReviewSliderPlaceholder() {
  return (
    <div
      className="rounded-[1.7rem] bg-[linear-gradient(180deg,rgba(255,255,255,0.82),rgba(247,249,251,0.92))] px-4 py-6 shadow-[0_18px_60px_rgba(15,23,42,0.04)] sm:rounded-[2rem] sm:px-6 sm:py-8 lg:px-10 lg:py-10"
      aria-hidden="true"
    >
      <div className="mx-auto h-10 max-w-3xl rounded-full bg-[#dfeaed]" />
      <div className="mt-6 grid gap-6 lg:mt-8 lg:grid-cols-[0.28fr_0.72fr] lg:items-center">
        <div className="rounded-[1.5rem] bg-white/70 px-5 py-6 shadow-[0_12px_40px_rgba(15,23,42,0.04)] sm:rounded-[1.8rem] sm:px-6 sm:py-8">
          <div className="mx-auto h-7 w-32 rounded-full bg-[#dfeaed]" />
          <div className="mx-auto mt-4 h-8 w-40 rounded-full bg-[#f5e5af]" />
          <div className="mx-auto mt-4 h-5 w-44 rounded-full bg-[#dfeaed]" />
          <div className="mx-auto mt-4 h-8 w-32 rounded-full bg-[#dfeaed]" />
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 3 }).map((_, index) => (
            <div
              key={index}
              className="rounded-[1.1rem] bg-[#f7f5f5] p-5 shadow-[0_10px_30px_rgba(15,23,42,0.04)]"
            >
              <div className="flex items-center gap-3">
                <div className="h-11 w-11 rounded-full bg-[#d9e7ea]" />
                <div className="flex-1 space-y-2">
                  <div className="h-4 w-2/3 rounded-full bg-[#d9e7ea]" />
                  <div className="h-3 w-1/3 rounded-full bg-[#edf3f4]" />
                </div>
              </div>
              <div className="mt-4 h-4 w-24 rounded-full bg-[#f5e5af]" />
              <div className="mt-4 space-y-3">
                <div className="h-3 rounded-full bg-[#d9e7ea]" />
                <div className="h-3 rounded-full bg-[#d9e7ea]" />
                <div className="h-3 w-5/6 rounded-full bg-[#d9e7ea]" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
