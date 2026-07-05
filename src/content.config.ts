import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    pubDate: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    type: z.string().optional(),
    chat: z.string().url().optional(),
  }),
});

export const collections = { posts };
