"use client";

import { motion } from "motion/react";
import { Logo } from "./Logo";
import { IconArrowRight } from "./icons";
import { ConsentSettingsButton } from "./ConsentSettingsButton";

export function FinalCTA() {
  return (
    <section id="contact" className="relative scroll-mt-28 px-4 pt-10 pb-[max(1.5rem,env(safe-area-inset-bottom))] sm:px-6 sm:pt-14 sm:pb-10">
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] border border-sapphire-400/20 px-5 py-14 text-center sm:rounded-[2.5rem] sm:px-6 sm:py-20 md:py-28"
      >
        {/* background */}
        <div className="absolute inset-0 bg-surface/60" />
        <div className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_60%_80%_at_50%_50%,black_20%,transparent_100%)]" />
        <div className="absolute -top-32 left-1/2 h-[380px] w-[min(640px,100%)] -translate-x-1/2 rounded-full bg-sapphire-500/25 blur-[120px]" />
        <div className="absolute -bottom-40 left-1/4 h-[300px] w-[min(400px,75%)] rounded-full bg-cyan-500/15 blur-[110px]" />

        <div className="relative">
          <h2 className="font-display mx-auto max-w-3xl text-[2rem] leading-tight font-bold tracking-tight text-balance text-white min-[380px]:text-4xl md:text-6xl">
            Pregătit să-ți vezi afacerea{" "}
            <span className="text-gradient">dintr-o singură privire?</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-slate-400 sm:text-lg">
            Programează un demo de 30 de minute. Îți arătăm ecosistemul pe
            datele tale, nu pe slide-uri.
          </p>

          <div className="mt-10 flex flex-col items-stretch justify-center gap-3 min-[440px]:flex-row min-[440px]:flex-wrap min-[440px]:items-center sm:gap-4">
            <a
              href="mailto:support@creatego.net"
              className="group flex items-center justify-center gap-2 rounded-2xl bg-sapphire-500 px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-sapphire-600/40 transition-all duration-200 hover:bg-sapphire-400 hover:shadow-sapphire-500/50"
            >
              Programează un demo
              <IconArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </a>
            <a
              href="mailto:support@creatego.net"
              className="flex items-center justify-center rounded-2xl border border-line bg-ink/40 px-8 py-4 text-sm font-semibold text-slate-200 backdrop-blur-sm transition-colors duration-200 hover:border-sapphire-400/40 hover:text-white"
            >
              Contactează-ne
            </a>
          </div>

          <p className="mt-6 text-sm text-slate-500">
            Demo gratuit · Fără obligații · Răspundem în aceeași zi
          </p>
        </div>
      </motion.div>

      <footer className="mx-auto mt-14 max-w-6xl px-1 sm:mt-16 sm:px-0">
        <div className="grid gap-10 border-t border-line pt-10 min-[480px]:grid-cols-2 sm:pt-12 md:grid-cols-[1.5fr_1fr_1fr] md:gap-12">
          <div className="min-[480px]:col-span-2 md:col-span-1">
            <Logo sublabel="Business Systems" />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-slate-500">
              Ecosistem de sisteme software pentru afaceri: CRM, service auto,
              contabilitate, construcții și fabrici. Un singur
              partener, toată afacerea acoperită.
            </p>
          </div>

          <nav aria-label="Produse">
            <h3 className="text-xs font-semibold tracking-[0.25em] text-slate-400 uppercase">
              Produse
            </h3>
            <ul className="mt-3 space-y-0.5 text-sm lg:mt-4 lg:space-y-2.5">
              {[
                { name: "Zafirok Auto Service", href: "https://auto.zafirok.com/" },
                { name: "Zafirok Accounting", href: "#produse" },
                { name: "Zafirok Construction", href: "https://construction.zafirok.com/" },
                { name: "Zafirok Factory", href: "#produse" },
              ].map((product) => (
                <li key={product.name}>
                  <a
                    href={product.href}
                    target={product.href.startsWith("http") ? "_blank" : undefined}
                    rel={product.href.startsWith("http") ? "noreferrer" : undefined}
                    className="inline-flex min-h-10 items-center text-slate-400 transition-colors duration-200 hover:text-white lg:min-h-0"
                  >
                    {product.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Companie">
            <h3 className="text-xs font-semibold tracking-[0.25em] text-slate-400 uppercase">
              Companie
            </h3>
            <ul className="mt-3 space-y-0.5 text-sm lg:mt-4 lg:space-y-2.5">
              <li>
                <a
                  href="#ecosistem"
                  className="inline-flex min-h-10 items-center text-slate-400 transition-colors duration-200 hover:text-white lg:min-h-0"
                >
                  Ecosistem
                </a>
              </li>
              <li>
                <a
                  href="/despre"
                  className="inline-flex min-h-10 items-center text-slate-400 transition-colors duration-200 hover:text-white lg:min-h-0"
                >
                  Despre noi
                </a>
              </li>
              <li>
                <a
                  href="#testimoniale"
                  className="inline-flex min-h-10 items-center text-slate-400 transition-colors duration-200 hover:text-white lg:min-h-0"
                >
                  Clienți
                </a>
              </li>
              <li>
                <a
                  href="mailto:support@creatego.net"
                  className="inline-flex min-h-10 items-center text-slate-400 transition-colors duration-200 hover:text-white lg:min-h-0"
                >
                  support@creatego.net
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-line py-6 text-xs text-slate-500 sm:mt-12 sm:flex-row sm:py-8">
          <span>© 2026 Zafirok. Toate drepturile rezervate.</span>
          <nav aria-label="Informații juridice" className="flex flex-wrap items-center justify-center gap-x-5">
            <a
              href="/confidentialitate"
              className="inline-flex min-h-10 items-center transition-colors duration-200 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sapphire-400"
            >
              Confidențialitate
            </a>
            <a
              href="/cookies"
              className="inline-flex min-h-10 items-center transition-colors duration-200 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sapphire-400"
            >
              Cookie-uri
            </a>
            <ConsentSettingsButton className="inline-flex min-h-10 cursor-pointer items-center text-xs text-slate-500 transition-colors duration-200 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sapphire-400" />
          </nav>
        </div>
      </footer>
    </section>
  );
}
