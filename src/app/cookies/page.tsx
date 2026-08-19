import type { Metadata } from "next";
import { LegalShell, LegalSection, LegalTable } from "@/components/LegalShell";
import { ConsentSettingsButton } from "@/components/ConsentSettingsButton";

export const metadata: Metadata = {
  title: "Politica de cookie-uri — Zafirok",
  description:
    "Ce cookie-uri folosim pe zafirok.com, care sunt obligatorii, care depind de acordul tău și cum îți schimbi alegerea.",
};

export default function CookiesPage() {
  return (
    <LegalShell
      eyebrow="Cookie-uri"
      title="Ce se salvează în browserul tău"
      intro="Site-ul funcționează complet și dacă refuzi tot ce nu e strict necesar. Nu ascundem opțiunea de refuz și nu îți cerem alegerea din nou la fiecare vizită."
      updated="19 august 2026"
    >
      <LegalSection number={1} title="Alegerea ta, oricând">
        <p>
          Îți poți schimba opțiunile în orice moment, fără să ne scrii și fără să îți creezi
          cont. Retragerea are efect imediat pentru vizitele următoare.
        </p>
        <div className="pt-1">
          <ConsentSettingsButton />
        </div>
      </LegalSection>

      <LegalSection number={2} title="Strict necesare">
        <p>
          Fără ele site-ul nu poate funcționa, așa că nu îți cerem acordul pentru ele. Nu te
          urmăresc și nu ajung la nimeni altcineva.
        </p>
        <LegalTable
          head={["Ce salvăm", "La ce folosește", "Cât stă"]}
          rows={[
            [
              <code key="lang">limbă</code>,
              "Ține minte dacă citești în română, rusă sau engleză",
              "Până îl ștergi",
            ],
            [
              <code key="consent">zafirok_consent</code>,
              "Reține chiar alegerea ta privind cookie-urile, ca să nu te întrebăm iar",
              "12 luni",
            ],
          ]}
        />
      </LegalSection>

      <LegalSection number={3} title="Statistici">
        <p>
          Ne arată ce pagini sunt citite și unde oamenii se opresc, în formă agregată. Pornesc
          numai dacă le accepți.
        </p>
        <p>
          În acest moment nu rulăm niciun instrument de statistică pe site-ul de prezentare.
          Dacă adăugăm unul, actualizăm această pagină și îți cerem din nou alegerea, înainte
          ca instrumentul să pornească.
        </p>
      </LegalSection>

      <LegalSection number={4} title="Marketing">
        <p>Pornesc numai cu acordul tău explicit și pot fi oprite oricând.</p>
        <LegalTable
          head={["Furnizor", "Ce face", "Unde ajung datele"]}
          rows={[
            [
              <strong key="meta">Meta Pixel</strong>,
              "Măsoară câți vizitatori vin din campaniile noastre de promovare și ne ajută să nu arătăm reclame celor care ne-au contactat deja",
              "Meta Platforms Inc., Statele Unite",
            ],
          ]}
        />
        <p>
          Pixelul transmite adresa IP și identificatori de dispozitiv către Meta, în Statele
          Unite. De aceea îl tratăm ca transfer internațional și îl pornim doar pe baza
          consimțământului explicit, conform <strong>art. 49 alin. (1) lit. a)</strong> din
          Legea nr. 195/2024. Detalii în{" "}
          <a href="/confidentialitate">Politica de confidențialitate</a>.
        </p>
      </LegalSection>

      <LegalSection number={5} title="Cum le ștergi din browser">
        <p>
          Pe lângă panoul nostru de setări, poți șterge sau bloca tot ce salvează site-urile
          direct din browser, de obicei din secțiunea de confidențialitate. Reține că blocarea
          totală afectează multe site-uri, nu doar pe al nostru.
        </p>
      </LegalSection>
    </LegalShell>
  );
}
