"use client";

import { useEffect, useRef, useState } from "react";

type ClientReviewVideoProps = {
  title: string;
};

export default function ClientReviewVideo({ title }: ClientReviewVideoProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [isInViewport, setIsInViewport] = useState(false);

  useEffect(() => {
    const element = sectionRef.current;

    if (!element) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInViewport(entry?.isIntersecting ?? false);
      },
      { threshold: 0.6 },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const video = videoRef.current;

    if (!video) {
      return;
    }

    if (!isInViewport) {
      video.pause();
      setIsPlaying(false);
      return;
    }

    video.muted = true;
    setIsMuted(true);

    const autoplay = async () => {
      try {
        if (video.ended) {
          video.currentTime = 0;
        }

        await video.play();
        setIsPlaying(true);
      } catch {
        setIsPlaying(false);
      }
    };

    void autoplay();
  }, [isInViewport]);

  async function handlePlay() {
    const video = videoRef.current;

    if (!video) {
      return;
    }

    video.muted = isMuted;

    try {
      await video.play();
      setIsPlaying(true);
    } catch {
      setIsPlaying(false);
    }
  }

  function handleTogglePlayback() {
    const video = videoRef.current;

    if (!video) {
      return;
    }

    if (video.paused) {
      void handlePlay();
      return;
    }

    video.pause();
    setIsPlaying(false);
  }

  function handleToggleMute() {
    const video = videoRef.current;

    if (!video) {
      return;
    }

    const nextMuted = !video.muted;
    video.muted = nextMuted;
    setIsMuted(nextMuted);
  }

  return (
    <div ref={sectionRef} className="card-surface w-full max-w-[22rem] overflow-hidden p-4 sm:max-w-[24rem]">
      <div className="relative aspect-[9/16] overflow-hidden rounded-[1.6rem] bg-[#06283f]">
        <video
          ref={videoRef}
          className="h-full w-full object-cover"
          preload="metadata"
          playsInline
          muted={isMuted}
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          onEnded={() => setIsPlaying(false)}
        >
          <source src="/feedback.mp4" type="video/mp4" />
        </video>

        {!isPlaying ? (
          <button
            type="button"
            onClick={handlePlay}
            className="absolute inset-0 flex items-center justify-center bg-[linear-gradient(180deg,rgba(0,0,0,0.08),rgba(0,56,87,0.3))] text-white transition duration-300 hover:bg-[linear-gradient(180deg,rgba(0,0,0,0.12),rgba(0,56,87,0.4))]"
            aria-label={`Play ${title}`}
          >
            <span className="grid size-16 place-items-center rounded-full bg-white/16 backdrop-blur sm:size-20">
              <PlayIcon />
            </span>
          </button>
        ) : null}

        <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-[linear-gradient(180deg,rgba(0,0,0,0),rgba(0,27,43,0.76))] p-4">
          <div className="pointer-events-auto flex items-center justify-between gap-3">
            <button
              type="button"
              onClick={handleTogglePlayback}
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/12 px-4 py-2 text-sm font-semibold text-white backdrop-blur"
              aria-label={isPlaying ? "Pause video" : "Play video"}
            >
              {isPlaying ? <PauseIcon /> : <PlaySmallIcon />}
              {isPlaying ? "Pause" : "Play"}
            </button>

            <button
              type="button"
              onClick={handleToggleMute}
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/12 px-4 py-2 text-sm font-semibold text-white backdrop-blur"
              aria-label={isMuted ? "Turn sound on" : "Mute video"}
            >
              {isMuted ? <MutedIcon /> : <VolumeIcon />}
              {isMuted ? "Sound Off" : "Sound On"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function PlayIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="size-8" aria-hidden="true">
      <path d="m9 7 8 5-8 5V7Z" fill="currentColor" />
    </svg>
  );
}

function PlaySmallIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="size-4" aria-hidden="true">
      <path d="m9 7 8 5-8 5V7Z" fill="currentColor" />
    </svg>
  );
}

function PauseIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="size-4" aria-hidden="true">
      <path d="M8 6h3v12H8Zm5 0h3v12h-3Z" fill="currentColor" />
    </svg>
  );
}

function MutedIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="size-4" aria-hidden="true">
      <path d="M5 10h4l5-4v12l-5-4H5v-4Z" fill="currentColor" />
      <path d="m17 9 4 6M21 9l-4 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function VolumeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="size-4" aria-hidden="true">
      <path d="M5 10h4l5-4v12l-5-4H5v-4Z" fill="currentColor" />
      <path d="M17 9a4 4 0 0 1 0 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M19.5 6.8a7 7 0 0 1 0 10.4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
