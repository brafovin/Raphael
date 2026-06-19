import "./globals.css";
import { Inter } from "next/font/google";
import { CartProvider } from "@/context/CartContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: {
    default: "Raphael Store – Gaming, Fitness & Lifestyle",
    template: "%s | Raphael Store",
  },
  description:
    "Premium Print-on-Demand T-Shirts, Hoodies und Poster für Gamer, Fitness-Enthusiasten und Style-Bewusste. Kostenloser Versand ab 50 €.",
  keywords: ["Gaming Shirts", "Fitness Hoodies", "Print on Demand", "Online Shop Deutschland"],
  openGraph: {
    type: "website",
    locale: "de_DE",
    siteName: "Raphael Store",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="de" className={inter.variable}>
      <body className="bg-dark-bg text-white min-h-screen flex flex-col">
        <CartProvider>
          <Navbar />
          <main className="flex-1 pt-16">{children}</main>
          <Footer />
          <CookieBanner />
        </CartProvider>
      </body>
    </html>
  );
}
