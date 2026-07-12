import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Ota yhteyttä, Rannikon Puutarha",
};

export default function YhteystiedotLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
