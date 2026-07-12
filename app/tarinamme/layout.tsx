import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Tarinamme",
  description:
    "Rannikon Puutarha on Halikossa sijaitseva avomaapuutarhatila. Tila on kuuluisa herkullisista mansikoistaan ja syksyisin kurpitsoistaan.",
};

export default function TarinammeLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
