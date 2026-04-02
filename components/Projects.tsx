"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import { FadeIn } from "@/components/animations";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const PROJECTS = [
  {
    title: "Modern estate · Westlake",
    type: "Ground-up",
    meta: "18 mo · High-performance envelope",
    src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "Resort-style remodel · Preston Hollow",
    type: "Remodel",
    meta: "Full-home · Pool & outdoor living",
    src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "Townhome development · Urban core",
    type: "Multi-unit",
    meta: "Vertical build · Investor reporting",
    src: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "Lakeside custom home · Rockwall",
    type: "Ground-up",
    meta: "Waterfront · Wind & flood detailing",
    src: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "Executive interior refresh · Uptown",
    type: "Remodel",
    meta: "Phased · Occupied renovation",
    src: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "Spec luxury · Frisco corridor",
    type: "Development",
    meta: "Fast-track · Designer finishes",
    src: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1600&auto=format&fit=crop",
  },
] as const;

export function Projects() {
  return (
    <section
      aria-labelledby="projects-heading"
      className="relative overflow-hidden py-20 sm:py-28"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(234,88,12,0.14),transparent)]" />

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <FadeIn className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-400/90">
              Selected work
            </p>
            <h2
              id="projects-heading"
              className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl"
            >
              Projects that balance speed, budget, and finish
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/70 sm:text-lg">
              A snapshot of recent delivery—each engagement scoped for investor-grade clarity and
              built with the same field discipline we bring to every site.
            </p>
          </FadeIn>
          <FadeIn delay={0.08}>
            <Button asChild variant="outline">
              <Link href="/projects" className="gap-2">
                Full project index
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </Button>
          </FadeIn>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {PROJECTS.map((p, i) => (
            <FadeIn key={p.title} delay={0.04 * i}>
              <motion.article
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.25 }}
                className="group relative overflow-hidden rounded-2xl border border-white/12 bg-slate-900/30 shadow-xl"
              >
                <Link href="/projects" className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500/70 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={p.src}
                      alt=""
                      fill
                      sizes="(min-width: 1280px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />
                    <div
                      className={cn(
                        "absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent",
                        "opacity-90 transition duration-300 group-hover:opacity-100",
                      )}
                    />
                    <div className="absolute inset-0 flex flex-col justify-end p-6">
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-orange-300/95">
                        {p.type}
                      </span>
                      <h3 className="mt-2 text-lg font-semibold text-white">{p.title}</h3>
                      <p className="mt-1 text-sm text-white/70">{p.meta}</p>
                      <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-white opacity-0 transition group-hover:opacity-100">
                        View details
                        <ArrowUpRight className="h-4 w-4" />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
