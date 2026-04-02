import Link from "next/link";
import {
  BreadcrumbBackHome,
  Card,
  Container,
  InnerPageContent,
  MediaPlaceholder,
  PageHeader,
} from "../_components/ui";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Luxury remodels, ground-up construction, and residential development services in Dallas–Fort Worth. Built around clear scope, disciplined sequencing, and high-finish quality.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <main className="flex-1">
      <Container>
        <InnerPageContent>
          <BreadcrumbBackHome />
          <div className="mt-8">
            <PageHeader
              eyebrow="What we build"
              title="Services"
              desc="Luxury-focused construction and development services built for clarity, accountability, and high-finish results."
            />
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <Card title="Luxury Home Remodels">
              Room-by-room, full-home, and high-finish upgrades with disciplined coordination and schedule accountability.
            </Card>
            <Card title="Ground-Up Luxury Construction">
              New builds organized around clean sequencing, quality control, and a predictable path to completion.
            </Card>
            <Card title="Residential Development Projects">
              Investor-minded execution for land acquisition support, vertical build, and delivery with clear reporting.
            </Card>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-7">
              <MediaPlaceholder
                label="Luxury interior and exterior craftsmanship (representative)"
                aspect="aspect-[16/9]"
              />
            </div>
            <div className="lg:col-span-5">
              <MediaPlaceholder
                label="High-finish detail work and materials (representative)"
                aspect="aspect-[4/3]"
                subtle
              />
            </div>
          </div>

          <div className="mt-14 rounded-2xl border border-white/12 bg-gradient-to-br from-orange-600/15 via-white/[0.04] to-transparent p-8 backdrop-blur-md sm:p-10">
            <p className="text-base leading-relaxed text-white/80">
              Not sure what scope fits your property?{" "}
              <Link className="font-medium text-orange-300 underline-offset-4 transition hover:text-orange-200 hover:underline" href="/contact">
                Request a consult
              </Link>{" "}
              and we’ll map the path from scope to schedule.
            </p>
          </div>
        </InnerPageContent>
      </Container>
    </main>
  );
}
