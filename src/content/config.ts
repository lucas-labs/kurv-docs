import { defineCollection, z } from "astro:content";

const doc = defineCollection({
  type: "content",
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    'short-title': z.string(),
    description: z.string(),
    order: z.number(),
  }),
});

export const collections = { doc };
