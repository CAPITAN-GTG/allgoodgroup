import {
  BreadcrumbBackHome,
  Container,
  MediaPlaceholder,
  PageHeader,
  TexturedSection,
} from "../_components/ui";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Process",
  description:
    "A disciplined construction process built for investor clarity: plan the scope, stack the trades, and deliver with punchlist discipline—serving Dallas–Fort Worth.",
  alternates: { canonical: "/process" },
};

function Step({ title, points }: { title: string; points: string[] }) {
  return (
    <li className="rounded-md border border-black/10 p-4">
      <p className="text-sm font-medium">{title}</p>
      <ul className="mt-3 grid gap-2 text-sm text-black/70">
        {points.map((p) => (
          <li key={p} className="flex gap-2">
            <span aria-hidden className="text-black/40">
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
      <TexturedSection
        textureSrc="/placeholder-6.jpg"
        opacity={0.05}
        className="py-8 sm:py-10"
      >
        <Container>
          <BreadcrumbBackHome />

          <div className="mt-6">
            <PageHeader
              eyebrow="How we execute"
              title="Process"
              desc="A simple, repeatable process designed to protect schedule, budget, and finish quality—without surprises."
            />
          </div>

          <ol className="mt-8 grid gap-4 lg:grid-cols-3">
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

          <div className="mt-10 grid gap-4 lg:grid-cols-2 lg:items-start">
            <MediaPlaceholder
              label="Clean job site standards and coordinated trades (representative)"
              aspect="aspect-[16/10]"
            />
            <div className="grid gap-4">
              <div className="rounded-md border border-black/10 bg-white/70 p-4 backdrop-blur-sm">
                <p className="text-sm font-medium">What you get</p>
                <ul className="mt-3 grid gap-2 text-sm text-black/70">
                  {[
                    "Weekly updates with photos (simple + consistent)",
                    "Change-order clarity before work starts",
                    "A schedule that reflects real sequencing",
                    "Clean, respectful job site standard",
                  ].map((item) => (
                    <li key={item} className="flex gap-2">
                      <span aria-hidden className="text-black/40">
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
        </Container>
      </TexturedSection>
    </main>
  );
}

