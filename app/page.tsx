import Image from "next/image";
import { CountUp } from "./_components/CountUp";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Luxury Construction & Development (DFW)",
  description:
    "Luxury-focused construction and development in Dallas–Fort Worth. Investor-first planning, disciplined trade coordination, and accountable timelines.",
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <div className="flex-1">
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-background focus:px-3 focus:py-2 focus:text-foreground focus:shadow"
      >
        Skip to content
      </a>

      <main id="content" className="flex-1">
        <section aria-label="Hero" className="relative overflow-hidden py-10 sm:py-14 lg:py-16">
          <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
            <Image
              src="/placeholder-1.jpg"
              alt=""
              fill
              priority
              sizes="100vw"
              className="object-cover scale-105"
            />
            <div className="absolute inset-0 bg-black/65" />
          </div>
          <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-7">
                <p className="text-xs font-medium tracking-wide text-white/70">
                  Precision. Speed. Execution.
                </p>
                <h1 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
                  Building More Than Properties—Building Legacy.
                </h1>
                <p className="mt-4 max-w-2xl text-base text-white/80 sm:text-lg">
                  Luxury-focused construction and development for Dallas–Fort Worth. Investor-first planning, disciplined coordination, and timelines that respect your capital.
                </p>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <a
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-md border border-white/25 px-4 py-2 text-sm font-medium text-white transition-transform transition-colors duration-200 hover:-translate-y-0.5 hover:border-white/50 motion-reduce:transform-none"
                  >
                    Request a consult
                  </a>
                  <a
                    href="/projects"
                    className="inline-flex items-center justify-center rounded-md px-4 py-2 text-sm text-white/90 underline-offset-4 transition-colors hover:text-white hover:underline"
                  >
                    View projects
                  </a>
                </div>

                <dl className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
                  <div className="rounded-md border border-white/15 bg-black/20 p-3">
                    <dt className="text-xs text-white/70">Developed / built / sold</dt>
                    <dd className="mt-1 text-sm font-semibold text-white">
                      <CountUp value={200} prefix="$" suffix="M+" />
                    </dd>
                  </div>
                  <div className="rounded-md border border-white/15 bg-black/20 p-3">
                    <dt className="text-xs text-white/70">Experience</dt>
                    <dd className="mt-1 text-sm font-semibold text-white">
                      <CountUp value={20} suffix="+ yrs" />
                    </dd>
                  </div>
                  <div className="rounded-md border border-white/15 bg-black/20 p-3">
                    <dt className="text-xs text-white/70">Investor mindset</dt>
                    <dd className="mt-1 text-sm font-semibold text-white">
                      <CountUp value={1} suffix=" priority" />
                    </dd>
                  </div>
                </dl>
              </div>

              <div className="lg:col-span-5">
                <div className="overflow-hidden rounded-md border border-white/15 bg-black/20">
                  <div className="relative aspect-[4/5] sm:aspect-[16/10] lg:aspect-[4/5]">
                    <Image
                      src="/placeholder-2.jpg"
                      alt="Project preview"
                      fill
                      sizes="(min-width: 1024px) 40vw, 100vw"
                      className="object-cover opacity-85"
                    />
                    <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                  </div>
                  <div className="grid gap-2 border-t border-white/10 p-4">
                    <p className="text-sm font-medium text-white">Investor-first execution</p>
                    <p className="text-sm text-white/75">
                      Clear scopes, disciplined sequencing, and jobsite accountability—built for speed without sacrificing finish quality.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
