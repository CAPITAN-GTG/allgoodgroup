import { BreadcrumbBackHome, Container, MediaPlaceholder, PageHeader } from "../_components/ui";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Investor Division",
  description:
    "Investor-first renovation execution for Dallas–Fort Worth. We manage trades, control budgets, and keep timelines moving—so you can focus on the deal.",
  alternates: { canonical: "/investors" },
};

export default function InvestorsPage() {
  return (
    <main className="flex-1">
      <Container>
        <div className="py-8 sm:py-10">
          <BreadcrumbBackHome />

          <div className="mt-6">
            <PageHeader
              eyebrow="Investor Division"
              title="Execution built for investors."
              desc="We run renovations with clear scope, budget discipline, and schedule accountability—so your capital stays productive."
            />
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-7">
              <p className="text-sm text-black/70">
                GOOD Construction steps in as your execution partner—managing trades, controlling budgets,
                and accelerating timelines.
              </p>
              <ul className="mt-4 grid gap-2 sm:grid-cols-2 text-sm">
                {[
                  "Inconsistent subcontractor performance",
                  "Budget drift and scope creep",
                  "Timeline slip and rework",
                  "Profitability pressure on the backend",
                ].map((item) => (
                  <li key={item} className="rounded-md border border-black/10 px-3 py-2">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:col-span-5">
              <MediaPlaceholder
                label="Renovation execution with budget and schedule tracking (representative)"
                aspect="aspect-[4/3]"
              />
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}

