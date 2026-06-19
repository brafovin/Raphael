export const metadata = {
  title: "Datenschutz",
  robots: { index: false },
};

export default function DatenschutzPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-10">
        <p className="text-neon text-sm font-semibold tracking-widest uppercase mb-1">Rechtliches</p>
        <h1 className="text-4xl font-black text-white">Datenschutzerklärung</h1>
        <p className="text-zinc-500 mt-2 text-sm">Stand: Januar 2025</p>
      </div>

      <div className="bg-dark-card border border-dark-border rounded-2xl p-6 sm:p-8 space-y-8 text-zinc-400 text-sm leading-relaxed">
        <section>
          <h2 className="text-white font-bold text-lg mb-3">1. Datenschutz auf einen Blick</h2>
          <h3 className="text-zinc-300 font-semibold mb-2">Allgemeine Hinweise</h3>
          <p>
            Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren
            personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene
            Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
          </p>
        </section>

        <section>
          <h2 className="text-white font-bold text-lg mb-3">2. Verantwortlicher</h2>
          <div className="space-y-1">
            <p className="text-white">[DEIN VOLLSTÄNDIGER NAME]</p>
            <p>[DEINE ADRESSE]</p>
            <p>E-Mail: kontakt@raphael-store.de</p>
          </div>
        </section>

        <section>
          <h2 className="text-white font-bold text-lg mb-3">3. Datenerfassung auf dieser Website</h2>
          <h3 className="text-zinc-300 font-semibold mb-2">Cookies</h3>
          <p>
            Diese Website verwendet ausschließlich technisch notwendige Cookies. Diese Cookies
            dienen dem Betrieb des Warenkorbs und der Speicherung deiner Cookie-Einwilligung.
            Es werden keine Tracking- oder Werbe-Cookies gesetzt. Die Rechtsgrundlage ist Art.
            6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der Funktionsfähigkeit der Website).
          </p>

          <h3 className="text-zinc-300 font-semibold mb-2 mt-5">Lokaler Speicher (localStorage)</h3>
          <p>
            Der Warenkorb wird im localStorage Ihres Browsers gespeichert. Diese Daten verbleiben
            lokal auf Ihrem Gerät und werden nicht an unsere Server übertragen.
          </p>

          <h3 className="text-zinc-300 font-semibold mb-2 mt-5">Kontaktformular</h3>
          <p>
            Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem
            Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung
            der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben
            wir nicht ohne Ihre Einwilligung weiter.
          </p>

          <h3 className="text-zinc-300 font-semibold mb-2 mt-5">Bestelldaten</h3>
          <p>
            Bei einer Bestellung erheben wir Name, Lieferadresse und E-Mail-Adresse. Diese Daten
            werden ausschließlich zur Auftragsabwicklung und -kommunikation verwendet und nach
            Ablauf der gesetzlichen Aufbewahrungsfristen gelöscht.
          </p>
        </section>

        <section>
          <h2 className="text-white font-bold text-lg mb-3">4. Analyse-Tools und Werbung</h2>
          <p>
            Diese Website verwendet derzeit keine Analyse-Tools (wie Google Analytics) oder
            Werbenetzwerke. Es werden keine Daten an Drittanbieter für Werbezwecke weitergegeben.
          </p>
        </section>

        <section>
          <h2 className="text-white font-bold text-lg mb-3">5. Ihre Rechte</h2>
          <p>Sie haben jederzeit das Recht:</p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Auskunft über Ihre gespeicherten personenbezogenen Daten zu erhalten (Art. 15 DSGVO)</li>
            <li>Berichtigung unrichtiger Daten zu verlangen (Art. 16 DSGVO)</li>
            <li>Löschung Ihrer Daten zu verlangen (Art. 17 DSGVO)</li>
            <li>Einschränkung der Verarbeitung zu verlangen (Art. 18 DSGVO)</li>
            <li>Datenübertragbarkeit (Art. 20 DSGVO)</li>
            <li>Widerspruch gegen die Verarbeitung einzulegen (Art. 21 DSGVO)</li>
          </ul>
          <p className="mt-3">
            Außerdem haben Sie das Recht, sich bei einer Datenschutz-Aufsichtsbehörde über die
            Verarbeitung Ihrer personenbezogenen Daten zu beschweren.
          </p>
        </section>

        <section>
          <h2 className="text-white font-bold text-lg mb-3">6. Hosting</h2>
          <p>
            Diese Website wird gehostet bei [DEIN HOSTING-ANBIETER, z.B. Vercel, Hetzner o.ä.].
            Beim Aufrufen der Website werden automatisch Server-Logfiles erfasst, die technisch
            notwendig sind (IP-Adresse, Zeitstempel, aufgerufene Seite). Diese werden nach [X]
            Tagen automatisch gelöscht.
          </p>
        </section>

        <div className="pt-4 border-t border-dark-border">
          <p className="text-zinc-600 text-xs">
            ⚠️ Hinweis: Diese Datenschutzerklärung ist ein Platzhalter. Bitte passe sie an deine
            tatsächlichen Datenverarbeitungsprozesse an. Für einen rechtskonformen Betrieb wird die
            Konsultation eines Datenschutzbeauftragten oder Rechtsanwalts empfohlen.
          </p>
        </div>
      </div>
    </div>
  );
}
