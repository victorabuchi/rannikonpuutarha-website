import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Tietosuojaseloste",
};

export default function TietosuojaselosteLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
