import type { Metadata, Viewport } from "next";
import { Montserrat, Spectral } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import {
  siteName,
  siteUrl,
  siteDescription,
  siteKeywords,
  verificationGoogle,
  verificationBing,
} from "@/lib/config";
import { JsonLd } from "@/components/JsonLd";

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
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteName} – Développeur Web Fullstack`,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  keywords: siteKeywords,
  authors: [{ name: siteName, url: siteUrl }],
  creator: siteName,
  publisher: siteName,
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: siteUrl,
    siteName,
    title: `${siteName} – Développeur Web Fullstack`,
    description: siteDescription,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: `${siteName} – Développeur web fullstack`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteName} – Développeur Web Fullstack`,
    description: siteDescription,
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/favicon/favicon-96x96.png", type: "image/png", sizes: "96x96" },
      { url: "/favicon/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon/favicon.ico", type: "image/x-icon", sizes: "any" },
    ],
    shortcut: "/favicon/favicon.ico",
    apple: [
      {
        url: "/favicon/apple-touch-icon.png",
        type: "image/png",
        sizes: "180x180",
      },
    ],
  },
  manifest: "/favicon/site.webmanifest",
  alternates: { canonical: siteUrl },
  ...((verificationGoogle || verificationBing) && {
    verification: {
      ...(verificationGoogle && { google: verificationGoogle }),
      ...(verificationBing && { other: { "msvalidate.01": verificationBing } }),
    },
  }),
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
    <html lang="fr" className={`scroll-smooth scroll-pt-[5.5rem] ${montserrat.variable} ${spectral.variable}`}>
      <body className="min-h-screen bg-brand-dark font-[family-name:var(--font-family-montserrat)] text-brand-light antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:w-auto focus:h-auto focus:p-3 focus:px-4 focus:m-0 focus:overflow-visible focus:bg-brand-accent focus:text-white focus:rounded-lg focus:font-semibold focus:outline-none"
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
        <JsonLd />
        <div
          id="cursor-focus-ring"
          className="cursor-focus-ring"
          aria-hidden="true"
        />
      </body>
    </html>
  );
}
