import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Itsepoiminta, Rannikon Puutarha",
};

export default function ItsepoimintaLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
