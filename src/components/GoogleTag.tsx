"use client";

/**
 * Eticheta Google (Google Ads), încărcată numai după consimțământ pentru marketing.
 *
 * Aceeași regulă ca la pixelul Meta: nimic nu pleacă spre Google înainte ca
 * vizitatorul să aleagă „marketing". Eticheta primește și semnalele Consent
 * Mode v2, iar dacă vizitatorul își retrage acordul, le trecem pe „denied"
 * imediat, nu abia la următoarea navigare.
 *
 * Datele ajung la Google, în SUA. Transferul e acoperit de consimțământul
 * explicit de la art. 49 alin. (1) lit. a) și e descris în Politica de cookie-uri.
 *
 * Eticheta Google are două ID-uri, AW-18472271625 și GT-55B3T6P2, dar e una
 * singură. O configurăm o dată, după ID-ul Google Ads, ca să nu dublăm
 * vizitele.
 */

import Script from "next/script";
import { useEffect, useSyncExternalStore } from "react";
import { CONSENT_EVENT, readConsent } from "./CookieConsent";

const TAG_ID = "AW-18472271625";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

function subscribe(onChange: () => void) {
  window.addEventListener(CONSENT_EVENT, onChange);
  return () => window.removeEventListener(CONSENT_EVENT, onChange);
}

const readMarketing = () => readConsent()?.marketing ?? false;
const readAnalytics = () => readConsent()?.analytics ?? false;
const beforeChoice = () => false;

function consentSignals(analytics: boolean, marketing: boolean) {
  const ads = marketing ? "granted" : "denied";
  return {
    ad_storage: ads,
    ad_user_data: ads,
    ad_personalization: ads,
    analytics_storage: analytics ? "granted" : "denied",
  };
}

export default function GoogleTag() {
  const marketing = useSyncExternalStore(subscribe, readMarketing, beforeChoice);
  const analytics = useSyncExternalStore(subscribe, readAnalytics, beforeChoice);

  // Odată încărcată, eticheta rămâne în pagină până la navigare, așa că orice
  // schimbare de alegere trebuie să ajungă la ea pe loc.
  useEffect(() => {
    window.gtag?.("consent", "update", consentSignals(analytics, marketing));
  }, [analytics, marketing]);

  if (!marketing) return null;

  return (
    <>
      <Script
        id="google-tag-src"
        src={`https://www.googletagmanager.com/gtag/js?id=${TAG_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-tag" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('consent', 'default', ${JSON.stringify(consentSignals(analytics, marketing))});
gtag('js', new Date());
gtag('config', '${TAG_ID}');`}
      </Script>
    </>
  );
}
