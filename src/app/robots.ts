import type { MetadataRoute } from "next";

// Customer-only hub: keep search engines and AI crawlers off every page.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", disallow: "/" },
  };
}
