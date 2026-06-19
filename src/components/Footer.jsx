import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-dark-card border-t border-dark-border mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="text-2xl font-black tracking-tighter text-white hover:text-neon transition-colors">
              RAPHAEL
            </Link>
            <p className="mt-3 text-sm text-zinc-500 leading-relaxed">
              Fitness-Streetwear in limitierten Drops. Jedes Stück wird erst nach deiner Bestellung produziert – kein Overstock, maximale Qualität.
            </p>
            <div className="flex gap-3 mt-4">
              {["instagram", "tiktok", "twitter"].map((social) => (
                <span
                  key={social}
                  className="w-8 h-8 rounded-full bg-dark-border flex items-center justify-center text-zinc-500 cursor-not-allowed"
                  title="Demnächst verfügbar"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" />
                  </svg>
                </span>
              ))}
            </div>
          </div>

          {/* Shop */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Shop</h3>
            <ul className="space-y-2">
              {[
                { href: "/shop", label: "Alle Drops" },
                { href: "/shop?drop=drop1", label: "Drop 01 – Kleidung" },
                { href: "/shop?drop=drop2", label: "Drop 02 – Kleidung" },
                { href: "/shop?drop=drop3", label: "Drop 03 – Gear 🏋️" },
              ].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-zinc-500 hover:text-neon text-sm transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Info */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Info</h3>
            <ul className="space-y-2">
              {[
                { href: "/ueber-uns", label: "Über uns" },
                { href: "/kontakt", label: "Kontakt" },
                { href: "/impressum", label: "Impressum" },
                { href: "/datenschutz", label: "Datenschutz" },
              ].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-zinc-500 hover:text-neon text-sm transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Trust */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Versprechen</h3>
            <ul className="space-y-3">
              {[
                { icon: "🚚", text: "Kostenloser Versand ab 50 €" },
                { icon: "↩️", text: "14 Tage Rückgabe" },
                { icon: "🔒", text: "Sicher bezahlen" },
                { icon: "🌱", text: "Nachhaltig produziert" },
              ].map((item) => (
                <li key={item.text} className="flex items-center gap-2 text-sm text-zinc-500">
                  <span className="text-base">{item.icon}</span>
                  {item.text}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-dark-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-zinc-600 text-xs">
            © {new Date().getFullYear()} Raphael Store. Alle Rechte vorbehalten.
          </p>
          <p className="text-zinc-700 text-xs">
            Made in Germany 🇩🇪 · Print-on-Demand
          </p>
        </div>
      </div>
    </footer>
  );
}
