"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Images } from "lucide-react";

import { CountUp } from "@/app/_components/CountUp";
import { Button } from "@/components/ui/button";

const HERO_IMG =
  "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2400&auto=format&fit=crop";
const SIDE_IMG =
  "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1200&auto=format&fit=crop";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.4], [1, 0.3]);

  return (
    <section
      ref={ref}
      aria-label="Hero"
      className="relative min-h-[min(100dvh,920px)] overflow-hidden"
    >
      <motion.div style={{ y }} className="absolute inset-0 -z-10 scale-105">
        <Image
          src={HERO_IMG}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/75 to-slate-950/45"
          aria-hidden
        />
        <div className="absolute inset-0 bg-orange-950/25 mix-blend-multiply" aria-hidden />
      </motion.div>

      <motion.div
        style={{ opacity }}
        className="relative mx-auto flex w-full max-w-7xl flex-col justify-center gap-12 px-4 pb-24 pt-16 sm:px-6 sm:pb-28 sm:pt-20 lg:min-h-[min(92dvh,880px)] lg:flex-row lg:items-center lg:gap-16 lg:px-8 lg:pt-24"
      >
        <div className="max-w-2xl flex-1">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-400/95"
          >
            Dallas–Fort Worth · Luxury construction
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.06 }}
            className="mt-4 text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-[3.5rem]"
          >
            Building the future with{" "}
            <span className="bg-gradient-to-r from-white via-orange-100 to-orange-300 bg-clip-text text-transparent">
              precision
            </span>{" "}
            and accountability.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.12 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg"
          >
            Ground-up builds, high-finish remodels, and investor-minded delivery—scoped clearly,
            sequenced cleanly, and executed with jobsite discipline that protects your timeline and
            capital.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.18 }}
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <Button asChild size="lg">
              <Link href="/contact">
                Start your project
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/projects" className="gap-2">
                <Images className="h-4 w-4 opacity-90" />
                View portfolio
              </Link>
            </Button>
          </motion.div>

          <dl className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3">
            <div className="glass-panel rounded-2xl border border-white/15 bg-slate-950/35 p-4 sm:p-5">
              <dt className="text-[11px] font-medium uppercase tracking-wide text-white/55">
                Delivered volume
              </dt>
              <dd className="mt-2 text-lg font-semibold tabular-nums text-white sm:text-xl">
                <CountUp value={200} prefix="$" suffix="M+" />
              </dd>
            </div>
            <div className="glass-panel rounded-2xl border border-white/15 bg-slate-950/35 p-4 sm:p-5">
              <dt className="text-[11px] font-medium uppercase tracking-wide text-white/55">
                Years experience
              </dt>
              <dd className="mt-2 text-lg font-semibold tabular-nums text-white sm:text-xl">
                <CountUp value={20} suffix="+" />
              </dd>
            </div>
            <div className="col-span-2 sm:col-span-1 glass-panel rounded-2xl border border-white/15 bg-slate-950/35 p-4 sm:p-5">
              <dt className="text-[11px] font-medium uppercase tracking-wide text-white/55">
                Investor-first
              </dt>
              <dd className="mt-2 text-lg font-semibold text-white sm:text-xl">One priority</dd>
            </div>
          </dl>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="lg:w-[min(100%,440px)] lg:shrink-0"
        >
          <div className="glass-panel-strong overflow-hidden rounded-2xl border border-white/20 shadow-[0_24px_80px_rgba(0,0,0,0.55)]">
            <div className="relative aspect-[4/5] w-full sm:aspect-[16/11] lg:aspect-[4/5]">
              <Image
                src={SIDE_IMG}
                alt="Modern residential construction site in progress"
                fill
                sizes="(min-width: 1024px) 440px, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-sm font-semibold text-white">Quality at speed</p>
                <p className="mt-2 text-sm leading-relaxed text-white/75">
                  Trade coordination, inspections, and finish details managed as one system—so
                  milestones are predictable and punch lists stay short.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/40 to-transparent"
      />
    </section>
  );
}
