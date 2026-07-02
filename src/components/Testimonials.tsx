"use client";

import { motion } from "motion/react";
import { IconStar } from "./icons";

const testimonials = [
  {
    quote:
      "Înainte pierdeam lead-uri prin mail-uri și agende. Acum tot pipeline-ul e într-un singur loc și nimic nu ne mai scapă. Vânzările au crescut cu 30% în primul an.",
    name: "Andrei Popa",
    role: "Director Vânzări",
    company: "TehnoGrup",
    initials: "AP",
    accent: "bg-sky-400/15 text-sky-300",
  },
  {
    quote:
      "Programări, devize, istoric pe mașină — totul digital. Clienții primesc SMS când mașina e gata, iar noi am scăpat de dosarele cu hârtii. Nu ne-am mai întoarce.",
    name: "Mihai Ionescu",
    role: "Administrator",
    company: "AutoExpert Service",
    initials: "MI",
    accent: "bg-cyan-400/15 text-cyan-300",
  },
  {
    quote:
      "Închiderea de lună dura o săptămână. Cu Zafirok Accounting, facturile intră singure, iar rapoartele fiscale sunt gata oricând. E ca și cum am mai angajat un om.",
    name: "Elena Dumitrescu",
    role: "Contabil Șef",
    company: "ConstructPro",
    initials: "ED",
    accent: "bg-emerald-400/15 text-emerald-300",
  },
];

export function Testimonials() {
  return (
    <section id="testimoniale" className="relative scroll-mt-28 py-28">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="text-xs font-semibold tracking-[0.3em] text-sapphire-300 uppercase">
            Clienți
          </span>
          <h2 className="font-display mt-4 text-4xl font-bold tracking-tight text-white md:text-5xl">
            Afaceri reale, <span className="text-gradient">rezultate reale</span>
          </h2>
        </motion.div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.7,
                delay: i * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="flex flex-col rounded-3xl border border-line bg-surface/50 p-8 backdrop-blur-sm transition-colors duration-300 hover:border-sapphire-400/30"
            >
              <div className="flex gap-1 text-amber-400">
                {Array.from({ length: 5 }).map((_, s) => (
                  <IconStar key={s} className="h-4 w-4" />
                ))}
              </div>
              <blockquote className="mt-5 flex-1 leading-relaxed text-slate-300">
                „{t.quote}”
              </blockquote>
              <figcaption className="mt-7 flex items-center gap-4 border-t border-line pt-6">
                <span
                  className={`flex h-11 w-11 items-center justify-center rounded-full text-sm font-bold ${t.accent}`}
                >
                  {t.initials}
                </span>
                <span>
                  <span className="block text-sm font-semibold text-white">
                    {t.name}
                  </span>
                  <span className="block text-xs text-slate-500">
                    {t.role} · {t.company}
                  </span>
                </span>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
