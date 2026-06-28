import zhiMangXingUnicodeRanges from "@fontsource/zhi-mang-xing/unicode.json";
import { zhiMangXingFontUrlByFileName } from "./zhi-mang-xing-font-urls.ts";
import type { NewspaperThemeConfig } from "./theme-config";

type FontFaceSubset = {
  fileName: string;
  ranges: Array<[number, number]>;
};

type UnicodeRangeMap = Record<string, string>;

const fontSubsets = parseFontSubsets(zhiMangXingUnicodeRanges as UnicodeRangeMap);

export function getMastheadFontPreloads(config: NewspaperThemeConfig): string[] {
  const titleText = getMastheadText(config);
  const fileNames = new Set<string>();

  for (const char of Array.from(titleText)) {
    const codePoint = char.codePointAt(0);

    if (codePoint === undefined || /\s/.test(char)) {
      continue;
    }

    const subset = fontSubsets.find(({ ranges }) =>
      ranges.some(([start, end]) => codePoint >= start && codePoint <= end),
    );

    if (subset) {
      fileNames.add(subset.fileName);
    }
  }

  return Array.from(fileNames)
    .map((fileName) => zhiMangXingFontUrlByFileName.get(fileName))
    .filter((url): url is string => Boolean(url));
}

function getMastheadText(config: NewspaperThemeConfig): string {
  if (config.mastheadGlyphs?.length) {
    return config.mastheadGlyphs.map((glyph) => glyph.text).join("");
  }

  return config.siteTitle;
}

function parseFontSubsets(unicodeRanges: UnicodeRangeMap): FontFaceSubset[] {
  return Object.entries(unicodeRanges).map(([subsetName, unicodeRange]) => ({
    fileName: getSubsetFileName(subsetName),
    ranges: parseUnicodeRanges(unicodeRange),
  }));
}

function getSubsetFileName(subsetName: string): string {
  const numberedSubset = subsetName.match(/^\[(.+)]$/)?.[1];
  const fileSubset = numberedSubset ?? subsetName;

  return `zhi-mang-xing-${fileSubset}-400-normal.woff2`;
}

function parseUnicodeRanges(unicodeRange: string): Array<[number, number]> {
  return unicodeRange
    .split(",")
    .map((part) => part.trim().replace(/^U\+/i, ""))
    .map((part) => {
      const [start, end = start] = part.split("-");
      return [Number.parseInt(start, 16), Number.parseInt(end, 16)] as [number, number];
    })
    .filter(([start, end]) => Number.isFinite(start) && Number.isFinite(end));
}
