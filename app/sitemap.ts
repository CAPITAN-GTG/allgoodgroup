import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://allgoodgroup.co";

  const routes = [
    "",
    "/services",
    "/process",
    "/investors",
    "/ecosystem",
    "/about-junior",
    "/projects",
    "/contact",
  ];

  return routes.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.7,
  }));
}

