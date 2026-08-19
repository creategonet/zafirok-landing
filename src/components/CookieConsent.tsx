"use client";

/**
 * Poarta de consimțământ pentru scripturile care nu sunt strict necesare.
 *
 * Nimic din ce ține de analiză sau publicitate nu se încarcă înainte ca
 * vizitatorul să aleagă. Alegerea se păstrează cu versiune și marcă de timp,
 * fiindcă art. 7 alin. (1) din Legea nr. 195/2024 cere ca operatorul să poată
 * demonstra consimțământul, nu doar să îl obțină.
 *
 * „Refuz" are exact aceeași greutate vizuală ca „Accept". Un refuz ascuns sub
 * un submeniu ar fi tipar întunecat și ar anula validitatea consimțământului.
 */

import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

/** Se incrementează când se schimbă textul sau categoriile, ca să recerem alegerea. */
export const CONSENT_VERSION = 1;
const STORAGE_KEY = "zafirok_consent";

export interface ConsentChoice {
  analytics: boolean;
  marketing: boolean;
  version: number;
  decidedAt: string;
}

/** Evenimentul prin care scripturile află că pot porni, fără reîncărcarea paginii. */
export const CONSENT_EVENT = "zafirok:consent";

export function readConsent(): ConsentChoice | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as ConsentChoice;
    if (parsed.version !== CONSENT_VERSION) return null;
    return parsed;
  } catch {
    return null;
  }
}

function writeConsent(analytics: boolean, marketing: boolean): ConsentChoice {
  const choice: ConsentChoice = {
    analytics,
    marketing,
    version: CONSENT_VERSION,
    decidedAt: new Date().toISOString(),
  };
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(choice));
  } catch {
    // Modul privat cu stocare blocată: tratăm ca refuz pe sesiunea curentă.
  }
  window.dispatchEvent(new CustomEvent<ConsentChoice>(CONSENT_EVENT, { detail: choice }));
  return choice;
}

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (!readConsent()) setVisible(true);
  }, []);

  // Permite redeschiderea din piciorul paginii, ca retragerea să fie la fel de
  // simplă ca acordarea, cerută de art. 7 alin. (3).
  useEffect(() => {
    const reopen = () => {
      setShowDetails(true);
      setVisible(true);
    };
    window.addEventListener("zafirok:open-consent", reopen);
    return () => window.removeEventListener("zafirok:open-consent", reopen);
  }, []);

  const decide = useCallback((nextAnalytics: boolean, nextMarketing: boolean) => {
    writeConsent(nextAnalytics, nextMarketing);
    setVisible(false);
    setShowDetails(false);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 24 }}
          animate={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
          exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          role="dialog"
          aria-modal="false"
          aria-label="Setări de confidențialitate"
          className="fixed inset-x-0 bottom-0 z-50 px-4 pb-4 sm:px-6 sm:pb-6"
        >
          <div className="mx-auto max-w-4xl rounded-2xl border border-line bg-surface/95 p-5 shadow-[0_24px_60px_-20px_rgba(5,6,14,0.9)] backdrop-blur-xl sm:p-6">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between lg:gap-8">
              <div className="max-w-xl">
                <h2 className="font-display text-base font-semibold text-white">
                  Cookie-uri și confidențialitate
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">
                  Folosim cookie-uri strict necesare pentru funcționarea site-ului. Pentru
                  statistici de utilizare și pentru măsurarea campaniilor avem nevoie de
                  acordul tău. Poți refuza fără să pierzi nimic din site.
                </p>
                <p className="mt-2 text-sm text-slate-500">
                  Detalii în{" "}
                  <a
                    href="/cookies"
                    className="text-sapphire-300 underline decoration-sapphire-300/40 underline-offset-4 transition-colors hover:decoration-sapphire-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sapphire-400"
                  >
                    Politica de cookie-uri
                  </a>{" "}
                  și{" "}
                  <a
                    href="/confidentialitate"
                    className="text-sapphire-300 underline decoration-sapphire-300/40 underline-offset-4 transition-colors hover:decoration-sapphire-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sapphire-400"
                  >
                    Politica de confidențialitate
                  </a>
                  .
                </p>
              </div>

              <div className="flex shrink-0 flex-col gap-2.5 sm:flex-row lg:flex-col xl:flex-row">
                <button
                  type="button"
                  onClick={() => decide(true, true)}
                  className="rounded-xl bg-sapphire-500 px-5 py-2.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-sapphire-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sapphire-300"
                >
                  Accept toate
                </button>
                <button
                  type="button"
                  onClick={() => decide(false, false)}
                  className="rounded-xl border border-line bg-white/5 px-5 py-2.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sapphire-300"
                >
                  Refuz toate
                </button>
                <button
                  type="button"
                  onClick={() => setShowDetails((open) => !open)}
                  aria-expanded={showDetails}
                  className="rounded-xl px-5 py-2.5 text-sm font-semibold text-slate-400 transition-colors duration-200 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sapphire-300"
                >
                  {showDetails ? "Ascunde setările" : "Setări"}
                </button>
              </div>
            </div>

            <AnimatePresence initial={false}>
              {showDetails && (
                <motion.div
                  initial={reduceMotion ? { opacity: 0 } : { opacity: 0, height: 0 }}
                  animate={reduceMotion ? { opacity: 1 } : { opacity: 1, height: "auto" }}
                  exit={reduceMotion ? { opacity: 0 } : { opacity: 0, height: 0 }}
                  transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <div className="mt-5 grid gap-3 border-t border-line pt-5 sm:grid-cols-3">
                    <CategoryRow
                      title="Strict necesare"
                      description="Sesiune, preferința de limbă, securitate. Nu pot fi dezactivate."
                      checked
                      locked
                    />
                    <CategoryRow
                      title="Statistici"
                      description="Cum e folosit site-ul, în formă agregată."
                      checked={analytics}
                      onChange={setAnalytics}
                    />
                    <CategoryRow
                      title="Marketing"
                      description="Măsurarea campaniilor prin Meta. Implică transfer în SUA."
                      checked={marketing}
                      onChange={setMarketing}
                    />
                  </div>

                  <div className="mt-5 flex justify-end">
                    <button
                      type="button"
                      onClick={() => decide(analytics, marketing)}
                      className="rounded-xl border border-sapphire-500/40 bg-sapphire-500/10 px-5 py-2.5 text-sm font-semibold text-sapphire-200 transition-colors duration-200 hover:bg-sapphire-500/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sapphire-300"
                    >
                      Salvează alegerea
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function CategoryRow({
  title,
  description,
  checked,
  locked,
  onChange,
}: {
  title: string;
  description: string;
  checked: boolean;
  locked?: boolean;
  onChange?: (value: boolean) => void;
}) {
  return (
    <label
      className={`flex gap-3 rounded-xl border border-line p-3.5 ${
        locked ? "opacity-60" : "cursor-pointer transition-colors duration-200 hover:bg-white/[0.03]"
      }`}
    >
      <input
        type="checkbox"
        checked={checked}
        disabled={locked}
        onChange={(event) => onChange?.(event.target.checked)}
        className="mt-0.5 size-4 shrink-0 accent-sapphire-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sapphire-300"
      />
      <span>
        <span className="block text-sm font-medium text-white">{title}</span>
        <span className="mt-1 block text-xs leading-relaxed text-slate-500">{description}</span>
      </span>
    </label>
  );
}
