"use client";

import Image from "next/image";
import { useCallback, useEffect, useMemo, useState } from "react";
import { ArrowLeft, ArrowRight, X } from "lucide-react";

type Project = {
  name: string;
  detail: string;
  imageLabel: string;
};

const PLACEHOLDER_SRCS = [
  "/placeholder-7.jpg",
  "/placeholder-8.jpg",
  "/placeholder-9.jpg",
  "/placeholder-10.jpg",
] as const;

function pickSrc(seed: string) {
  let hash = 0;
  for (let i = 0; i < seed.length; i++) hash = (hash * 31 + seed.charCodeAt(i)) >>> 0;
  return PLACEHOLDER_SRCS[hash % PLACEHOLDER_SRCS.length];
}

export function ProjectsLightbox({ projects }: { projects: Project[] }) {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const active = projects[index];
  const src = useMemo(() => pickSrc(active?.imageLabel ?? ""), [active?.imageLabel]);

  const openAt = useCallback((i: number) => {
    setIndex(i);
    setOpen(true);
  }, []);

  const close = useCallback(() => setOpen(false), []);

  const prev = useCallback(() => {
    setIndex((i) => (i - 1 + projects.length) % projects.length);
  }, [projects.length]);

  const next = useCallback(() => {
    setIndex((i) => (i + 1) % projects.length);
  }, [projects.length]);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [close, next, open, prev]);

  return (
    <>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <button
            key={p.name}
            type="button"
            onClick={() => openAt(i)}
            className="group text-left rounded-md border border-black/10 p-3 transition-transform duration-200 hover:-translate-y-0.5 motion-reduce:transform-none"
          >
            <div className="rounded-md overflow-hidden border border-black/10">
              <div className="relative aspect-[16/10]">
                <Image
                  src={pickSrc(p.imageLabel)}
                  alt={p.name}
                  fill
                  sizes="(min-width: 1024px) 320px, (min-width: 640px) 45vw, 100vw"
                  className="object-cover opacity-90"
                />
              </div>
            </div>
            <div className="mt-3 flex items-center justify-between gap-3">
              <span className="text-sm font-medium">{p.name}</span>
              <span className="text-xs text-black/50 transition-colors group-hover:text-black/80">
                View →
              </span>
            </div>
          </button>
        ))}
      </div>

      {open ? (
        <div className="fixed inset-0 z-[60]" role="dialog" aria-modal="true" aria-label="Project gallery">
          <div className="absolute inset-0 bg-black/80" onClick={close} />

          <div className="absolute inset-0 sm:p-6">
            <div className="relative mx-auto h-full w-full max-w-6xl overflow-hidden bg-black sm:rounded-lg sm:border sm:border-white/15">
              <div className="absolute right-3 top-3 z-20 sm:right-4 sm:top-4">
                <button
                  type="button"
                  onClick={close}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-md bg-black/55 text-white ring-1 ring-white/20 backdrop-blur-sm transition hover:bg-black/70"
                  aria-label="Close"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="absolute left-3 top-1/2 z-20 -translate-y-1/2 sm:left-4">
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    prev();
                  }}
                  className="inline-flex h-12 w-12 items-center justify-center rounded-md bg-black/55 text-white ring-1 ring-white/20 backdrop-blur-sm transition hover:bg-black/70"
                  aria-label="Previous project"
                >
                  <ArrowLeft className="h-5 w-5" />
                </button>
              </div>

              <div className="absolute right-3 top-1/2 z-20 -translate-y-1/2 sm:right-4">
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    next();
                  }}
                  className="inline-flex h-12 w-12 items-center justify-center rounded-md bg-black/55 text-white ring-1 ring-white/20 backdrop-blur-sm transition hover:bg-black/70"
                  aria-label="Next project"
                >
                  <ArrowRight className="h-5 w-5" />
                </button>
              </div>

              <div className="relative h-full w-full">
                <Image
                  src={src}
                  alt={active?.name ?? "Project"}
                  fill
                  priority
                  sizes="100vw"
                  className="object-cover"
                />

                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-black/80 via-black/20 to-transparent"
                />

                <div className="absolute inset-x-0 bottom-0 z-10 p-5 sm:p-8">
                  <p className="text-base font-semibold text-white sm:text-xl">{active?.name}</p>
                  <p className="mt-2 max-w-3xl text-sm text-white/80 sm:text-base">
                    {active?.detail}
                  </p>
                  <p className="mt-4 text-xs text-white/60 sm:text-sm">
                    {index + 1} / {projects.length} — use ← → keys
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

