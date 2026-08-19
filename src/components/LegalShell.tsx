import type { ReactNode } from "react";
import { Navbar } from "@/components/Navbar";
import { FinalCTA } from "@/components/FinalCTA";

/**
 * Cadrul comun al paginilor juridice. Ține tipografia documentelor lungi
 * separată de restul site-ului: rând de citit îngust, ierarhie clară, fără
 * efectele vizuale din paginile de prezentare.
 */
export function LegalShell({
  eyebrow,
  title,
  intro,
  updated,
  children,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  updated: string;
  children: ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main className="overflow-hidden pt-32">
        <section className="relative px-6 pt-16 pb-20">
          <div className="absolute top-0 left-1/2 h-[420px] w-[700px] -translate-x-1/2 rounded-full bg-sapphire-600/12 blur-[150px]" />
          <div className="relative mx-auto max-w-3xl">
            <span className="text-xs font-semibold tracking-[0.3em] text-sapphire-300 uppercase">
              {eyebrow}
            </span>
            <h1 className="font-display mt-5 text-4xl leading-tight font-bold tracking-tight text-balance text-white md:text-6xl">
              {title}
            </h1>
            <p className="mt-7 text-lg leading-relaxed text-slate-400">{intro}</p>
            <p className="mt-6 border-t border-line pt-6 text-sm text-slate-600">
              Ultima actualizare: {updated}
            </p>
          </div>
        </section>

        <section className="px-6 pb-28">
          <div className="legal-body mx-auto max-w-3xl">{children}</div>
        </section>
      </main>
      <FinalCTA />
    </>
  );
}

/** Secțiune numerotată, ca trimiterile din corespondență să fie fără echivoc. */
export function LegalSection({
  number,
  title,
  children,
}: {
  number: number;
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="border-t border-line py-10 first:border-t-0 first:pt-0">
      <h2 className="font-display flex gap-4 text-xl font-semibold text-balance text-white md:text-2xl">
        <span className="pt-0.5 text-base text-sapphire-400 tabular-nums">
          {String(number).padStart(2, "0")}
        </span>
        {title}
      </h2>
      <div className="mt-5 space-y-4 text-[15px] leading-relaxed text-slate-400">{children}</div>
    </section>
  );
}

/** Tabel cu derulare proprie, ca pagina să nu se miște lateral pe telefon. */
export function LegalTable({ head, rows }: { head: string[]; rows: ReactNode[][] }) {
  return (
    <div className="overflow-x-auto rounded-xl border border-line">
      <table className="w-full min-w-[520px] border-collapse text-left text-sm">
        <thead>
          <tr>
            {head.map((cell) => (
              <th
                key={cell}
                className="border-b border-line bg-white/[0.03] px-4 py-3 text-xs font-semibold tracking-[0.12em] text-slate-400 uppercase"
              >
                {cell}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={index}>
              {row.map((cell, cellIndex) => (
                <td
                  key={cellIndex}
                  className="border-b border-line/60 px-4 py-3 align-top text-slate-400 last:border-r-0"
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
