export const GTM_ID = "GTM-PD4C6DGN";

export const CONSENT_STORAGE_KEY = "cookie_consent_v1";

export const OPEN_COOKIE_SETTINGS_EVENT = "open-cookie-settings";

export type ConsentState = {
  necessary: true;
  analytics: boolean;
  marketing: boolean;
  ts: number;
};

/**
 * Google Consent Mode v2 Bootstrap.
 * Muss VOR dem GTM-Loader ausgefuehrt werden: setzt alle nicht notwendigen
 * Kategorien auf "denied" und spielt eine bereits erteilte Einwilligung
 * aus dem localStorage sofort wieder ein.
 */
export const CONSENT_BOOTSTRAP_SCRIPT = `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('consent', 'default', {
  ad_storage: 'denied',
  ad_user_data: 'denied',
  ad_personalization: 'denied',
  analytics_storage: 'denied',
  functionality_storage: 'granted',
  security_storage: 'granted',
  wait_for_update: 500
});
(function(){
  try {
    var c = JSON.parse(localStorage.getItem('${CONSENT_STORAGE_KEY}') || 'null');
    if (c) {
      gtag('consent', 'update', {
        ad_storage: c.marketing ? 'granted' : 'denied',
        ad_user_data: c.marketing ? 'granted' : 'denied',
        ad_personalization: c.marketing ? 'granted' : 'denied',
        analytics_storage: c.analytics ? 'granted' : 'denied'
      });
    }
  } catch (e) {}
})();
`.trim();

/** Google Tag Manager Loader (Standard-Snippet). */
export const GTM_SCRIPT = `
(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');
`.trim();

/** Google Tag Manager noscript-Fallback (direkt nach dem <body>-Tag). */
export const GTM_NOSCRIPT_HTML = `<iframe src="https://www.googletagmanager.com/ns.html?id=${GTM_ID}" height="0" width="0" style="display:none;visibility:hidden"></iframe>`;

export function readConsent(): ConsentState | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(CONSENT_STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as Partial<ConsentState> | null;
    if (!parsed || typeof parsed !== "object") return null;
    return {
      necessary: true,
      analytics: parsed.analytics === true,
      marketing: parsed.marketing === true,
      ts: typeof parsed.ts === "number" ? parsed.ts : Date.now(),
    };
  } catch {
    return null;
  }
}

export function saveConsent(analytics: boolean, marketing: boolean) {
  if (typeof window === "undefined") return;

  const value: ConsentState = {
    necessary: true,
    analytics,
    marketing,
    ts: Date.now(),
  };

  try {
    window.localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(value));
  } catch {
    /* localStorage nicht verfuegbar (z. B. Private Mode) – Consent gilt nur fuer diese Sitzung */
  }

  const w = window as unknown as {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  };
  w.dataLayer = w.dataLayer || [];
  const gtag =
    w.gtag ||
    function () {
      // GTM erwartet das arguments-Objekt, keinen Array – daher kein Rest-Parameter.
      // eslint-disable-next-line prefer-rest-params
      w.dataLayer!.push(arguments);
    };

  gtag("consent", "update", {
    ad_storage: marketing ? "granted" : "denied",
    ad_user_data: marketing ? "granted" : "denied",
    ad_personalization: marketing ? "granted" : "denied",
    analytics_storage: analytics ? "granted" : "denied",
  });

  w.dataLayer.push({ event: "consent_update" });
}

export function openCookieSettings() {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new Event(OPEN_COOKIE_SETTINGS_EVENT));
}
