import {
  BreadcrumbBackHome,
  Container,
  InnerPageContent,
  MediaPlaceholder,
  PageHeader,
  TexturedSection,
} from "../_components/ui";
import { TEXTURE_HERO } from "@/lib/image-placeholders";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Process",
  description:
    "A disciplined construction process built for investor clarity: plan the scope, stack the trades, and deliver with punchlist discipline—serving Dallas–Fort Worth.",
  alternates: { canonical: "/process" },
};

function Step({ title, points }: { title: string; points: string[] }) {
  return (
    <li className="rounded-2xl border border-white/12 bg-white/[0.04] p-6 shadow-[0_8px_32px_rgba(0,0,0,0.2)] backdrop-blur-md">
      <p className="text-sm font-semibold uppercase tracking-wide text-orange-400/95">{title}</p>
      <ul className="mt-4 grid gap-2.5 text-sm leading-relaxed text-white/75">
        {points.map((p) => (
          <li key={p} className="flex gap-2">
            <span aria-hidden className="text-orange-400/70">
              —
            </span>
            <span>{p}</span>
          </li>
        ))}
      </ul>
    </li>
  );
}

export default function ProcessPage() {
  return (
    <main className="flex-1">
      <TexturedSection textureSrc={TEXTURE_HERO} opacity={0.14} darken className="relative">
        <Container>
          <InnerPageContent>
            <BreadcrumbBackHome />

            <div className="mt-8">
              <PageHeader
                eyebrow="How we execute"
                title="Process"
                desc="A simple, repeatable process designed to protect schedule, budget, and finish quality—without surprises."
              />
            </div>

            <ol className="mt-12 grid gap-5 lg:grid-cols-3">
              <Step
                title="Plan"
                points={["Scope + constraints", "Budget guardrails", "Timeline milestones"]}
              />
              <Step
                title="Stack"
                points={["Sequenced trades", "Field coordination", "Clean job site standard"]}
              />
              <Step
                title="Deliver"
                points={["Punchlist discipline", "Owner walkthrough", "Confident handoff"]}
              />
            </ol>

            <div className="mt-14 grid gap-6 lg:grid-cols-2 lg:items-start">
              <MediaPlaceholder
                label="Clean job site standards and coordinated trades (representative)"
                aspect="aspect-[16/10]"
              />
              <div className="grid gap-5">
                <div className="rounded-2xl border border-white/12 bg-white/[0.06] p-6 backdrop-blur-xl">
                  <p className="text-base font-semibold text-white">What you get</p>
                  <ul className="mt-4 grid gap-2.5 text-sm leading-relaxed text-white/75">
                    {[
                      "Weekly updates with photos (simple + consistent)",
                      "Change-order clarity before work starts",
                      "A schedule that reflects real sequencing",
                      "Clean, respectful job site standard",
                    ].map((item) => (
                      <li key={item} className="flex gap-2">
                        <span aria-hidden className="text-orange-400/70">
                          —
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <MediaPlaceholder
                  label="Project management reviewing plans with the crew (representative)"
                  aspect="aspect-[16/10]"
                  subtle
                />
              </div>
            </div>
          </InnerPageContent>
        </Container>
      </TexturedSection>
    </main>
  );
}
