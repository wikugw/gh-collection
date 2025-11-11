import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-roboto-condensed",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "G.H. Collection | Kemewahan Terjangkau",
  description:
    "Temukan koleksi rajutan handmade — tas, sepatu, dan dompet — dibuat dengan sepenuh hati. Unik, elegan, dan berkualitas tinggi.",
  keywords: [
    "rajutan handmade",
    "tas rajut",
    "sepatu rajut",
    "dompet rajut",
    "produk rajutan Indonesia",
    "kerajinan tangan lokal",
  ],
  openGraph: {
    title: "Rajutan Handmade | Kemewahan Terjangkau",
    description:
      "Rajutan handmade berkualitas — tas, sepatu, dan dompet elegan untuk gaya klasik Anda.",
    url: "https://gh-collection.vercel.app",
    siteName: "Rajut Handmade",
    images: [
      {
        url: "https://gh-collection.vercel.app/images/hero/hero-bag.png",
        width: 1200,
        height: 630,
        alt: "Rajutan Handmade",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rajutan Handmade | Kemewahan Terjangkau",
    description:
      "Koleksi tas, sepatu, dan dompet rajutan handmade — klasik dan elegan.",
    images: ["https://gh-collection.vercel.app/images/hero/hero-bag.png"],
  },
  alternates: {
    canonical: "https://gh-collection.vercel.app",
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Store",
    name: "Rajut Handmade",
    url: "https://gh-collection.vercel.app",
    description:
      "Toko rajutan handmade berkualitas, menyediakan tas, sepatu, dan dompet rajut dengan desain elegan dan unik.",
    logo: "https://gh-collection.vercel.app/images/hero/hero-bag.png",
    sameAs: [
      "https://www.instagram.com/gh_collections23/",
      "https://wa.me/6285234210330",
    ],
  }

  return (
    <html lang="id">
      <body>
        {children}
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </body>
    </html>
  )
}

