"use client";

import { useState } from "react";
import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function Navbar() {
  const { cartCount } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { href: "/shop", label: "Shop" },
    { href: "/ueber-uns", label: "Über uns" },
    { href: "/kontakt", label: "Kontakt" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-dark-bg/95 backdrop-blur-md border-b border-dark-border">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <span className="text-2xl font-black tracking-tighter text-white group-hover:text-neon transition-colors duration-200">
              RAPHAEL
            </span>
            <span className="hidden sm:block text-xs text-neon font-medium tracking-widest uppercase mt-1">
              Store
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-zinc-400 hover:text-white text-sm font-medium transition-colors duration-200 hover:text-neon"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Cart + Mobile Menu */}
          <div className="flex items-center gap-4">
            <Link
              href="/warenkorb"
              className="relative flex items-center gap-2 bg-dark-hover hover:bg-dark-border border border-dark-border hover:border-neon/40 text-white px-3 py-2 rounded-lg transition-all duration-200 group"
            >
              <svg className="w-5 h-5 group-hover:text-neon transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
              </svg>
              <span className="hidden sm:block text-sm font-medium">Warenkorb</span>
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-neon text-black text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center animate-fade-in">
                  {cartCount > 99 ? "99+" : cartCount}
                </span>
              )}
            </Link>

            {/* Hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-2 text-zinc-400 hover:text-white transition-colors"
              aria-label="Menü öffnen"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {menuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden py-4 border-t border-dark-border animate-fade-in">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block py-3 text-zinc-300 hover:text-neon font-medium transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}
