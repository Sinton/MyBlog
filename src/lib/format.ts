import { defaultThemeConfig, type NewspaperThemeConfig } from "./theme-config";

export function formatDate(
  date: Date,
  config: Pick<NewspaperThemeConfig, "lang" | "timezone"> = defaultThemeConfig,
) {
  return new Intl.DateTimeFormat(config.lang, {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: config.timezone,
  }).format(date);
}

export function sortByDateDesc<T extends { data: { date: Date } }>(
  entries: T[],
): T[] {
  return [...entries].sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}

export function sortByOrder<T extends { data: { order?: number } }>(
  entries: T[],
): T[] {
  return [...entries].sort((a, b) => {
    const orderA = a.data.order ?? Number.MAX_SAFE_INTEGER;
    const orderB = b.data.order ?? Number.MAX_SAFE_INTEGER;

    return orderA - orderB;
  });
}

export function pickFeatured<T extends { data: { featured?: boolean } }>(
  entries: T[],
): T | undefined {
  return entries.find((entry) => entry.data.featured);
}

export function takeLatest<T>(entries: T[], count: number): T[] {
  return entries.slice(0, count);
}
