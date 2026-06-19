"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { useState } from "react";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  const handleQuickAdd = (e) => {
    e.preventDefault();
    addToCart(product, product.sizes[1] || product.sizes[0], 1);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <Link href={`/produkt/${product.id}`} className="group block">
      <div className="bg-dark-card border border-dark-border rounded-2xl overflow-hidden hover:border-neon/40 transition-all duration-300 hover:shadow-lg hover:shadow-neon/5">
        {/* Product Image Placeholder */}
        <div
          className="relative aspect-square overflow-hidden"
          style={{
            background: `linear-gradient(135deg, ${product.gradientFrom} 0%, ${product.gradientTo} 100%)`,
          }}
        >
          {product.badge && (
            <span className="absolute top-3 left-3 z-10 px-2 py-1 text-xs font-bold rounded-full bg-neon text-black">
              {product.badge}
            </span>
          )}
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
            <span className="text-7xl sm:text-8xl" role="img" aria-label={product.name}>
              {product.emoji}
            </span>
            <span className="text-xs font-semibold tracking-widest uppercase text-zinc-500">
              {product.categoryLabel}
            </span>
          </div>
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300" />
        </div>

        {/* Info */}
        <div className="p-4">
          <div className="flex items-start justify-between gap-2 mb-3">
            <div>
              <p className="text-xs text-zinc-500 mb-1">{product.categoryLabel}</p>
              <h3 className="text-white font-semibold text-sm leading-snug group-hover:text-neon transition-colors">
                {product.name}
              </h3>
            </div>
            <span className="text-neon font-bold text-sm whitespace-nowrap">
              {product.price.toFixed(2).replace(".", ",")} €
            </span>
          </div>

          <button
            onClick={handleQuickAdd}
            className={`w-full py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
              added
                ? "bg-neon/20 text-neon border border-neon/40"
                : "bg-dark-hover border border-dark-border hover:bg-neon hover:text-black hover:border-neon text-zinc-300"
            }`}
          >
            {added ? "✓ Hinzugefügt!" : "In den Warenkorb"}
          </button>
        </div>
      </div>
    </Link>
  );
}
