import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import TrustBadges from "@/components/TrustBadges";
import products from "@/data/products.json";

export const metadata = {
  title: "Raphael Store – Fitness Drops",
};

export default function HomePage() {
  const drop1 = products.filter((p) => p.category === "drop1");
  const drop2 = products.filter((p) => p.category === "drop2");
  const drop3 = products.filter((p) => p.category === "drop3");

  return (
    <div>
      {/* ── Hero ── */}
      <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-dark-bg">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(0,255,135,0.08),transparent)]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-neon/3 rounded-full blur-[120px]" />
        </div>

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
          <div className="inline-flex items-center gap-2 bg-neon/10 border border-neon/20 rounded-full px-4 py-1.5 text-neon text-sm font-medium mb-8">
            <span className="w-1.5 h-1.5 bg-neon rounded-full animate-pulse" />
            Drop 03 – Gear & Equipment jetzt live 🏋️
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-8xl font-black tracking-tighter leading-none mb-6">
            <span className="text-white">Train Hard.</span>
            <br />
            <span className="text-gradient">Look Different.</span>
          </h1>

          <p className="text-zinc-400 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Fitness-Streetwear für die, die es ernst meinen. Limitierte Drops, premium Materialien,
            Designs die im Gym und auf der Straße funktionieren.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/shop?drop=drop3"
              className="inline-flex items-center justify-center gap-2 bg-neon hover:bg-neon-dark text-black font-bold px-8 py-4 rounded-xl text-lg transition-all duration-200 hover:scale-105 active:scale-95"
            >
              Drop 03 ansehen
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
            <Link
              href="/shop"
              className="inline-flex items-center justify-center gap-2 bg-transparent hover:bg-dark-hover border border-dark-border hover:border-zinc-600 text-white font-semibold px-8 py-4 rounded-xl text-lg transition-all duration-200"
            >
              Alle Drops ansehen
            </Link>
          </div>

          <div className="grid grid-cols-3 gap-6 mt-16 pt-10 border-t border-dark-border max-w-lg mx-auto">
            {[
              { value: "2", label: "Drops bisher" },
              { value: "100%", label: "Bio-Materialien" },
              { value: "4.9★", label: "Bewertung" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl font-black text-neon">{stat.value}</div>
                <div className="text-xs text-zinc-500 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-zinc-600 text-xs animate-bounce">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </div>
      </section>

      {/* ── Trust Badges ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <TrustBadges />
      </section>

      {/* ── Drop 03 – Gear ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center justify-between mb-8">
          <div>
            <div className="inline-flex items-center gap-2 bg-neon/10 border border-neon/20 rounded-full px-3 py-1 text-neon text-xs font-bold mb-2">
              <span className="w-1.5 h-1.5 bg-neon rounded-full animate-pulse" />
              JETZT LIVE
            </div>
            <h2 className="text-3xl font-black tracking-tight text-white">Drop 03 – Gear</h2>
            <p className="text-zinc-500 text-sm mt-1">Fitness-Equipment & Zubehör</p>
          </div>
          <Link
            href="/shop?drop=drop3"
            className="text-zinc-400 hover:text-neon text-sm font-medium flex items-center gap-1 transition-colors"
          >
            Alle ansehen
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {drop3.slice(0, 4).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        {drop3.length > 4 && (
          <div className="text-center mt-8">
            <Link
              href="/shop?drop=drop3"
              className="inline-flex items-center gap-2 border border-dark-border hover:border-neon/40 text-zinc-400 hover:text-neon font-medium px-6 py-3 rounded-xl transition-all duration-200"
            >
              Alle {drop3.length} Gear-Produkte ansehen
            </Link>
          </div>
        )}
      </section>

      {/* ── Drop 02 ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-black tracking-tight text-white">Drop 02</h2>
            <p className="text-zinc-500 text-sm mt-1">Fitness Streetwear – Kollektion 2</p>
          </div>
          <Link
            href="/shop?drop=drop2"
            className="text-zinc-400 hover:text-neon text-sm font-medium flex items-center gap-1 transition-colors"
          >
            Alle ansehen
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {drop2.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* ── Drop Konzept Banner ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="relative rounded-3xl overflow-hidden bg-dark-card border border-neon/20 p-8 sm:p-12">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_80%_at_0%_50%,rgba(0,255,135,0.04),transparent)]" />
          <div className="relative grid grid-cols-1 sm:grid-cols-3 gap-8 text-center sm:text-left">
            <div className="sm:col-span-2">
              <p className="text-neon text-sm font-semibold tracking-widest uppercase mb-3">Das Drop-Modell</p>
              <h2 className="text-2xl sm:text-3xl font-black text-white mb-4">
                Kein Massenprodukt.
                <br />
                Jedes Stück wird für dich gefertigt.
              </h2>
              <p className="text-zinc-400 leading-relaxed">
                Wir produzieren keine Lagerware. Jeder Drop enthält eine limitierte Kollektion –
                wenn ein Piece weg ist, ist es weg. Print-on-Demand bedeutet: dein Shirt wird
                erst gedruckt, wenn du es bestellst. Frischer geht's nicht.
              </p>
            </div>
            <div className="flex flex-col justify-center gap-4">
              {[
                { icon: "⚡", text: "Limitierte Stückzahl pro Drop" },
                { icon: "🌱", text: "Nur auf Bestellung produziert" },
                { icon: "🏆", text: "Premium Bio-Materialien" },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-3 text-sm text-zinc-400">
                  <span className="text-xl">{item.icon}</span>
                  {item.text}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Drop 01 – Klassiker ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center justify-between mb-8">
          <div>
            <p className="text-zinc-500 text-sm font-semibold tracking-widest uppercase mb-1">Die Ursprünge</p>
            <h2 className="text-3xl font-black tracking-tight text-white">Drop 01</h2>
          </div>
          <Link
            href="/shop?drop=drop1"
            className="text-zinc-400 hover:text-neon text-sm font-medium flex items-center gap-1 transition-colors"
          >
            Alle ansehen
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {drop1.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* ── Über uns Teaser ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pb-16">
        <div className="relative rounded-3xl overflow-hidden bg-dark-card border border-dark-border p-8 sm:p-12 lg:p-16">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_80%_50%,rgba(0,255,135,0.05),transparent)]" />
          <div className="relative max-w-2xl">
            <p className="text-neon text-sm font-semibold tracking-widest uppercase mb-3">Warum Raphael?</p>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white mb-5">
              Für die, die täglich
              <br />
              <span className="text-gradient">ihre Grenzen pushen.</span>
            </h2>
            <p className="text-zinc-400 text-lg leading-relaxed mb-8">
              Raphael Store macht Fitness-Streetwear für Leute mit Mindset. Keine generischen
              Motivations-Sprüche – sondern Stücke, die deine Lebensweise widerspiegeln. Train hard,
              dress sharp.
            </p>
            <Link
              href="/ueber-uns"
              className="inline-flex items-center gap-2 text-neon hover:text-white font-semibold transition-colors group"
            >
              Unsere Story
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
