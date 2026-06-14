import { z } from "astro/zod";

export const accentSchema = z.enum(["red", "blue", "green", "gold", "ink"]);

export const docsSchema = z.object({
  title: z.string(),
  description: z.string(),
  order: z.number(),
  category: z.string().default("Guide"),
  updated: z.coerce.date().optional(),
});

export const articlesSchema = z.object({
  title: z.string(),
  description: z.string(),
  date: z.coerce.date(),
  category: z.string().default("Column"),
  tags: z.array(z.string()).default([]),
  featured: z.boolean().default(false),
});

export const projectsSchema = z.object({
  title: z.string(),
  subtitle: z.string().default(""),
  deck: z.string().default(""),
  description: z.string().optional(),
  category: z.string().default("Project"),
  platform: z.string().default("Web"),
  status: z.string().default("Ready"),
  year: z.number().default(new Date().getFullYear()),
  order: z.number().default(999),
  featured: z.boolean().default(false),
  accent: accentSchema.default("ink"),
  stack: z.array(z.string()).default([]),
  facts: z
    .array(
      z.object({
        label: z.string(),
        value: z.string(),
      }),
    )
    .default([]),
  role: z.string().default("Theme example"),
  focus: z.array(z.string()).default([]),
  next: z.array(z.string()).default([]),
  briefs: z.array(z.string()).default([]),
  scenes: z
    .array(
      z.object({
        title: z.string(),
        description: z.string(),
        meta: z.string().optional(),
      }),
    )
    .default([]),
  features: z
    .array(
      z.object({
        title: z.string(),
        description: z.string(),
      }),
    )
    .default([]),
  timeline: z
    .array(
      z.object({
        date: z.string(),
        title: z.string(),
        description: z.string(),
      }),
    )
    .default([]),
  screenshots: z
    .array(
      z.object({
        src: z.string(),
        title: z.string(),
        caption: z.string(),
        alt: z.string(),
        featured: z.boolean().default(false),
      }),
    )
    .default([]),
  links: z
    .array(
      z.object({
        label: z.string(),
        href: z.string(),
      }),
    )
    .default([]),
});
