"use client";

import { useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "motion/react";
import { Logo } from "./Logo";
import { IconMenu, IconX } from "./icons";
import { useLanguage, type Language } from "./LanguageProvider";

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

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-4 top-4 z-50"
    >
      <div
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-2xl border px-5 py-3 transition-all duration-300 ${
          scrolled || open
            ? "border-line bg-ink/80 shadow-lg shadow-sapphire-700/10 backdrop-blur-xl"
            : "border-transparent bg-transparent"
        }`}
      >
        <a href="/" aria-label="Zafirok — pagina principală">
          <Logo />
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Meniu principal">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-300 transition-colors duration-200 hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div className="flex rounded-lg border border-line bg-ink/50 p-1" aria-label="Selectează limba">
            {(["ro", "ru", "en"] as Language[]).map((code) => (
              <button key={code} type="button" onClick={() => setLanguage(code)} className={`cursor-pointer rounded-md px-2 py-1 text-[0.65rem] font-bold uppercase transition-colors ${language === code ? "bg-sapphire-500 text-white" : "text-slate-500 hover:text-white"}`}>
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
            className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-xl border border-line text-slate-200 transition-colors duration-200 hover:text-white md:hidden"
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
          className="mx-auto mt-2 max-w-6xl rounded-2xl border border-line bg-ink/95 p-4 backdrop-blur-xl md:hidden"
        >
          <ul className="flex flex-col gap-1">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-4 py-3 text-sm font-medium text-slate-200 transition-colors duration-200 hover:bg-white/5 hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="/contact"
                onClick={() => setOpen(false)}
                className="mt-2 block rounded-xl bg-sapphire-500 px-4 py-3 text-center text-sm font-semibold text-white transition-colors duration-200 hover:bg-sapphire-400"
              >
                Solicită demo
              </a>
            </li>
          </ul>
        </motion.nav>
      )}
    </motion.header>
  );
}
