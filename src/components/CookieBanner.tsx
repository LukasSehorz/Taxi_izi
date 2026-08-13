import { useCallback, useEffect, useState } from "react";
import { OPEN_COOKIE_SETTINGS_EVENT, readConsent, saveConsent } from "@/lib/consent";

function Toggle({
  checked,
  onChange,
  label,
}: {
  checked: boolean;
  onChange: (value: boolean) => void;
  label: string;
}) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      aria-label={label}
      onClick={() => onChange(!checked)}
      className={`relative h-6 w-11 shrink-0 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${
        checked ? "bg-accent" : "bg-ink/15"
      }`}
    >
      <span
        className={`absolute top-1 h-4 w-4 bg-white transition-transform ${
          checked ? "translate-x-6" : "translate-x-1"
        } left-0`}
      />
    </button>
  );
}

function OptionRow({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-start justify-between gap-4 border-t border-border py-4">
      <div className="min-w-0">
        <p className="smallcaps text-ink">{title}</p>
        <p className="mt-1.5 text-sm leading-relaxed text-ink/60">{description}</p>
      </div>
      <div className="pt-1">{children}</div>
    </div>
  );
}

export function CookieBanner() {
  const [open, setOpen] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);

  useEffect(() => {
    const stored = readConsent();
    if (!stored) {
      setOpen(true);
    } else {
      setAnalytics(stored.analytics);
      setMarketing(stored.marketing);
    }

    const onOpenSettings = () => {
      const current = readConsent();
      setAnalytics(current?.analytics ?? false);
      setMarketing(current?.marketing ?? false);
      setShowSettings(true);
      setOpen(true);
    };

    window.addEventListener(OPEN_COOKIE_SETTINGS_EVENT, onOpenSettings);
    return () => window.removeEventListener(OPEN_COOKIE_SETTINGS_EVENT, onOpenSettings);
  }, []);

  const persist = useCallback((nextAnalytics: boolean, nextMarketing: boolean) => {
    saveConsent(nextAnalytics, nextMarketing);
    setAnalytics(nextAnalytics);
    setMarketing(nextMarketing);
    setShowSettings(false);
    setOpen(false);
  }, []);

  if (!open) return null;

  const primaryButton =
    "w-full sm:w-auto bg-accent px-6 py-3 smallcaps font-semibold text-ink transition-colors hover:bg-yellow-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink";
  const secondaryButton =
    "w-full sm:w-auto border border-ink/20 px-6 py-3 smallcaps text-ink transition-colors hover:border-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink";
  const tertiaryButton =
    "w-full sm:w-auto px-6 py-3 smallcaps text-ink/60 underline underline-offset-4 transition-colors hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink";

  return (
    <div className="fixed inset-x-0 bottom-0 z-[100] p-3 sm:p-6">
      <div
        role="dialog"
        aria-modal="false"
        aria-label="Cookie-Einstellungen"
        className="mx-auto w-full max-w-3xl border border-border bg-white shadow-[0_10px_50px_rgba(0,0,0,0.22)]"
      >
        <div className="h-[3px] w-full bg-accent" />

        <div className="max-h-[75vh] overflow-y-auto px-5 py-6 sm:px-8 sm:py-7">
          <p className="smallcaps text-accent">Datenschutz</p>
          <h2 className="mt-3 font-display text-xl sm:text-2xl text-ink">
            Wir respektieren Ihre Privatsphäre
          </h2>
          <div className="mt-3 h-px w-16 bg-accent" />

          <p className="mt-4 text-sm leading-relaxed text-ink/70">
            Wir verwenden Cookies und vergleichbare Technologien. Technisch notwendige Cookies sind
            für den Betrieb der Website erforderlich. Zusätzlich setzen wir – nur mit Ihrer
            Einwilligung – den Google Tag Manager sowie darüber eingebundene Google-Dienste für
            Statistik und Marketing ein. Sie können Ihre Auswahl jederzeit über
            „Cookie-Einstellungen" im Seitenfuß ändern. Details finden Sie in unserer{" "}
            <a href="/datenschutz" className="underline underline-offset-2 hover:text-accent">
              Datenschutzerklärung
            </a>
            .
          </p>

          {showSettings && (
            <div className="mt-6">
              <OptionRow
                title="Notwendig"
                description="Erforderlich für den Betrieb der Website und die Speicherung Ihrer Cookie-Auswahl. Diese Kategorie kann nicht deaktiviert werden."
              >
                <span className="smallcaps text-ink/40">Immer aktiv</span>
              </OptionRow>

              <OptionRow
                title="Statistik / Analyse"
                description="Hilft uns zu verstehen, wie die Website genutzt wird, damit wir sie verbessern können (z. B. Google Analytics über den Google Tag Manager)."
              >
                <Toggle
                  checked={analytics}
                  onChange={setAnalytics}
                  label="Statistik und Analyse erlauben"
                />
              </OptionRow>

              <OptionRow
                title="Marketing"
                description="Ermöglicht personalisierte Werbung und die Messung von Werbeerfolgen (z. B. Google Ads über den Google Tag Manager)."
              >
                <Toggle checked={marketing} onChange={setMarketing} label="Marketing erlauben" />
              </OptionRow>
            </div>
          )}

          <div className="mt-6 flex flex-col gap-2.5 sm:flex-row sm:flex-wrap sm:items-center">
            <button type="button" className={primaryButton} onClick={() => persist(true, true)}>
              Alle akzeptieren
            </button>
            <button type="button" className={secondaryButton} onClick={() => persist(false, false)}>
              Nur notwendige
            </button>
            {showSettings ? (
              <button
                type="button"
                className={secondaryButton}
                onClick={() => persist(analytics, marketing)}
              >
                Auswahl speichern
              </button>
            ) : (
              <button
                type="button"
                className={tertiaryButton}
                onClick={() => setShowSettings(true)}
              >
                Einstellungen
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
