import { BreadcrumbBackHome, Container, MediaPlaceholder, PageHeader } from "../_components/ui";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Junior Desinor",
  description:
    "Meet Junior Desinor—builder, developer, and entrepreneur behind GOOD Construction. Investor discipline, operational execution, and a focus on long-term value.",
  alternates: { canonical: "/about-junior" },
};

export default function AboutJuniorPage() {
  return (
    <main className="flex-1">
      <Container>
        <div className="py-8 sm:py-10">
          <BreadcrumbBackHome />

          <div className="mt-6 grid gap-8 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-7">
              <PageHeader
                eyebrow="About Junior Desinor"
                title="Building legacy with investor discipline."
                desc="A builder and developer focused on disciplined execution, real-world sequencing, and long-term value."
              />

              <div className="mt-6 grid gap-3 text-sm text-black/70">
                <p>
                  Junior Desinor is a seasoned real estate developer, builder, and entrepreneur with over
                  two decades of experience transforming vision into high-value assets.
                </p>
                <p>
                  With more than $200M+ in real estate developed, built, and sold, his work reflects a
                  rare combination of financial intelligence, operational execution, and forward-thinking
                  innovation.
                </p>
                <p>
                  From flipping his first home at 18 to brokerage innovation, U.S. utility patents, a Shark
                  Tank deal, and exits—his approach is defined by speed, strategy, and scale.
                </p>
                <p className="text-black/80">
                  Create value. Move with purpose. Build something that lasts.
                </p>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="grid gap-3">
                <MediaPlaceholder
                  label="Founder portrait and leadership (representative)"
                  aspect="aspect-[4/3]"
                />
                <div className="grid gap-3 sm:grid-cols-2">
                  <MediaPlaceholder
                    label="Walking a job site with plans (representative)"
                    aspect="aspect-[1/1]"
                  />
                  <MediaPlaceholder
                    label="Aerial view of a residential development (representative)"
                    aspect="aspect-[1/1]"
                  />
                  <MediaPlaceholder
                    label="Client handoff and walkthrough (representative)"
                    aspect="aspect-[1/1]"
                  />
                  <MediaPlaceholder
                    label="Detail portrait (representative)"
                    aspect="aspect-[1/1]"
                    subtle
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}

