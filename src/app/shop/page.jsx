import { Suspense } from "react";
import ShopContent from "./ShopContent";

export const metadata = {
  title: "Shop",
  description: "Entdecke alle Gaming, Fitness und Lifestyle Produkte im Raphael Store.",
};

function ShopSkeleton() {
  return (
    <div className="animate-pulse">
      <div className="h-10 bg-dark-card rounded w-24 mb-4" />
      <div className="h-4 bg-dark-card rounded w-40 mb-8" />
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {[...Array(8)].map((_, i) => (
          <div key={i} className="bg-dark-card border border-dark-border rounded-2xl overflow-hidden">
            <div className="aspect-square bg-dark-hover" />
            <div className="p-4 space-y-2">
              <div className="h-3 bg-dark-hover rounded w-1/2" />
              <div className="h-4 bg-dark-hover rounded w-3/4" />
              <div className="h-8 bg-dark-hover rounded mt-3" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ShopPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <Suspense fallback={<ShopSkeleton />}>
        <ShopContent />
      </Suspense>
    </div>
  );
}
