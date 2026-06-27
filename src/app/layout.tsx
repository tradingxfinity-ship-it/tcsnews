import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const display = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const SITE_URL = "https://tcsnews.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "TCS News — Trading Card & Sports Card News",
    template: "%s · TCS News",
  },
  description:
    "Your source for trading card and sports card news. Daily updates on sports cards, Pokémon, One Piece, Yu-Gi-Oh!, Magic, grading, and the trading card market.",
  keywords: [
    "trading cards",
    "sports cards",
    "Pokemon cards",
    "One Piece TCG",
    "Yu-Gi-Oh",
    "Magic the Gathering",
    "card grading",
    "PSA",
    "card collecting",
    "card investing",
  ],
  authors: [{ name: "TCS News" }],
  creator: "TCS News",
  publisher: "TCS News",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "TCS News",
    title: "TCS News — Trading Card & Sports Card News",
    description:
      "Daily news, market updates, collecting guides, product reviews, grading advice, and investment insights for trading card enthusiasts.",
    images: [
      {
        url: "/og-default.png",
        width: 1200,
        height: 630,
        alt: "TCS News",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TCS News — Trading Card & Sports Card News",
    description:
      "Daily news, market updates, and investment insights for trading card collectors.",
    images: ["/og-default.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
};

export const viewport: Viewport = {
  themeColor: "#FFFFFF",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${display.variable}`}>
      <body className="flex min-h-screen flex-col font-sans">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
