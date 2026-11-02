import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * 1. RESEARCH COLLECTION
 * Supervised internships & developing theoretical questions.
 */
const research = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/research' }),
  schema: z.object({
    title: z.string(),
    part: z.enum(['Part I: Supervised Research Internships', 'Part II: Developing Research Questions']),
    period: z.string(),
    institution: z.string(),
    location: z.string(),
    supervisor: z.string().optional(),
    role: z.string(),
    domains: z.array(z.string()),
    tools: z.array(z.string()),
    abstract: z.string(),
    order: z.number(),
    reportUrl: z.string().optional(),
    repoUrl: z.string().optional(),
  }),
});

/**
 * 2. PROJECTS COLLECTION
 * 7-Part deep academic case studies for software and simulations.
 */
const projects = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    codeName: z.string(),
    subtitle: z.string(),
    period: z.string(),
    category: z.string(),
    primaryLanguage: z.string(),
    techStack: z.array(z.string()),
    leadMetrics: z.string().optional(),
    featured: z.boolean().default(false),
    hasSimulation: z.boolean().default(false),
    simulationType: z.string().optional(),
    repoUrl: z.string().optional(),
    docsUrl: z.string().optional(),
    order: z.number(),
  }),
});

/**
 * 3. WRITING COLLECTION
 * Course compendiums, LaTeX reference cheat sheets, and mathematical notes.
 */
const writing = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/writing' }),
  schema: z.object({
    title: z.string(),
    courseCode: z.string().optional(),
    subject: z.string(),
    date: z.string(),
    typesetEngine: z.string(),
    pdfPath: z.string().optional(),
    pageCount: z.number().optional(),
    topicsCovered: z.array(z.string()),
    featured: z.boolean().default(false),
    order: z.number(),
  }),
});

export const collections = {
  research,
  projects,
  writing,
};
