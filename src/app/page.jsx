import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import TrustBadges from "@/components/TrustBadges";
import products from "@/data/products.json";

export const metadata = {
  title: "Raphael Store – Gaming, Fitness & Lifestyle",
};

export default function HomePage() {
  const bestsellers = products.filter((p) => p.badge === "Bestseller");
  const newProducts = products.filter((p) => p.badge === "NEU");

  return (
    <div>
      {/* ── Hero ── */}
      <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-dark-bg">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(0,255,135,0.08),transparent)]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-neon/3 rounded-full blur-[120px]" />
        </div>

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
          <div className="inline-flex items-center gap-2 bg-neon/10 border border-neon/20 rounded-full px-4 py-1.5 text-neon text-sm font-medium mb-8">
            <span className="w-1.5 h-1.5 bg-neon rounded-full animate-pulse" />
            Print-on-Demand · Made for You
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tighter leading-none mb-6">
            <span className="text-white">Dein Style.</span>
            <br />
            <span className="text-gradient">Dein Statement.</span>
          </h1>

          <p className="text-zinc-400 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Premium Shirts, Hoodies und Poster für Gamer, Fitness-Enthusiasten und alle, die ihren
            Style ernst nehmen. Jedes Stück wird erst nach deiner Bestellung gefertigt.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/shop"
              className="inline-flex items-center justify-center gap-2 bg-neon hover:bg-neon-dark text-black font-bold px-8 py-4 rounded-xl text-lg transition-all duration-200 hover:scale-105 active:scale-95"
            >
              Shop entdecken
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
            <Link
              href="/ueber-uns"
              className="inline-flex items-center justify-center gap-2 bg-transparent hover:bg-dark-hover border border-dark-border hover:border-zinc-600 text-white font-semibold px-8 py-4 rounded-xl text-lg transition-all duration-200"
            >
              Über uns
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 mt-16 pt-10 border-t border-dark-border max-w-lg mx-auto">
            {[
              { value: "500+", label: "Bestellungen" },
              { value: "100%", label: "Bio-Materialien" },
              { value: "4.9★", label: "Kundenbewertung" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl font-black text-neon">{stat.value}</div>
                <div className="text-xs text-zinc-500 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
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

      {/* ── Bestseller ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center justify-between mb-8">
          <div>
            <p className="text-neon text-sm font-semibold tracking-widest uppercase mb-1">Beliebt</p>
            <h2 className="text-3xl font-black tracking-tight text-white">Bestseller</h2>
          </div>
          <Link
            href="/shop"
            className="text-zinc-400 hover:text-neon text-sm font-medium flex items-center gap-1 transition-colors"
          >
            Alle ansehen
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* ── Kategorien Banner ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { href: "/shop?kategorie=gaming", label: "Gaming", emoji: "🎮", desc: "T-Shirts & mehr", from: "#1a0533", to: "#2d1b69" },
            { href: "/shop?kategorie=fitness", label: "Fitness", emoji: "💪", desc: "Hoodies & Shirts", from: "#0d0d0d", to: "#1a1a1a" },
            { href: "/shop?kategorie=poster", label: "Poster", emoji: "🖼️", desc: "Wanddeko", from: "#000d1a", to: "#001a33" },
          ].map((cat) => (
            <Link
              key={cat.href}
              href={cat.href}
              className="relative rounded-2xl overflow-hidden h-40 flex items-center justify-center group border border-dark-border hover:border-neon/40 transition-all duration-300"
              style={{ background: `linear-gradient(135deg, ${cat.from} 0%, ${cat.to} 100%)` }}
            >
              <div className="text-center z-10">
                <div className="text-4xl mb-2">{cat.emoji}</div>
                <h3 className="text-white font-bold text-lg">{cat.label}</h3>
                <p className="text-zinc-400 text-sm">{cat.desc}</p>
              </div>
              <div className="absolute inset-0 bg-neon/0 group-hover:bg-neon/5 transition-all duration-300" />
            </Link>
          ))}
        </div>
      </section>

      {/* ── Neue Produkte ── */}
      {newProducts.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex items-center justify-between mb-8">
            <div>
              <p className="text-neon text-sm font-semibold tracking-widest uppercase mb-1">Frisch eingetroffen</p>
              <h2 className="text-3xl font-black tracking-tight text-white">Neuheiten</h2>
            </div>
            <Link
              href="/shop"
              className="text-zinc-400 hover:text-neon text-sm font-medium flex items-center gap-1 transition-colors"
            >
              Alle ansehen
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {newProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      )}

      {/* ── Über uns Teaser ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="relative rounded-3xl overflow-hidden bg-dark-card border border-dark-border p-8 sm:p-12 lg:p-16">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_80%_50%,rgba(0,255,135,0.05),transparent)]" />
          <div className="relative max-w-2xl">
            <p className="text-neon text-sm font-semibold tracking-widest uppercase mb-3">Unsere Story</p>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white mb-5">
              Für uns selbst gestartet.
              <br />
              <span className="text-gradient">Für dich weitergemacht.</span>
            </h2>
            <p className="text-zinc-400 text-lg leading-relaxed mb-8">
              Raphael Store entstand aus einer einfachen Idee: Shirts machen, die wir selbst tragen
              wollen. Designs, die zu uns passen – zu Gaming, zu Fitness, zu unserem Lifestyle. Kein
              Massenprodukt, sondern Stücke mit Bedeutung.
            </p>
            <Link
              href="/ueber-uns"
              className="inline-flex items-center gap-2 text-neon hover:text-white font-semibold transition-colors group"
            >
              Unsere Geschichte lesen
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="text-center py-12 px-6 rounded-3xl bg-neon/5 border border-neon/20">
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
            Bereit, deinen Style zu upgraden?
          </h2>
          <p className="text-zinc-400 mb-8 max-w-lg mx-auto">
            Entdecke alle Produkte und finde dein neues Lieblingsteil.
          </p>
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 bg-neon hover:bg-neon-dark text-black font-bold px-8 py-4 rounded-xl text-lg transition-all duration-200 hover:scale-105"
          >
            Jetzt shoppen
          </Link>
        </div>
      </section>
    </div>
  );
}
