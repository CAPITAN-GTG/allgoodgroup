import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://allgoodgroup.co/sitemap.xml",
    host: "https://allgoodgroup.co",
  };
}

