"use client";

import { motion } from "motion/react";
import { IconStar } from "./icons";

const testimonials = [
  {
    quote:
      "Acum, datorită CRM-ului pentru electricieni și renovări, pot să țin sub control lucrul echipei mele: pe cine plătesc, ce volum face fiecare zilnic și orele de muncă. Înainte țineam totul în minte și aveam un carnețel în care era mereu încurcătură. Trebuia să calculez constant, era greu să țin cont de detaliile mici și nu mai știam cât câștig cu adevărat de pe fiecare obiect. Acum înregistrez toate proiectele în CRM și este atât de ușor să țin evidența, chiar e o plăcere. La început lucram în soft de pe telefon, dar apoi am trecut pe tabletă — îmi place să văd cifrele mai mari. Recomand: este mai simplu decât să ții calculele pe foaie și îți ia mai puțin timp decât să notezi în caiet.",
    name: "Valeriu Starciuc",
    role: "Electricitate și renovări",
    company: "ElectricSigur.com",
    initials: "VS",
    accent: "bg-sky-400/15 text-sky-300",
  },
  {
    quote:
      "Căutam un CRM pentru service auto și, când am văzut publicitatea Zafirok, mi-a plăcut ce am văzut. Am scris un simplu comentariu că sunt interesată și nu credeam că o să revină cineva. Dar echipa a fost foarte receptivă atât la început, cât și ulterior. Le-am sugerat câteva îmbunătățiri și le-au implementat foarte rapid. Este un sistem digital modern pentru service auto.",
    name: "Irina Istrati",
    role: "Service auto",
    company: "Optim Prime Motors",
    initials: "II",
    accent: "bg-cyan-400/15 text-cyan-300",
  },
  {
    quote:
      "Un prieten care folosește deja Zafirok drept CRM pentru service-ul lui auto ne-a recomandat să ne înregistrăm. După doar câteva minute de utilizare, am înțeles că este ceea ce avem nevoie. Având câteva filiale, s-a dovedit a fi cea mai bună soluție. Este ușor de folosit, iar totul este gândit exact pentru nevoile pe care le avem într-un service auto.",
    name: "Vitalie Maican",
    role: "Service auto",
    company: "BimmerMD",
    initials: "VM",
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
