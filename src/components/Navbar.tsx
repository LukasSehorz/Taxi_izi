import { useEffect, useState } from "react";
import logoAsset from "@/assets/logo.png";

const links = [
  { label: "Leistungen", href: "#leistungen" },
  { label: "Einsatzgebiete", href: "#einsatzgebiete" },
  { label: "Über mich", href: "#ueber-mich" },
  { label: "Kontakt", href: "#kontakt" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-white" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10 h-20 flex items-center justify-between">
        <a href="#top" className="flex items-center md:ml-16">
          <img
            src={logoAsset}
            alt="Taxiizi"
            className="h-10 w-auto"
            style={scrolled ? { filter: "invert(1)" } : undefined}
          />
        </a>

        <nav
          className={`hidden md:flex items-center gap-10 rounded-full px-8 py-3 transition-colors ${
            scrolled ? "bg-ink/5" : "bg-black/40 backdrop-blur-sm"
          }`}
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`smallcaps transition-colors ${
                scrolled ? "text-ink hover:text-accent" : "text-white hover:text-accent"
              }`}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <button
          aria-label="Menü"
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setOpen((v) => !v)}
        >
          <span className={`block h-px w-6 transition-colors ${scrolled ? "bg-ink" : "bg-white"}`} />
          <span className={`block h-px w-6 transition-colors ${scrolled ? "bg-ink" : "bg-white"}`} />
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t border-border">
          <nav className="flex flex-col px-6 py-6 gap-5">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="smallcaps text-ink"
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
