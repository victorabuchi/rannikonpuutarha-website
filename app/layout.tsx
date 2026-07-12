import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import { LanguageProvider } from "@/lib/i18n";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Rannikon Puutarha, Avomaan herkkuja",
  description:
    "Rannikon Puutarhan marjat ja vihannekset ovat huolella valikoituja tuoreita tuotteita. Asiakas on palvelumme keskiössä.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fi">
      <body className={dmSans.className}>
        <LanguageProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
