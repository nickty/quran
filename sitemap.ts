import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://quran-science.vercel.app"

  // Main pages
  const routes = [
    "",
    "/about",
    "/miracles",
    "/miracles/114-surahs",
    "/miracles/number-19",
    "/miracles/word-count",
    "/miracles/golden-ratio",
    "/miracles/al-fatiha", // Add the new Al-Fatiha miracle page
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.8,
  }))

  return routes
}

