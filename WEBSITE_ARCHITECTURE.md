# WEBSITE ARCHITECTURE & TECHNICAL BLUEPRINT
**Project:** Soumitra Pharikal Flagship Academic Portfolio
**Framework:** Astro 5/6 (Static Site Generation, Modern Content Layer API)
**Styling:** Tokenized Custom CSS + Scoped Component Styles
**Mathematical Engine:** KaTeX (`remark-math` + `rehype-katex`)

---

## 1. Directory Tree & File System Structure

```
soumitra-academic-portfolio/
├── .github/
│   └── copilot-instructions.md          # Mirror of agent directives
├── public/
│   ├── assets/
│   │   ├── compendiums/                 # LaTeX generated course PDFs
│   │   ├── visuals/                     # Photography portfolio WebP assets
│   │   └── diagrams/                    # Scalable vector graphics and data plates
│   ├── favicon.svg                      # Custom geometric mono glyph
│   └── robots.txt                       # Search indexer configuration
├── raw-content/                         # Ground-truth verified academic records
│   ├── biography.md
│   ├── research.md
│   ├── projects.md
│   ├── writing-and-notes.md
│   └── activities-and-visuals.md
├── src/
│   ├── content.config.ts                # Astro Content Layer API (ROOT OF src/)
│   ├── content/                         # Markdown / MDX content collections
│   │   ├── research/                    # Supervised internships & explorations
│   │   │   ├── ic1369-photometry.md
│   │   │   ├── uh-manoa-intro2astro.md
│   │   │   ├── zernike-aberrations.md
│   │   │   └── special-relativity-reading.md
│   │   ├── projects/                    # 7-Part deep case studies
│   │   │   ├── astra-rust.md
│   │   │   ├── ic1369-pipeline.md
│   │   │   └── zernike-analyzer.md
│   │   ├── writing/                     # Course compendiums & technical notes
│   │   │   ├── phy305-classical-mechanics.md
│   │   │   ├── phy303-quantum-mechanics-1.md
│   │   │   ├── cds301-data-structures-1.md
│   │   │   ├── classical-thermodynamics.md
│   │   │   └── electrodynamics.md
│   │   └── visuals/                     # Curated gallery records & exhibits
│   │       ├── project-pandora.md
│   │       ├── astrophotography-odisha.md
│   │       └── architectural-geometry.md
│   ├── components/                      # Reusable Astro & Interactive components
│   │   ├── layout/
│   │   │   ├── BaseLayout.astro         # Master HTML shell, meta tags, font loading
│   │   │   ├── MonographHeader.astro    # Archival masthead with date stamp & nav
│   │   │   ├── MonographFooter.astro    # Colophon, institutional affiliation, copyright
│   │   │   ├── ThemeToggle.astro        # Observatory Mode theme switch
│   │   │   └── TableOfContents.astro    # Sticky reading rail for long-form case studies
│   │   ├── ui/
│   │   │   ├── SectionHeader.astro      # Numbered section header (e.g. "§ 02 RESEARCH")
│   │   │   ├── FigurePlate.astro        # Standardized research plate with caption
│   │   │   ├── EquationBlock.astro      # KaTeX block with serial numbering
│   │   │   ├── MetadataRail.astro       # Two-column research project sidebar
│   │   │   ├── HairlineDivider.astro    # 1px solid subtle line with crosshair option
│   │   │   └── TagBadge.astro           # Monospace classification tag
│   │   └── interactive/
│   │       ├── ZernikeWavefrontSim.astro # Vanilla Canvas 2D wavefront simulator
│   │       └── AstraOrbitSim.astro       # Vanilla Canvas 2D orbital state propagator
│   ├── pages/                           # 7 Primary Routes & Dynamic Catchers
│   │   ├── index.astro                  # Frontispiece & Journal Overview
│   │   ├── about.astro                  # Biography & Academic Dossier
│   │   ├── research/
│   │   │   └── index.astro              # Research directory (Part I & Part II)
│   │   ├── projects/
│   │   │   ├── index.astro              # Projects catalogue
│   │   │   └── [id].astro               # 7-Part Deep Case Study Engine
│   │   ├── writing/
│   │   │   ├── index.astro              # Technical notes & compendiums directory
│   │   │   └── [id].astro               # Mathematical compendium viewer
│   │   ├── visuals.astro                # Photography gallery & Pixophiles curation
│   │   └── cv.astro                     # Academic Curriculum Vitae (Printable)
│   └── styles/
│       ├── tokens.css                   # Custom CSS properties & variables
│       ├── global.css                   # Document reset, base styles, KaTeX overrides
│       └── print.css                    # Academic print stylesheet for /cv
├── AGENTS.md                            # Codebase governance & engineering rules
├── DESIGN_BRIEF.md                      # Visual direction & anti-slop rules
├── DESIGN_SYSTEM.md                     # Concrete tokens, typography, & grid classes
├── IMPLEMENTATION_PLAN.md               # Step-by-step scaffolding checklist
├── WEBSITE_ARCHITECTURE.md              # This document
├── astro.config.mjs                     # Astro configuration (remark-math, rehype-katex)
├── package.json                         # Dependencies & scripts
└── tsconfig.json                        # TypeScript strict compiler options
```

---

## 2. Complete 7-Page Route Map

| Route Path | Page Title | Architectural Role & Key Sections |
| :--- | :--- | :--- |
| `/` | **Frontispiece & Overview** | Academic journal cover, masthead with live date/time, monograph abstract, selected research highlights, featured project preview, technical dispatch feed. |
| `/about` | **Curriculum Vitae & Dossier** | Comprehensive personal background (Arambagh $\to$ Ahmedabad $\to$ Berhampur), dual-degree coursework structure (Physics + CDS), institutional affiliations, academic philosophy. |
| `/research` | **Research Dossier** | Strictly partitioned into **Part I (Supervised Internships)** (ICSP Kolkata, UH Manoa Intro2Astro, IISER Berhampur) and **Part II (Developing Explorations)** (Special Theory of Relativity). |
| `/projects` | **Computational Projects** | Technical catalog of scientific software and simulation suites. Filterable by language (Rust, Python, MATLAB, C/C++). |
| `/projects/[id]` | **Deep Case Study Engine** | 7-part deep monograph per project (`01. Overview`, `02. Motivation`, `03. Mathematical Model`, `04. Implementation`, `05. Results`, `06. Further Work`, `07. Resources`). Hosts live canvas simulations. |
| `/writing` | **Notes & Compendiums** | Downloadable LaTeX course compendiums (`PHY 305`, `PHY 303`, `CDS 301`, Thermodynamics, Electrodynamics) with detailed mathematical syllabi and PDF links. |
| `/writing/[id]` | **Theoretical Reader** | Long-form reading view of select technical essays and derivations with server-rendered KaTeX mathematics. |
| `/visuals` | **Visual Arts & Leadership** | Pixophiles creative leadership documentation, exhibition records (*Project Pandora*, *The Selling Shot*), astrophotography plates, and architectural geometry studies. |
| `/cv` | **Curriculum Vitae (Print)** | Clean, single/multi-page academic CV with dedicated CSS print rules, printable to PDF via browser with identical typesetting. |

---

## 3. Exact Modern Content Layer API Schema (`src/content.config.ts`)

Astro 5/6 mandates declaring content collections via `src/content.config.ts` using the `glob()` loader and referencing items via `entry.id`.

```typescript
// src/content.config.ts
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * 1. RESEARCH COLLECTION
 * Supervised internships and developing theoretical reading questions.
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
    category: z.enum(['Astrodynamics & Simulation', 'Observational Pipelines', 'Computational Optics']),
    primaryLanguage: z.enum(['Rust', 'Python', 'MATLAB', 'C/C++']),
    techStack: z.array(z.string()),
    leadMetrics: z.string().optional(),
    featured: z.boolean().default(false),
    hasSimulation: z.boolean().default(false),
    simulationType: z.enum(['zernike', 'orbit']).optional(),
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
    typesetEngine: z.string(), // e.g. "XeLaTeX / KOMA-Script"
    pdfPath: z.string().optional(),
    pageCount: z.number().optional(),
    topicsCovered: z.array(z.string()),
    featured: z.boolean().default(false),
    order: z.number(),
  }),
});

/**
 * 4. VISUALS COLLECTION
 * Curated photography exhibitions, astrophotography, and creative direction.
 */
const visuals = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/visuals' }),
  schema: z.object({
    title: z.string(),
    category: z.enum(['Astrophotography', 'Architectural & Campus', 'Exhibition Direction', 'Documentary']),
    period: z.string(),
    role: z.string(),
    event: z.string().optional(),
    exhibitionDate: z.string().optional(),
    cameraSpecs: z.string().optional(),
    focalLengths: z.string().optional(),
    description: z.string(),
    order: z.number(),
  }),
});

export const collections = {
  research,
  projects,
  writing,
  visuals,
};
```

---

## 4. Component Hierarchy & Architectural Roles

```
[BaseLayout.astro]
│
├── [MonographHeader.astro]
│   ├── Journal Masthead (Title, Volume, Issue, Current UTC Date)
│   ├── Primary Navigation Links (Index, About, Research, Projects, Writing, Visuals, CV)
│   └── [ThemeToggle.astro] (Observatory Dark Mode Switch)
│
├── <slot /> (Page-Specific Monograph View)
│   │
│   ├── [pages/index.astro]
│   │   ├── Journal Hero & Abstract
│   │   ├── [HairlineGrid.astro]
│   │   ├── Featured Research Plate
│   │   └── Project Indices
│   │
│   ├── [pages/projects/[id].astro]
│   │   ├── Monograph Title & 8/4 Split Grid
│   │   ├── Main Column (8 Cols):
│   │   │   ├── Interactive Simulation Mount (`client:visible`)
│   │   │   │   ├── [ZernikeWavefrontSim.astro]
│   │   │   │   └── [AstraOrbitSim.astro]
│   │   │   ├── 7-Part Structured MDX Content
│   │   │   └── [FigurePlate.astro] / [EquationBlock.astro]
│   │   └── Aside Rail (4 Cols):
│   │       ├── [MetadataRail.astro]
│   │       └── [TableOfContents.astro]
│   │
│   └── [pages/cv.astro]
│       └── Printable Monograph CV Engine (Targeting Screen & Print CSS)
│
└── [MonographFooter.astro]
    ├── Colophon (Typeset in Newsreader + Geist, rendered via Astro)
    ├── Affiliation & Postal Coordinate Tag
    └── Academic Copyright & Attribution Notice
```

---

## 5. Mathematical Rendering Architecture

- **Server-Side KaTeX:** Equations are converted to static HTML during the build phase via `remark-math` and `rehype-katex`. Zero client-side JavaScript is required for equation rendering.
- **CSS Inclusions:** KaTeX stylesheet (`katex.min.css`) is imported in `BaseLayout.astro`.
- **Baseline Alignment:** Custom CSS rules ensure inline formulas sit accurately on the font baseline, preserving paragraph leading.
