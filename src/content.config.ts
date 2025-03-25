// 1. Import utilities from `astro:content`
import { defineCollection, z } from "astro:content";

// 2. Import loader(s)
import { glob, file } from "astro/loaders";

// 3. Define your collection(s)
const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      date: z.date().optional(),
      type: z.string(),
      skills: z.array(z.string()),
      source: z.string().url().optional(),
      link: z.string().url().optional(),
      coverImg: image(),
    }),
});

// 4. Export a single `collections` object to register your collection(s)
export const collections = { projects };
