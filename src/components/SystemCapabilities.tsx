"use client";

import { motion } from "motion/react";
import { IconChart, IconCloud, IconRefresh, IconShield, IconZap } from "./icons";

const modules = ["CRM", "Vânzări", "Achiziții", "Stocuri", "Proiecte", "Planificare", "Documente", "AI"];

const platformGroups = [
  {
    title: "Istoric și vizibilitate",
    icon: IconRefresh,
    items: ["Istoricul activității", "Cronologia clientului", "Jurnal de audit", "Istoricul versiunilor", "Căutare globală", "Rapoarte și analiză"],
  },
  {
    title: "Securitate și control",
    icon: IconShield,
    items: ["Backup automat", "Permisiuni bazate pe roluri", "Roluri pentru utilizatori", "Controlul accesului", "Notificări", "Administrare multi-companie"],
  },
  {
    title: "Flexibilitate și conectare",
    icon: IconZap,
    items: ["Manager de fișiere", "Atașamente", "Câmpuri personalizate", "Automatizări", "API", "Integrări", "Multi-locație", "Asistent AI"],
  },
];

export function SystemCapabilities() {
  return (
    <section className="relative overflow-hidden py-32">
      <div className="absolute top-1/3 left-1/2 h-[620px] w-[1000px] -translate-x-1/2 rounded-full bg-sapphire-600/10 blur-[180px]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="text-xs font-semibold tracking-[0.3em] text-sapphire-300 uppercase">În interiorul Zafirok</span>
          <h2 className="font-display mt-4 text-4xl font-bold tracking-tight text-white md:text-6xl">
            Tot ce ai nevoie pentru a conduce <span className="text-gradient">afacerea</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-400">
            O platformă unică pentru clienți, operațiuni, documente și decizii — configurată după procesele industriei tale.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mt-16 overflow-hidden rounded-[2rem] border border-sapphire-400/20 bg-gradient-to-br from-sapphire-500/10 via-surface/70 to-surface/40 p-8 backdrop-blur-sm md:p-10"
        >
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
            <div>
              <span className="text-xs font-semibold tracking-[0.22em] text-sapphire-300 uppercase">Module operaționale</span>
              <h3 className="font-display mt-2 text-2xl font-bold text-white md:text-3xl">Construiește sistemul potrivit afacerii tale</h3>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-slate-400">Fiecare modul se activează și se achită separat, dar folosește aceleași date și se conectează cu restul sistemului.</p>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-8">
            {modules.map((module, index) => (
              <div key={module} className="group flex min-h-24 flex-col justify-between rounded-2xl border border-line bg-ink/45 p-4 transition-colors hover:border-sapphire-400/40">
                <span className="font-display text-xs font-bold text-sapphire-400/60">{String(index + 1).padStart(2, "0")}</span>
                <span className="mt-5 text-sm font-semibold text-white">{module}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="mt-6 grid gap-6 lg:grid-cols-3">
          {platformGroups.map((group, index) => (
            <motion.article
              key={group.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.65, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="relative min-h-[500px] overflow-hidden rounded-[2rem] border border-line bg-surface/55 p-8 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-sapphire-400/30"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-sapphire-400/20 bg-sapphire-400/10 text-sapphire-300">
                <group.icon className="h-6 w-6" />
              </div>
              <h3 className="font-display mt-6 text-2xl font-bold text-white">{group.title}</h3>
              <div className="mt-7 h-px bg-gradient-to-r from-sapphire-400/40 to-transparent" />
              <ul className="mt-7 space-y-4">
                {group.items.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-[0.95rem] text-slate-200">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-sapphire-400/25 bg-sapphire-400/10">
                      <span className="h-1.5 w-1.5 rounded-full bg-sapphire-300" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>

        <div className="mt-6 grid gap-3 sm:grid-cols-3">
          <div className="flex items-center gap-3 rounded-2xl border border-line bg-ink/50 px-5 py-4 text-sm text-slate-300"><IconCloud className="h-5 w-5 text-sapphire-300" /> Cloud pe orice dispozitiv</div>
          <div className="flex items-center gap-3 rounded-2xl border border-line bg-ink/50 px-5 py-4 text-sm text-slate-300"><IconRefresh className="h-5 w-5 text-sapphire-300" /> Sincronizare în timp real</div>
          <div className="flex items-center gap-3 rounded-2xl border border-line bg-ink/50 px-5 py-4 text-sm text-slate-300"><IconChart className="h-5 w-5 text-sapphire-300" /> Date pregătite pentru decizii</div>
        </div>
      </div>
    </section>
  );
}
