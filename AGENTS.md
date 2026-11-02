# AGENTS.md — CODEBASE GOVERNANCE & ENGINEERING DIRECTIVES
**Project:** Soumitra Pharikal Academic Research & Creative Portfolio
**Architecture:** Modern Astro 5/6 (Content Layer API, Pure CSS Design System, Static Generation)
**Subject:** Undergraduate BS-MS (Physics Major, Computational & Data Sciences Minor) at IISER Berhampur

---

## 1. Prime Directive

This repository houses the personal academic monograph, research portfolio, and creative archive of **Soumitra Pharikal**. Every file, commit, and code edit must treat this project as a serious academic publication. 

Under no circumstances should this site resemble a generic software engineering landing page, a SaaS product showcase, or an AI-generated template. All contributors and autonomous agents must strictly follow the architectural, typographical, and anti-slop rules codified below.

---

## 2. Aesthetic & Typographical Standards

### 2.1 The Visual Direction
- **Identity:** "The Swiss Research Journal" — an editorial union of classical archival academic publications and the Swiss Rationalist Monograph.
- **Dials:**
  - `DESIGN_VARIANCE: 7/10` (Strong bespoke editorial personality, asymmetrical grid balance)
  - `MOTION_INTENSITY: 3/10` (Silent, utilitarian, instantaneous, $< 200\text{ms}$)
  - `VISUAL_DENSITY: 6/10` (Scholarly metadata paired with generous text breathing room)

### 2.2 Strict Font Palette
Agents must use **only** these three font families and KaTeX:
1. **`--font-serif`**: `'Newsreader'`, Georgia, serif (optical size 16–72, weights 400/500, tight tracking `-0.02em`). Used for page titles, essay headings, and physical terms.
2. **`--font-sans`**: `'Geist'`, -apple-system, BlinkMacSystemFont, sans-serif (weights 400/500, base `16px–17px`, line-height `1.68`, reading measure `65ch–72ch`). Used for body prose, UI navigation, and long-form exposition.
3. **`--font-mono`**: `'JetBrains Mono'`, Menlo, Consolas, monospace (`12px–13px`, uppercase tracking `0.06em`). Used for figure callouts (`FIG. 01`), technical metadata, code blocks, and coordinate stamps.
4. **Equations:** Inline and display math rendered via **KaTeX** (`remark-math` + `rehype-katex`).

**BANNED FONTS:** Never import or specify `Inter`, `Roboto`, `Poppins`, or `Open Sans`.

---

## 3. Anti-Slop Hard Rules

Any agent generating frontend code must reject and avoid these anti-patterns:
- ❌ **No purple/violet/indigo gradients** on text or backgrounds.
- ❌ **No glowing neon blobs or blurred background ambient radial gradients.**
- ❌ **No glassmorphic blur cards** (`backdrop-filter: blur(...)` with semitransparent white borders).
- ❌ **No 3-equal-card icon feature grids** (e.g. icon-in-a-circle + title + 2 sentences).
- ❌ **No fake quantitative skill bars or circular percentage meters** (e.g. "Physics 90%").
- ❌ **No typewriter text loops** or animated heading string swappers.
- ❌ **No floating emoji badge pills** (e.g. "🚀 Fast Learner").
- ❌ **No hallucinated metrics** (never invent commit counts, line counts, or citation counts).
- ❌ **No em-dashes in UI copy** (buttons, tags, tabs, and titles must not contain `—`).

---

## 4. Modern Astro 5/6 Technical Architecture

### 4.1 Content Layer Configuration
- **File Location:** The Content Collections schema MUST reside at `src/content.config.ts` (directly under `src/`). Do NOT create or use the legacy Astro 2/3/4 path `src/content/config.ts`.
- **Loader:** Use the modern `glob()` loader imported from `astro/loaders`:
  ```typescript
  import { defineCollection, z } from 'astro:content';
  import { glob } from 'astro/loaders';

  const research = defineCollection({
    loader: glob({ pattern: '**/*.{md,mdx}', base: './src/data/research' }),
    schema: z.object({ ... })
  });
  ```
- **Routing Identifiers:** Always use `entry.id` for slugs and routes. The legacy `entry.slug` property is deprecated in Astro 5 and must not be used.

### 4.2 Styling & CSS Architecture
- **No Utility-Class Bloat:** Do not install Tailwind CSS or dump 30-class strings into HTML elements.
- **Custom CSS Foundation:**
  - `src/styles/tokens.css`: All CSS custom properties for color, typography, spacing, and layout.
  - `src/styles/global.css`: Reset, base document styles, KaTeX overrides, and print styles.
  - **Scoped Astro Styles:** Use `<style>` blocks inside `.astro` components for component-level styling, utilizing CSS custom properties.
- **Hairline Grids:** Card surfaces and section borders must use `1px solid var(--border-subtle)` with a corner radius of `0px` or `2px`.

### 4.3 Interactive Scientific Demonstrations
- Interactive simulations (e.g., Zernike polynomial wavefronts, orbital mechanics traces) must be built with clean, dependency-free vanilla HTML5 Canvas or SVG scripts.
- Wrap interactive components with `client:visible` to keep page loads instant and static-first.
- All canvas animations must pause when out of view (`IntersectionObserver`) and honor `prefers-reduced-motion`.

---

## 5. Academic & Factual Integrity

- **Truthful Content:** All factual data must originate from the verified records in `raw-content/`. Never invent papers, conferences, degrees, awards, or affiliations.
- **Unverified Fields:** If a specific metric, DOI, or repository link is pending or unknown, mark it as `[TODO: ...]` rather than hallucinating plausible values.
- **Curricular Standing:** Soumitra is an undergraduate BS-MS Dual Degree student at the Indian Institute of Science Education and Research (IISER) Berhampur (Physics Major, Computational and Data Sciences Minor).

---

## 6. Accessibility & Responsive Requirements

- Semantic HTML5 landmarks (`<header>`, `<main>`, `<nav>`, `<article>`, `<aside>`, `<footer>`).
- Contrast ratios must comply with WCAG 2.2 AA ($4.5:1$ minimum for body text).
- Visible keyboard focus states on all focusable elements (`outline: 2px solid var(--accent-primary)`).
- Complete mobile styling isolation inside `@media (max-width: 768px)` preventing any horizontal scrollbar (`overflow-x: hidden` on viewport wrappers).
