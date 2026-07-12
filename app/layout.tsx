import type { Metadata, Viewport } from "next";
import { DM_Sans } from "next/font/google";
import { LanguageProvider } from "@/lib/i18n";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const siteDescription =
  "Rannikon Puutarhan marjat ja vihannekset ovat huolella valikoituja tuoreita tuotteita. Asiakas on palvelumme keskiössä.";

export const metadata: Metadata = {
  metadataBase: new URL("https://rannikonpuutarha.fi"),
  title: {
    default: "Rannikon Puutarha, Avomaan herkkuja",
    template: "%s, Rannikon Puutarha",
  },
  description: siteDescription,
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    locale: "fi_FI",
    siteName: "Rannikon Puutarha",
    title: "Rannikon Puutarha, Avomaan herkkuja",
    description: siteDescription,
    images: [
      {
        url: "/images/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Rannikon Puutarha",
      },
    ],
  },
};

export const viewport: Viewport = {
  themeColor: "#1e5c2f",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Rannikon Puutarha",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Häntälänkoskentie 86",
    postalCode: "24910",
    addressLocality: "Halikko",
    addressCountry: "FI",
  },
  email: "rannikko@rannikonpuutarha.fi",
  telephone: "+358400826360",
  url: "https://rannikonpuutarha.fi",
  sameAs: [
    "https://www.instagram.com/rannikonpuutarha/",
    "https://www.facebook.com/p/Rannikon-Puutarha-100059867144553/",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fi">
      <body className={dmSans.className}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <LanguageProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
