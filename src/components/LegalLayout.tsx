import type { ReactNode } from "react";
import logoAsset from "@/assets/logo-optimized.png";

export function LegalLayout({ label, title, children }: { label: string; title: string; children: ReactNode }) {
  return (
    <div className="bg-background text-ink min-h-screen flex flex-col">
      <header className="bg-ink">
        <div className="mx-auto max-w-3xl px-6 h-20 flex items-center justify-between">
          <a href="/">
            <img src={logoAsset} alt="Taxiizi" className="h-9 w-auto" />
          </a>
          <a href="/" className="smallcaps text-white/60 hover:text-accent transition-colors">
            ← Zurück zur Startseite
          </a>
        </div>
      </header>

      <main className="flex-1 py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-6">
          <p className="smallcaps text-accent mb-4">{label}</p>
          <h1 className="font-display text-4xl md:text-5xl mb-4">{title}</h1>
          <div className="h-px w-16 bg-accent mb-12" />
          {children}
        </div>
      </main>

      <footer className="bg-ink text-white py-10">
        <div className="mx-auto max-w-3xl px-6 flex flex-col items-center gap-4">
          <p className="text-sm text-white/60">© 2026 Taxiizi – Taxi und Limousine Service</p>
          <p className="smallcaps text-white/40">
            <a href="/impressum" className="hover:text-accent">Impressum</a>
            <span className="mx-3">·</span>
            <a href="/datenschutz" className="hover:text-accent">Datenschutz</a>
          </p>
        </div>
      </footer>
    </div>
  );
}

export function LegalH2({ children }: { children: ReactNode }) {
  return <h2 className="font-display text-2xl md:text-3xl mt-12 mb-4">{children}</h2>;
}

export function LegalH3({ children }: { children: ReactNode }) {
  return <h3 className="font-display text-xl mt-8 mb-3">{children}</h3>;
}

export function LegalP({ children }: { children: ReactNode }) {
  return <p className="text-ink/75 leading-relaxed mb-4">{children}</p>;
}
