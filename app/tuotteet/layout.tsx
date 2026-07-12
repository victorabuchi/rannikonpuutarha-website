import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Tuotteet",
  description:
    "Tuotteemme kypsyvät avomaalla eri aikoihin. Kasvihuoneissa mansikat alkavat kypsyä huhtikuussa ja eri lajikkeet antavat satoa pitkälle syksyyn.",
};

export default function TuotteetLayout({ children }: { children: ReactNode }) {
  return children;
}
