"use client";

import { useMemo, useState } from "react";
import { toast } from "react-toastify";
import { BreadcrumbBackHome, Container, PageHeader } from "../_components/ui";

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
  return (
    <label className="grid gap-2 text-sm">
      <span className="text-xs text-black/60">{label}</span>
      {multiline ? (
        <textarea
          className="min-h-28 rounded-md border border-black/15 bg-transparent px-3 py-2 text-sm outline-none transition-colors focus:border-black/30"
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      ) : (
        <input
          className="h-10 rounded-md border border-black/15 bg-transparent px-3 text-sm outline-none transition-colors focus:border-black/30"
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      )}
    </label>
  );
}

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
    <main className="flex-1">
      <Container>
        <div className="py-8 sm:py-10">
          <BreadcrumbBackHome />

          <div className="mt-6 grid gap-6 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-7">
              <PageHeader
                eyebrow="Contact"
                title="Let’s talk scope and timeline."
                desc="Tell us what you’re building and when you want to start. We’ll reply with next steps and a clear path to an on-site consult."
              />

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <Field label="Name" placeholder="Your name" value={name} onChange={setName} />
                <Field label="Email" placeholder="you@company.com" value={email} onChange={setEmail} />
                <div className="sm:col-span-2">
                  <Field
                    label="Project summary"
                    placeholder="Scope, address/city, and target timeline…"
                    multiline
                    value={summary}
                    onChange={setSummary}
                  />
                </div>
              </div>

              <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center">
                <button
                  type="button"
                  disabled={!canSubmit}
                  onClick={onSubmit}
                  className="inline-flex items-center justify-center rounded-md border border-black/15 px-4 py-2 text-sm font-medium transition-transform duration-200 hover:-translate-y-0.5 hover:border-black/30 motion-reduce:transform-none"
                >
                  Send message
                </button>
                <p className="text-xs text-black/60">
                  Email:{" "}
                  <a className="underline-offset-4 hover:underline" href="mailto:Junior@AllGoodGroup.co">
                    Junior@AllGoodGroup.co
                  </a>
                </p>
              </div>
            </div>

            <aside className="lg:col-span-5">
              <div className="rounded-md border border-black/10 p-4">
                <p className="text-sm font-medium">Junior Desinor</p>
                <p className="mt-1 text-sm text-black/70">President</p>
                <div className="mt-4 grid gap-2 text-sm">
                  <a className="underline-offset-4 hover:underline" href="mailto:Junior@AllGoodGroup.co">
                    Junior@AllGoodGroup.co
                  </a>
                  <p className="text-sm text-black/70">Dallas–Fort Worth, Texas</p>
                </div>

                <div className="mt-6">
                  <div className="overflow-hidden rounded-md border border-black/10">
                    <div className="relative aspect-[16/10]">
                      <iframe
                        title="Directions to Dallas, Texas"
                        className="absolute inset-0 h-full w-full"
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        src="https://www.google.com/maps?q=Dallas%2C%20TX&z=11&output=embed"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </Container>
    </main>
  );
}

