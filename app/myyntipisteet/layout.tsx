import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Myyntipisteet, Rannikon Puutarha",
};

export default function MyyntipisteetLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
