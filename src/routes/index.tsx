import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect, useCallback } from "react";
import { Navbar } from "@/components/Navbar";
import { FadeIn } from "@/components/FadeIn";
import { openCookieSettings } from "@/lib/consent";
import logoAsset from "@/assets/logo-optimized.png";
import heroAsset from "@/assets/hero-bg.webp";
import heroMobileAsset from "@/assets/hero-bg-mobile.webp";
import imgFlughafen from "@/assets/service-flughafen.webp";
import imgKranken from "@/assets/service-kranken.webp";
import imgSerien from "@/assets/service-serien.webp";
import imgVorbestell from "@/assets/service-vorbestell.webp";
import imgPersonen from "@/assets/service-personen.webp";
import imgKur from "@/assets/service-kur.webp";
import imgKurier from "@/assets/service-kurier.webp";
import imgMesse from "@/assets/service-messe.webp";
import imgLimoBMW from "@/assets/limo-bmw7.webp";
import imgLimoMercE from "@/assets/limo-merc-e.webp";
import imgLimoMercV from "@/assets/limo-merc-v.webp";
import imgMarktSchwaben from "@/assets/city-markt-schwaben.webp";
import imgErding from "@/assets/city-erding.webp";
import imgMuenchen from "@/assets/city-muenchen.webp";
import imgAutobahn from "@/assets/city-autobahn.webp";
import izzetPortrait from "@/assets/izzet-portrait.webp";

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://taxi-izi.de/#business",
  name: "Taxiizi – Taxi und Limousine Service",
  alternateName: "Taxiizi",
  description:
    "Taxi- und Limousinenservice in München, Erding und Markt Schwaben. Flughafentransfer, Krankenfahrten, Kurierfahrten und mehr – direkt beim Fahrer buchen, 24/7 erreichbar.",
  url: "https://taxi-izi.de/",
  telephone: "+4915739288899",
  email: "taxi.izi@gmx.de",
  image: "https://taxi-izi.de/og-image.jpg",
  priceRange: "€€",
  currenciesAccepted: "EUR",
  founder: { "@type": "Person", name: "Izzet Tüymen" },
  address: {
    "@type": "PostalAddress",
    streetAddress: "Engelhardstr. 6",
    postalCode: "81369",
    addressLocality: "München",
    addressRegion: "Bayern",
    addressCountry: "DE",
  },
  areaServed: [
    { "@type": "City", name: "München" },
    { "@type": "City", name: "Erding" },
    { "@type": "City", name: "Markt Schwaben" },
    { "@type": "City", name: "Freising" },
  ],
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    opens: "00:00",
    closes: "23:59",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Leistungen",
    itemListElement: [
      "Flughafentransfer",
      "Krankenfahrten",
      "Serienfahrten",
      "Vorbestellservice",
      "Personenfahrten",
      "Kurfahrten",
      "Kurierfahrten",
      "Messefahrten",
      "Limousinenservice",
    ].map((name) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name },
    })),
  },
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Taxi München, Erding & Markt Schwaben – Taxiizi | 24/7" },
      { name: "description", content: "Taxi und Limousine Service in München, Erding und Markt Schwaben. Flughafentransfer, Krankenfahrten & mehr – direkt beim Fahrer, ohne Callcenter. Festpreise, 24/7." },
    ],
    links: [{ rel: "canonical", href: "https://taxi-izi.de/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(localBusinessJsonLd),
      },
    ],
  }),
  component: Index,
});

const services = [
  { title: "Flughafentransfer", desc: "Pünktliche Abholung und Bringdienst zum Flughafen München – stressfrei und zuverlässig zu jeder Tageszeit.", img: imgFlughafen },
  { title: "Krankenfahrten", desc: "Sichere und komfortable Fahrten zu Arzt, Klinik oder Therapie – rücksichtsvoll und auf Wunsch mit Begleitung.", img: imgKranken },
  { title: "Serienfahrten", desc: "Regelmäßige Fahrten zu festen Terminen – verlässlich organisiert, immer der gleiche vertraute Fahrer.", img: imgSerien },
  { title: "Vorbestellservice", desc: "Reservieren Sie Ihre Fahrt im Voraus – Ihr Wagen steht garantiert pünktlich zum vereinbarten Zeitpunkt bereit.", img: imgVorbestell },
  { title: "Personenfahrten", desc: "Bequeme Beförderung für Einzelpersonen oder Gruppen – diskret, sicher und in gepflegten Fahrzeugen.", img: imgPersonen },
  { title: "Kurfahrten", desc: "Komfortable Fahrten zu Kur- und Reha-Einrichtungen – entspannt und sicher ans Ziel, auch über längere Strecken.", img: imgKur },
  { title: "Kurierfahrten", desc: "Schnelle und zuverlässige Lieferung von Paketen und Dokumenten – diskret, pünktlich und direkt von Tür zu Tür.", img: imgKurier },
  { title: "Messefahrten", desc: "Komfortabler Transfer zu Messen und Veranstaltungen – pünktlich, entspannt und ohne Parkplatzstress.", img: imgMesse },
];

const facts = ["Lizenzierter Taxibetrieb", "Festpreise auf Anfrage", "24 Stunden erreichbar", "Gepflegte Fahrzeuge"];


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
      <LimousineService />
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
        fetchPriority="high"
        className="absolute inset-0 h-full w-full object-cover hidden md:block"
      />
      <img
        src={heroMobileAsset}
        alt="Taxi bei Nacht in der Stadt"
        fetchPriority="high"
        className="absolute inset-0 h-full w-full object-cover md:hidden"
      />
      <div className="absolute inset-0 hidden md:block bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
      <div className="absolute inset-0 md:hidden bg-gradient-to-b from-black/70 via-black/20 to-black/30" />
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
      <div className="relative z-20 flex h-full flex-col items-center justify-start pt-40 text-center md:items-start md:justify-center md:pt-0 md:text-left px-6 md:px-20 text-white">
        <div className="max-w-xl">
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl leading-[1.1]" style={{ textShadow: "0 2px 20px rgba(0,0,0,0.95), 0 1px 6px rgba(0,0,0,1), 0 4px 30px rgba(0,0,0,0.9)" }}>
            Ihr zuverlässiger Fahrer in München und Umgebung
          </h1>
          <div className="mt-3.5 md:mt-10 h-px w-16 bg-accent mx-auto md:mx-0" />
          <a
            href="#kontakt"
            className="mt-3.5 md:mt-10 inline-block bg-accent text-ink px-8 py-4 smallcaps font-semibold hover:bg-yellow-400 transition-colors"
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
    <section id="leistungen" className="relative bg-background py-20 md:py-40 overflow-hidden">
      {/* Diagonal yellow stripes top-left */}
      <div className="absolute top-0 left-0 w-64 h-64 overflow-hidden pointer-events-none z-10">
        <div className="absolute bg-accent/70 h-[3px] w-48" style={{ top: "72px", left: "-20px", transform: "rotate(-35deg)" }} />
        <div className="absolute bg-accent/50 h-[2px] w-36" style={{ top: "92px", left: "-10px", transform: "rotate(-35deg)" }} />
        <div className="absolute bg-accent/30 h-[2px] w-24" style={{ top: "110px", left: "0px", transform: "rotate(-35deg)" }} />
      </div>
      {/* Diagonal yellow stripes top-right */}
      <div className="absolute top-0 right-0 w-64 h-64 overflow-hidden pointer-events-none z-10">
        <div className="absolute bg-accent/70 h-[3px] w-48" style={{ top: "72px", right: "-20px", transform: "rotate(35deg)" }} />
        <div className="absolute bg-accent/50 h-[2px] w-36" style={{ top: "92px", right: "-10px", transform: "rotate(35deg)" }} />
        <div className="absolute bg-accent/30 h-[2px] w-24" style={{ top: "110px", right: "0px", transform: "rotate(35deg)" }} />
      </div>
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <FadeIn>
          <p className="smallcaps text-ink md:text-accent text-base md:text-lg mb-4">Leistungen</p>
          <h2 className="font-display text-4xl md:text-5xl mb-12 md:mb-20 md:whitespace-nowrap">
            Sicher ans Ziel – für jeden Anlass.
          </h2>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
          {services.map((s, i) => {
            const wide = i === 0 || i === 3 || i === 4 || i === 7;
            return (
              <FadeIn key={s.title} delay={(i % 3) * 80} className={wide ? "md:col-span-2" : "md:col-span-1"}>
                <div className="group relative overflow-hidden cursor-default h-[320px] md:h-[420px]">
                  <img
                    src={s.img}
                    alt={s.title}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                  {/* Number */}
                  <span className="absolute top-6 right-6 font-display text-5xl font-bold text-accent/70 leading-none select-none">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {/* Accent line */}
                  <div className="absolute bottom-0 left-0 h-[2px] w-10 bg-accent transition-all duration-500 group-hover:w-full" />
                  {/* Text */}
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <h3 className="font-display text-2xl md:text-3xl mb-2 text-white">{s.title}</h3>
                    <p className="text-sm text-white/65 leading-relaxed max-w-sm">{s.desc}</p>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}

const limoFleet = [
  { img: imgLimoBMW,    name: "BMW 7er",           detail: "Schwarz" },
  { img: imgLimoMercE,  name: "Mercedes E-Klasse",  detail: "Schwarz" },
  { img: imgLimoMercV,  name: "Mercedes V-Klasse",  detail: "Schwarz" },
];

function LimousineService() {
  const [active, setActive] = useState(0);
  const count = limoFleet.length;

  const prev = useCallback(() => setActive((a) => (a - 1 + count) % count), [count]);
  const next = useCallback(() => setActive((a) => (a + 1) % count), [count]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [next, prev]);

  const getProps = (i: number) => {
    const offset = (i - active + count) % count;
    if (offset === 0) return { z: 30, x: "0%",   scale: 1,    brightness: 1,    opacity: 1 };
    if (offset === 1) return { z: 20, x: "62%",  scale: 0.78, brightness: 0.45, opacity: 1 };
    return              { z: 20, x: "-62%", scale: 0.78, brightness: 0.45, opacity: 1 };
  };

  return (
    <section className="relative bg-ink text-white py-20 md:py-36 overflow-hidden">
      {/* Diagonal stripes bottom-left */}
      <div className="absolute bottom-0 left-0 w-64 h-64 overflow-hidden pointer-events-none hidden md:block">
        <div className="absolute bg-accent/70 h-[3px] w-48" style={{ bottom: "72px", left: "-20px", transform: "rotate(-35deg)" }} />
        <div className="absolute bg-accent/50 h-[2px] w-36" style={{ bottom: "92px", left: "-10px", transform: "rotate(-35deg)" }} />
        <div className="absolute bg-accent/30 h-[2px] w-24" style={{ bottom: "110px", left: "0px", transform: "rotate(-35deg)" }} />
      </div>
      {/* Diagonal stripes bottom-right */}
      <div className="absolute bottom-0 right-0 w-64 h-64 overflow-hidden pointer-events-none hidden md:block">
        <div className="absolute bg-accent/70 h-[3px] w-48" style={{ bottom: "72px", right: "-20px", transform: "rotate(35deg)" }} />
        <div className="absolute bg-accent/50 h-[2px] w-36" style={{ bottom: "92px", right: "-10px", transform: "rotate(35deg)" }} />
        <div className="absolute bg-accent/30 h-[2px] w-24" style={{ bottom: "110px", right: "0px", transform: "rotate(35deg)" }} />
      </div>

      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <FadeIn>
          <p className="smallcaps text-accent text-base mb-3">Fuhrpark</p>
          <h2 className="font-display text-4xl md:text-5xl mb-4">Limousinen Service.</h2>
          <p className="text-white/50 text-sm mb-16 max-w-md">Reisen Sie in höchstem Komfort – diskret, pünktlich und stilvoll.</p>
        </FadeIn>

        {/* Carousel */}
        <div className="relative h-[230px] sm:h-[340px] md:h-[420px] flex items-center justify-center">
          {limoFleet.map((car, i) => {
            const { z, x, scale, brightness, opacity } = getProps(i);
            return (
              <div
                key={car.name}
                onClick={() => setActive(i)}
                className="absolute w-[85%] md:w-[65%] cursor-pointer"
                style={{
                  zIndex: z,
                  transform: `translateX(${x}) scale(${scale})`,
                  filter: `brightness(${brightness})`,
                  opacity,
                  transition: "all 0.5s cubic-bezier(0.4,0,0.2,1)",
                }}
              >
                <div className="relative overflow-hidden aspect-video">
                  <img src={car.img} alt={car.name} loading="lazy" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  {i === active && (
                    <div className="absolute bottom-0 left-0 right-0 p-4 md:p-8">
                      <div className="h-[2px] w-10 bg-accent mb-2 md:mb-4" />
                      <h3 className="font-display text-xl md:text-3xl text-white">{car.name}</h3>
                      <p className="text-xs md:text-sm text-white/50 mt-1 smallcaps">{car.detail}</p>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-8 mt-10">
          <button onClick={prev} aria-label="Zurück" className="w-12 h-12 border border-white/20 flex items-center justify-center text-white/60 hover:border-accent hover:text-accent transition-colors">
            ←
          </button>
          <div className="flex gap-2">
            {limoFleet.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className="transition-all duration-300"
                style={{ width: i === active ? "28px" : "8px", height: "3px", background: i === active ? "var(--color-accent)" : "rgba(255,255,255,0.2)" }}
              />
            ))}
          </div>
          <button onClick={next} aria-label="Weiter" className="w-12 h-12 border border-white/20 flex items-center justify-center text-white/60 hover:border-accent hover:text-accent transition-colors">
            →
          </button>
        </div>
      </div>
    </section>
  );
}

const warumStats = [
  { num: "24/7", desc: "Erreichbar – Tag und Nacht, immer ein persönlicher Ansprechpartner" },
  { num: "100%", desc: "Festpreise auf Anfrage – transparent, ohne versteckte Kosten" },
  { num: "0", desc: "Callcenter – Sie sprechen direkt und persönlich mit Ihrem Fahrer" },
];

const factIcons = ["+", "○", "✦", "□"];

function Warum() {
  return (
    <section className="relative bg-offwhite py-20 md:py-40 overflow-hidden">
      {/* Diagonal yellow stripes bottom-left */}
      <div className="absolute bottom-0 left-0 w-64 h-64 overflow-hidden pointer-events-none z-10">
        <div className="absolute bg-accent/70 h-[3px] w-48" style={{ bottom: "72px", left: "-20px", transform: "rotate(35deg)" }} />
        <div className="absolute bg-accent/50 h-[2px] w-36" style={{ bottom: "92px", left: "-10px", transform: "rotate(35deg)" }} />
        <div className="absolute bg-accent/30 h-[2px] w-24" style={{ bottom: "110px", left: "0px", transform: "rotate(35deg)" }} />
      </div>
      {/* Diagonal yellow stripes bottom-right */}
      <div className="absolute bottom-0 right-0 w-64 h-64 overflow-hidden pointer-events-none z-10">
        <div className="absolute bg-accent/70 h-[3px] w-48" style={{ bottom: "72px", right: "-20px", transform: "rotate(-35deg)" }} />
        <div className="absolute bg-accent/50 h-[2px] w-36" style={{ bottom: "92px", right: "-10px", transform: "rotate(-35deg)" }} />
        <div className="absolute bg-accent/30 h-[2px] w-24" style={{ bottom: "110px", right: "0px", transform: "rotate(-35deg)" }} />
      </div>
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="grid lg:grid-cols-[180px_1fr] gap-10 lg:gap-16">

          {/* Left column */}
          <FadeIn className="flex flex-col">
            <div className="mb-10 flex flex-col items-center">
              <h2 className="font-display text-[4rem] md:text-[5rem] leading-[0.88] mb-10 tracking-tight w-fit">
                <div>Warum</div>
                <div className="text-center">ich.</div>
                <div className="flex justify-center mt-2">
                  <svg width="170" height="14" viewBox="0 0 170 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0,7 C14,1 28,13 42,7 C56,1 70,13 85,7 C100,1 114,13 128,7 C142,1 156,13 170,7" stroke="#FBBF24" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </h2>
              <ul className="space-y-4">
                {facts.map((f, i) => (
                  <li key={f} className="flex items-center gap-3 text-sm text-ink/80">
                    <span className="text-accent text-base leading-none">{factIcons[i]}</span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-auto pt-10">
              <div className="flex items-center gap-0.5 mb-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className="text-accent text-sm">★</span>
                ))}
                <span className="ml-2 text-xs text-muted-foreground">5.0 / 5</span>
              </div>
              <p className="text-sm text-ink/65 leading-relaxed mb-2 italic">
                „Pünktlich, freundlich, absolut empfehlenswert."
              </p>
              <p className="text-xs font-semibold">Michael K.</p>
              <p className="text-xs text-muted-foreground">Kunde, München</p>
            </div>
          </FadeIn>

          {/* Right column */}
          <FadeIn delay={120} className="flex flex-col gap-10 lg:pl-36 lg:pt-20">
            <blockquote className="font-display text-3xl md:text-4xl lg:text-[2.5rem] leading-[1.2]">
              „Kein Callcenter. Kein Zwischenhändler. Sie sprechen direkt mit Ihrem Fahrer."
            </blockquote>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {warumStats.map((s) => (
                <div key={s.num} className="bg-background p-6 md:p-8 min-h-[160px] sm:min-h-[260px] md:min-h-[320px] flex flex-col justify-between gap-4">
                  <p className="font-display text-5xl md:text-6xl font-bold text-accent">{s.num}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
}

const einsatzgebiete = [
  { label: "München", suffix: "und Umgebung", img: imgMuenchen },
  { label: "Erding", suffix: "und Umgebung", img: imgErding },
  { label: "Markt Schwaben", suffix: "und Umgebung", img: imgMarktSchwaben },
  { label: "Langstrecken", suffix: "Europaweit auf Anfrage", img: imgAutobahn, isAccent: true },
];

function Einsatzgebiete() {
  return (
    <section id="einsatzgebiete" className="relative overflow-hidden">
      <div className="grid grid-cols-2 md:grid-cols-4">
        {einsatzgebiete.map((a, i) => (
          <FadeIn
            key={a.label}
            delay={i * 80}
            className="relative group overflow-hidden h-[380px] md:h-[640px]"
          >
            <img
              src={a.img}
              alt={a.label}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className={`absolute inset-0 bg-gradient-to-t ${a.isAccent ? "from-black/90 via-accent/5 to-black/25" : "from-black/85 via-black/20 to-transparent"}`} />
            {/* Number */}
            <span className="absolute top-4 right-4 md:top-6 md:right-6 font-display text-3xl md:text-4xl font-bold text-accent/60 leading-none select-none">
              {String(i + 1).padStart(2, "0")}
            </span>
            {/* Bottom accent line */}
            <div className="absolute bottom-0 left-0 h-[2px] w-10 bg-accent transition-all duration-500 group-hover:w-full" />
            {/* Text */}
            <div className="absolute bottom-0 left-0 right-0 p-4 md:p-8">
              <p className="smallcaps text-accent/90 text-xs mb-2 tracking-widest">{a.suffix}</p>
              <h3 className="font-display text-xl md:text-3xl text-white leading-tight">{a.label}</h3>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}

function Bewertungen() {
  const [featured, ...rest] = reviews;
  return (
    <section className="relative bg-background text-ink overflow-hidden">
      {/* Featured review – full width */}
      <FadeIn>
        <div className="border-b border-ink/10 px-6 md:px-20 py-20 md:py-32 relative">
          <p className="smallcaps text-accent text-sm mb-10 tracking-widest">Bewertungen</p>
          <div className="font-display text-[6rem] md:text-[10rem] leading-none text-accent/25 select-none absolute top-6 left-6 md:top-10 md:left-16 pointer-events-none">"</div>
          <blockquote className="font-display text-3xl md:text-5xl lg:text-6xl leading-[1.15] max-w-4xl text-ink/90 italic">
            {featured.q}
          </blockquote>
          <div className="mt-10 flex items-center gap-6">
            <div>
              <div className="flex gap-0.5 mb-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className="text-accent text-sm">★</span>
                ))}
              </div>
              <p className="text-sm text-ink/50 smallcaps">{featured.who}</p>
            </div>
            <div className="h-6 w-px bg-ink/20" />
            <p className="text-xs text-ink/30 smallcaps">5.0 · Google</p>
          </div>
        </div>
      </FadeIn>

      {/* Two smaller reviews side by side */}
      <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-ink/10">
        {rest.map((r, i) => (
          <FadeIn key={r.who} delay={i * 120}>
            <div className="px-6 md:px-14 py-14 md:py-20">
              <div className="flex gap-0.5 mb-6">
                {Array.from({ length: 5 }).map((_, j) => (
                  <span key={j} className="text-accent text-xs">★</span>
                ))}
              </div>
              <p className="text-ink/70 text-lg md:text-xl leading-relaxed italic mb-8">„{r.q}"</p>
              <p className="text-sm text-ink/40 smallcaps">{r.who}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}

function UeberMich() {
  return (
    <section id="ueber-mich" className="bg-background py-20 md:py-40">
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
          <p className="mt-6 text-lg leading-relaxed text-ink/80">
            Meine Mitarbeiter und ich freuen uns auf die Fahrt!
          </p>
        </FadeIn>
      </div>
    </section>
  );
}

function Kontakt() {
  return (
    <section id="kontakt" className="bg-offwhite py-20 md:py-40">
      <div className="mx-auto max-w-2xl px-6 text-center">
        <FadeIn>
          <p className="smallcaps text-muted-foreground mb-6">Kontakt</p>
          <h2 className="font-display text-4xl md:text-6xl leading-[1.1] mb-12">Bereit für Ihre Fahrt?</h2>
          <a
            href="tel:+4915739288899"
            className="block font-display font-semibold text-4xl md:text-6xl tracking-tight hover:text-accent transition-colors"
          >
            +49 1573 9288899
          </a>
          <a
            href="tel:+4915129446834"
            className="block mt-3 text-xl md:text-2xl text-muted-foreground hover:text-accent transition-colors"
          >
            +49 151 29446834
          </a>
          <a
            href="https://wa.me/4915739288899"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-block border-2 border-accent bg-accent/10 px-8 py-3 smallcaps text-ink hover:bg-accent transition-colors"
          >
            Per WhatsApp anfragen
          </a>
        </FadeIn>

      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="relative bg-ink text-white py-16 overflow-hidden">
      <div className="mx-auto max-w-6xl px-6 flex flex-col items-center gap-6">
        <img src={logoAsset} alt="Taxiizi" className="h-10 w-auto" />
        <p className="text-sm text-white/60">© 2026 Taxiizi – Taxi und Limousine Service</p>
        <p className="smallcaps text-white/40 text-center">
          <a href="/impressum" className="hover:text-accent">Impressum</a>
          <span className="mx-3">·</span>
          <a href="/datenschutz" className="hover:text-accent">Datenschutz</a>
          <span className="mx-3">·</span>
          <button
            type="button"
            onClick={openCookieSettings}
            className="smallcaps hover:text-accent transition-colors"
          >
            Cookie-Einstellungen
          </button>
        </p>
        <p className="text-xs text-white/60 text-center">
          Teile der Inhalte dieser Website wurden mit Unterstützung von KI erstellt.
        </p>
      </div>
    </footer>
  );
}
