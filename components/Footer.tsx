import Link from "next/link";
import { Linkedin, Mail, MapPin, Phone } from "lucide-react";

import { PRIMARY_NAV } from "@/lib/nav";

const SERVICE_LINKS = [
  { label: "Luxury remodels", href: "/services" },
  { label: "Ground-up construction", href: "/services" },
  { label: "Development", href: "/services" },
  { label: "Our process", href: "/process" },
] as const;

export function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-slate-950">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      <div className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <p className="text-lg font-bold tracking-tight text-white">Good Construction</p>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/65">
              Luxury-focused construction and development in Dallas–Fort Worth. Investor-minded
              execution, disciplined field leadership, and finishes worthy of the address.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-white/80 transition hover:border-orange-400/40 hover:text-orange-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:hello@allgoodgroup.co"
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-white/80 transition hover:border-orange-400/40 hover:text-orange-300"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 lg:col-span-5 lg:grid-cols-2">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-orange-400/90">
                Navigate
              </p>
              <ul className="mt-4 grid gap-2">
                {PRIMARY_NAV.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-white/70 transition hover:text-white"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-orange-400/90">
                Services
              </p>
              <ul className="mt-4 grid gap-2">
                {SERVICE_LINKS.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-sm text-white/70 transition hover:text-white"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-3">
            <p className="text-xs font-semibold uppercase tracking-wider text-orange-400/90">
              Contact
            </p>
            <ul className="mt-4 grid gap-4 text-sm text-white/75">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-orange-400/80" aria-hidden />
                <span>
                  Dallas–Fort Worth metro
                  <br />
                  Serving luxury residential & select development
                </span>
              </li>
              <li className="flex gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-orange-400/80" aria-hidden />
                <a href="tel:+14695551234" className="transition hover:text-white">
                  (469) 555-1234
                </a>
              </li>
              <li className="flex gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-orange-400/80" aria-hidden />
                <a href="mailto:hello@allgoodgroup.co" className="transition hover:text-white">
                  hello@allgoodgroup.co
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-8 text-sm text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Good Construction. All rights reserved.</p>
          <p>
            Site by{" "}
            <a
              className="text-white/65 underline-offset-4 transition hover:text-white hover:underline"
              href="https://grimo-dev.vercel.app"
              target="_blank"
              rel="noreferrer"
            >
              GrimoDev
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
