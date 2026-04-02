import Image from "next/image";
import Link from "next/link";

import { pickConstructionImage } from "@/lib/image-placeholders";
import { cn } from "@/lib/utils";

export function Container({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8", className)}>{children}</div>
  );
}

/** Vertical rhythm + top hairline for inner routes */
export function InnerPageContent({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("relative py-12 sm:py-16 lg:py-20", className)}>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/18 to-transparent"
      />
      {children}
    </div>
  );
}

export function Divider() {
  return <div className="border-b border-white/10" />;
}

export function PageHeader({
  eyebrow,
  title,
  desc,
}: {
  eyebrow: string;
  title: string;
  desc: string;
}) {
  return (
    <div className="max-w-3xl">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-400/95">{eyebrow}</p>
      <h1 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-[2.5rem] lg:leading-tight">
        {title}
      </h1>
      <p className="mt-4 text-base leading-relaxed text-white/70 sm:text-lg">{desc}</p>
    </div>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  desc,
}: {
  eyebrow: string;
  title: string;
  desc: string;
}) {
  return (
    <div className="max-w-3xl">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-400/95">{eyebrow}</p>
      <h2 className="mt-3 text-2xl font-bold tracking-tight text-white sm:text-3xl">{title}</h2>
      <p className="mt-3 text-sm leading-relaxed text-white/70 sm:text-base">{desc}</p>
    </div>
  );
}

export function MediaPlaceholder({
  label,
  aspect,
  subtle,
}: {
  label: string;
  aspect: string;
  subtle?: boolean;
}) {
  const src = pickConstructionImage(label);

  return (
    <div
      role="img"
      aria-label={label}
      className={cn(
        "relative w-full overflow-hidden rounded-2xl border border-white/12 bg-white/[0.04] shadow-[0_12px_40px_rgba(0,0,0,0.35)] backdrop-blur-sm",
        aspect,
      )}
    >
      <div className="relative h-full w-full">
        <Image
          src={src}
          alt=""
          fill
          sizes="(min-width: 1024px) 560px, 100vw"
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

export function Card({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="group rounded-2xl border border-white/12 bg-white/[0.05] p-6 shadow-[0_8px_32px_rgba(0,0,0,0.25)] backdrop-blur-md transition duration-200 hover:-translate-y-1 hover:border-orange-400/25 hover:shadow-[0_16px_48px_rgba(234,88,12,0.12)] motion-reduce:transform-none">
      <p className="text-base font-semibold text-white">{title}</p>
      <p className="mt-3 text-sm leading-relaxed text-white/70">{children}</p>
      <div className="mt-5 text-xs font-medium uppercase tracking-wide text-orange-400/80 opacity-0 transition group-hover:opacity-100">
        Explore scope →
      </div>
    </div>
  );
}

export function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-white/12 bg-white/[0.04] p-4 backdrop-blur-md">
      <dt className="text-xs font-medium uppercase tracking-wide text-white/55">{label}</dt>
      <dd className="mt-1 text-sm font-semibold text-white">{value}</dd>
    </div>
  );
}

export function BreadcrumbBackHome() {
  return (
    <div className="text-sm">
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-white/70 transition hover:text-orange-300"
      >
        <span aria-hidden>←</span>
        <span>Back to home</span>
      </Link>
    </div>
  );
}

export function TexturedSection({
  textureSrc,
  opacity = 0.12,
  darken = true,
  blur = false,
  className,
  children,
}: {
  textureSrc: string;
  opacity?: number;
  darken?: boolean;
  blur?: boolean;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section className={cn("relative overflow-hidden", className ?? "")}>
      <div
        aria-hidden
        className={cn("pointer-events-none absolute inset-0 -z-10", blur ? "scale-105 blur-xl" : "")}
        style={{
          backgroundImage: `url(${textureSrc})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity,
        }}
      />
      {darken ? (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-slate-950/90 via-slate-950/85 to-slate-950"
        />
      ) : null}
      <div className="relative">{children}</div>
    </section>
  );
}
