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

export function sortByDateDesc<T extends { data: { date: Date } }>(items: T[]) {
  return items.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}
