import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Työpaikat, Rannikon Puutarha",
};

export default function TyopaikatLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
