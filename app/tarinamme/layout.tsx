import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Tarinamme, Rannikon Puutarha",
};

export default function TarinammeLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
