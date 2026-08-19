import type { Metadata } from "next";
import { LegalShell, LegalSection, LegalTable } from "@/components/LegalShell";

export const metadata: Metadata = {
  title: "Politica de confidențialitate — Zafirok",
  description:
    "Ce date colectăm pe zafirok.com, în ce scop, pe ce temei juridic și ce drepturi ai, conform Legii nr. 195/2024.",
};

export default function PrivacyPage() {
  return (
    <LegalShell
      eyebrow="Confidențialitate"
      title="Ce date colectăm și de ce"
      intro="Această pagină se referă la site-ul de prezentare zafirok.com. Aplicațiile Zafirok au fiecare propria politică, fiindcă acolo datele sunt ale clienților noștri, nu ale noastre."
      updated="19 august 2026"
    >
      <LegalSection number={1} title="Cine răspunde pentru datele tale">
        <p>
          Operatorul este <strong>Creatego</strong>, IDNO{" "}
          <span className="legal-todo">[de completat]</span>, cu sediul în{" "}
          <span className="legal-todo">[de completat]</span>, Republica Moldova.
        </p>
        <p>
          Pentru orice întrebare privind datele tale sau pentru exercitarea drepturilor de mai
          jos, scrie la <a href="mailto:support@creatego.net">support@creatego.net</a>. Răspundem
          în cel mult o lună de la primirea cererii.
        </p>
        <p>
          Prelucrăm datele conform <strong>Legii nr. 195/2024 privind protecția datelor cu
          caracter personal</strong>, aplicabilă din 23 august 2026, iar pentru vizitatorii din
          Spațiul Economic European și conform Regulamentului (UE) 2016/679.
        </p>
      </LegalSection>

      <LegalSection number={2} title="Ce colectăm, în ce scop și pe ce temei">
        <p>
          Pe site-ul de prezentare nu ai cont și nu îți cerem date pentru a naviga. Colectăm
          strict următoarele:
        </p>
        <LegalTable
          head={["Date", "Scop", "Temei juridic", "Păstrare"]}
          rows={[
            [
              "Adresa IP, tipul browserului, pagina vizitată",
              "Funcționarea site-ului, securitate, prevenirea abuzurilor",
              <>
                Interes legitim, <strong>art. 6 alin. (1) lit. f)</strong>
              </>,
              "Maximum 90 de zile în jurnalele tehnice",
            ],
            [
              "Preferința de limbă",
              "Afișarea site-ului în limba aleasă",
              "Strict necesar pentru serviciul cerut",
              "Până la ștergerea din browser",
            ],
            [
              "Statistici agregate de utilizare",
              "Înțelegerea modului în care e folosit site-ul",
              <>
                Consimțământ, <strong>art. 6 alin. (1) lit. a)</strong>
              </>,
              "Doar dacă accepți, maximum 14 luni",
            ],
            [
              "Identificatori publicitari Meta",
              "Măsurarea campaniilor de promovare",
              <>
                Consimțământ, <strong>art. 6 alin. (1) lit. a)</strong>
              </>,
              "Doar dacă accepți, conform politicii Meta",
            ],
            [
              "Numele și adresa de email, dacă ne scrii",
              "Răspunsul la mesajul tău",
              <>
                Măsuri precontractuale, <strong>art. 6 alin. (1) lit. b)</strong>
              </>,
              "24 de luni de la ultima corespondență",
            ],
          ]}
        />
        <p>
          Statisticile și identificatorii publicitari nu pornesc înainte să alegi. Dacă refuzi,
          site-ul funcționează identic.
        </p>
      </LegalSection>

      <LegalSection number={3} title="Cui ajung datele">
        <p>
          Nu vindem date și nu le facem publice. Le pot prelucra doar furnizorii de care avem
          nevoie ca să ținem site-ul în funcțiune:
        </p>
        <ul>
          <li>
            <strong>Vercel Inc.</strong>, Statele Unite, găzduire și jurnale de acces.
          </li>
          <li>
            <strong>Meta Platforms Inc.</strong>, Statele Unite, măsurarea campaniilor, numai cu
            acordul tău.
          </li>
        </ul>
        <p>
          Putem transmite date și autorităților, dar numai când o obligație legală ne impune
          asta și numai în limita cerută.
        </p>
      </LegalSection>

      <LegalSection number={4} title="Transferuri în afara Republicii Moldova">
        <p>
          Furnizorii de mai sus prelucrează date în Statele Unite. Transferul se face în baza
          <strong> clauzelor contractuale standard</strong>, mecanism admis fără autorizare
          prealabilă de <strong>art. 46 alin. (2) lit. c)</strong> din Legea nr. 195/2024, iar
          pentru identificatorii publicitari și în baza consimțământului tău explicit,{" "}
          <strong>art. 49 alin. (1) lit. a)</strong>.
        </p>
        <p>
          Poți cere oricând o copie a garanțiilor aplicate, scriindu-ne la adresa de mai sus.
        </p>
      </LegalSection>

      <LegalSection number={5} title="Drepturile tale">
        <p>Ai, în legătură cu datele tale, următoarele drepturi:</p>
        <ul>
          <li>
            <strong>Acces</strong>, să afli ce date avem despre tine, art. 15.
          </li>
          <li>
            <strong>Rectificare</strong>, să corectăm ce e greșit, art. 16.
          </li>
          <li>
            <strong>Ștergere</strong>, să eliminăm datele, art. 17.
          </li>
          <li>
            <strong>Restricționare</strong>, să oprim temporar prelucrarea, art. 18.
          </li>
          <li>
            <strong>Portabilitate</strong>, să primești datele într-un format citibil automat,
            art. 20.
          </li>
          <li>
            <strong>Opoziție</strong>, să te opui prelucrării întemeiate pe interes legitim,
            art. 21.
          </li>
          <li>
            <strong>Retragerea consimțământului</strong>, oricând și la fel de simplu cum l-ai
            dat, art. 7 alin. (3). Pentru cookie-uri, folosește „Setări cookie-uri" din
            piciorul paginii.
          </li>
        </ul>
        <p>
          Nu luăm decizii automatizate cu efecte juridice asupra ta și nu facem profilare pe
          site-ul de prezentare.
        </p>
      </LegalSection>

      <LegalSection number={6} title="Dacă nu ești mulțumit de răspunsul nostru">
        <p>
          Scrie-ne întâi nouă, de obicei se rezolvă mai repede. Dacă nu ești mulțumit, ai
          dreptul să depui plângere la <strong>Centrul Național pentru Protecția Datelor cu
          Caracter Personal</strong>, str. Serghei Lazo 48, Chișinău, MD-2004, sau prin{" "}
          <a href="https://datepersonale.md" target="_blank" rel="noreferrer">
            datepersonale.md
          </a>
          . Te poți adresa și instanței de judecată.
        </p>
      </LegalSection>

      <LegalSection number={7} title="Modificări">
        <p>
          Când schimbăm ceva important, actualizăm data de sus și, dacă modificarea te
          afectează direct, îți cerem din nou alegerea privind cookie-urile. Versiunile
          anterioare sunt disponibile la cerere.
        </p>
      </LegalSection>
    </LegalShell>
  );
}
