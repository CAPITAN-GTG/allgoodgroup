import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import "../styles/globals.css";

import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { ScrollProgress } from "@/components/ScrollProgress";
import { ToastProvider } from "@/app/_components/ToastProvider";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Good Construction | Luxury Construction & Development (DFW)",
    template: "%s | Good Construction",
  },
  description:
    "Luxury-focused construction and development in Dallas–Fort Worth. Investor-first execution with disciplined planning, clean sequencing, and accountable timelines.",
  applicationName: "Good Construction",
  metadataBase: new URL("https://allgoodgroup.co"),
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: "Good Construction",
    title: "Good Construction | Luxury Construction & Development (DFW)",
    description:
      "Luxury-focused construction and development in Dallas–Fort Worth. Investor-first execution with disciplined planning, clean sequencing, and accountable timelines.",
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Good Construction | Luxury Construction & Development (DFW)",
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
    <html lang="en" className={`${poppins.variable} h-full scroll-smooth antialiased`}>
      <body className="page-bg min-h-[100dvh] flex flex-col font-sans text-white antialiased">
        <ScrollProgress />
        <Navbar />
        <div className="flex flex-1 flex-col">{children}</div>
        <Footer />
        <ToastProvider />
      </body>
    </html>
  );
}
