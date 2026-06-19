"use client";

import { useState, useMemo, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import ProductCard from "@/components/ProductCard";
import products from "@/data/products.json";

const CATEGORIES = [
  { id: "alle", label: "Alle" },
  { id: "gaming", label: "Gaming 🎮" },
  { id: "fitness", label: "Fitness 💪" },
  { id: "poster", label: "Poster 🖼️" },
];

export default function ShopContent() {
  const searchParams = useSearchParams();
  const [activeCategory, setActiveCategory] = useState("alle");
  const [sortBy, setSortBy] = useState("default");

  useEffect(() => {
    const cat = searchParams.get("kategorie");
    if (cat) setActiveCategory(cat);
  }, [searchParams]);

  const filtered = useMemo(() => {
    let list =
      activeCategory === "alle"
        ? products
        : products.filter((p) => p.category === activeCategory);
    if (sortBy === "price-asc") list = [...list].sort((a, b) => a.price - b.price);
    if (sortBy === "price-desc") list = [...list].sort((a, b) => b.price - a.price);
    if (sortBy === "name") list = [...list].sort((a, b) => a.name.localeCompare(b.name));
    return list;
  }, [activeCategory, sortBy]);

  return (
    <>
      <div className="mb-10">
        <p className="text-neon text-sm font-semibold tracking-widest uppercase mb-1">Alle Produkte</p>
        <h1 className="text-4xl font-black tracking-tight text-white">Shop</h1>
        <p className="text-zinc-500 mt-2">
          {filtered.length} Produkt{filtered.length !== 1 ? "e" : ""} gefunden
        </p>
      </div>

      {/* Filter + Sort Row */}
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between mb-8">
        <div className="flex flex-wrap gap-2">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 border ${
                activeCategory === cat.id
                  ? "bg-neon text-black border-neon"
                  : "bg-dark-card border-dark-border text-zinc-400 hover:border-zinc-600 hover:text-white"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="bg-dark-card border border-dark-border text-zinc-300 text-sm rounded-lg px-3 py-2 hover:border-zinc-600 transition-colors focus:outline-none focus:border-neon/40"
        >
          <option value="default">Sortierung: Standard</option>
          <option value="price-asc">Preis: Niedrig → Hoch</option>
          <option value="price-desc">Preis: Hoch → Niedrig</option>
          <option value="name">Name: A–Z</option>
        </select>
      </div>

      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 animate-fade-in">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-24 text-zinc-500">
          <div className="text-5xl mb-4">🔍</div>
          <p className="text-lg font-semibold text-zinc-400">Keine Produkte gefunden</p>
          <p className="text-sm mt-2">Versuche eine andere Kategorie.</p>
        </div>
      )}
    </>
  );
}
