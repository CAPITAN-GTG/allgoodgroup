import {
  BreadcrumbBackHome,
  Container,
  InnerPageContent,
  PageHeader,
} from "../_components/ui";
import { cn } from "@/lib/utils";
import Image from "next/image";
import type { Metadata } from "next";

function JuniorPhoto({
  src,
  alt,
  aspect,
  subtle,
}: {
  src: string;
  alt: string;
  aspect: string;
  subtle?: boolean;
}) {
  return (
    <div
      className={cn(
        "relative w-full overflow-hidden rounded-2xl border border-white/12 bg-white/[0.04] shadow-[0_12px_40px_rgba(0,0,0,0.35)] backdrop-blur-sm",
        aspect,
      )}
    >
      <div className="relative h-full w-full">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(min-width: 1024px) 560px, 50vw"
          className={cn("object-cover", subtle ? "opacity-75" : "opacity-90")}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/50 to-transparent"
        />
      </div>
    </div>
  );
}

export const metadata: Metadata = {
  title: "About Junior Desinor",
  description:
    "Meet Junior Desinor—builder, developer, and entrepreneur behind Good Construction. Investor discipline, operational execution, and a focus on long-term value.",
  alternates: { canonical: "/about-junior" },
};

export default function AboutJuniorPage() {
  return (
    <main className="flex-1">
      <Container>
        <InnerPageContent>
          <BreadcrumbBackHome />

          <div className="mt-8 grid gap-12 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-7">
              <PageHeader
                eyebrow="About Junior Desinor"
                title="Building legacy with investor discipline."
                desc="A builder and developer focused on disciplined execution, real-world sequencing, and long-term value."
              />

              <div className="mt-8 grid gap-4 text-base leading-relaxed text-white/75">
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
                <p className="border-l-2 border-orange-500/50 pl-4 text-lg font-medium text-white">
                  Create value. Move with purpose. Build something that lasts.
                </p>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="grid gap-4">
                <JuniorPhoto
                  src="/junior-1.webp"
                  alt="Junior Desinor"
                  aspect="aspect-[4/3]"
                />
                <div className="grid gap-3 sm:grid-cols-2">
                  <JuniorPhoto
                    src="/junior-2.webp"
                    alt="Junior Desinor on site"
                    aspect="aspect-[1/1]"
                  />
                  <JuniorPhoto
                    src="/junior-3.webp"
                    alt="Junior Desinor at a development"
                    aspect="aspect-[1/1]"
                  />
                  <JuniorPhoto
                    src="/junior-4.webp"
                    alt="Junior Desinor with clients"
                    aspect="aspect-[1/1]"
                  />
                  <JuniorPhoto
                    src="/junior-5.webp"
                    alt="Junior Desinor"
                    aspect="aspect-[1/1]"
                    subtle
                  />
                </div>
              </div>
            </div>
          </div>
        </InnerPageContent>
      </Container>
    </main>
  );
}
