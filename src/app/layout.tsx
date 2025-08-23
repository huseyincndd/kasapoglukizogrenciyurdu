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
  title: "Kasapoğulları Kız Öğrenci Yurdu Kütahya | Dumlupınar Üniversitesi Yurdu | Güvenli Barınma",
  description: "Kütahya'da Dumlupınar Üniversitesi ve Sağlık Bilimleri Üniversitesi öğrencileri için güvenli kız öğrenci yurdu. 7/24 güvenlik, yerden ısıtma, fiber internet, spor salonu. Merkezi konumda, hemen başvurun!",
  keywords: [
    "kız öğrenci yurdu kütahya",
    "kütahya kız yurdu",
    "dumlupınar üniversitesi yurt",
    "sağlık bilimleri üniversitesi yurt",
    "kütahya öğrenci barınma",
    "güvenli kız yurdu",
    "konforlu oda kütahya",
    "Kasapoğulları yurt",
    "kütahya merkez yurt",
    "öğrenci yurdu kütahya",
    "kız öğrenci barınma",
    "üniversite yurdu kütahya",
    "dumlupınar üniversitesi kız yurdu",
    "kütahya üniversite yurdu",
    "kız öğrenci apartı kütahya",
    "öğrenci evi kütahya",
    "kütahya öğrenci konaklama",
    "güvenli öğrenci yurdu",
    "merkezi konum yurt",
    "yerden ısıtmalı yurt",
    "fiber internet yurt",
    "spor salonu yurt",
    "7/24 güvenlik yurt",
    "kütahya kız öğrenci yurdu fiyatları",
    "kütahya öğrenci yurdu başvuru",
    "kütahya kız yurdu rezervasyon",
    "kütahya üniversite yurdu kayıt",
    "kütahya öğrenci barınma seçenekleri",
    "kütahya güvenli kız yurdu",
    "kütahya merkezi öğrenci yurdu",
    "kütahya kız öğrenci apartı",
    "kütahya öğrenci evi kiralama",
    "kütahya üniversite yakını yurt",
    "kütahya öğrenci konaklama merkezi"
  ],
  authors: [{ name: "Kasapoğulları Kız Öğrenci Yurdu" }],
  creator: "Kasapoğulları Kız Öğrenci Yurdu",
  publisher: "Kasapoğulları Kız Öğrenci Yurdu",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://kasapogullariapart.com.tr'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    url: 'https://kasapogullariapart.com.tr',
    title: "Kasapoğulları Kız Öğrenci Yurdu Kütahya | Dumlupınar Üniversitesi Yurdu | Güvenli Barınma",
    description: "Kütahya'da Dumlupınar Üniversitesi ve Sağlık Bilimleri Üniversitesi öğrencileri için güvenli kız öğrenci yurdu. 7/24 güvenlik, yerden ısıtma, fiber internet, spor salonu. Merkezi konumda, hemen başvurun!",
    siteName: 'Kasapoğulları Kız Öğrenci Yurdu',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Kasapoğulları Kız Öğrenci Yurdu Kütahya - Güvenli ve Konforlu Barınma',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Kasapoğulları Kız Öğrenci Yurdu Kütahya | Dumlupınar Üniversitesi Yurdu",
    description: "Kütahya'da Dumlupınar Üniversitesi ve Sağlık Bilimleri Üniversitesi öğrencileri için güvenli kız öğrenci yurdu. 7/24 güvenlik, yerden ısıtma, fiber internet, spor salonu.",
    images: ['/og-image.jpg'],
    creator: '@kasapogullarikizrezidans43',
    site: '@kasapogullarikizrezidans43',
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
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#594323" />
        <meta name="msapplication-TileColor" content="#594323" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        
        {/* Additional SEO Meta Tags */}
        <meta name="author" content="Kasapoğulları Kız Öğrenci Yurdu" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow" />
        <meta name="bingbot" content="index, follow" />
        
        {/* Local Business Meta Tags */}
        <meta name="geo.region" content="TR-43" />
        <meta name="geo.placename" content="Kütahya" />
        <meta name="geo.position" content="39.4167;29.9833" />
        <meta name="ICBM" content="39.4167, 29.9833" />
        
        {/* Google Analytics Meta Tags */}
        <meta name="google-site-verification" content="your-google-verification-code" />
        <meta name="msvalidate.01" content="your-bing-verification-code" />
        
        {/* Additional SEO Meta Tags */}
        <meta name="language" content="tr" />
        <meta name="distribution" content="global" />
        <meta name="rating" content="general" />
        <meta name="revisit-after" content="7 days" />
        <meta name="coverage" content="worldwide" />
        <meta name="target" content="all" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="MobileOptimized" content="width" />
        
        {/* Social Media Meta Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="tr_TR" />
        <meta property="og:site_name" content="Kasapoğulları Kız Öğrenci Yurdu" />
        <meta name="twitter:site" content="@kasapogullarikizrezidans43" />
        <meta name="twitter:creator" content="@kasapogullarikizrezidans43" />
        
        {/* Business Hours */}
        <meta name="business:contact_data:street_address" content="Yıldırım Beyazıt Mahallesi, Özengi sokak, no:2" />
        <meta name="business:contact_data:locality" content="Kütahya" />
        <meta name="business:contact_data:postal_code" content="43000" />
        <meta name="business:contact_data:country_name" content="Türkiye" />
        <meta name="business:contact_data:phone_number" content="+905412754343" />
        
        {/* Preconnect for Performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        <link rel="dns-prefetch" href="//www.googletagmanager.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Kasapoğulları Kız Öğrenci Yurdu",
              "alternateName": "Kasapoğulları Kız Rezidans",
              "description": "Kütahya'da Dumlupınar Üniversitesi ve Sağlık Bilimleri Üniversitesi öğrencileri için güvenli, konforlu ve modern kız öğrenci yurdu. 7/24 güvenlik, yerden ısıtma, fiber internet, spor salonu.",
              "url": "https://kasapogullariapart.com.tr",
              "telephone": "+905412754343",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Yıldırım Beyazıt Mahallesi, Özengi sokak, no:2",
                "addressLocality": "Kütahya",
                "addressRegion": "Kütahya",
                "postalCode": "43000",
                "addressCountry": "TR"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 39.4167,
                "longitude": 29.9833
              },
              "openingHours": "Mo-Fr 09:00-18:00, Sa-Su 10:00-16:00",
              "priceRange": "₺₺",
              "image": "https://kasapogullariapart.com.tr/og-image.jpg",
              "sameAs": [
                "https://www.instagram.com/kasapogullarikizrezidans43"
              ],
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "150"
              },
              "areaServed": {
                "@type": "City",
                "name": "Kütahya"
              },
              "serviceType": "Kız Öğrenci Yurdu",
              "category": "Öğrenci Yurdu",
              "amenityFeature": [
                {
                  "@type": "LocationFeatureSpecification",
                  "name": "7/24 Güvenlik",
                  "value": true
                },
                {
                  "@type": "LocationFeatureSpecification", 
                  "name": "Yerden Isıtma",
                  "value": true
                },
                {
                  "@type": "LocationFeatureSpecification",
                  "name": "Fiber İnternet",
                  "value": true
                },
                {
                  "@type": "LocationFeatureSpecification",
                  "name": "Spor Salonu",
                  "value": true
                },
                {
                  "@type": "LocationFeatureSpecification",
                  "name": "Etüt Odaları",
                  "value": true
                },
                {
                  "@type": "LocationFeatureSpecification",
                  "name": "Sinema Salonu",
                  "value": true
                },
                {
                  "@type": "LocationFeatureSpecification",
                  "name": "Platinum Kart",
                  "value": true
                }
              ],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Oda Seçenekleri",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Suit Oda"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Suit Mutfaklı Oda"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "VIP Oda"
                    }
                  }
                ]
              }
            })
          }}
        />
        
        {/* Breadcrumb Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Ana Sayfa",
                  "item": "https://kasapogullariapart.com.tr/"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Kız Öğrenci Yurdu",
                  "item": "https://kasapogullariapart.com.tr/#hakkimizda"
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "name": "Olanaklar",
                  "item": "https://kasapogullariapart.com.tr/#olanaklar"
                },
                {
                  "@type": "ListItem",
                  "position": 4,
                  "name": "Odalar",
                  "item": "https://kasapogullariapart.com.tr/#odalar"
                },
                {
                  "@type": "ListItem",
                  "position": 5,
                  "name": "İletişim",
                  "item": "https://kasapogullariapart.com.tr/#iletisim"
                }
              ]
            })
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${poppins.variable} font-inter antialiased bg-white text-gray-900`}
      >
        {children}
      </body>
    </html>
  );
}
