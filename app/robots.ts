import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://manojganesan.dev/sitemap.xml",
    host: "https://manojganesan.dev",
  };
}
