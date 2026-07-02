"use client";

import { useEffect, useRef } from "react";
import { animate, motion, useInView } from "motion/react";
import {
  IconChart,
  IconCloud,
  IconHeadphones,
  IconRefresh,
  IconShield,
  IconZap,
} from "./icons";

const features = [
  {
    icon: IconRefresh,
    title: "Date sincronizate",
    text: "Clientul din CRM e același din facturare. Fără copy-paste, fără versiuni diferite ale adevărului.",
  },
  {
    icon: IconCloud,
    title: "Cloud & mobil",
    text: "Lucrezi din birou, din service sau de pe șantier. Datele te urmează pe orice dispozitiv.",
  },
  {
    icon: IconShield,
    title: "Securitate serioasă",
    text: "Backup automat, acces pe roluri și criptare. Datele afacerii tale rămân doar ale tale.",
  },
  {
    icon: IconZap,
    title: "Implementare rapidă",
    text: "Pornești în zile, nu în luni. Importăm datele existente și îți instruim echipa.",
  },
  {
    icon: IconChart,
    title: "Rapoarte în timp real",
    text: "Cash flow, vânzări, costuri pe proiect — cifrele care contează, fără să aștepți sfârșitul lunii.",
  },
  {
    icon: IconHeadphones,
    title: "Suport care răspunde",
    text: "Oameni reali, care înțeleg afacerea ta, nu doar software-ul. În limba ta, când ai nevoie.",
  },
];

const stats = [
  { value: 4, decimals: 0, suffix: "", label: "sisteme integrate" },
  { value: 500, decimals: 0, suffix: "+", label: "companii active" },
  { value: 99.9, decimals: 1, suffix: "%", label: "uptime garantat" },
  { value: 1.2, decimals: 1, suffix: "M+", label: "documente procesate" },
];

function Counter({
  value,
  decimals,
  suffix,
}: {
  value: number;
  decimals: number;
  suffix: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration: 1.8,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => {
        if (ref.current) {
          ref.current.textContent =
            v.toFixed(decimals).replace(".", ",") + suffix;
        }
      },
    });
    return () => controls.stop();
  }, [inView, value, decimals, suffix]);

  return <span ref={ref}>{(0).toFixed(decimals).replace(".", ",")}</span>;
}

export function WhyZafirok() {
  return (
    <section id="ecosistem" className="relative scroll-mt-28 py-28">
      <div className="absolute top-1/3 left-1/2 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-sapphire-600/10 blur-[140px]" />

      <div className="relative mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="text-xs font-semibold tracking-[0.3em] text-sapphire-300 uppercase">
            Ecosistem
          </span>
          <h2 className="font-display mt-4 text-4xl font-bold tracking-tight text-white md:text-5xl">
            Construit să lucreze <span className="text-gradient">împreună</span>
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-400">
            Nu vindem patru aplicații separate. Construim un singur ecosistem în
            care fiecare modul îl face pe celălalt mai valoros.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.6,
                delay: (i % 3) * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group rounded-2xl border border-line bg-surface/50 p-7 backdrop-blur-sm transition-colors duration-300 hover:border-sapphire-400/30"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-sapphire-500/10 text-sapphire-300 transition-colors duration-300 group-hover:bg-sapphire-500/20">
                <feature.icon className="h-5 w-5" />
              </div>
              <h3 className="font-display mt-5 text-lg font-semibold text-white">
                {feature.title}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-slate-400">
                {feature.text}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mt-20 grid grid-cols-2 gap-y-10 rounded-3xl border border-line bg-surface/40 px-8 py-12 backdrop-blur-sm lg:grid-cols-4"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-display text-gradient text-4xl font-bold md:text-5xl">
                <Counter
                  value={stat.value}
                  decimals={stat.decimals}
                  suffix={stat.suffix}
                />
              </div>
              <div className="mt-2 text-sm text-slate-500">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
