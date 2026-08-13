import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import faviconUrl from "../assets/logo-optimized.png?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { CookieBanner } from "../components/CookieBanner";
import {
  CONSENT_BOOTSTRAP_SCRIPT,
  GTM_NOSCRIPT_HTML,
  GTM_SCRIPT,
} from "../lib/consent";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Seite nicht gefunden</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Die gesuchte Seite existiert nicht oder wurde verschoben.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Zur Startseite
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          Diese Seite konnte nicht geladen werden
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Etwas ist schiefgelaufen. Versuchen Sie es erneut oder kehren Sie zur Startseite zurück.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Erneut versuchen
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Zur Startseite
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Taxiizi – Taxi und Limousine Service in München" },
      { name: "description", content: "Zuverlässiger Taxi- und Limousinenservice in München, Erding und Markt Schwaben. Direkt beim Fahrer buchen – keine Vermittlung, faire Festpreise, 24/7 erreichbar." },
      { name: "theme-color", content: "#111111" },
      { name: "geo.region", content: "DE-BY" },
      { name: "geo.placename", content: "München" },
      { property: "og:title", content: "Taxiizi – Taxi und Limousine Service in München" },
      { property: "og:description", content: "Ihr zuverlässiger Fahrer in München, Erding und Markt Schwaben. Festpreise, 24/7 erreichbar." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://taxi-izi.de/" },
      { property: "og:site_name", content: "Taxiizi" },
      { property: "og:locale", content: "de_DE" },
      { property: "og:image", content: "https://taxi-izi.de/og-image.jpg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "Taxiizi – Taxi und Limousine Service in München" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Taxiizi – Taxi und Limousine Service in München" },
      { name: "twitter:description", content: "Ihr zuverlässiger Fahrer in München, Erding und Markt Schwaben. Festpreise, 24/7 erreichbar." },
      { name: "twitter:image", content: "https://taxi-izi.de/og-image.jpg" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", type: "image/png", href: faviconUrl },
      { rel: "apple-touch-icon", href: faviconUrl },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="de">
      <head>
        <meta charSet="utf-8" />
        {/* Google Consent Mode v2 – muss vor dem GTM-Loader laufen */}
        <script dangerouslySetInnerHTML={{ __html: CONSENT_BOOTSTRAP_SCRIPT }} />
        {/* Google Tag Manager */}
        <script dangerouslySetInnerHTML={{ __html: GTM_SCRIPT }} />
        {/* End Google Tag Manager */}
        <HeadContent />
      </head>
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript dangerouslySetInnerHTML={{ __html: GTM_NOSCRIPT_HTML }} />
        {/* End Google Tag Manager (noscript) */}
        {children}
        <CookieBanner />
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
    </QueryClientProvider>
  );
}
