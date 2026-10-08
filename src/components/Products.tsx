"use client";

import { motion } from "motion/react";
import {
  IconArrowRight,
  IconCalculator,
  IconCheck,
  IconFactory,
  IconHardHat,
  IconWrench,
} from "./icons";

const products = [
  {
    name: "Zafirok Factory",
    system: "CRM + ERP",
    tagline: "Afacerea ta, sub control.",
    description:
      "CRM și ERP universal pentru diferite domenii — gestionează clienții, comenzile și operațiunile într-un singur sistem.",
    features: ["Comenzi și clienți într-un singur loc", "Planificarea operațiunilor", "Costuri și progres în timp real"],
    domains: [
      "Fabrici",
      "Mobilă",
      "Case modulare",
      "Ferestre",
      "Bucătării la comandă",
      "Panouri sandwich",
      "Porți și garduri",
      "Geamuri auto",
      "Echipamente",
      "Curățenie",
      "Clinici stomatologice",
      "Laboratoare dentare",
    ],
    icon: IconFactory,
    accentText: "text-violet-400",
    accentBg: "bg-violet-400/10",
    accentBorder: "hover:border-violet-400/40",
    accentGlow: "bg-violet-500/20",
    href: "https://factory.zafirok.com/",
    cta: "Vezi produsul",
  },
  {
    name: "Zafirok Construction",
    system: "Construction System",
    tagline: "Șantierul, sub control.",
    description:
      "Devize, etape de proiect, pontaj și costuri reale pe fiecare lucrare — vizibile în timp real, de oriunde.",
    features: ["Devize și situații de lucrări", "Pontaj echipe & utilaje", "Costuri reale pe proiect"],
    icon: IconHardHat,
    accentText: "text-amber-400",
    accentBg: "bg-amber-400/10",
    accentBorder: "hover:border-amber-400/40",
    accentGlow: "bg-amber-500/20",
    href: "https://construction.zafirok.com/",
    cta: "Vezi produsul",
  },
  {
    name: "Zafirok Auto Service",
    system: "Auto Service System",
    tagline: "Service-ul tău, pe pilot automat.",
    description:
      "De la programare la deviz și predarea mașinii — tot fluxul service-ului auto, digitalizat cap-coadă.",
    features: ["Programări & recepție rapidă", "Devize și comenzi de piese", "Istoric complet pe vehicul"],
    icon: IconWrench,
    accentText: "text-cyan-400",
    accentBg: "bg-cyan-400/10",
    accentBorder: "hover:border-cyan-400/40",
    accentGlow: "bg-cyan-500/20",
    href: "https://auto.zafirok.com/",
    cta: "Vezi produsul",
  },
  {
    name: "Zafirok Accounting",
    system: "Accounting System",
    tagline: "Contabilitate fără haos.",
    description:
      "Facturare, e-Factura și rapoarte fiscale într-un sistem care închide luna fără nopți pierdute.",
    features: ["Facturare & e-Factura", "Registre și jurnale automate", "Rapoarte fiscale la zi"],
    icon: IconCalculator,
    accentText: "text-emerald-400",
    accentBg: "bg-emerald-400/10",
    accentBorder: "hover:border-emerald-400/40",
    accentGlow: "bg-emerald-500/20",
    href: "https://accounting.zafirok.com/",
    cta: "Vezi produsul",
  },
];

export function Products() {
  return (
    <section id="produse" className="relative scroll-mt-28 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="text-xs font-semibold tracking-[0.3em] text-sapphire-300 uppercase">
            Produse
          </span>
          <h2 className="font-display mt-4 text-[2rem] leading-tight font-bold tracking-tight text-balance text-white min-[380px]:text-4xl md:text-5xl">
            Sisteme specializate.{" "}
            <span className="text-gradient">O singură sursă de adevăr.</span>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-slate-400 sm:text-lg">
            Fiecare produs e puternic singur. Împreună, elimină munca dublă,
            Excel-urile paralele și datele pierdute între departamente.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-4 sm:mt-16 sm:gap-6 md:grid-cols-2">
          {products.map((product, i) => (
            <motion.article
              key={product.name}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.7,
                delay: (i % 2) * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`group relative flex overflow-hidden rounded-3xl border border-line bg-surface/60 p-6 backdrop-blur-sm transition-colors duration-300 sm:p-8 ${product.accentBorder}`}
            >
              <div
                className={`absolute -top-24 -right-24 h-56 w-56 rounded-full opacity-0 blur-[80px] transition-opacity duration-500 group-hover:opacity-100 ${product.accentGlow}`}
              />

              <div className="relative flex min-w-0 flex-1 flex-col">
                <div className="flex items-start justify-between gap-4">
                  <div
                    className={`flex h-14 w-14 items-center justify-center rounded-2xl ${product.accentBg} ${product.accentText}`}
                  >
                    <product.icon className="h-7 w-7" />
                  </div>
                  <span className="rounded-full border border-line px-3 py-1 text-[0.6875rem] font-semibold tracking-[0.14em] text-slate-400 uppercase">
                    {product.system}
                  </span>
                </div>

                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <h3 className="font-display text-[1.375rem] font-bold text-white sm:text-2xl">
                    {product.name}
                  </h3>
                </div>
                <p className={`mt-1 text-sm font-semibold ${product.accentText}`}>
                  {product.tagline}
                </p>
                <p className="mt-4 leading-relaxed text-slate-400">
                  {product.description}
                </p>

                <ul className="mt-6 space-y-2.5">
                  {product.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-sm text-slate-300"
                    >
                      <IconCheck className={`mt-0.5 h-4 w-4 shrink-0 ${product.accentText}`} />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto flex flex-wrap items-start justify-between gap-x-4 pt-6">
                  <a
                    href={product.href}
                    target={product.href.startsWith("http") ? "_blank" : undefined}
                    rel={product.href.startsWith("http") ? "noreferrer" : undefined}
                    className={`inline-flex min-h-11 cursor-pointer items-center gap-2 text-sm font-semibold ${product.accentText} transition-opacity duration-200 hover:opacity-80`}
                  >
                    {product.cta}
                    <IconArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </a>
                  {product.domains && (
                    <details className="group/domains min-w-0 flex-1">
                      <summary className="flex min-h-11 cursor-pointer list-none items-center justify-end gap-2 text-xs font-medium text-violet-300 transition-colors hover:text-violet-200 focus-visible:rounded-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-400 [&::-webkit-details-marker]:hidden">
                        <span>Domenii disponibile</span>
                        <span className="text-violet-400/70">({product.domains.length})</span>
                        <IconArrowRight className="h-3.5 w-3.5 shrink-0 rotate-90 transition-transform group-open/domains:-rotate-90" />
                      </summary>
                      <ul className="mt-2 flex flex-wrap justify-end gap-1.5">
                        {product.domains.map((domain) => (
                          <li
                            key={domain}
                            className="rounded-lg border border-violet-400/15 bg-violet-400/5 px-2 py-1 text-xs leading-relaxed text-slate-300"
                          >
                            {domain}
                          </li>
                        ))}
                      </ul>
                    </details>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
