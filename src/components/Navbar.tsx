"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "motion/react";
import { Logo } from "./Logo";
import { IconMenu, IconX } from "./icons";
import { useLanguage, type Language } from "./LanguageProvider";

const languages: Language[] = ["ro", "ru", "en"];

const links = [
  { href: "/produse", label: "Produse" },
  { href: "/despre", label: "Despre" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const { language, setLanguage } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (y) => setScrolled(y > 24));

  // Meniul de pe telefon se închide și cu Escape, nu doar cu butonul.
  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => event.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-3 top-[max(0.75rem,env(safe-area-inset-top))] z-50 sm:inset-x-4 sm:top-4"
    >
      <div
        className={`mx-auto flex max-w-6xl items-center justify-between gap-3 rounded-2xl border py-2.5 pr-2.5 pl-4 transition-all sm:px-5 sm:py-3 duration-300 ${
          scrolled || open
            ? "border-line bg-ink/80 shadow-lg shadow-sapphire-700/10 backdrop-blur-xl"
            : "border-transparent bg-transparent"
        }`}
      >
        <a href="/" aria-label="Zafirok — pagina principală" className="shrink-0">
          <Logo />
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Meniu principal">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="py-2 text-sm font-medium text-slate-300 transition-colors duration-200 hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          {/* Pe telefon limba se alege din meniu, cu butoane pe măsura degetului;
              în bară nu încap lângă logo fără să împingă butonul de meniu afară. */}
          <div className="hidden rounded-lg border border-line bg-ink/50 p-1 sm:flex" role="group" aria-label="Selectează limba">
            {languages.map((code) => (
              <button
                key={code}
                type="button"
                onClick={() => setLanguage(code)}
                aria-pressed={language === code}
                className={`h-8 min-w-9 cursor-pointer rounded-md px-2 text-[0.7rem] font-bold uppercase transition-colors ${language === code ? "bg-sapphire-500 text-white" : "text-slate-400 hover:text-white"}`}
              >
                {code}
              </button>
            ))}
          </div>
          <a
            href="/contact"
            className="hidden rounded-xl bg-sapphire-500 px-5 py-2.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-sapphire-400 sm:block"
          >
            Solicită demo
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Închide meniul" : "Deschide meniul"}
            className="flex h-11 w-11 shrink-0 cursor-pointer items-center justify-center rounded-xl border border-line text-slate-200 transition-colors duration-200 hover:text-white md:hidden"
          >
            {open ? <IconX className="h-5 w-5" /> : <IconMenu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <motion.nav
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
          aria-label="Meniu mobil"
          className="mx-auto mt-2 max-h-[calc(100dvh-6rem)] max-w-6xl overflow-y-auto overscroll-contain rounded-2xl border border-line bg-ink/95 p-3 backdrop-blur-xl sm:p-4 md:hidden"
        >
          <ul className="flex flex-col gap-1">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-4 py-3.5 text-base font-medium text-slate-200 transition-colors duration-200 hover:bg-white/5 hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="/contact"
                onClick={() => setOpen(false)}
                className="mt-2 block rounded-xl bg-sapphire-500 px-4 py-3.5 text-center text-base font-semibold text-white transition-colors duration-200 hover:bg-sapphire-400"
              >
                Solicită demo
              </a>
            </li>
          </ul>
          <div className="mt-3 flex items-center justify-between gap-3 border-t border-line px-1 pt-3 sm:hidden">
            <span className="pl-3 text-sm text-slate-400">Limba</span>
            <div className="flex gap-1 rounded-xl border border-line bg-ink/50 p-1" role="group" aria-label="Selectează limba">
              {languages.map((code) => (
                <button
                  key={code}
                  type="button"
                  onClick={() => setLanguage(code)}
                  aria-pressed={language === code}
                  className={`h-11 min-w-12 cursor-pointer rounded-lg px-3 text-sm font-bold uppercase transition-colors ${language === code ? "bg-sapphire-500 text-white" : "text-slate-300 hover:text-white"}`}
                >
                  {code}
                </button>
              ))}
            </div>
          </div>
        </motion.nav>
      )}
    </motion.header>
  );
}
