# GitHub Copilot Instructions — Academic Portfolio & Research Monograph
**Subject:** Soumitra Pharikal (BS-MS Physics Major, Computational & Data Sciences Minor, IISER Berhampur)
**Design Metaphor:** "The Swiss Research Journal"

You are assisting in building and maintaining the academic portfolio and scientific monograph site for Soumitra Pharikal. You must enforce the following non-negotiable rules whenever generating, refactoring, or suggesting code.

---

## 1. Visual & Typographical Directives

1. **Aesthetic Philosophy:** The design follows "The Swiss Research Journal" — an editorial union of archival academic publications (warm paper ground, classic serif headings) and Swiss scientific monographs (exposed `1px solid` hairlines, `FIG. 01` numbering, technical monospace metadata).
2. **Typography System:**
   - Headings: `'Newsreader'`, Georgia, serif (`--font-serif`, optical size 16–72, weights 400/500, tight tracking `-0.02em`).
   - Body & UI: `'Geist'`, sans-serif (`--font-sans`, weights 400/500, base `16px–17px`, line-height `1.68`, reading measure `65ch–72ch`).
   - Technical Metadata & Code: `'JetBrains Mono'`, monospace (`--font-mono`, `12px–13px`, uppercase tracking `0.06em`).
   - Equations: Render inline and display mathematics exclusively via **KaTeX** (`remark-math` + `rehype-katex`).
   - **BANNED FONTS:** Never suggest, import, or use `Inter`, `Roboto`, `Poppins`, or `Open Sans`.
3. **Color Tokens:**
   - Light (Archival Paper): `--bg-primary: #F6F5F0`, `--bg-surface: #EDEBE4`, `--text-primary: #181A1C`, `--text-secondary: #5E6368`, `--border-subtle: #DEDCD5`, `--accent-primary: #2B547E` (Oxford Blue), `--accent-signal: #C84B31` (Vermilion).
   - Dark (Observatory Mode): `--bg-primary: #0B0D10`, `--bg-surface: #13161B`, `--text-primary: #ECEAE4`, `--text-secondary: #9499A1`, `--border-subtle: #22262E`, `--accent-primary: #689CD0`, `--accent-signal: #E06D53`.

---

## 2. Hard Anti-Slop Prohibitions

Reject any code or styling resembling standard AI/tech portfolio templates:
- ❌ No purple, violet, or indigo gradients.
- ❌ No glowing neon background blobs or ambient radial blur spheres.
- ❌ No glassmorphism (`backdrop-filter: blur(...)`).
- ❌ No 3-card icon feature grids.
- ❌ No quantitative skill progress bars (e.g., "Python 90%").
- ❌ No animated typewriter heading effects.
- ❌ No floating emoji pills or badges.
- ❌ No hallucinated metrics (commits, lines of code, citation counts).
- ❌ No em-dashes (`—`) in buttons, UI tags, or navigation links.

---

## 3. Astro 5/6 Technical Standards

1. **Content Layer API:**
   - Define collections strictly in `src/content.config.ts` (directly under `src/`, NEVER `src/content/config.ts`).
   - Use the modern `glob()` loader from `astro/loaders`.
   - Access unique identifiers exclusively via `entry.id` (NEVER the deprecated `entry.slug`).
2. **CSS Architecture:**
   - Write standard CSS utilizing CSS Custom Properties in `src/styles/tokens.css` and `src/styles/global.css`.
   - Use scoped `<style>` blocks inside Astro components. Do NOT use utility-class frameworks or Tailwind CSS.
3. **Interactive Demonstrations:**
   - Keep interactive simulations lightweight and isolated (vanilla HTML5 Canvas or SVG).
   - Always hydrate with `client:visible` or `client:idle`.
   - Respect `@media (prefers-reduced-motion: reduce)`.

---

## 4. Academic Integrity

- Never invent publications, awards, grades, or research claims.
- Source all factual details from `raw-content/`.
- Use `[TODO: ...]` for unconfirmed links or exact figures.
