export const metadata = {
  title: "Impressum",
  robots: { index: false },
};

export default function ImpressumPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-10">
        <p className="text-neon text-sm font-semibold tracking-widest uppercase mb-1">Rechtliches</p>
        <h1 className="text-4xl font-black text-white">Impressum</h1>
      </div>

      <div className="bg-dark-card border border-dark-border rounded-2xl p-6 sm:p-8 space-y-8 text-zinc-400 text-sm leading-relaxed">
        <section>
          <h2 className="text-white font-bold text-lg mb-3">Angaben gemäß § 5 TMG</h2>
          <div className="space-y-1">
            <p className="text-white font-medium">[DEIN VOLLSTÄNDIGER NAME]</p>
            <p>[DEINE STRASSE UND HAUSNUMMER]</p>
            <p>[DEINE PLZ UND ORT]</p>
            <p>Deutschland</p>
          </div>
        </section>

        <section>
          <h2 className="text-white font-bold mb-3">Kontakt</h2>
          <div className="space-y-1">
            <p>Telefon: [DEINE TELEFONNUMMER]</p>
            <p>E-Mail: kontakt@raphael-store.de</p>
          </div>
        </section>

        <section>
          <h2 className="text-white font-bold mb-3">Umsatzsteuer-ID</h2>
          <p>
            Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz:
            <br />
            <span className="text-white">[DEINE UST-ID ODER &quot;Nicht vorhanden (Kleinunternehmer gemäß § 19 UStG)&quot;]</span>
          </p>
        </section>

        <section>
          <h2 className="text-white font-bold mb-3">Wirtschafts-ID</h2>
          <p>[FALLS VORHANDEN, SONST ENTFERNEN]</p>
        </section>

        <section>
          <h2 className="text-white font-bold mb-3">Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h2>
          <div className="space-y-1">
            <p className="text-white">[DEIN VOLLSTÄNDIGER NAME]</p>
            <p>[DEINE ADRESSE WIE OBEN]</p>
          </div>
        </section>

        <section>
          <h2 className="text-white font-bold mb-3">Streitschlichtung</h2>
          <p>
            Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit.
            Die Plattform ist unter folgendem Link zu finden:{" "}
            <span className="text-neon">https://ec.europa.eu/consumers/odr/</span>
          </p>
          <p className="mt-2">
            Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
            Verbraucherschlichtungsstelle teilzunehmen.
          </p>
        </section>

        <section>
          <h2 className="text-white font-bold mb-3">Haftung für Inhalte</h2>
          <p>
            Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten
            nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als
            Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde
            Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige
            Tätigkeit hinweisen.
          </p>
        </section>

        <div className="pt-4 border-t border-dark-border">
          <p className="text-zinc-600 text-xs">
            ⚠️ Hinweis: Dieses Impressum ist ein Platzhalter. Bitte fülle alle mit [KLAMMERN]
            markierten Felder mit deinen echten Daten aus, bevor du den Shop live schaltest. Im
            Zweifel konsultiere einen Rechtsanwalt.
          </p>
        </div>
      </div>
    </div>
  );
}
