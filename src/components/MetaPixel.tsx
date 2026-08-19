"use client";

/**
 * Meta Pixel, încărcat numai după consimțământ pentru marketing.
 *
 * Înainte stătea direct în layout și pornea la fiecare vizită, deci prelucra
 * date fără temei. Acum se montează doar dacă vizitatorul a ales „marketing",
 * iar dacă își retrage alegerea nu se mai încarcă la următoarea navigare.
 *
 * Pixelul trimite date către Meta, în SUA. Transferul e acoperit de
 * consimțământul explicit de la art. 49 alin. (1) lit. a) și e descris ca atare
 * în Politica de cookie-uri.
 */

import Script from "next/script";
import { useEffect, useState } from "react";
import { CONSENT_EVENT, readConsent, type ConsentChoice } from "./CookieConsent";

const PIXEL_ID = "1347750387313473";

export default function MetaPixel() {
  const [allowed, setAllowed] = useState(false);

  useEffect(() => {
    setAllowed(readConsent()?.marketing ?? false);

    const onConsent = (event: Event) => {
      const choice = (event as CustomEvent<ConsentChoice>).detail;
      setAllowed(choice.marketing);
    };
    window.addEventListener(CONSENT_EVENT, onConsent);
    return () => window.removeEventListener(CONSENT_EVENT, onConsent);
  }, []);

  if (!allowed) return null;

  return (
    <Script id="meta-pixel" strategy="afterInteractive">
      {`!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window,document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '${PIXEL_ID}');
fbq('track', 'PageView');`}
    </Script>
  );
}
