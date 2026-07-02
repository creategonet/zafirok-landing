"use client";

import { motion } from "motion/react";
import { LogoMark } from "./Logo";
import {
  IconArrowRight,
  IconCalculator,
  IconHardHat,
  IconUsers,
  IconWrench,
} from "./icons";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 28, filter: "blur(8px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
};

function OrbitChip({
  icon,
  label,
  accent,
  duration,
  reverse,
}: {
  icon: React.ReactNode;
  label: string;
  accent: string;
  duration: string;
  reverse?: boolean;
}) {
  return (
    <div
      className={reverse ? "animate-orbit" : "animate-orbit-reverse"}
      style={{ animationDuration: duration }}
    >
      <div className="flex items-center gap-2 rounded-xl border border-line bg-surface/90 px-3 py-2 shadow-lg shadow-black/40 backdrop-blur-sm">
        <span className={accent}>{icon}</span>
        <span className="text-xs font-semibold whitespace-nowrap text-white">
          {label}
        </span>
      </div>
    </div>
  );
}

function OrbitSystem() {
  return (
    <div className="relative mx-auto aspect-square w-[320px] sm:w-[420px] lg:w-[480px]">
      {/* glow */}
      <div className="absolute inset-8 rounded-full bg-sapphire-600/25 blur-[90px]" />
      <div className="absolute inset-24 rounded-full bg-cyan-500/15 blur-[60px]" />

      {/* outer ring */}
      <div
        className="animate-orbit absolute inset-0 rounded-full border border-line"
        style={{ animationDuration: "38s" }}
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <OrbitChip
            icon={<IconUsers className="h-4 w-4" />}
            label="CRM"
            accent="text-sky-400"
            duration="38s"
          />
        </div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
          <OrbitChip
            icon={<IconCalculator className="h-4 w-4" />}
            label="Accounting"
            accent="text-emerald-400"
            duration="38s"
          />
        </div>
        <div className="absolute top-1/2 left-0 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-sapphire-400" />
        <div className="absolute top-1/2 right-0 h-1.5 w-1.5 -translate-y-1/2 translate-x-1/2 rounded-full bg-cyan-400/70" />
      </div>

      {/* inner ring */}
      <div
        className="animate-orbit-reverse absolute inset-[56px] rounded-full border border-line sm:inset-[76px]"
        style={{ animationDuration: "30s" }}
      >
        <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2">
          <OrbitChip
            icon={<IconWrench className="h-4 w-4" />}
            label="Auto Service"
            accent="text-cyan-400"
            duration="30s"
            reverse
          />
        </div>
        <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2">
          <OrbitChip
            icon={<IconHardHat className="h-4 w-4" />}
            label="Construction"
            accent="text-amber-400"
            duration="30s"
            reverse
          />
        </div>
        <div className="absolute top-0 left-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-sapphire-300" />
      </div>

      {/* center mark */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="animate-float flex h-24 w-24 items-center justify-center rounded-3xl border border-sapphire-400/30 bg-surface/90 shadow-2xl shadow-sapphire-600/30 backdrop-blur-sm sm:h-28 sm:w-28">
          <LogoMark className="h-14 w-14 text-sapphire-300 sm:h-16 sm:w-16" />
        </div>
      </div>
    </div>
  );
}

const marqueeItems = [
  "CRM",
  "Auto Service",
  "Accounting",
  "Construction",
  "Cloud",
  "Rapoarte în timp real",
  "Automatizări",
  "e-Factura",
  "Mobile",
  "API deschis",
];

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-36 pb-0 lg:pt-40">
      {/* background layers */}
      <div className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_35%,black_30%,transparent_100%)]" />
      <div
        className="animate-aurora absolute -top-40 -left-40 h-[560px] w-[560px] rounded-full bg-sapphire-600/25 blur-[140px]"
        style={{ animationDuration: "18s" }}
      />
      <div
        className="animate-aurora absolute top-20 -right-40 h-[480px] w-[480px] rounded-full bg-cyan-500/15 blur-[120px]"
        style={{ animationDuration: "24s", animationDelay: "-8s" }}
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-16 px-6 lg:grid-cols-2 lg:gap-8">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.div
            variants={item}
            className="inline-flex items-center gap-2.5 rounded-full border border-line bg-surface/60 px-4 py-2 backdrop-blur-sm"
          >
            <span className="animate-pulse-dot h-2 w-2 rounded-full bg-sapphire-400" />
            <span className="text-xs font-medium tracking-wide text-sapphire-200">
              Suita software care crește odată cu afacerea ta
            </span>
          </motion.div>

          <motion.h1
            variants={item}
            className="font-display mt-6 text-5xl leading-[1.05] font-bold tracking-tight text-white md:text-6xl lg:text-7xl"
          >
            Un singur
            <br />
            ecosistem.
            <br />
            <span className="text-gradient">Toată afacerea ta.</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-lg text-lg leading-relaxed text-slate-400"
          >
            CRM, service auto, contabilitate și construcții — patru sisteme
            care vorbesc între ele, ca tu să vezi întreaga afacere dintr-o
            singură privire.
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="group flex items-center gap-2 rounded-2xl bg-sapphire-500 px-7 py-4 text-sm font-semibold text-white shadow-lg shadow-sapphire-600/40 transition-all duration-200 hover:bg-sapphire-400 hover:shadow-sapphire-500/50"
            >
              Solicită un demo
              <IconArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </a>
            <a
              href="#produse"
              className="rounded-2xl border border-line bg-surface/60 px-7 py-4 text-sm font-semibold text-slate-200 backdrop-blur-sm transition-colors duration-200 hover:border-sapphire-400/40 hover:text-white"
            >
              Descoperă produsele
            </a>
          </motion.div>

          <motion.div
            variants={item}
            className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-slate-500"
          >
            <span>
              <strong className="font-semibold text-white">4</strong> sisteme
              integrate
            </span>
            <span className="hidden h-4 w-px bg-line sm:block" />
            <span>
              <strong className="font-semibold text-white">99,9%</strong>{" "}
              uptime
            </span>
            <span className="hidden h-4 w-px bg-line sm:block" />
            <span>
              Suport <strong className="font-semibold text-white">dedicat</strong>
            </span>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          <OrbitSystem />
        </motion.div>
      </div>

      {/* marquee */}
      <div className="relative mt-20 border-y border-line py-5 [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
        <div className="animate-marquee flex w-max gap-12">
          {[...marqueeItems, ...marqueeItems].map((label, i) => (
            <span
              key={i}
              className="flex items-center gap-12 text-sm font-medium tracking-[0.2em] text-slate-500 uppercase"
            >
              {label}
              <span className="h-1 w-1 rounded-full bg-sapphire-500/60" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
