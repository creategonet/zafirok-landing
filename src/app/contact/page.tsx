import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Logo } from "@/components/Logo";
import { IconArrowRight, IconHeadphones } from "@/components/icons";

export const metadata: Metadata = {
  title: "Contact — Zafirok",
  description: "Contactează echipa Zafirok pentru suport, demonstrații și informații despre produsele noastre.",
};

const contacts = [
  { label: "Email", value: "support@creatego.net", href: "mailto:support@creatego.net", note: "Suport și întrebări generale" },
  { label: "Europa", value: "+373 68 885 454", href: "tel:+37368885454", note: "Apeluri și WhatsApp" },
  { label: "SUA și Canada", value: "+1 786 755 8289", href: "tel:+17867558289", note: "Apeluri și WhatsApp" },
];

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="relative min-h-dvh overflow-hidden px-5 pt-32 pb-16 sm:px-6 sm:pt-44 sm:pb-20">
        <div className="absolute top-20 left-1/2 h-[520px] w-[min(850px,100%)] -translate-x-1/2 rounded-full bg-sapphire-600/15 blur-[160px]" />
        <div className="relative mx-auto max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-semibold tracking-[0.3em] text-sapphire-300 uppercase">Contact</span>
            <h1 className="font-display mt-5 text-[2.5rem] leading-[1.08] font-bold tracking-tight text-balance text-white min-[380px]:text-5xl md:text-7xl">Hai să discutăm despre <span className="text-gradient">afacerea ta.</span></h1>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">Ai nevoie de suport, vrei o demonstrație sau cauți sistemul potrivit pentru echipa ta? Suntem aici să te ajutăm.</p>
          </div>

          <div className="mt-12 grid gap-4 sm:mt-16 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
            {contacts.map((contact) => (
              <a key={contact.value} href={contact.href} className="group rounded-3xl border border-line bg-surface/55 p-6 backdrop-blur-sm sm:p-7 transition-all hover:-translate-y-1 hover:border-sapphire-400/35">
                <span className="text-xs font-semibold tracking-[0.2em] text-sapphire-300 uppercase">{contact.label}</span>
                <strong className="font-display mt-4 block text-xl break-words text-white sm:mt-5 lg:text-2xl">{contact.value}</strong>
                <span className="mt-3 block text-sm text-slate-500">{contact.note}</span>
                <IconArrowRight className="mt-6 h-5 w-5 sm:mt-8 text-sapphire-300 transition-transform group-hover:translate-x-1" />
              </a>
            ))}
          </div>

          <div className="mt-6 flex flex-col items-stretch justify-between gap-6 rounded-3xl border border-sapphire-400/20 bg-sapphire-500/8 p-6 sm:mt-8 sm:flex-row sm:items-center sm:p-8">
            <div className="flex items-center gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-sapphire-400/10 text-sapphire-300"><IconHeadphones className="h-6 w-6" /></span>
              <div><strong className="block text-white">Răspundem cât mai rapid</strong><span className="mt-1 block text-sm text-slate-400">Echipa noastră îți oferă ajutor practic și direct.</span></div>
            </div>
            <a href="mailto:support@creatego.net" className="shrink-0 rounded-xl bg-sapphire-500 px-6 py-3.5 text-center text-sm font-semibold text-white transition-colors hover:bg-sapphire-400">Trimite un email</a>
          </div>
        </div>
      </main>
      <footer className="border-t border-line px-5 pt-8 pb-[max(2rem,env(safe-area-inset-bottom))] sm:px-6"><div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4"><Logo sublabel="Business Systems" /><span className="text-xs text-slate-600">© 2026 Zafirok</span></div></footer>
    </>
  );
}
