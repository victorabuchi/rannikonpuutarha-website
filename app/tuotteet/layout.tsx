import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Tuotteet, Rannikon Puutarha",
};

export default function TuotteetLayout({ children }: { children: ReactNode }) {
  return children;
}
