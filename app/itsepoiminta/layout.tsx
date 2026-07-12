import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Itsepoiminta",
  description:
    "Mansikan itsepoimintapellot vaihtelevat sadon kypsymisen mukaan. Opastekyltit johdattavat isommalta tieltä poimittavalle pellolle.",
};

export default function ItsepoimintaLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
