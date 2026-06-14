import { themeConfig } from "@/theme.config";

export function formatDate(date: Date) {
  return new Intl.DateTimeFormat(themeConfig.lang, {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: themeConfig.timezone,
  }).format(date);
}

export function sortByDateDesc<T extends { data: { date: Date } }>(items: T[]) {
  return items.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}
