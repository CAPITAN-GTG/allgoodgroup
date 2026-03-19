"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useId, useState } from "react";
import { Menu, X } from "lucide-react";

const NAV = [
  { label: "Services", href: "/services" },
  { label: "Process", href: "/process" },
  { label: "Investor Division", href: "/investors" },
  { label: "Ecosystem", href: "/ecosystem" },
  { label: "About Junior", href: "/about-junior" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <header className="border-b border-black/10">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          <Link
            href="/"
            className="flex items-center gap-3 transition-transform duration-200 hover:scale-[0.98] active:scale-95 motion-reduce:transform-none"
            aria-label="Go to home"
          >
            <div className="sm:hidden h-16 w-20 overflow-hidden">
              <div className="relative h-full w-full">
                <Image
                  src="/Vertical-logo.png"
                  alt="GOOD Construction"
                  fill
                  priority
                  sizes="80px"
                  className="object-cover object-center"
                />
              </div>
            </div>
            <div className="hidden sm:block h-12 w-[220px] overflow-hidden">
              <div className="relative h-full w-full">
                <Image
                  src="/Black-logo.png"
                  alt="GOOD Construction"
                  fill
                  priority
                  sizes="220px"
                  className="object-cover object-center"
                />
              </div>
            </div>
            <span className="sr-only">Home</span>
          </Link>

          <nav aria-label="Primary" className="hidden md:block">
            <ul className="flex items-center gap-6 text-sm">
              {NAV.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="underline-offset-4 transition-colors hover:underline"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center rounded-md border border-black/15 px-3 py-2 text-sm transition-transform transition-colors duration-200 hover:-translate-y-0.5 hover:border-black/30 motion-reduce:transform-none"
            >
              Request a consult
            </Link>

            <button
              type="button"
              className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border border-black/15 transition-transform transition-colors duration-200 hover:-translate-y-0.5 hover:border-black/30 motion-reduce:transform-none"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls={panelId}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile slide-in drawer */}
      <div
        className={[
          "md:hidden",
          "fixed inset-0 z-50",
          open ? "pointer-events-auto" : "pointer-events-none",
        ].join(" ")}
        aria-hidden={!open}
      >
        <div
          className={[
            "absolute inset-0 bg-black/30",
            "transition-opacity duration-200",
            open ? "opacity-100" : "opacity-0",
          ].join(" ")}
          onClick={() => setOpen(false)}
        />

        <div
          id={panelId}
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
          className={[
            "absolute right-0 top-0 h-full w-[88%] max-w-sm bg-white",
            "border-l border-black/10 shadow-lg",
            "transition-transform duration-200 ease-out",
            open ? "translate-x-0" : "translate-x-full",
            "motion-reduce:transition-none",
          ].join(" ")}
        >
          <div className="flex items-center justify-between border-b border-black/10 px-4 py-4">
            <Link
              href="/"
              className="flex items-center gap-3 transition-transform duration-200 hover:scale-[0.98] active:scale-95 motion-reduce:transform-none"
              onClick={() => setOpen(false)}
              aria-label="Go to home"
            >
              <div className="h-16 w-20 overflow-hidden">
                <div className="relative h-full w-full">
                  <Image
                    src="/Vertical-logo.png"
                    alt="GOOD Construction"
                    fill
                    priority
                    sizes="80px"
                    className="object-cover object-center"
                  />
                </div>
              </div>
              <span
                className="text-sm font-semibold tracking-wide"
                style={{ fontFamily: "var(--font-stencil)" }}
              >
                Menu
              </span>
            </Link>
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-black/15"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <nav className="px-2 py-2" aria-label="Primary (mobile drawer)">
            <ul className="grid gap-1">
              {NAV.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={[
                      "flex items-center justify-between rounded-md px-3 py-3 text-sm",
                      "transition-colors",
                      "hover:bg-black/[0.04]",
                    ].join(" ")}
                  >
                    <span>{item.label}</span>
                    <span className="text-xs text-black/40">→</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="mt-auto border-t border-black/10 p-4">
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="inline-flex w-full items-center justify-center rounded-md border border-black/15 px-4 py-2 text-sm font-medium transition-colors hover:border-black/30"
            >
              Request a consult
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

