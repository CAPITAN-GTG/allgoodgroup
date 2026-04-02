"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useId, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { PRIMARY_NAV } from "@/lib/nav";
import { cn } from "@/lib/utils";

const MOBILE_MENU_Z = 10050;

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [portalReady, setPortalReady] = useState(false);
  const panelId = useId();

  useEffect(() => {
    setPortalReady(true);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const header = (
    <header
      className={cn(
        "sticky top-0 z-50 transition-[box-shadow,background-color] duration-300",
        "border-b border-white/10 bg-slate-950/65 backdrop-blur-xl supports-[backdrop-filter]:bg-slate-950/50",
        scrolled && "shadow-[0_8px_32px_rgba(0,0,0,0.45)]",
      )}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-4 py-3.5 sm:px-6 sm:py-4 lg:px-8">
        <Link
          href="/"
          className="flex shrink-0 items-center gap-3 transition-transform duration-200 hover:scale-[0.98] active:scale-95 motion-reduce:transform-none"
          aria-label="Good Construction home"
        >
          {/* Vertical mark: minimal zoom so top/bottom aren’t tight-cropped */}
          <div className="relative h-[5.35rem] w-[7rem] shrink-0 overflow-hidden sm:hidden">
            <Image
              src="/Vertical-logo.png"
              alt=""
              fill
              priority
              sizes="112px"
              className="scale-[1.04] object-cover object-center brightness-0 invert"
              style={{ objectPosition: "50% 50%" }}
            />
          </div>
          {/* Wordmark: taller slot so width-driven cover crops less top/bottom */}
          <div className="relative hidden h-[4.75rem] min-w-[15rem] max-w-[20rem] shrink-0 overflow-hidden sm:block md:min-w-[18rem] md:max-w-[22rem] lg:h-[5.35rem] lg:min-w-[22rem] lg:max-w-[28rem]">
            <Image
              src="/Black-logo.png"
              alt=""
              fill
              priority
              sizes="(min-width: 1024px) 448px, 352px"
              className="object-cover object-left brightness-0 invert"
              style={{ objectPosition: "6% 50%" }}
            />
          </div>
          <span className="sr-only">Good Construction</span>
        </Link>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-1 xl:gap-2">
            {PRIMARY_NAV.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="rounded-lg px-3 py-2 text-sm font-medium text-white/85 transition-colors hover:bg-white/10 hover:text-white"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <Button asChild size="sm" className="hidden sm:inline-flex">
            <Link href="/contact">Request a consult</Link>
          </Button>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/20 bg-white/5 text-white backdrop-blur-md transition hover:bg-white/10 lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls={panelId}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
    </header>
  );

  const mobileOverlay =
    portalReady &&
    createPortal(
      <AnimatePresence>
        {open ? (
          <motion.div
            key="mobile-nav-overlay"
            className="fixed inset-0 lg:hidden"
            style={{ zIndex: MOBILE_MENU_Z }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <button
              type="button"
              className="absolute inset-0 bg-slate-950/70 backdrop-blur-sm"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
            />
            <motion.div
              id={panelId}
              role="dialog"
              aria-modal="true"
              aria-label="Navigation"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 320 }}
              className="absolute right-0 top-0 flex h-full w-[min(100%,22rem)] flex-col border-l border-white/15 bg-slate-950/90 shadow-2xl backdrop-blur-2xl"
            >
              <div className="flex items-center justify-between border-b border-white/10 p-4">
                <span className="text-sm font-semibold tracking-wide text-white">Menu</span>
                <button
                  type="button"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 text-white"
                  onClick={() => setOpen(false)}
                  aria-label="Close"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <nav className="flex-1 overflow-y-auto px-3 py-4" aria-label="Primary mobile">
                <ul className="grid gap-1">
                  {PRIMARY_NAV.map((item, i) => (
                    <motion.li
                      key={item.href}
                      initial={{ opacity: 0, x: 16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.04 * i }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className="flex items-center justify-between rounded-xl border border-transparent px-4 py-3.5 text-sm font-medium text-white/90 transition hover:border-white/15 hover:bg-white/5"
                      >
                        {item.label}
                        <span className="text-orange-400/80">→</span>
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </nav>
              <div className="border-t border-white/10 p-4">
                <Button asChild className="w-full">
                  <Link href="/contact" onClick={() => setOpen(false)}>
                    Request a consult
                  </Link>
                </Button>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>,
      document.body,
    );

  return (
    <>
      {header}
      {mobileOverlay}
    </>
  );
}
