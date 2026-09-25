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
    name: "Zafirok Factory",
    system: "Factory System",
    tagline: "Fabrica ta, sub control.",
    description:
      "CRM și ERP pentru fabrici de case modulare, mobilă, ferestre, panouri sandwich, porți, garduri și bucătării la comandă.",
    features: ["Comenzi și clienți într-un singur loc", "Planificarea producției", "Costuri și progres în timp real"],
    icon: IconFactory,
    accentText: "text-violet-400",
    accentBg: "bg-violet-400/10",
    accentBorder: "hover:border-violet-400/40",
    accentGlow: "bg-violet-500/20",
    href: "#contact",
    cta: "Solicită un demo",
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
    comingSoon: true,
    icon: IconCalculator,
    accentText: "text-emerald-400",
    accentBg: "bg-emerald-400/10",
    accentBorder: "hover:border-emerald-400/40",
    accentGlow: "bg-emerald-500/20",
    href: "#contact",
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
              className={`group relative overflow-hidden rounded-3xl border border-line bg-surface/60 p-6 backdrop-blur-sm transition-colors duration-300 sm:p-8 ${product.accentBorder}`}
            >
              <div
                className={`absolute -top-24 -right-24 h-56 w-56 rounded-full opacity-0 blur-[80px] transition-opacity duration-500 group-hover:opacity-100 ${product.accentGlow}`}
              />

              <div className="relative">
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
                  {"comingSoon" in product && product.comingSoon && (
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-sapphire-400/40 bg-sapphire-500/15 px-3 py-1 text-[0.65rem] font-bold tracking-[0.15em] text-sapphire-300 uppercase">
                      <span className="animate-pulse-dot h-1.5 w-1.5 rounded-full bg-sapphire-400" />
                      În curând
                    </span>
                  )}
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

                {"comingSoon" in product && product.comingSoon ? (
                  <span className="mt-6 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-slate-500">
                    Disponibil în curând
                  </span>
                ) : (
                  <a
                    href={product.href}
                    target={product.href.startsWith("http") ? "_blank" : undefined}
                    rel={product.href.startsWith("http") ? "noreferrer" : undefined}
                    className={`mt-6 inline-flex min-h-11 cursor-pointer items-center gap-2 text-sm font-semibold ${product.accentText} transition-opacity duration-200 hover:opacity-80`}
                  >
                    {product.cta}
                    <IconArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </a>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
