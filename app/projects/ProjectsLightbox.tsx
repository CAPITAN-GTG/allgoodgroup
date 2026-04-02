"use client";

import Image from "next/image";
import { useCallback, useEffect, useMemo, useState } from "react";
import { ArrowLeft, ArrowRight, X } from "lucide-react";

import { pickConstructionImage } from "@/lib/image-placeholders";

type Project = {
  name: string;
  detail: string;
  imageLabel: string;
};

export function ProjectsLightbox({ projects }: { projects: Project[] }) {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const active = projects[index];
  const src = useMemo(() => pickConstructionImage(active?.imageLabel ?? ""), [active?.imageLabel]);

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
      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <button
            key={p.name}
            type="button"
            onClick={() => openAt(i)}
            className="group text-left rounded-2xl border border-white/12 bg-white/[0.03] p-3 shadow-[0_8px_32px_rgba(0,0,0,0.25)] backdrop-blur-md transition duration-200 hover:-translate-y-1 hover:border-orange-400/25 hover:shadow-[0_16px_48px_rgba(234,88,12,0.1)] motion-reduce:transform-none"
          >
            <div className="overflow-hidden rounded-xl border border-white/10">
              <div className="relative aspect-[16/10]">
                <Image
                  src={pickConstructionImage(p.imageLabel)}
                  alt={p.name}
                  fill
                  sizes="(min-width: 1024px) 320px, (min-width: 640px) 45vw, 100vw"
                  className="object-cover opacity-95 transition duration-300 group-hover:scale-105"
                />
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent opacity-0 transition group-hover:opacity-100"
                />
              </div>
            </div>
            <div className="mt-4 flex items-center justify-between gap-3 px-1">
              <span className="text-sm font-medium text-white">{p.name}</span>
              <span className="text-xs text-orange-300/80 transition group-hover:text-orange-200">
                View →
              </span>
            </div>
          </button>
        ))}
      </div>

      {open ? (
        <div className="fixed inset-0 z-[60]" role="dialog" aria-modal="true" aria-label="Project gallery">
          <div className="absolute inset-0 bg-slate-950/90 backdrop-blur-sm" onClick={close} />

          <div className="absolute inset-0 sm:p-6">
            <div className="relative mx-auto h-full w-full max-w-6xl overflow-hidden border border-white/15 bg-slate-950 sm:rounded-2xl sm:shadow-2xl">
              <div className="absolute right-3 top-3 z-20 sm:right-4 sm:top-4">
                <button
                  type="button"
                  onClick={close}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-white ring-1 ring-white/20 backdrop-blur-md transition hover:bg-white/20"
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
                  className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-white ring-1 ring-white/20 backdrop-blur-md transition hover:bg-white/20"
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
                  className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-white ring-1 ring-white/20 backdrop-blur-md transition hover:bg-white/20"
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
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent"
                />

                <div className="absolute inset-x-0 bottom-0 z-10 p-5 sm:p-8">
                  <p className="text-base font-semibold text-white sm:text-xl">{active?.name}</p>
                  <p className="mt-2 max-w-3xl text-sm text-white/80 sm:text-base">{active?.detail}</p>
                  <p className="mt-4 text-xs text-white/55 sm:text-sm">
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
