import Link from "next/link";
import Image from "next/image";

const MEDIA_PLACEHOLDER_SRCS = [
  "/placeholder-7.jpg",
  "/placeholder-8.jpg",
  "/placeholder-9.jpg",
  "/placeholder-10.jpg",
] as const;

function pickMediaPlaceholderSrc(label: string) {
  let hash = 0;
  for (let i = 0; i < label.length; i++) {
    hash = (hash * 31 + label.charCodeAt(i)) >>> 0;
  }
  return MEDIA_PLACEHOLDER_SRCS[hash % MEDIA_PLACEHOLDER_SRCS.length];
}

export function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
      {children}
    </div>
  );
}

export function Divider() {
  return <div className="border-b border-black/10" />;
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
      <p className="text-xs font-medium tracking-wide text-black/60">{eyebrow}</p>
      <h1 className="mt-2 font-semibold tracking-tight text-3xl sm:text-4xl">
        {title}
      </h1>
      <p className="mt-3 text-sm text-black/70 sm:text-base">{desc}</p>
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
      <p className="text-xs font-medium tracking-wide text-black/60">{eyebrow}</p>
      <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
        {title}
      </h2>
      <p className="mt-3 text-sm text-black/70 sm:text-base">{desc}</p>
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
  const src = pickMediaPlaceholderSrc(label);

  return (
    <div
      role="img"
      aria-label={label}
      className={[
        "w-full overflow-hidden rounded-md border border-black/10 bg-black/[0.02]",
        aspect,
      ].join(" ")}
    >
      <div className="relative h-full w-full">
        <Image
          src={src}
          alt=""
          fill
          sizes="(min-width: 1024px) 520px, 100vw"
          className={[
            "object-cover",
            subtle ? "opacity-70" : "opacity-85",
          ].join(" ")}
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
    <div className="group rounded-md border border-black/10 p-4 transition-transform duration-200 hover:-translate-y-0.5 motion-reduce:transform-none">
      <p className="text-sm font-medium">{title}</p>
      <p className="mt-2 text-sm text-black/70">{children}</p>
      <div className="mt-4 text-xs text-black/50 transition-colors group-hover:text-black/80">
        Learn more
      </div>
    </div>
  );
}

export function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-md border border-black/10 p-3">
      <dt className="text-xs text-black/60">{label}</dt>
      <dd className="mt-1 text-sm font-semibold">{value}</dd>
    </div>
  );
}

export function BreadcrumbBackHome() {
  return (
    <div className="text-sm">
      <Link href="/" className="inline-flex items-center gap-2 underline-offset-4 hover:underline">
        <span aria-hidden>←</span>
        <span>Back to home</span>
      </Link>
    </div>
  );
}

export function TexturedSection({
  textureSrc,
  opacity = 0.08,
  darken = false,
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
    <section
      className={[
        "relative overflow-hidden",
        className ?? "",
      ].join(" ")}
    >
      <div
        aria-hidden
        className={[
          "pointer-events-none absolute inset-0",
          blur ? "scale-105 blur-xl" : "",
        ].join(" ")}
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
          className="pointer-events-none absolute inset-0 bg-black/55"
        />
      ) : null}
      <div className="relative">{children}</div>
    </section>
  );
}

