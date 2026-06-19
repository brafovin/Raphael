"use client";

import { useState, useMemo, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import ProductCard from "@/components/ProductCard";
import products from "@/data/products.json";

const FILTERS = [
  { id: "alle", label: "Alle Drops" },
  { id: "drop1", label: "Drop 01" },
  { id: "drop2", label: "Drop 02" },
  { id: "drop3", label: "Drop 03 – Gear 🏋️" },
];

export default function ShopContent() {
  const searchParams = useSearchParams();
  const [activeFilter, setActiveFilter] = useState("alle");
  const [sortBy, setSortBy] = useState("default");

  useEffect(() => {
    const drop = searchParams.get("drop");
    if (drop) setActiveFilter(drop);
  }, [searchParams]);

  const filtered = useMemo(() => {
    let list =
      activeFilter === "alle"
        ? products
        : products.filter((p) => p.category === activeFilter);
    if (sortBy === "price-asc") list = [...list].sort((a, b) => a.price - b.price);
    if (sortBy === "price-desc") list = [...list].sort((a, b) => b.price - a.price);
    if (sortBy === "name") list = [...list].sort((a, b) => a.name.localeCompare(b.name));
    return list;
  }, [activeFilter, sortBy]);

  return (
    <>
      <div className="mb-10">
        <p className="text-neon text-sm font-semibold tracking-widest uppercase mb-1">Fitness Drops</p>
        <h1 className="text-4xl font-black tracking-tight text-white">Shop</h1>
        <p className="text-zinc-500 mt-2">
          {filtered.length} Produkt{filtered.length !== 1 ? "e" : ""} · Drop 03 mit Fitness-Gear jetzt verfügbar
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between mb-8">
        <div className="flex flex-wrap gap-2">
          {FILTERS.map((f) => (
            <button
              key={f.id}
              onClick={() => setActiveFilter(f.id)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 border ${
                activeFilter === f.id
                  ? "bg-neon text-black border-neon"
                  : "bg-dark-card border-dark-border text-zinc-400 hover:border-zinc-600 hover:text-white"
              }`}
            >
              {f.label}
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
        </div>
      )}
    </>
  );
}
