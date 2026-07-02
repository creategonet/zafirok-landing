"use client";

import { motion } from "motion/react";
import {
  IconArrowRight,
  IconCalculator,
  IconCheck,
  IconHardHat,
  IconUsers,
  IconWrench,
} from "./icons";

const products = [
  {
    name: "Zafirok CRM",
    system: "Customer Relationship System",
    tagline: "Relații care aduc venit.",
    description:
      "Pipeline vizual, istoric complet al clienților și automatizări care nu lasă niciun lead să se piardă.",
    features: ["Pipeline vizual de vânzări", "Automatizări & follow-up", "Rapoarte de conversie"],
    icon: IconUsers,
    accentText: "text-sky-400",
    accentBg: "bg-sky-400/10",
    accentBorder: "hover:border-sky-400/40",
    accentGlow: "bg-sky-500/20",
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
  },
];

export function Products() {
  return (
    <section id="produse" className="relative scroll-mt-28 py-28">
      <div className="mx-auto max-w-6xl px-6">
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
          <h2 className="font-display mt-4 text-4xl font-bold tracking-tight text-white md:text-5xl">
            Patru sisteme.{" "}
            <span className="text-gradient">O singură sursă de adevăr.</span>
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-400">
            Fiecare produs e puternic singur. Împreună, elimină munca dublă,
            Excel-urile paralele și datele pierdute între departamente.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
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
              className={`group relative overflow-hidden rounded-3xl border border-line bg-surface/60 p-8 backdrop-blur-sm transition-colors duration-300 ${product.accentBorder}`}
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
                  <span className="rounded-full border border-line px-3 py-1 text-[0.65rem] font-medium tracking-[0.18em] text-slate-500 uppercase">
                    {product.system}
                  </span>
                </div>

                <h3 className="font-display mt-6 text-2xl font-bold text-white">
                  {product.name}
                </h3>
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
                      className="flex items-center gap-3 text-sm text-slate-300"
                    >
                      <IconCheck className={`h-4 w-4 shrink-0 ${product.accentText}`} />
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className={`mt-8 inline-flex cursor-pointer items-center gap-2 text-sm font-semibold ${product.accentText} transition-opacity duration-200 hover:opacity-80`}
                >
                  Vezi detalii
                  <IconArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
