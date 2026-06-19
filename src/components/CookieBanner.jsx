"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);
  };

  const reject = () => {
    localStorage.setItem("cookie-consent", "rejected");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6 animate-slide-up">
      <div className="max-w-4xl mx-auto bg-dark-card border border-dark-border rounded-2xl p-5 shadow-2xl shadow-black/50">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="flex-1">
            <p className="text-sm text-zinc-300 leading-relaxed">
              🍪 Wir verwenden nur technisch notwendige Cookies (z.B. für den Warenkorb). Es werden
              keine Tracking- oder Werbe-Cookies gesetzt.{" "}
              <Link href="/datenschutz" className="text-neon hover:underline">
                Datenschutz
              </Link>
            </p>
          </div>
          <div className="flex gap-3 shrink-0">
            <button
              onClick={reject}
              className="px-4 py-2 text-sm text-zinc-400 hover:text-white border border-dark-border hover:border-zinc-600 rounded-lg transition-all"
            >
              Ablehnen
            </button>
            <button
              onClick={accept}
              className="px-4 py-2 text-sm font-semibold bg-neon text-black rounded-lg hover:bg-neon-dark transition-all"
            >
              Akzeptieren
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
