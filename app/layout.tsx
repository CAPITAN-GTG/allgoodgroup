import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import { SiteFooter } from "@/app/_components/SiteFooter";
import { SiteHeader } from "@/app/_components/SiteHeader";
import { ToastProvider } from "@/app/_components/ToastProvider";

const oxanium = localFont({
  variable: "--font-oxanium",
  src: [
    { path: "../public/Oxanium-fonts/Oxanium-ExtraLight.ttf", weight: "200" },
    { path: "../public/Oxanium-fonts/Oxanium-Light.ttf", weight: "300" },
    { path: "../public/Oxanium-fonts/Oxanium-Regular.ttf", weight: "400" },
    { path: "../public/Oxanium-fonts/Oxanium-Medium.ttf", weight: "500" },
    { path: "../public/Oxanium-fonts/Oxanium-SemiBold.ttf", weight: "600" },
    { path: "../public/Oxanium-fonts/Oxanium-Bold.ttf", weight: "700" },
    { path: "../public/Oxanium-fonts/Oxanium-ExtraBold.ttf", weight: "800" },
  ],
});

const stencil = localFont({
  variable: "--font-stencil",
  src: [{ path: "../public/stencil-fonts/StencilBT-Regular.otf", weight: "400" }],
});

export const metadata: Metadata = {
  title: {
    default: "GOOD Construction | Luxury Construction & Development (DFW)",
    template: "%s | GOOD Construction",
  },
  description:
    "Luxury-focused construction and development in Dallas–Fort Worth. Investor-first execution with disciplined planning, clean sequencing, and accountable timelines.",
  applicationName: "GOOD Construction",
  metadataBase: new URL("https://allgoodgroup.co"),
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: "GOOD Construction",
    title: "GOOD Construction | Luxury Construction & Development (DFW)",
    description:
      "Luxury-focused construction and development in Dallas–Fort Worth. Investor-first execution with disciplined planning, clean sequencing, and accountable timelines.",
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: "GOOD Construction | Luxury Construction & Development (DFW)",
    description:
      "Luxury-focused construction and development in Dallas–Fort Worth. Investor-first execution with disciplined planning, clean sequencing, and accountable timelines.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${oxanium.variable} ${stencil.variable} h-full antialiased`}
    >
      <body className="min-h-[100dvh] flex flex-col">
        <SiteHeader />
        <div className="flex-1 flex flex-col">{children}</div>
        <SiteFooter />
        <ToastProvider />
      </body>
    </html>
  );
}
