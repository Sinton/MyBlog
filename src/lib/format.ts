import {
  defaultThemeConfig,
  type NewspaperThemeConfig,
  type TocNumberStyle,
} from "./theme-config";

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

const chineseDigits = ["", "一", "二", "三", "四", "五", "六", "七", "八", "九"];

function formatChineseNumber(value: number): string {
  if (!Number.isInteger(value) || value <= 0 || value > 99) {
    return String(value);
  }

  if (value < 10) {
    return chineseDigits[value];
  }

  const tens = Math.floor(value / 10);
  const ones = value % 10;
  const tensText = tens === 1 ? "十" : `${chineseDigits[tens]}十`;

  return ones === 0 ? tensText : `${tensText}${chineseDigits[ones]}`;
}

export function formatTocNumber(
  value: number,
  style: TocNumberStyle = defaultThemeConfig.tocNumberStyle,
): string {
  return style === "decimal" ? String(value) : formatChineseNumber(value);
}
