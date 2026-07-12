import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const routes = [
  "",
  "/tuotteet",
  "/myyntipisteet",
  "/itsepoiminta",
  "/tyopaikat",
  "/tarinamme",
  "/yhteystiedot",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `https://rannikonpuutarha.fi${route}`,
  }));
}
