import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-black/10 py-8 text-sm">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="grid gap-1 text-black/60">
            <p>© {new Date().getFullYear()} GOOD Construction. All rights reserved.</p>
          </div>
          <p className="text-black/60">
            Powered by{" "}
            <a
              className="text-black/70 underline-offset-4 hover:underline"
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

