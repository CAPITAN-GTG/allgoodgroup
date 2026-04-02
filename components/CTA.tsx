"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/animations";

export function CTA() {
  return (
    <section aria-labelledby="cta-heading" className="relative py-20 sm:py-28">
      <div className="section-divider mx-auto mb-20 max-w-5xl sm:mb-24" />

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <motion.div
            className="relative overflow-hidden rounded-3xl border border-orange-500/30 bg-gradient-to-br from-orange-600/90 via-orange-700/85 to-slate-950 p-10 shadow-[0_0_80px_rgba(234,88,12,0.25)] sm:p-14 lg:p-16"
            whileHover={{ scale: 1.005 }}
            transition={{ duration: 0.35 }}
          >
            <div
              aria-hidden
              className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute -bottom-16 left-1/4 h-48 w-48 rounded-full bg-amber-400/20 blur-3xl"
            />

            <div className="relative grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-center">
              <div>
                <h2
                  id="cta-heading"
                  className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-[2.75rem] lg:leading-tight"
                >
                  Ready for a build partner who respects your numbers?
                </h2>
                <p className="mt-5 max-w-xl text-base leading-relaxed text-white/90 sm:text-lg">
                  Share your scope, location, and timeline—we’ll respond with clear next steps and an
                  honest view of how we can help.
                </p>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row lg:flex-col lg:items-stretch xl:flex-row">
                <Button
                  asChild
                  size="lg"
                  className="bg-white text-orange-700 shadow-xl hover:bg-white/95 hover:text-orange-800"
                >
                  <Link href="/contact" className="gap-2">
                    Request a consult
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-white/40 text-white hover:bg-white/10">
                  <Link href="/process">See how we work</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        </FadeIn>
      </div>
    </section>
  );
}
