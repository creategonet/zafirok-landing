"use client";

import { motion } from "motion/react";
import { Logo } from "./Logo";
import { IconArrowRight } from "./icons";

export function FinalCTA() {
  return (
    <section id="contact" className="relative scroll-mt-28 px-6 pt-14 pb-10">
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] border border-sapphire-400/20 px-6 py-20 text-center md:py-28"
      >
        {/* background */}
        <div className="absolute inset-0 bg-surface/60" />
        <div className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_60%_80%_at_50%_50%,black_20%,transparent_100%)]" />
        <div className="absolute -top-32 left-1/2 h-[380px] w-[640px] -translate-x-1/2 rounded-full bg-sapphire-500/25 blur-[120px]" />
        <div className="absolute -bottom-40 left-1/4 h-[300px] w-[400px] rounded-full bg-cyan-500/15 blur-[110px]" />

        <div className="relative">
          <h2 className="font-display mx-auto max-w-3xl text-4xl font-bold tracking-tight text-white md:text-6xl">
            Pregătit să-ți vezi afacerea{" "}
            <span className="text-gradient">dintr-o singură privire?</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-slate-400">
            Programează un demo de 30 de minute. Îți arătăm ecosistemul pe
            datele tale, nu pe slide-uri.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="mailto:support@creatego.net"
              className="group flex items-center gap-2 rounded-2xl bg-sapphire-500 px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-sapphire-600/40 transition-all duration-200 hover:bg-sapphire-400 hover:shadow-sapphire-500/50"
            >
              Programează un demo
              <IconArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </a>
            <a
              href="mailto:support@creatego.net"
              className="rounded-2xl border border-line bg-ink/40 px-8 py-4 text-sm font-semibold text-slate-200 backdrop-blur-sm transition-colors duration-200 hover:border-sapphire-400/40 hover:text-white"
            >
              Contactează-ne
            </a>
          </div>

          <p className="mt-6 text-sm text-slate-500">
            Demo gratuit · Fără obligații · Răspundem în aceeași zi
          </p>
        </div>
      </motion.div>

      <footer className="mx-auto mt-16 max-w-6xl">
        <div className="grid gap-12 border-t border-line pt-12 md:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <Logo sublabel="Business Systems" />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-slate-500">
              Ecosistem de sisteme software pentru afaceri: CRM, service auto,
              contabilitate, construcții și producție la comandă. Un singur
              partener, toată afacerea acoperită.
            </p>
          </div>

          <nav aria-label="Produse">
            <h3 className="text-xs font-semibold tracking-[0.25em] text-slate-400 uppercase">
              Produse
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {[
                { name: "Zafirok Auto Service", href: "https://auto.zafirok.com/" },
                { name: "Zafirok Accounting", href: "#produse" },
                { name: "Zafirok Construction", href: "https://construction.zafirok.com/" },
                { name: "Zafirok Producție la Comandă", href: "#produse" },
              ].map((product) => (
                <li key={product.name}>
                  <a
                    href={product.href}
                    target={product.href.startsWith("http") ? "_blank" : undefined}
                    rel={product.href.startsWith("http") ? "noreferrer" : undefined}
                    className="text-slate-500 transition-colors duration-200 hover:text-white"
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
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <a
                  href="#ecosistem"
                  className="text-slate-500 transition-colors duration-200 hover:text-white"
                >
                  Ecosistem
                </a>
              </li>
              <li>
                <a
                  href="/despre"
                  className="text-slate-500 transition-colors duration-200 hover:text-white"
                >
                  Despre noi
                </a>
              </li>
              <li>
                <a
                  href="#testimoniale"
                  className="text-slate-500 transition-colors duration-200 hover:text-white"
                >
                  Clienți
                </a>
              </li>
              <li>
                <a
                  href="mailto:support@creatego.net"
                  className="text-slate-500 transition-colors duration-200 hover:text-white"
                >
                  support@creatego.net
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-line py-8 text-xs text-slate-600 sm:flex-row">
          <span>© 2026 Zafirok. Toate drepturile rezervate.</span>
          <span>Construit cu grijă, în România.</span>
        </div>
      </footer>
    </section>
  );
}
