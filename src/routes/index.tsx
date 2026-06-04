import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { FadeIn } from "@/components/FadeIn";
import logoAsset from "@/assets/logo.png";
import heroAsset from "@/assets/hero-bg.png";
import izzetPortrait from "@/assets/izzet-portrait.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Taxiizi – Ihr Fahrer in München und Umgebung" },
      { name: "description", content: "Taxi und Limousine Service in München. Direkt beim Fahrer, ohne Callcenter. Festpreise, 24/7 erreichbar." },
    ],
  }),
  component: Index,
});

const services = [
  { n: "01", title: "Stadttransfer", desc: "Komfortable Fahrten innerhalb Münchens – pünktlich, diskret und ohne Umwege." },
  { n: "02", title: "Flughafentransfer", desc: "Verlässliche Abholung und Bringdienst zum Flughafen München zu jeder Tageszeit." },
  { n: "03", title: "Limousinenservice", desc: "Geschäftsfahrten, Hochzeiten und besondere Anlässe – stilvoll im gepflegten Fahrzeug." },
];

const facts = ["Lizenzierter Taxibetrieb", "Festpreise auf Anfrage", "24 Stunden erreichbar", "Gepflegte Fahrzeuge"];

const cities = ["München", "Erding", "Freising", "Flughafen MUC", "Rosenheim", "Ingolstadt", "Augsburg"];

const reviews = [
  { q: "Pünktlich, freundlich, absolut empfehlenswert.", who: "Michael K., München" },
  { q: "Endlich ein Fahrer, dem man vertrauen kann. Immer wieder gerne.", who: "Sabine R., Erding" },
  { q: "Saubere Wagen, faire Preise, persönlicher Kontakt – genau das, was ich gesucht habe.", who: "Thomas W., Freising" },
];

function Index() {
  return (
    <div id="top" className="bg-background text-ink">
      <Navbar />
      <Hero />
      <Leistungen />
      <Warum />
      <Einsatzgebiete />
      <Bewertungen />
      <UeberMich />
      <Kontakt />
      <Footer />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative h-screen min-h-[640px] w-full overflow-hidden">
      <img
        src={heroAsset}
        alt="Taxi bei Nacht in der Stadt"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
      {/* Diagonal yellow stripes top-left */}
      <div className="absolute top-0 left-0 w-64 h-64 overflow-hidden pointer-events-none z-10">
        <div className="absolute bg-accent/70 h-[3px] w-48" style={{ top: "72px", left: "-20px", transform: "rotate(-35deg)" }} />
        <div className="absolute bg-accent/50 h-[2px] w-36" style={{ top: "92px", left: "-10px", transform: "rotate(-35deg)" }} />
        <div className="absolute bg-accent/30 h-[2px] w-24" style={{ top: "110px", left: "0px", transform: "rotate(-35deg)" }} />
      </div>
      {/* Diagonal yellow stripes bottom-left */}
      <div className="absolute bottom-0 left-0 w-64 h-64 overflow-hidden pointer-events-none z-10">
        <div className="absolute bg-accent/70 h-[3px] w-48" style={{ bottom: "72px", left: "-20px", transform: "rotate(35deg)" }} />
        <div className="absolute bg-accent/50 h-[2px] w-36" style={{ bottom: "92px", left: "-10px", transform: "rotate(35deg)" }} />
        <div className="absolute bg-accent/30 h-[2px] w-24" style={{ bottom: "110px", left: "0px", transform: "rotate(35deg)" }} />
      </div>
      <div className="relative z-20 flex h-full flex-col items-start justify-center px-10 md:px-20 text-left text-white">
        <div className="max-w-xl">
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl leading-[1.1]" style={{ textShadow: "0 2px 20px rgba(0,0,0,0.95), 0 1px 6px rgba(0,0,0,1), 0 4px 30px rgba(0,0,0,0.9)" }}>
            Ihr zuverlässiger Fahrer in München und Umgebung
          </h1>
          <div className="mt-10 h-px w-16 bg-accent" />
          <a
            href="#kontakt"
            className="mt-10 inline-block bg-accent text-ink px-8 py-4 smallcaps font-semibold hover:bg-yellow-400 transition-colors"
          >
            Jetzt Fahrt anfragen
          </a>
        </div>
      </div>
    </section>
  );
}

function Leistungen() {
  return (
    <section id="leistungen" className="bg-background py-28 md:py-40">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <FadeIn>
          <p className="smallcaps text-muted-foreground mb-4">Leistungen</p>
          <h2 className="font-display text-4xl md:text-5xl max-w-2xl mb-20">
            Drei Wege, sicher anzukommen.
          </h2>
        </FadeIn>
        <div>
          {services.map((s, i) => (
            <FadeIn key={s.n} delay={i * 100}>
              <div className="border-l-2 border-accent pl-8 md:pl-12 py-10 md:py-14 border-b border-b-border last:border-b-0 grid md:grid-cols-12 gap-6 items-baseline">
                <div className="md:col-span-2 smallcaps text-muted-foreground">{s.n}</div>
                <h3 className="md:col-span-5 font-display text-3xl md:text-4xl">{s.title}</h3>
                <p className="md:col-span-5 text-sm md:text-base text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function Warum() {
  return (
    <section className="bg-offwhite py-28 md:py-40">
      <div className="mx-auto max-w-6xl px-6 md:px-10 grid md:grid-cols-2 gap-16 md:gap-24">
        <FadeIn>
          <p className="smallcaps text-muted-foreground mb-6">Warum Taxiizi</p>
          <blockquote className="font-display text-3xl md:text-4xl lg:text-5xl leading-[1.2]">
            „Kein Callcenter. Kein Zwischenhändler. Sie sprechen direkt mit Ihrem Fahrer."
          </blockquote>
        </FadeIn>
        <FadeIn delay={150}>
          <ul className="md:pt-16">
            {facts.map((f) => (
              <li key={f} className="border-t border-border py-5 text-lg last:border-b">
                {f}
              </li>
            ))}
          </ul>
        </FadeIn>
      </div>
    </section>
  );
}

function Einsatzgebiete() {
  return (
    <section id="einsatzgebiete" className="bg-background py-28 md:py-40">
      <div className="mx-auto max-w-6xl px-6 md:px-10 grid md:grid-cols-2 gap-16 md:gap-24">
        <FadeIn>
          <p className="smallcaps text-muted-foreground mb-6">Einsatzgebiete</p>
          <h2 className="font-display text-4xl md:text-6xl leading-[1.1]">Wir fahren für Sie.</h2>
        </FadeIn>
        <FadeIn delay={150}>
          <ul className="md:pt-8 space-y-4">
            {cities.map((c) => (
              <li key={c} className="text-xl md:text-2xl text-muted-foreground">{c}</li>
            ))}
          </ul>
          <p className="mt-10 smallcaps text-muted-foreground">Langstrecken auf Anfrage</p>
        </FadeIn>
      </div>
    </section>
  );
}

function Bewertungen() {
  return (
    <section className="bg-ink text-white py-28 md:py-40">
      <div className="mx-auto max-w-4xl px-6 md:px-10">
        <FadeIn>
          <p className="smallcaps text-white/50 mb-16 text-center">Bewertungen</p>
        </FadeIn>
        <div>
          {reviews.map((r, i) => (
            <FadeIn key={r.who} delay={i * 100}>
              <div className={`py-14 md:py-20 ${i !== 0 ? "border-t border-accent/40" : ""}`}>
                <p className="font-display italic text-2xl md:text-4xl leading-[1.35]">
                  „{r.q}"
                </p>
                <p className="smallcaps text-white/50 mt-8">{r.who}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function UeberMich() {
  return (
    <section id="ueber-mich" className="bg-background py-28 md:py-40">
      <div className="mx-auto max-w-6xl px-6 md:px-10 grid md:grid-cols-2 gap-16 md:gap-20 items-center">
        <FadeIn>
          <img
            src={izzetPortrait}
            alt="Izzet Tüymen, Inhaber von Taxiizi"
            width={896}
            height={1152}
            loading="lazy"
            className="w-full h-auto object-cover aspect-[4/5]"
          />
        </FadeIn>
        <FadeIn delay={100}>
          <p className="smallcaps text-muted-foreground mb-6">Über mich</p>
          <h2 className="font-display text-4xl md:text-5xl leading-[1.15] mb-8">
            Hinter dem Steuer: Izzet Tüymen
          </h2>
          <div className="h-px w-16 bg-accent mb-8" />
          <p className="text-lg leading-relaxed text-ink/80">
            Mein Name ist Izzet Tüymen. Als Inhaber und Fahrer von Taxiizi bringe ich jahrelange Erfahrung,
            Zuverlässigkeit und echte Leidenschaft für meinen Beruf mit. Ihr Komfort und Ihre Sicherheit
            stehen bei mir immer an erster Stelle.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}

function Kontakt() {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const [sent, setSent] = useState(false);

  return (
    <section id="kontakt" className="bg-offwhite py-28 md:py-40">
      <div className="mx-auto max-w-2xl px-6 text-center">
        <FadeIn>
          <p className="smallcaps text-muted-foreground mb-6">Kontakt</p>
          <h2 className="font-display text-4xl md:text-6xl leading-[1.1] mb-12">Bereit für Ihre Fahrt?</h2>
          <a
            href="tel:+4915123456789"
            className="block font-display font-semibold text-4xl md:text-6xl tracking-tight hover:text-accent transition-colors"
          >
            +49 151 234 567 89
          </a>
          <a
            href="https://wa.me/4915123456789"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-block border border-ink px-8 py-3 smallcaps text-ink hover:bg-ink hover:text-white transition-colors"
          >
            Per WhatsApp anfragen
          </a>
        </FadeIn>

        <FadeIn delay={150}>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
            className="mt-20 text-left space-y-6"
          >
            <div>
              <label className="smallcaps text-muted-foreground block mb-2">Name</label>
              <input
                required
                maxLength={100}
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full border-b border-ink/30 bg-transparent py-3 focus:outline-none focus:border-accent"
              />
            </div>
            <div>
              <label className="smallcaps text-muted-foreground block mb-2">Telefon</label>
              <input
                required
                maxLength={30}
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="w-full border-b border-ink/30 bg-transparent py-3 focus:outline-none focus:border-accent"
              />
            </div>
            <div>
              <label className="smallcaps text-muted-foreground block mb-2">Nachricht</label>
              <textarea
                required
                maxLength={1000}
                rows={3}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full border-b border-ink/30 bg-transparent py-3 focus:outline-none focus:border-accent resize-none"
              />
            </div>
            <button
              type="submit"
              className="bg-accent text-ink smallcaps px-10 py-4 hover:bg-ink hover:text-accent transition-colors"
            >
              {sent ? "Vielen Dank — wir melden uns" : "Anfrage senden"}
            </button>
          </form>
        </FadeIn>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="relative bg-ink text-white py-16 overflow-hidden">
      <div className="absolute bottom-0 left-0 w-64 h-64 pointer-events-none">
        <div className="absolute bg-accent/70 h-[3px] w-48" style={{ bottom: "44px", left: "-20px", transform: "rotate(-35deg)" }} />
        <div className="absolute bg-accent/50 h-[2px] w-36" style={{ bottom: "30px", left: "-10px", transform: "rotate(-35deg)" }} />
        <div className="absolute bg-accent/30 h-[2px] w-24" style={{ bottom: "16px", left: "0px", transform: "rotate(-35deg)" }} />
      </div>
      <div className="mx-auto max-w-6xl px-6 flex flex-col items-center gap-6">
        <img src={logoAsset} alt="Taxiizi" className="h-10 w-auto" />
        <p className="text-sm text-white/60">© 2026 Taxiizi – Taxi und Limousine Service</p>
        <p className="smallcaps text-white/40">
          <a href="#" className="hover:text-accent">Impressum</a>
          <span className="mx-3">·</span>
          <a href="#" className="hover:text-accent">Datenschutz</a>
        </p>
      </div>
    </footer>
  );
}
