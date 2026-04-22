"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

type DoctorSlide = {
  id: string;
  name: string;
  qualification: string;
  about: string;
  timing: string;
  image: string;
};

export default function DoctorSwiper({ doctors }: { doctors: DoctorSlide[] }) {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    const firstSlide = track?.firstElementChild as HTMLElement | null;

    if (!track || !firstSlide) {
      return;
    }

    const gap = 24;
    const amount = firstSlide.clientWidth + gap;

    const timer = window.setInterval(() => {
      const maxScrollLeft = track.scrollWidth - track.clientWidth;
      const nextLeft = track.scrollLeft + amount;

      track.scrollTo({
        left: nextLeft >= maxScrollLeft - 8 ? 0 : nextLeft,
        behavior: "smooth",
      });
    }, 2800);

    return () => window.clearInterval(timer);
  }, [doctors]);

  return (
    <div>
      <div
        ref={trackRef}
        className="grid auto-cols-[88%] grid-flow-col gap-6 overflow-x-auto pb-2 pr-2 [scrollbar-width:none] sm:auto-cols-[48%] lg:auto-cols-[34%] xl:auto-cols-[28%] [&::-webkit-scrollbar]:hidden"
      >
        {doctors.map((doctor) => (
          <article
            key={doctor.id}
            className="snap-start overflow-hidden rounded-[2rem] bg-white shadow-[0_18px_50px_rgba(15,23,42,0.05)]"
          >
            <div className="relative h-64">
              <Image
                src={doctor.image}
                alt={doctor.name}
                fill
                sizes="(min-width: 1280px) 28vw, (min-width: 1024px) 34vw, (min-width: 640px) 48vw, 88vw"
                className="object-cover object-top"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold tracking-[-0.03em] text-[#003857]">
                {doctor.name}
              </h3>
              <p className="mt-1 text-sm font-medium text-[#006a61]">{doctor.qualification}</p>
              <p className="mt-4 text-sm leading-7 text-[#67727e]">{doctor.about}</p>
              <p className="mt-4 rounded-[1rem] bg-[#eef4f7] px-4 py-3 text-sm leading-6 text-[#003857]/80">
                {doctor.timing}
              </p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
