"use client";

import { useState } from "react";

export default function KontaktPage() {
  const [form, setForm] = useState({ name: "", email: "", betreff: "", nachricht: "" });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const update = (field, value) => setForm((f) => ({ ...f, [field]: value }));

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Pflichtfeld";
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = "Gültige E-Mail erforderlich";
    if (!form.betreff.trim()) e.betreff = "Pflichtfeld";
    if (!form.nachricht.trim() || form.nachricht.trim().length < 10) e.nachricht = "Mindestens 10 Zeichen";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1000));
    setSubmitted(true);
    setLoading(false);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-10">
        <p className="text-neon text-sm font-semibold tracking-widest uppercase mb-1">Wir helfen dir</p>
        <h1 className="text-4xl font-black text-white">Kontakt</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Contact Info */}
        <div className="space-y-6">
          <div className="bg-dark-card border border-dark-border rounded-2xl p-6">
            <h2 className="text-white font-bold mb-4">Schnelle Antworten</h2>
            <div className="space-y-4">
              {[
                {
                  icon: "✉️",
                  title: "E-Mail",
                  text: "kontakt@raphael-store.de",
                  sub: "Antwort innerhalb 24h",
                },
                {
                  icon: "⏰",
                  title: "Erreichbarkeit",
                  text: "Mo–Fr: 9–17 Uhr",
                  sub: "Samstag: 10–14 Uhr",
                },
                {
                  icon: "🏠",
                  title: "Standort",
                  text: "Deutschland",
                  sub: "Versand EU-weit",
                },
              ].map((c) => (
                <div key={c.title} className="flex items-start gap-3">
                  <span className="text-2xl">{c.icon}</span>
                  <div>
                    <p className="text-white font-medium text-sm">{c.title}</p>
                    <p className="text-zinc-400 text-sm">{c.text}</p>
                    <p className="text-zinc-600 text-xs">{c.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-dark-card border border-dark-border rounded-2xl p-6">
            <h2 className="text-white font-bold mb-3">Häufige Fragen</h2>
            <div className="space-y-3">
              {[
                { q: "Wie lange dauert die Lieferung?", a: "5–10 Werktage nach Bestellung." },
                { q: "Kann ich zurückgeben?", a: "Ja, 14 Tage Rückgabe ohne Angabe von Gründen." },
                { q: "Welche Größen gibt es?", a: "S bis XXL für Kleidung, A3 bis A1 für Poster." },
              ].map((faq) => (
                <div key={faq.q} className="border-b border-dark-border pb-3 last:border-0 last:pb-0">
                  <p className="text-zinc-300 text-sm font-medium mb-1">{faq.q}</p>
                  <p className="text-zinc-500 text-xs">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="lg:col-span-2">
          {submitted ? (
            <div className="bg-dark-card border border-dark-border rounded-2xl p-12 text-center animate-fade-in">
              <div className="text-5xl mb-4">✅</div>
              <h2 className="text-2xl font-black text-white mb-3">Nachricht gesendet!</h2>
              <p className="text-zinc-400">
                Danke, <strong className="text-white">{form.name}</strong>! Wir melden uns so
                schnell wie möglich bei dir unter{" "}
                <span className="text-neon">{form.email}</span>.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="bg-dark-card border border-dark-border rounded-2xl p-6 sm:p-8 space-y-5"
            >
              <h2 className="text-lg font-bold text-white mb-2">Nachricht senden</h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-zinc-300 mb-1.5">Name *</label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => update("name", e.target.value)}
                    placeholder="Dein Name"
                    className={inputClass(errors.name)}
                  />
                  {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-zinc-300 mb-1.5">E-Mail *</label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => update("email", e.target.value)}
                    placeholder="deine@email.de"
                    className={inputClass(errors.email)}
                  />
                  {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-zinc-300 mb-1.5">Betreff *</label>
                <input
                  type="text"
                  value={form.betreff}
                  onChange={(e) => update("betreff", e.target.value)}
                  placeholder="z.B. Frage zur Bestellung"
                  className={inputClass(errors.betreff)}
                />
                {errors.betreff && <p className="text-red-400 text-xs mt-1">{errors.betreff}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-zinc-300 mb-1.5">Nachricht *</label>
                <textarea
                  value={form.nachricht}
                  onChange={(e) => update("nachricht", e.target.value)}
                  placeholder="Schreib uns, wie wir dir helfen können..."
                  rows={6}
                  className={`${inputClass(errors.nachricht)} resize-none`}
                />
                {errors.nachricht && <p className="text-red-400 text-xs mt-1">{errors.nachricht}</p>}
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full flex items-center justify-center gap-2 bg-neon hover:bg-neon-dark text-black font-bold py-4 rounded-xl transition-all hover:scale-[1.01] active:scale-[0.99] disabled:opacity-70"
              >
                {loading ? (
                  <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                ) : (
                  "Nachricht absenden"
                )}
              </button>

              <p className="text-xs text-zinc-600 text-center">
                Mit dem Absenden akzeptierst du unsere{" "}
                <a href="/datenschutz" className="text-zinc-500 hover:text-neon transition-colors">
                  Datenschutzerklärung
                </a>
                .
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

function inputClass(error) {
  return `w-full bg-dark-bg border ${
    error ? "border-red-500/60" : "border-dark-border"
  } text-white placeholder-zinc-600 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-neon/50 transition-colors`;
}
