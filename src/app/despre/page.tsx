import type { Metadata } from "next";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { FinalCTA } from "@/components/FinalCTA";
import { IconCheck, IconCloud, IconHeadphones, IconShield, IconZap } from "@/components/icons";

export const metadata: Metadata = {
  title: "Despre noi — Zafirok",
  description: "Cunoaște echipa CreateGo și misiunea din spatele ecosistemului Zafirok.",
};

const expertise = [
  "Sisteme CRM și platforme ERP",
  "Automatizarea fluxurilor de lucru",
  "Aplicații cloud și sisteme de stocuri",
  "Platforme pentru gestiunea afacerii",
  "Soluții bazate pe inteligență artificială",
];

const values = [
  { icon: IconZap, title: "Simplitate practică", text: "Software-ul puternic nu trebuie să fie complicat. Construim instrumente pe care echipele le pot înțelege și folosi rapid." },
  { icon: IconShield, title: "Transparență și încredere", text: "Prețuri clare, date care îți aparțin și relații construite prin comunicare onestă și practici corecte." },
  { icon: IconHeadphones, title: "Suport uman", text: "Ajutor rapid și aplicat, oferit de oameni care înțeleg atât produsul, cât și realitatea operațională a afacerii." },
  { icon: IconCloud, title: "Evoluție continuă", text: "Îmbunătățim platforma pornind de la probleme reale și o dezvoltăm odată cu afacerile clienților noștri." },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="overflow-hidden pt-28 sm:pt-32">
        <section className="relative px-5 pt-10 pb-16 sm:px-6 sm:pt-16 sm:pb-24">
          <div className="absolute top-0 left-1/2 h-[480px] w-[min(800px,100%)] -translate-x-1/2 rounded-full bg-sapphire-600/15 blur-[150px]" />
          <div className="relative mx-auto max-w-6xl">
            <div className="max-w-4xl">
              <span className="text-xs font-semibold tracking-[0.3em] text-sapphire-300 uppercase">Despre Zafirok</span>
              <h1 className="font-display mt-5 text-[2.375rem] leading-[1.1] font-bold tracking-tight text-balance text-white min-[380px]:text-5xl md:text-7xl md:leading-tight">
                Software pentru afaceri reale, construit de oameni care le <span className="text-gradient">înțeleg.</span>
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-400 sm:mt-7 sm:text-xl">
                Credem că afacerile mici și mijlocii merită sisteme moderne, fără implementări costisitoare, contracte complicate sau procese greu de înțeles.
              </p>
            </div>

            <div className="mt-10 overflow-hidden rounded-3xl border border-line bg-surface/40 p-1.5 sm:mt-14 sm:rounded-[2rem] sm:p-2 shadow-2xl shadow-sapphire-950/30">
              <Image src="/creatego-team.jpg" alt="Echipa CreateGo și clienții săi" width={2048} height={910} priority sizes="(min-width: 1152px) 1136px, calc(100vw - 2.5rem)" className="h-auto w-full rounded-[1.25rem] object-cover sm:rounded-[1.6rem]" />
            </div>
          </div>
        </section>

        <section className="px-5 py-16 sm:px-6 sm:py-24">
          <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-2">
            <article className="rounded-3xl border border-line bg-surface/55 p-6 sm:p-8 md:p-10">
              <span className="text-xs font-semibold tracking-[0.22em] text-sapphire-300 uppercase">Misiunea noastră</span>
              <h2 className="font-display mt-4 text-2xl font-bold text-balance text-white sm:text-3xl">Mai puțin haos. Mai mult timp pentru creștere.</h2>
              <p className="mt-5 leading-8 text-slate-400">Construim sisteme care ajută antreprenorii să organizeze clienții, echipele, documentele și operațiunile într-un singur mediu. Scopul nostru este simplu: mai puțină muncă administrativă, decizii mai clare și dezvoltare sustenabilă.</p>
            </article>
            <article className="rounded-3xl border border-sapphire-400/20 bg-sapphire-500/8 p-6 sm:p-8 md:p-10">
              <span className="text-xs font-semibold tracking-[0.22em] text-sapphire-300 uppercase">Viziunea noastră</span>
              <h2 className="font-display mt-4 text-2xl font-bold text-balance text-white sm:text-3xl">Tehnologie accesibilă, adaptată fiecărei industrii.</h2>
              <p className="mt-5 leading-8 text-slate-400">O platformă cloud colaborativă, modulară și ușor de folosit, care crește odată cu afacerea și se adaptează fluxurilor reale din fiecare nișă.</p>
            </article>
          </div>
        </section>

        <section className="relative px-5 py-16 sm:px-6 sm:py-24">
          <div className="mx-auto grid max-w-6xl items-center gap-10 sm:gap-14 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <a href="https://creatego.net" target="_blank" rel="noreferrer" className="inline-flex min-h-10 items-center text-xs font-semibold tracking-[0.3em] text-sapphire-300 uppercase transition-colors hover:text-white">Construit de CreateGo</a>
              <h2 className="font-display mt-4 text-[2rem] leading-tight font-bold text-balance text-white min-[380px]:text-4xl md:text-5xl">Produse software din 2009.</h2>
              <p className="mt-6 text-base leading-7 text-slate-400 sm:text-lg sm:leading-8"><a href="https://creatego.net" target="_blank" rel="noreferrer" className="font-semibold text-sapphire-300 transition-colors hover:text-white">CreateGo</a> dezvoltă sisteme practice, scalabile și ușor de folosit pentru medii operaționale reale. Zafirok reunește această experiență într-un ecosistem modern pentru gestiunea afacerii.</p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {expertise.map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-2xl border border-line bg-surface/50 px-5 py-4 text-sm font-medium text-slate-200">
                  <IconCheck className="h-4 w-4 shrink-0 text-emerald-300" />{item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-5 py-16 sm:px-6 sm:py-24">
          <div className="mx-auto max-w-6xl">
            <div className="max-w-3xl">
              <span className="text-xs font-semibold tracking-[0.3em] text-sapphire-300 uppercase">Cum lucrăm</span>
              <h2 className="font-display mt-4 text-[2rem] leading-tight font-bold text-balance text-white min-[380px]:text-4xl md:text-5xl">Construim împreună cu antreprenorii.</h2>
              <p className="mt-5 text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">Ascultăm proprietarii și echipele, înțelegem provocările operaționale și prioritizăm funcțiile după nevoi reale, nu după presupuneri.</p>
            </div>
            <div className="mt-10 grid gap-4 sm:mt-12 sm:gap-5 md:grid-cols-2">
              {values.map((value) => (
                <article key={value.title} className="rounded-3xl border border-line bg-surface/50 p-6 sm:p-7">
                  <value.icon className="h-6 w-6 text-sapphire-300" />
                  <h3 className="font-display mt-5 text-xl font-bold text-white">{value.title}</h3>
                  <p className="mt-3 leading-7 text-slate-400">{value.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
        <FinalCTA />
      </main>
    </>
  );
}
