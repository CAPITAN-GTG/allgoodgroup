"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { toast } from "react-toastify";
import { ArrowLeft, Mail, MapPin } from "lucide-react";

import { Container } from "../_components/ui";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

function Field({
  label,
  placeholder,
  multiline,
  value,
  onChange,
}: {
  label: string;
  placeholder: string;
  multiline?: boolean;
  value: string;
  onChange: (next: string) => void;
}) {
  const shared =
    "w-full rounded-xl border border-white/12 bg-white/[0.04] px-4 py-3 text-sm text-white shadow-inner shadow-black/15 outline-none backdrop-blur-sm transition placeholder:text-white/35 focus:border-orange-400/40 focus:ring-2 focus:ring-orange-500/20";

  return (
    <label className="grid gap-2 text-sm">
      <span className="text-[11px] font-medium uppercase tracking-wide text-white/50">{label}</span>
      {multiline ? (
        <textarea
          className={cn(shared, "min-h-[140px] resize-y")}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      ) : (
        <input
          className={cn(shared, "h-11")}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      )}
    </label>
  );
}

const CONTACT_EMAIL = "Junior@AllGoodGroup.co";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [summary, setSummary] = useState("");

  const canSubmit = useMemo(() => {
    return name.trim().length > 0 || email.trim().length > 0 || summary.trim().length > 0;
  }, [email, name, summary]);

  const onSubmit = () => {
    toast.success("Thanks—message sent. We’ll follow up shortly.");
    setName("");
    setEmail("");
    setSummary("");
  };

  return (
    <main className="flex min-h-0 flex-1 flex-col overflow-x-clip">
      <section
        aria-label="Contact"
        className="flex min-h-[min(50dvh,560px)] flex-1 flex-col justify-center border-b border-white/10 py-10 sm:min-h-[50svh] sm:py-12 lg:py-14"
      >
        <Container>
          {/* Single unified panel: nav + headline + form | contact */}
          <div className="relative overflow-hidden rounded-3xl border border-white/12 bg-gradient-to-br from-white/[0.08] via-white/[0.03] to-transparent shadow-[0_24px_80px_rgba(0,0,0,0.45)] backdrop-blur-xl">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-orange-500/45 to-transparent"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute -right-24 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-orange-500/10 blur-3xl"
            />

            {/* Top bar */}
            <div className="relative flex items-center justify-between gap-4 border-b border-white/10 px-5 py-3.5 sm:px-8">
              <Link
                href="/"
                className="group inline-flex items-center gap-2 text-sm font-medium text-white/60 transition hover:text-white"
              >
                <ArrowLeft className="h-4 w-4 transition group-hover:-translate-x-0.5" aria-hidden />
                Back to home
              </Link>
              <span className="hidden text-[10px] font-semibold uppercase tracking-[0.25em] text-white/35 sm:inline">
                Dallas–Fort Worth
              </span>
            </div>

            {/* Headline — full width band */}
            <div className="relative border-b border-white/10 px-5 py-8 sm:px-8 sm:py-9">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-400/95">Contact</p>
              <h1 className="mt-2 max-w-2xl text-2xl font-bold leading-tight tracking-tight text-white sm:text-3xl lg:text-[2rem]">
                Start the conversation
              </h1>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/65 sm:text-[15px]">
                Share your scope and timeline—we’ll reply with next steps and a path to an on-site consult
                when it makes sense.
              </p>
            </div>

            {/* Form + direct contact */}
            <div className="relative grid lg:grid-cols-12 lg:divide-x lg:divide-white/10">
              <div className="p-5 sm:p-8 lg:col-span-7 lg:p-9">
                <h2 className="text-sm font-semibold text-white">Project details</h2>
                <p className="mt-1 text-xs text-white/45">All fields help us respond faster—fill what you can.</p>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <Field label="Name" placeholder="Your name" value={name} onChange={setName} />
                  <Field label="Email" placeholder="you@company.com" value={email} onChange={setEmail} />
                  <div className="sm:col-span-2">
                    <Field
                      label="Project summary"
                      placeholder="Scope, city, and target timeline…"
                      multiline
                      value={summary}
                      onChange={setSummary}
                    />
                  </div>
                </div>

                <div className="mt-8 flex flex-col gap-3 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
                  <Button type="button" disabled={!canSubmit} onClick={onSubmit}>
                    Send message
                  </Button>
                  <p className="text-xs text-white/45">We typically reply within one business day.</p>
                </div>
              </div>

              <aside className="flex flex-col justify-between border-t border-white/10 bg-white/[0.02] p-5 sm:p-8 lg:col-span-5 lg:border-t-0 lg:p-9">
                <div>
                  <h2 className="text-sm font-semibold text-white">Direct line</h2>
                  <p className="mt-1 text-xs text-white/45">Leadership &amp; new project inquiries</p>

                  <div className="mt-6 space-y-5">
                    <div className="flex gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.05] text-orange-400/90">
                        <Mail className="h-4 w-4" aria-hidden />
                      </div>
                      <div className="min-w-0">
                        <p className="font-semibold text-white">Junior Desinor</p>
                        <p className="text-xs text-white/50">President</p>
                        <a
                          href={`mailto:${CONTACT_EMAIL}`}
                          className="mt-2 inline-block text-sm text-orange-300/95 underline-offset-2 transition hover:text-orange-200 hover:underline"
                        >
                          {CONTACT_EMAIL}
                        </a>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.05] text-orange-400/90">
                        <MapPin className="h-4 w-4" aria-hidden />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-white/90">Service area</p>
                        <p className="mt-0.5 text-sm text-white/65">Dallas–Fort Worth, Texas</p>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="mt-8 text-xs leading-relaxed text-white/40 lg:mt-10">
                  For urgent site matters, mention it in your summary so we can prioritize.
                </p>
              </aside>
            </div>
          </div>
        </Container>
      </section>

      <section
        aria-label="Service area map"
        className="relative min-h-[min(50dvh,560px)] w-screen max-w-[100vw] flex-1 border-t border-white/10 sm:min-h-[50svh] ml-[calc(50%-50vw)]"
      >
        <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-8 bg-gradient-to-b from-slate-950/90 to-transparent" />
        <iframe
          title="Dallas–Fort Worth service area"
          className="absolute inset-0 h-full w-full border-0 grayscale-[0.15]"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps?q=Dallas%2C%20TX&z=11&output=embed"
        />
      </section>
    </main>
  );
}
