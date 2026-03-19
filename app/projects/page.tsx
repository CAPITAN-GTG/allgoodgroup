import { BreadcrumbBackHome, Container, PageHeader } from "../_components/ui";
import { ProjectsLightbox } from "./ProjectsLightbox";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Selected work across luxury remodels, ground-up builds, and investor renovations in Dallas–Fort Worth. Explore representative scopes, finishes, and execution style.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  return (
    <main className="flex-1">
      <Container>
        <div className="py-8 sm:py-10">
          <BreadcrumbBackHome />

          <div className="mt-6">
            <PageHeader
              eyebrow="Selected work"
              title="Projects"
              desc="A look at representative scopes and finish levels—from remodels to ground-up builds and investor rehabs."
            />
          </div>

          <ProjectsLightbox
            projects={[
              {
                name: "Luxury Remodel — Kitchen + Primary Suite",
                detail:
                  "High-finish interior renovation with clear scope, tight sequencing, and punchlist discipline—built to protect schedule and finish quality.",
                imageLabel: "Luxury remodel: kitchen and primary suite",
              },
              {
                name: "Ground-Up Build — Modern Elevation",
                detail:
                  "New construction organized around disciplined trade stacking, quality control checkpoints, and consistent communication from start to handoff.",
                imageLabel: "Ground-up build: modern home elevation",
              },
              {
                name: "Investor Renovation — Fast, Controlled Execution",
                detail:
                  "Budget- and timeline-driven rehab work with change-order clarity before work starts and steady jobsite accountability.",
                imageLabel: "Investor renovation: interior refresh",
              },
              {
                name: "Residential Development — Repeatable Delivery",
                detail:
                  "Repeatable plan sets and consistent finish standards designed for predictable delivery and clean turnover from build to sale.",
                imageLabel: "Residential development: repeatable build",
              },
              {
                name: "Exterior Transformation — Curb Appeal + Lighting",
                detail:
                  "Exterior upgrades coordinated across trades—paint, landscape, and lighting—so the result looks intentional, not piecemeal.",
                imageLabel: "Exterior transformation: curb appeal upgrades",
              },
              {
                name: "High-Detail Interior — Tile, Fixtures, Millwork",
                detail:
                  "Detail-forward interior work where alignment, transitions, and finish quality matter—backed by a disciplined punchlist process.",
                imageLabel: "High-detail interior: tile fixtures millwork",
              },
            ]}
          />
        </div>
      </Container>
    </main>
  );
}

