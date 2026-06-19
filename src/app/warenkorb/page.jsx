"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function WarenkorbPage() {
  const { items, removeFromCart, updateQuantity, cartTotal, hydrated } = useCart();

  const shipping = cartTotal >= 50 || cartTotal === 0 ? 0 : 3.99;
  const total = cartTotal + shipping;

  if (!hydrated) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center">
        <div className="text-zinc-600 text-sm">Warenkorb wird geladen...</div>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center animate-fade-in">
        <div className="text-7xl mb-6">🛒</div>
        <h1 className="text-3xl font-black text-white mb-4">Dein Warenkorb ist leer</h1>
        <p className="text-zinc-500 mb-8 max-w-sm mx-auto">
          Du hast noch nichts in deinen Warenkorb gelegt. Entdecke unsere Produkte!
        </p>
        <Link
          href="/shop"
          className="inline-flex items-center gap-2 bg-neon hover:bg-neon-dark text-black font-bold px-8 py-4 rounded-xl transition-all duration-200 hover:scale-105"
        >
          Jetzt shoppen
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-3xl font-black text-white mb-2">Warenkorb</h1>
      <p className="text-zinc-500 mb-8">
        {items.reduce((s, i) => s + i.quantity, 0)} Artikel
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Items */}
        <div className="lg:col-span-2 space-y-4">
          {items.map((item) => (
            <div
              key={item.key}
              className="bg-dark-card border border-dark-border rounded-2xl p-4 flex gap-4 animate-fade-in"
            >
              {/* Thumbnail */}
              <div
                className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl shrink-0 overflow-hidden"
                style={{
                  background: `linear-gradient(135deg, ${item.product.gradientFrom} 0%, ${item.product.gradientTo} 100%)`,
                }}
              >
                <img
                  src={item.product.image}
                  alt={item.product.name}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Info */}
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <p className="text-xs text-zinc-500 mb-0.5">{item.product.categoryLabel}</p>
                    <Link href={`/produkt/${item.product.id}`}>
                      <h3 className="text-white font-semibold hover:text-neon transition-colors text-sm sm:text-base leading-snug">
                        {item.product.name}
                      </h3>
                    </Link>
                    <p className="text-zinc-500 text-sm mt-0.5">Größe: {item.size}</p>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.key)}
                    className="text-zinc-600 hover:text-red-400 transition-colors p-1"
                    aria-label="Entfernen"
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18 18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                <div className="flex items-center justify-between mt-3">
                  {/* Quantity */}
                  <div className="flex items-center border border-dark-border rounded-lg overflow-hidden">
                    <button
                      onClick={() => updateQuantity(item.key, -1)}
                      className="px-2.5 py-1 text-zinc-400 hover:text-white hover:bg-dark-hover transition-all text-sm"
                    >
                      −
                    </button>
                    <span className="px-3 py-1 text-white font-semibold text-sm min-w-[2.5rem] text-center">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(item.key, 1)}
                      className="px-2.5 py-1 text-zinc-400 hover:text-white hover:bg-dark-hover transition-all text-sm"
                    >
                      +
                    </button>
                  </div>
                  <span className="text-neon font-bold">
                    {(item.product.price * item.quantity).toFixed(2).replace(".", ",")} €
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="bg-dark-card border border-dark-border rounded-2xl p-6 sticky top-24">
            <h2 className="text-lg font-bold text-white mb-5">Bestellübersicht</h2>

            <div className="space-y-3 mb-5">
              <div className="flex justify-between text-sm">
                <span className="text-zinc-400">Zwischensumme</span>
                <span className="text-white">{cartTotal.toFixed(2).replace(".", ",")} €</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-zinc-400">Versand</span>
                <span className={shipping === 0 ? "text-neon" : "text-white"}>
                  {shipping === 0 ? "Kostenlos 🎉" : `${shipping.toFixed(2).replace(".", ",")} €`}
                </span>
              </div>
              {cartTotal > 0 && cartTotal < 50 && (
                <div className="text-xs text-zinc-500 bg-dark-hover rounded-lg p-3">
                  💡 Noch{" "}
                  <span className="text-neon font-semibold">
                    {(50 - cartTotal).toFixed(2).replace(".", ",")} €
                  </span>{" "}
                  bis zum kostenlosen Versand!
                </div>
              )}
              <div className="border-t border-dark-border pt-3 flex justify-between font-bold">
                <span className="text-white">Gesamt</span>
                <span className="text-neon text-lg">{total.toFixed(2).replace(".", ",")} €</span>
              </div>
              <p className="text-xs text-zinc-600">inkl. 19% MwSt.</p>
            </div>

            <Link
              href="/kasse"
              className="w-full flex items-center justify-center gap-2 bg-neon hover:bg-neon-dark text-black font-bold py-4 rounded-xl transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
            >
              Zur Kasse
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>

            <Link
              href="/shop"
              className="w-full flex items-center justify-center mt-3 text-zinc-500 hover:text-white text-sm font-medium py-2 transition-colors"
            >
              ← Weiter einkaufen
            </Link>

            {/* Payment Icons */}
            <div className="mt-5 pt-4 border-t border-dark-border">
              <p className="text-xs text-zinc-600 text-center mb-3">Sichere Zahlung</p>
              <div className="flex justify-center gap-2 flex-wrap">
                {["PayPal", "Visa", "MC", "SEPA"].map((p) => (
                  <span
                    key={p}
                    className="px-2 py-1 text-xs text-zinc-500 border border-dark-border rounded font-mono"
                  >
                    {p}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
