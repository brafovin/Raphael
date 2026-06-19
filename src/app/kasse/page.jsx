"use client";

import { useState } from "react";
import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function KassePage() {
  const { items, cartTotal, clearCart, hydrated } = useCart();
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const shipping = cartTotal >= 50 ? 0 : 3.99;
  const total = cartTotal + shipping;

  const [form, setForm] = useState({
    vorname: "",
    nachname: "",
    email: "",
    strasse: "",
    hausnummer: "",
    plz: "",
    ort: "",
    land: "Deutschland",
    anmerkungen: "",
    agb: false,
  });
  const [errors, setErrors] = useState({});

  const update = (field, value) =>
    setForm((f) => ({ ...f, [field]: value }));

  const validate = () => {
    const e = {};
    if (!form.vorname.trim()) e.vorname = "Pflichtfeld";
    if (!form.nachname.trim()) e.nachname = "Pflichtfeld";
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = "Gültige E-Mail erforderlich";
    if (!form.strasse.trim()) e.strasse = "Pflichtfeld";
    if (!form.hausnummer.trim()) e.hausnummer = "Pflichtfeld";
    if (!form.plz.trim() || !/^\d{5}$/.test(form.plz)) e.plz = "5-stellige PLZ";
    if (!form.ort.trim()) e.ort = "Pflichtfeld";
    if (!form.agb) e.agb = "Bitte Bedingungen akzeptieren";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1500));
    clearCart();
    setSubmitted(true);
    setLoading(false);
  };

  if (!hydrated) return null;

  if (submitted) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-20 text-center animate-fade-in">
        <div className="w-20 h-20 bg-neon/10 border-2 border-neon rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-10 h-10 text-neon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h1 className="text-3xl font-black text-white mb-4">Bestellung eingegangen! 🎉</h1>
        <p className="text-zinc-400 mb-2">
          Danke, <strong className="text-white">{form.vorname}</strong>! Wir haben deine Bestellung
          erhalten.
        </p>
        <p className="text-zinc-500 text-sm mb-8">
          Eine Bestätigungs-E-Mail wird an{" "}
          <span className="text-neon">{form.email}</span> gesendet.
          <br />
          Dein Produkt wird jetzt speziell für dich produziert.
        </p>
        <div className="bg-dark-card border border-dark-border rounded-2xl p-6 text-left mb-8">
          <h3 className="text-white font-semibold mb-3">Was passiert jetzt?</h3>
          <ol className="space-y-2 text-sm text-zinc-400">
            {[
              "Wir starten die Produktion deiner Bestellung (1–3 Werktage)",
              "Du erhältst eine E-Mail sobald dein Paket versendet wurde",
              "Lieferzeit: 3–7 Werktage nach Versand",
            ].map((s, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="w-5 h-5 bg-neon/20 text-neon text-xs rounded-full flex items-center justify-center shrink-0 mt-0.5 font-bold">
                  {i + 1}
                </span>
                {s}
              </li>
            ))}
          </ol>
        </div>
        <Link
          href="/shop"
          className="inline-flex items-center gap-2 bg-neon hover:bg-neon-dark text-black font-bold px-8 py-4 rounded-xl transition-all"
        >
          Weiter shoppen
        </Link>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center">
        <div className="text-5xl mb-4">🛒</div>
        <h1 className="text-2xl font-bold text-white mb-4">Kein Warenkorb vorhanden</h1>
        <Link href="/shop" className="text-neon hover:underline">
          Zurück zum Shop
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-3xl font-black text-white mb-2">Kasse</h1>

      {/* Progress */}
      <div className="flex items-center gap-2 mb-10">
        {["Lieferadresse", "Zahlung", "Bestätigung"].map((s, i) => (
          <div key={s} className="flex items-center gap-2">
            <div
              className={`flex items-center gap-2 text-sm font-semibold px-3 py-1.5 rounded-full transition-all ${
                step === i + 1
                  ? "bg-neon text-black"
                  : step > i + 1
                  ? "bg-neon/20 text-neon"
                  : "text-zinc-600"
              }`}
            >
              <span className="w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold border border-current">
                {step > i + 1 ? "✓" : i + 1}
              </span>
              <span className="hidden sm:block">{s}</span>
            </div>
            {i < 2 && <div className="w-6 h-px bg-dark-border hidden sm:block" />}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Form */}
        <div className="lg:col-span-2">
          <form onSubmit={handleSubmit}>
            <div className="bg-dark-card border border-dark-border rounded-2xl p-6 space-y-5">
              <h2 className="text-lg font-bold text-white">Lieferadresse</h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Field label="Vorname *" error={errors.vorname}>
                  <input
                    type="text"
                    value={form.vorname}
                    onChange={(e) => update("vorname", e.target.value)}
                    placeholder="Max"
                    className={inputClass(errors.vorname)}
                  />
                </Field>
                <Field label="Nachname *" error={errors.nachname}>
                  <input
                    type="text"
                    value={form.nachname}
                    onChange={(e) => update("nachname", e.target.value)}
                    placeholder="Mustermann"
                    className={inputClass(errors.nachname)}
                  />
                </Field>
              </div>

              <Field label="E-Mail-Adresse *" error={errors.email}>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => update("email", e.target.value)}
                  placeholder="max@beispiel.de"
                  className={inputClass(errors.email)}
                />
              </Field>

              <div className="grid grid-cols-3 gap-4">
                <div className="col-span-2">
                  <Field label="Straße *" error={errors.strasse}>
                    <input
                      type="text"
                      value={form.strasse}
                      onChange={(e) => update("strasse", e.target.value)}
                      placeholder="Musterstraße"
                      className={inputClass(errors.strasse)}
                    />
                  </Field>
                </div>
                <Field label="Nr. *" error={errors.hausnummer}>
                  <input
                    type="text"
                    value={form.hausnummer}
                    onChange={(e) => update("hausnummer", e.target.value)}
                    placeholder="12a"
                    className={inputClass(errors.hausnummer)}
                  />
                </Field>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Field label="PLZ *" error={errors.plz}>
                  <input
                    type="text"
                    value={form.plz}
                    onChange={(e) => update("plz", e.target.value)}
                    placeholder="12345"
                    maxLength={5}
                    className={inputClass(errors.plz)}
                  />
                </Field>
                <Field label="Ort *" error={errors.ort}>
                  <input
                    type="text"
                    value={form.ort}
                    onChange={(e) => update("ort", e.target.value)}
                    placeholder="Berlin"
                    className={inputClass(errors.ort)}
                  />
                </Field>
              </div>

              <Field label="Land">
                <select
                  value={form.land}
                  onChange={(e) => update("land", e.target.value)}
                  className={inputClass()}
                >
                  <option>Deutschland</option>
                  <option>Österreich</option>
                  <option>Schweiz</option>
                </select>
              </Field>

              <Field label="Anmerkungen (optional)">
                <textarea
                  value={form.anmerkungen}
                  onChange={(e) => update("anmerkungen", e.target.value)}
                  placeholder="Besondere Wünsche zur Bestellung..."
                  rows={3}
                  className={`${inputClass()} resize-none`}
                />
              </Field>

              {/* Zahlungshinweis */}
              <div className="bg-dark-hover border border-dark-border rounded-xl p-4">
                <h3 className="text-white font-semibold mb-2 text-sm">Zahlungsmethode</h3>
                <p className="text-zinc-500 text-xs leading-relaxed">
                  🔐 Die Zahlung wird nach Auftragsbestätigung per Rechnung oder über einen sicheren
                  Zahlungslink abgewickelt. Wir senden dir alle Details per E-Mail zu.
                </p>
              </div>

              {/* AGB */}
              <label className={`flex items-start gap-3 cursor-pointer ${errors.agb ? "text-red-400" : "text-zinc-400"}`}>
                <input
                  type="checkbox"
                  checked={form.agb}
                  onChange={(e) => update("agb", e.target.checked)}
                  className="mt-1 w-4 h-4 accent-neon cursor-pointer"
                />
                <span className="text-sm">
                  Ich habe die{" "}
                  <Link href="/datenschutz" className="text-neon hover:underline">
                    Datenschutzerklärung
                  </Link>{" "}
                  gelesen und stimme den{" "}
                  <span className="text-neon cursor-pointer hover:underline">AGB</span> zu. *
                </span>
              </label>
              {errors.agb && <p className="text-red-400 text-xs">{errors.agb}</p>}
            </div>

            <button
              type="submit"
              disabled={loading}
              className="mt-6 w-full flex items-center justify-center gap-2 bg-neon hover:bg-neon-dark text-black font-bold py-4 rounded-xl text-lg transition-all duration-200 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {loading ? (
                <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                </svg>
              ) : (
                <>
                  Jetzt bestellen · {total.toFixed(2).replace(".", ",")} €
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </>
              )}
            </button>
          </form>
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="bg-dark-card border border-dark-border rounded-2xl p-6 sticky top-24">
            <h2 className="text-lg font-bold text-white mb-4">Deine Bestellung</h2>
            <div className="space-y-3 max-h-64 overflow-y-auto mb-4">
              {items.map((item) => (
                <div key={item.key} className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-lg shrink-0 flex items-center justify-center"
                    style={{
                      background: `linear-gradient(135deg, ${item.product.gradientFrom}, ${item.product.gradientTo})`,
                    }}
                  >
                    <span className="text-base">{item.product.emoji}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-white text-xs font-medium truncate">{item.product.name}</p>
                    <p className="text-zinc-500 text-xs">Gr. {item.size} · {item.quantity}×</p>
                  </div>
                  <span className="text-white text-xs font-semibold whitespace-nowrap">
                    {(item.product.price * item.quantity).toFixed(2).replace(".", ",")} €
                  </span>
                </div>
              ))}
            </div>
            <div className="border-t border-dark-border pt-4 space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-zinc-400">Zwischensumme</span>
                <span className="text-white">{cartTotal.toFixed(2).replace(".", ",")} €</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-zinc-400">Versand</span>
                <span className={shipping === 0 ? "text-neon" : "text-white"}>
                  {shipping === 0 ? "Kostenlos" : `${shipping.toFixed(2).replace(".", ",")} €`}
                </span>
              </div>
              <div className="flex justify-between font-bold pt-2 border-t border-dark-border">
                <span className="text-white">Gesamt</span>
                <span className="text-neon text-lg">{total.toFixed(2).replace(".", ",")} €</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Field({ label, error, children }) {
  return (
    <div>
      <label className="block text-sm font-medium text-zinc-300 mb-1.5">{label}</label>
      {children}
      {error && <p className="text-red-400 text-xs mt-1">{error}</p>}
    </div>
  );
}

function inputClass(error) {
  return `w-full bg-dark-bg border ${
    error ? "border-red-500/60" : "border-dark-border"
  } text-white placeholder-zinc-600 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-neon/50 transition-colors`;
}
