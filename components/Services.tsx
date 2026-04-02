"use client";

import Link from "next/link";
import {
  Building2,
  Hammer,
  Landmark,
  Layers,
  Ruler,
  ShieldCheck,
} from "lucide-react";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { FadeIn, FadeInStagger, StaggerItem } from "@/components/animations";
import { cn } from "@/lib/utils";

const ITEMS = [
  {
    icon: Building2,
    title: "Ground-up luxury construction",
    desc: "New homes and estates with disciplined sequencing, quality control checkpoints, and a clear path from slab to certificate of occupancy.",
  },
  {
    icon: Hammer,
    title: "High-finish remodels",
    desc: "Full-home and selective-room upgrades with protected living spaces, dust control, and trade schedules that respect your daily life.",
  },
  {
    icon: Landmark,
    title: "Residential development",
    desc: "Investor-aligned execution—scopes tied to pro formas, reporting you can trust, and delivery that protects yield and exit timing.",
  },
  {
    icon: Layers,
    title: "Design coordination",
    desc: "We align architects, engineers, and specialty trades early so details, lead times, and long-lead materials never ambush the schedule.",
  },
  {
    icon: Ruler,
    title: "Pre-construction planning",
    desc: "Budget validation, value engineering without cheapening finish, and a realistic master schedule before we mobilize on site.",
  },
  {
    icon: ShieldCheck,
    title: "Warranty & closeout",
    desc: "Structured punch walks, documented closeout, and responsive follow-through so handoff is clean and occupancy is confident.",
  },
] as const;

export function Services() {
  return (
    <section
      aria-labelledby="services-heading"
      className="relative border-t border-white/10 bg-slate-950/50 py-20 sm:py-28"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-orange-500/40 to-transparent" />

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-400/90">
            Capabilities
          </p>
          <h2
            id="services-heading"
            className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-[2.5rem]"
          >
            Construction services built for clarity and control
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/70 sm:text-lg">
            From first concept through keys-in-hand, we structure work so decisions are timely,
            budgets stay intelligible, and the finished product matches the promise—especially when
            the stakes are high.
          </p>
        </FadeIn>

        <FadeInStagger className="mt-14 grid gap-5 sm:grid-cols-2 xl:grid-cols-3" stagger={0.06}>
          {ITEMS.map(({ icon: Icon, title, desc }) => (
            <StaggerItem key={title}>
              <motion.article
                whileHover={{ y: -4, transition: { duration: 0.22 } }}
                className={cn(
                  "glass-panel group flex h-full flex-col rounded-2xl border border-white/12 p-6 sm:p-7",
                  "transition-shadow duration-300 hover:border-orange-400/25 hover:shadow-[0_20px_60px_rgba(234,88,12,0.12)]",
                )}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500/25 to-orange-600/10 text-orange-400 ring-1 ring-orange-400/20">
                  <Icon className="h-6 w-6" aria-hidden />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-white">{title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-white/65">{desc}</p>
                <div className="mt-5 text-xs font-medium uppercase tracking-wide text-orange-400/80 opacity-0 transition group-hover:opacity-100">
                  Discuss this scope →
                </div>
              </motion.article>
            </StaggerItem>
          ))}
        </FadeInStagger>

        <FadeIn className="mt-14 flex flex-col items-start justify-between gap-6 rounded-2xl border border-white/10 bg-gradient-to-br from-orange-600/15 via-slate-900/40 to-slate-950/80 p-8 backdrop-blur-md sm:flex-row sm:items-center sm:p-10">
          <div>
            <p className="text-sm font-semibold text-white">Not sure where to start?</p>
            <p className="mt-2 max-w-xl text-sm text-white/70">
              Tell us about your lot, timeline, and target outcome—we’ll map phases, budgets, and
              the right team before mobilization.
            </p>
          </div>
          <Button asChild size="lg">
            <Link href="/contact">Book a strategy call</Link>
          </Button>
        </FadeIn>
      </div>
    </section>
  );
}
