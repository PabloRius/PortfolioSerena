import { defineCollection, z } from "astro:content";

const timeline = defineCollection({
  schema: z.object({
    title: z.string(),
    location: z.string(),
    date: z.string(),
    img: z.string().optional(),
    icon: z.string().optional(),
    flag: z.string(),
    index: z.number(),
  }),
});

export const collections = { timeline };
