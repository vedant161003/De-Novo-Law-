import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://denovolawfirm.in";

  const practiceAreaSlugs = [
    "corporate",
    "transactions",
    "startup",
    "intellectual-property",
    "real-estate",
    "litigation",
  ];

  const attorneySlugs = ["harsit-v-raj", "abhimanyu-devaiah"];

  const staticPages = [
    { url: baseUrl, priority: 1, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/about`, priority: 0.9, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/attorneys`, priority: 0.9, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/practice-areas`, priority: 0.9, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/insights`, priority: 0.8, changeFrequency: "weekly" as const },
    { url: `${baseUrl}/careers`, priority: 0.7, changeFrequency: "weekly" as const },
    { url: `${baseUrl}/contact`, priority: 0.8, changeFrequency: "monthly" as const },
  ];

  const practicePages = practiceAreaSlugs.map((slug) => ({
    url: `${baseUrl}/practice-areas/${slug}`,
    priority: 0.8,
    changeFrequency: "monthly" as const,
  }));

  const attorneyPages = attorneySlugs.map((slug) => ({
    url: `${baseUrl}/attorneys/${slug}`,
    priority: 0.85,
    changeFrequency: "monthly" as const,
  }));

  return [
    ...staticPages,
    ...practicePages,
    ...attorneyPages,
  ].map((page) => ({
    url: page.url,
    lastModified: new Date(),
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));
}
