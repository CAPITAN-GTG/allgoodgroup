"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

import { FadeIn } from "@/components/animations";
import { cn } from "@/lib/utils";

const TESTIMONIALS = [
  {
    quote:
      "They treated our pro forma like it mattered—weekly field notes, change orders explained in plain language, and a finish quality our buyers noticed immediately.",
    name: "Daniel R. Mercer",
    role: "Principal · Private equity real estate",
  },
  {
    quote:
      "Our remodel stayed livable for most of the job. Dust control and sequencing were night-and-day compared to past contractors—we’d use them again without hesitation.",
    name: "Laura Chen",
    role: "Homeowner · Preston Hollow",
  },
  {
    quote:
      "On a tight vertical schedule, they didn’t improvise in silence. Issues surfaced early, options had numbers attached, and we never lost a month to surprises.",
    name: "Marcus Webb",
    role: "Development partner · DFW multifamily",
  },
] as const;

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const len = TESTIMONIALS.length;
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion) return;
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % len);
    }, 7200);
    return () => window.clearInterval(id);
  }, [len, reduceMotion]);

  const t = TESTIMONIALS[index];

  return (
    <section
      aria-labelledby="testimonials-heading"
      className="relative border-t border-white/10 py-20 sm:py-28"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-400/90">
            Trust
          </p>
          <h2
            id="testimonials-heading"
            className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl"
          >
            What partners say
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-white/70">
            Long-term relationships in DFW development and luxury residential—built on transparent
            communication and execution you can underwrite.
          </p>
        </FadeIn>

        <FadeIn className="mx-auto mt-14 max-w-4xl">
          <div className="glass-panel-strong relative overflow-hidden rounded-2xl border border-white/15 p-8 sm:p-12">
            <Quote
              className="absolute right-6 top-6 h-16 w-16 text-orange-500/15 sm:h-24 sm:w-24"
              aria-hidden
            />

            <AnimatePresence mode="wait">
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35 }}
              >
                <blockquote className="relative text-lg leading-relaxed text-white/90 sm:text-xl">
                  “{t.quote}”
                </blockquote>
                <footer className="mt-8 border-t border-white/10 pt-8">
                  <p className="font-semibold text-white">{t.name}</p>
                  <p className="mt-1 text-sm text-orange-300/85">{t.role}</p>
                </footer>
              </motion.div>
            </AnimatePresence>

            <div className="mt-10 flex items-center justify-center gap-3">
              <button
                type="button"
                className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-white transition hover:bg-white/10"
                aria-label="Previous testimonial"
                onClick={() => setIndex((i) => (i - 1 + len) % len)}
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <div className="flex gap-2" role="tablist" aria-label="Testimonial slides">
                {TESTIMONIALS.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    role="tab"
                    aria-selected={i === index}
                    className={cn(
                      "h-2 rounded-full transition-all",
                      i === index ? "w-8 bg-orange-500" : "w-2 bg-white/25 hover:bg-white/40",
                    )}
                    onClick={() => setIndex(i)}
                    aria-label={`Go to testimonial ${i + 1}`}
                  />
                ))}
              </div>
              <button
                type="button"
                className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-white transition hover:bg-white/10"
                aria-label="Next testimonial"
                onClick={() => setIndex((i) => (i + 1) % len)}
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
