import {
  BreadcrumbBackHome,
  Container,
  InnerPageContent,
  MediaPlaceholder,
  PageHeader,
} from "../_components/ui";
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
        <InnerPageContent>
          <BreadcrumbBackHome />

          <div className="mt-8">
            <PageHeader
              eyebrow="Investor Division"
              title="Execution built for investors."
              desc="We run renovations with clear scope, budget discipline, and schedule accountability—so your capital stays productive."
            />
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-7">
              <p className="text-base leading-relaxed text-white/75">
                Good Construction steps in as your execution partner—managing trades, controlling budgets,
                and accelerating timelines.
              </p>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {[
                  "Inconsistent subcontractor performance",
                  "Budget drift and scope creep",
                  "Timeline slip and rework",
                  "Profitability pressure on the backend",
                ].map((item) => (
                  <li
                    key={item}
                    className="rounded-xl border border-white/12 bg-white/[0.04] px-4 py-3 text-sm text-white/85 backdrop-blur-sm"
                  >
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
        </InnerPageContent>
      </Container>
    </main>
  );
}
