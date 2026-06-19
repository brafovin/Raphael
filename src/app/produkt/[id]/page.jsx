"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import products from "@/data/products.json";

export default function ProductDetailPage() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const { addToCart } = useCart();

  const [selectedSize, setSelectedSize] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const [error, setError] = useState(false);

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <div className="text-5xl mb-4">😢</div>
        <h1 className="text-2xl font-bold text-white mb-4">Produkt nicht gefunden</h1>
        <Link href="/shop" className="text-neon hover:underline">
          Zurück zum Shop
        </Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    if (!selectedSize) {
      setError(true);
      setTimeout(() => setError(false), 2000);
      return;
    }
    addToCart(product, selectedSize, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-zinc-500 mb-8">
        <Link href="/" className="hover:text-white transition-colors">Start</Link>
        <span>/</span>
        <Link href="/shop" className="hover:text-white transition-colors">Shop</Link>
        <span>/</span>
        <Link href={`/shop?kategorie=${product.category}`} className="hover:text-white transition-colors capitalize">
          {product.categoryLabel}
        </Link>
        <span>/</span>
        <span className="text-zinc-300 truncate max-w-[200px]">{product.name}</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
        {/* Image */}
        <div
          className="rounded-3xl overflow-hidden aspect-square relative border border-dark-border"
          style={{
            background: `linear-gradient(135deg, ${product.gradientFrom} 0%, ${product.gradientTo} 100%)`,
          }}
        >
          {product.badge && (
            <span className="absolute top-5 left-5 z-10 px-3 py-1 text-sm font-bold rounded-full bg-neon text-black">
              {product.badge}
            </span>
          )}
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Details */}
        <div className="flex flex-col gap-6">
          <div>
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-neon mb-2">
              {product.categoryLabel}
            </span>
            <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-3">
              {product.name}
            </h1>
            <div className="text-3xl font-black text-neon">
              {product.price.toFixed(2).replace(".", ",")} €
            </div>
            <p className="text-xs text-zinc-500 mt-1">inkl. MwSt. · zzgl. Versand</p>
          </div>

          <p className="text-zinc-400 leading-relaxed">{product.description}</p>

          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {product.features.map((f) => (
              <div key={f} className="flex items-center gap-2 text-sm text-zinc-400">
                <svg className="w-4 h-4 text-neon shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                {f}
              </div>
            ))}
          </div>

          {/* Size Selector */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-semibold text-white">
                Größe wählen {selectedSize && <span className="text-neon">– {selectedSize}</span>}
              </span>
              {product.category !== "poster" && (
                <span className="text-xs text-zinc-500 hover:text-neon cursor-pointer transition-colors">
                  Größentabelle
                </span>
              )}
            </div>
            <div className="flex flex-wrap gap-2">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => {
                    setSelectedSize(size);
                    setError(false);
                  }}
                  className={`px-4 py-2 rounded-lg text-sm font-semibold border transition-all duration-200 ${
                    selectedSize === size
                      ? "bg-neon text-black border-neon"
                      : error
                      ? "border-red-500/60 text-zinc-400 hover:border-red-400"
                      : "bg-dark-card border-dark-border text-zinc-300 hover:border-zinc-500"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
            {error && (
              <p className="text-red-400 text-sm mt-2 animate-fade-in">
                ⚠️ Bitte wähle zuerst eine Größe aus.
              </p>
            )}
          </div>

          {/* Quantity */}
          <div className="flex items-center gap-4">
            <span className="text-sm font-semibold text-white">Menge:</span>
            <div className="flex items-center border border-dark-border rounded-lg overflow-hidden">
              <button
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className="px-3 py-2 text-zinc-400 hover:text-white hover:bg-dark-hover transition-all"
              >
                −
              </button>
              <span className="px-4 py-2 text-white font-semibold min-w-[3rem] text-center">
                {quantity}
              </span>
              <button
                onClick={() => setQuantity((q) => q + 1)}
                className="px-3 py-2 text-zinc-400 hover:text-white hover:bg-dark-hover transition-all"
              >
                +
              </button>
            </div>
          </div>

          {/* Add to Cart */}
          <button
            onClick={handleAddToCart}
            className={`w-full py-4 rounded-xl text-base font-bold transition-all duration-200 flex items-center justify-center gap-2 ${
              added
                ? "bg-neon/20 text-neon border-2 border-neon/40"
                : "bg-neon hover:bg-neon-dark text-black hover:scale-[1.02] active:scale-[0.98]"
            }`}
          >
            {added ? (
              <>
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                In den Warenkorb hinzugefügt!
              </>
            ) : (
              <>
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                </svg>
                In den Warenkorb ({(product.price * quantity).toFixed(2).replace(".", ",")} €)
              </>
            )}
          </button>

          {/* Trust mini */}
          <div className="grid grid-cols-3 gap-3 pt-4 border-t border-dark-border">
            {[
              { icon: "🚚", text: "Versand ab 50 €" },
              { icon: "↩️", text: "14 Tage Rückgabe" },
              { icon: "🔒", text: "Sicher bezahlen" },
            ].map((t) => (
              <div key={t.text} className="flex flex-col items-center text-center gap-1">
                <span className="text-lg">{t.icon}</span>
                <span className="text-xs text-zinc-500">{t.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Related Products */}
      <section className="mt-20">
        <h2 className="text-2xl font-black text-white mb-6">Das könnte dir auch gefallen</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products
            .filter((p) => p.id !== product.id && p.category === product.category)
            .slice(0, 4)
            .concat(products.filter((p) => p.id !== product.id && p.category !== product.category).slice(0, 2))
            .slice(0, 4)
            .map((p) => (
              <Link key={p.id} href={`/produkt/${p.id}`}>
                <div className="bg-dark-card border border-dark-border rounded-2xl overflow-hidden hover:border-neon/40 transition-all duration-300 group">
                  <div
                    className="aspect-square overflow-hidden"
                    style={{ background: `linear-gradient(135deg, ${p.gradientFrom} 0%, ${p.gradientTo} 100%)` }}
                  >
                    <img src={p.image} alt={p.name} loading="lazy" className="w-full h-full object-cover" />
                  </div>
                  <div className="p-4">
                    <p className="text-xs text-zinc-500 mb-1">{p.categoryLabel}</p>
                    <p className="text-white text-sm font-semibold group-hover:text-neon transition-colors">{p.name}</p>
                    <p className="text-neon font-bold mt-1">{p.price.toFixed(2).replace(".", ",")} €</p>
                  </div>
                </div>
              </Link>
            ))}
        </div>
      </section>
    </div>
  );
}
