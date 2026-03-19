import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Request a consult with GOOD Construction in Dallas–Fort Worth. Share your scope and timeline and we’ll follow up with next steps.",
  alternates: { canonical: "/contact" },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}

