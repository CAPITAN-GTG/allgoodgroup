import type { Metadata } from "next";

import { CTA } from "@/components/CTA";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { Services } from "@/components/Services";
import { Testimonials } from "@/components/Testimonials";

export const metadata: Metadata = {
  title: { absolute: "Good Construction" },
  description:
    "Luxury-focused construction and development in Dallas–Fort Worth. Investor-first planning, disciplined trade coordination, and accountable timelines.",
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:rounded-xl focus:bg-white focus:px-4 focus:py-2 focus:text-slate-950 focus:shadow-lg"
      >
        Skip to content
      </a>

      <main id="content" className="flex flex-1 flex-col">
        <Hero />
        <Services />
        <Projects />
        <Testimonials />
        <CTA />
      </main>
    </div>
  );
}
