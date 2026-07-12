import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Myyntipisteet",
  description:
    "Rannikon puutarhan makeat mansikat ja maukkaat herneet ovat löytäneet tiensä myös pääkaupunkiseudulle Helsingin Osuuskaupan myymälöihin.",
};

export default function MyyntipisteetLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
