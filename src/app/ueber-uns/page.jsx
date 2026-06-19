import Link from "next/link";
import TrustBadges from "@/components/TrustBadges";

export const metadata = {
  title: "Über uns",
  description: "Lerne das Team hinter Raphael Store kennen.",
};

export default function UeberUnsPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero */}
      <div className="relative rounded-3xl overflow-hidden bg-dark-card border border-dark-border p-8 sm:p-16 mb-16 text-center">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_0%,rgba(0,255,135,0.06),transparent)]" />
        <div className="relative">
          <p className="text-neon text-sm font-semibold tracking-widest uppercase mb-3">Unsere Story</p>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-white mb-6">
            Für uns gemacht.
            <br />
            <span className="text-gradient">Für dich weitergedacht.</span>
          </h1>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Raphael Store ist mehr als ein Onlineshop. Es ist ein Ausdruck von Leidenschaft – für
            Gaming, für Fitness, für den eigenen Style. Wir drucken keine Massenware, sondern
            Stücke mit Haltung.
          </p>
        </div>
      </div>

      {/* Values */}
      <section className="mb-16">
        <div className="text-center mb-10">
          <p className="text-neon text-sm font-semibold tracking-widest uppercase mb-2">Wofür wir stehen</p>
          <h2 className="text-3xl font-black text-white">Unsere Werte</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              emoji: "🌱",
              title: "Nachhaltig",
              text: "Jedes Produkt wird erst nach Bestellung produziert. Kein Overstock, kein Verschwendung. Print-on-Demand ist das nachhaltigste Modell im Textildruck.",
            },
            {
              emoji: "✨",
              title: "Premium Qualität",
              text: "Wir arbeiten ausschließlich mit zertifizierten Produktionspartnern, die OEKO-TEX-Standards erfüllen. Bio-Baumwolle, langlebige Drucke, top Verarbeitung.",
            },
            {
              emoji: "🎯",
              title: "Für die Community",
              text: "Unsere Designs entstehen aus der Community – für Gamer, Gym-Gänger und alle, die ihren Lifestyle ausdrücken wollen. Keine generischen Designs.",
            },
            {
              emoji: "🇩🇪",
              title: "Made in Germany",
              text: "Konzept, Design und Bestellabwicklung passieren direkt hier in Deutschland. Kurze Lieferwege, lokale Verantwortung.",
            },
            {
              emoji: "💡",
              title: "Transparent",
              text: "Keine versteckten Kosten, klare Preise, ehrliche Kommunikation. Wir sagen dir genau, wie dein Produkt hergestellt wird.",
            },
            {
              emoji: "🤝",
              title: "Kundenorientiert",
              text: "Fragen, Probleme, Anregungen? Wir antworten schnell und ehrlich. Zufriedenheit ist unser wichtigstes Produkt.",
            },
          ].map((v) => (
            <div key={v.title} className="bg-dark-card border border-dark-border rounded-2xl p-6 hover:border-neon/30 transition-all duration-300">
              <div className="text-3xl mb-4">{v.emoji}</div>
              <h3 className="text-white font-bold text-lg mb-2">{v.title}</h3>
              <p className="text-zinc-500 text-sm leading-relaxed">{v.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="mb-16">
        <div className="text-center mb-10">
          <p className="text-neon text-sm font-semibold tracking-widest uppercase mb-2">Print-on-Demand</p>
          <h2 className="text-3xl font-black text-white">Wie funktioniert das?</h2>
          <p className="text-zinc-500 mt-3 max-w-xl mx-auto">
            Bei Print-on-Demand wird jedes Produkt individuell nach Bestellung produziert – das
            macht es besonderer und nachhaltiger als klassische Massenware.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
          {[
            { step: "01", title: "Du bestellst", text: "Du wählst Produkt, Größe und gibst deine Adresse ein." },
            { step: "02", title: "Wir produzieren", text: "Unser Partner druckt dein Produkt speziell für dich." },
            { step: "03", title: "Qualitätsprüfung", text: "Jedes Stück wird vor dem Versand kontrolliert." },
            { step: "04", title: "Geliefert!", text: "Dein Paket kommt in 5–10 Werktagen bei dir an." },
          ].map((s) => (
            <div key={s.step} className="text-center">
              <div className="w-12 h-12 rounded-full bg-neon/10 border border-neon/30 flex items-center justify-center mx-auto mb-4">
                <span className="text-neon font-black text-sm">{s.step}</span>
              </div>
              <h3 className="text-white font-bold mb-2">{s.title}</h3>
              <p className="text-zinc-500 text-sm">{s.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Trust */}
      <TrustBadges className="mb-16" />

      {/* CTA */}
      <section className="text-center py-12 px-6 rounded-3xl bg-dark-card border border-dark-border">
        <h2 className="text-2xl sm:text-3xl font-black text-white mb-4">Überzeug dich selbst</h2>
        <p className="text-zinc-400 mb-8 max-w-md mx-auto">
          Schau dir unsere Produkte an und finde deinen neuen Lieblingsstyle.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/shop"
            className="inline-flex items-center justify-center gap-2 bg-neon hover:bg-neon-dark text-black font-bold px-8 py-4 rounded-xl transition-all hover:scale-105"
          >
            Shop entdecken
          </Link>
          <Link
            href="/kontakt"
            className="inline-flex items-center justify-center gap-2 border border-dark-border hover:border-zinc-600 text-white font-semibold px-8 py-4 rounded-xl transition-all"
          >
            Kontakt aufnehmen
          </Link>
        </div>
      </section>
    </div>
  );
}
