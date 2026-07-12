import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Ota yhteyttä",
  description:
    "Rannikon Puutarha sijaitsee Salossa, Varsinais-Suomessa. Toimitilamme osoitteessa: Häntälänkoskentie 86, 24910 Halikko as.",
};

export default function YhteystiedotLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
