import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kasapoğlu Kız Öğrenci Yurdu | Güvenli ve Konforlu Barınma",
  description: "İstanbul'da kız öğrenciler için güvenli, konforlu ve modern barınma imkanı. Merkezi konuma yakın, her türlü olanağa sahip öğrenci yurdu.",
  keywords: ["kız öğrenci yurdu", "İstanbul", "öğrenci barınma", "güvenli yurt", "konforlu oda", "Kasapoğlu"],
  authors: [{ name: "Kasapoğlu Kız Öğrenci Yurdu" }],
  creator: "Kasapoğlu Kız Öğrenci Yurdu",
  publisher: "Kasapoğlu Kız Öğrenci Yurdu",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://kasapogluyurdu.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Kasapoğlu Kız Öğrenci Yurdu",
    description: "İstanbul'da kız öğrenciler için güvenli, konforlu ve modern barınma imkanı.",
    url: 'https://kasapogluyurdu.com',
    siteName: 'Kasapoğlu Kız Öğrenci Yurdu',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Kasapoğlu Kız Öğrenci Yurdu',
      },
    ],
    locale: 'tr_TR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Kasapoğlu Kız Öğrenci Yurdu",
    description: "İstanbul'da kız öğrenciler için güvenli, konforlu ve modern barınma imkanı.",
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-site-verification-token',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#ec4899" />
        <meta name="msapplication-TileColor" content="#ec4899" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </head>
      <body
        className={`${inter.variable} ${poppins.variable} font-inter antialiased bg-white text-gray-900`}
      >
        {children}
      </body>
    </html>
  );
}
