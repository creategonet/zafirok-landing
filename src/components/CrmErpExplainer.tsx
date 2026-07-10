"use client";

import { motion } from "motion/react";
import { IconChart, IconRefresh, IconUsers } from "./icons";

const layers = [
  {
    label: "CRM",
    title: "Relația cu clientul",
    text: "Centralizează clienții, vânzările, comunicarea și istoricul fiecărei relații.",
    icon: IconUsers,
    color: "text-sky-300 bg-sky-400/10 border-sky-400/20",
  },
  {
    label: "ERP",
    title: "Resursele companiei",
    text: "Coordonează operațiunile, costurile, stocurile, echipele și fluxurile financiare.",
    icon: IconChart,
    color: "text-emerald-300 bg-emerald-400/10 border-emerald-400/20",
  },
];

const modules = ["Proiecte", "Pontaj", "Devize", "Stocuri", "Facturare", "Rapoarte"];

export function CrmErpExplainer() {
  return (
    <section className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]"
        >
          <div>
            <span className="text-xs font-semibold tracking-[0.3em] text-sapphire-300 uppercase">
              CRM + ERP
            </span>
            <h2 className="font-display mt-4 text-4xl font-bold tracking-tight text-white md:text-5xl">
              Toată afacerea, într-un singur <span className="text-gradient">sistem</span>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-slate-400">
              CRM-ul gestionează relația cu clientul. ERP-ul organizează resursele și
              operațiunile companiei. Zafirok le conectează prin module independente,
              pe care le activezi în funcție de nevoile și etapa afacerii tale.
            </p>
            <p className="mt-5 border-l-2 border-sapphire-400/60 pl-5 text-sm leading-relaxed text-slate-300">
              Nu adaptăm afacerea la un software generic. Construim fluxurile în jurul
              modului în care lucrează fiecare nișă.
            </p>
          </div>

          <div className="relative rounded-3xl border border-line bg-surface/50 p-5 backdrop-blur-sm sm:p-8">
            <div className="absolute inset-1/4 rounded-full bg-sapphire-500/15 blur-[90px]" />
            <div className="relative grid gap-4 sm:grid-cols-2">
              {layers.map((layer) => (
                <div key={layer.label} className={`rounded-2xl border p-5 ${layer.color}`}>
                  <div className="flex items-center gap-3">
                    <layer.icon className="h-6 w-6" />
                    <span className="font-display text-xl font-bold">{layer.label}</span>
                  </div>
                  <h3 className="mt-4 font-semibold text-white">{layer.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">{layer.text}</p>
                </div>
              ))}
            </div>

            <div className="relative mx-auto flex h-12 w-px bg-gradient-to-b from-sapphire-400/70 to-violet-400/70" />
            <div className="relative rounded-2xl border border-violet-400/25 bg-violet-400/10 p-5 text-center">
              <div className="flex items-center justify-center gap-2 text-violet-300">
                <IconRefresh className="h-5 w-5" />
                <span className="font-display font-bold">Zafirok Business System</span>
              </div>
              <p className="mt-2 text-sm text-slate-400">Date conectate · Fluxuri specializate · O singură sursă de adevăr</p>
              <div className="mt-5 flex flex-wrap justify-center gap-2">
                {modules.map((module) => (
                  <span key={module} className="rounded-full border border-line bg-ink/50 px-3 py-1.5 text-xs text-slate-300">
                    {module}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
