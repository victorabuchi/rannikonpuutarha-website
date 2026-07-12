import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Työpaikat",
  description:
    "Työllistämme kesän aikana satoja ihmisiä, jotka työskentelevät pellolla, pakkaavat, kuljettavat ja myyvät tuotteet tuoreina pellolta kuluttajalle.",
};

export default function TyopaikatLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
