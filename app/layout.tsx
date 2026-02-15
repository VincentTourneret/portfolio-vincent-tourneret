import type { Metadata, Viewport } from "next";
import { Montserrat, Spectral } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "optional",
});

const spectral = Spectral({
  variable: "--font-spectral",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "optional",
});

export const metadata: Metadata = {
  title: {
    default: "Vincent Tourneret – Développeur Web Fullstack",
    template: "%s | Vincent Tourneret",
  },
  description:
    "Développeur web fullstack freelance à Besançon. Applications web, e-commerce, React, Next.js, WordPress.",
};

export const viewport: Viewport = {
  themeColor: "#0C1519",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${montserrat.variable} ${spectral.variable}`}>
      <head>
        <link
          rel="preload"
          as="image"
          href="/images/photo.png"
          fetchPriority="high"
        />
      </head>
      <body className="min-h-screen bg-brand-dark text-brand-light antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:outline-none"
        >
          Aller au contenu
        </a>
        <div className="app-root flex min-h-screen flex-col">
          <Header />
          <main id="main" className="main flex-1">
            {children}
          </main>
          <Footer />
        </div>
        <div
          id="cursor-focus-ring"
          className="cursor-focus-ring"
          aria-hidden="true"
        />
      </body>
    </html>
  );
}
