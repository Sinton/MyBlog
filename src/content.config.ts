import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import {
  articlesSchema,
  docsSchema,
  projectsSchema,
} from "./lib/content-schema";

const docs = defineCollection({
  loader: glob({ base: "./src/content/docs", pattern: "**/*.{md,mdx}" }),
  schema: docsSchema,
});

const articles = defineCollection({
  loader: glob({ base: "./src/content/articles", pattern: "**/*.{md,mdx}" }),
  schema: articlesSchema,
});

const projects = defineCollection({
  loader: glob({ base: "./src/content/projects", pattern: "**/*.{md,mdx}" }),
  schema: projectsSchema,
});

export const collections = { docs, articles, projects };
