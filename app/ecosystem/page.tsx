import Link from "next/link";
import { BreadcrumbBackHome, Container, PageHeader } from "../_components/ui";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ecosystem",
  description:
    "An integrated construction ecosystem supporting luxury builds and remodels—from core building to specialty trades—serving Dallas–Fort Worth.",
  alternates: { canonical: "/ecosystem" },
};

export default function EcosystemPage() {
  return (
    <main className="flex-1">
      <Container>
        <div className="py-8 sm:py-10">
          <BreadcrumbBackHome />

          <div className="mt-6">
            <PageHeader
              eyebrow="Sister companies"
              title="Ecosystem"
              desc="A coordinated network of specialty trades that helps keep schedules tighter and finishes consistent."
            />
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "GOOD Plumbing",
              "GOOD HVAC",
              "GOOD Pools",
              "GOOD Commercial Construction",
              "GOOD Landscape & Turf",
              "Partner Trades (as needed)",
            ].map((name) => (
              <Link
                key={name}
                href="/contact"
                className="group rounded-md border border-black/10 px-4 py-3 transition-transform duration-200 hover:-translate-y-0.5 motion-reduce:transform-none"
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="text-sm font-medium">{name}</span>
                  <span className="text-xs text-black/50 transition-colors group-hover:text-black/80">
                    Ask about scope
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </main>
  );
}

