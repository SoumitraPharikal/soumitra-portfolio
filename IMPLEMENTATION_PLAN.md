# IMPLEMENTATION PLAN: STEP-BY-STEP SCAFFOLDING & EXECUTION
**Project:** Soumitra Pharikal Academic Research & Creative Portfolio
**Visual Metaphor:** The Swiss Research Journal
**Tech Stack:** Astro 5/6, TypeScript, KaTeX, Pure CSS Custom Properties, HTML5 Canvas

---

## Overview

This implementation plan outlines the sequential phases to construct the flagship academic website from scratch following user review of Phase 1. 

**Rule:** No frontend code or scaffolding will occur until Phase 1 review is approved.

---

## Phase Matrix & Dependency Graph

```
[Phase 1: Governance & Seed Content] (CURRENT - COMPLETED)
       │
       ▼
[Phase 2: Scaffolding & Engine Configuration]
       │
       ▼
[Phase 3: Design Tokens & Typography Layer]
       │
       ▼
[Phase 4: Content Layer Architecture & Seed Ingestion]
       │
       ▼
[Phase 5: Core Layout Shell & Shared Monograph Components]
       │
       ▼
[Phase 6: The 7 Core Page Routes & Dynamic Case Study Engine]
       │
       ▼
[Phase 7: Interactive Scientific Canvas Simulations (client:visible)]
       │
       ▼
[Phase 8: Accessibility, Print Verification & Rigorous QA]
```

---

## Phase 2: Scaffolding & Engine Configuration

- [ ] **2.1 Initialize Astro Project:**
  - Create `package.json` with Astro 5/6, TypeScript, and `@astrojs/check`.
  - Install dependencies: `astro`, `typescript`, `remark-math`, `rehype-katex`, `katex`.
  - Ensure zero utility-class or Tailwind packages are installed.
- [ ] **2.2 Configure TypeScript (`tsconfig.json`):**
  - Extend `"astro/tsconfigs/strict"`.
  - Enable strict null checks and path aliases (`@components/*`, `@styles/*`, `@content/*`).
- [ ] **2.3 Configure Astro Engine (`astro.config.mjs`):**
  - Configure `markdown.remarkPlugins: [remarkMath]` and `markdown.rehypePlugins: [rehypeKatex]`.
  - Configure build output: `output: 'static'`.
  - Set site URL and base path metadata.
- [ ] **2.4 Setup Asset Directories:**
  - Create `public/assets/compendiums/` (for LaTeX generated course PDFs).
  - Create `public/assets/visuals/` (for photography assets).
  - Create `public/assets/diagrams/` (for scientific vector figures).

---

## Phase 3: Design Tokens & Typography Layer

- [ ] **3.1 Build CSS Custom Property Tokens (`src/styles/tokens.css`):**
  - Implement full `:root` (Archival Paper) color variables.
  - Implement `[data-theme="dark"]` (Observatory Mode) color overrides.
  - Implement fluid typography scale (`clamp()`) for `--text-micro` through `--text-display`.
  - Implement 8px spatial modular tokens (`--space-1` through `--space-16`).
- [ ] **3.2 Build Global Reset & Base Styles (`src/styles/global.css`):**
  - CSS reset and border-box sizing.
  - Font face declarations: `'Newsreader'`, `'Geist'`, and `'JetBrains Mono'`.
  - KaTeX mathematical typography overrides (baseline alignment, inline math padding).
  - Swiss hairline classes (`.hairline-top`, `.hairline-box`, `.corner-crosshair`).
  - Container and 12-column Swiss grid classes.
- [ ] **3.3 Build Print Stylesheet (`src/styles/print.css`):**
  - Dedicated `@media print` rules for the `/cv` route (hiding masthead navigation, enforcing pure paper white, exact page breaks).

---

## Phase 4: Content Layer Architecture & Seed Ingestion

- [ ] **4.1 Implement Content Layer API (`src/content.config.ts`):**
  - Place file strictly at `src/content.config.ts` (root of `src/`).
  - Import `glob` from `astro/loaders`.
  - Define collections: `research`, `projects`, `writing`, and `visuals` with strict Zod validation schemas.
- [ ] **4.2 Ingest Seed Content into Collection Files:**
  - `src/content/research/`:
    - `ic1369-photometry.md` (ICSP Kolkata / Dr. Devendra Bisht)
    - `uh-manoa-intro2astro.md` (UH Manoa Intro2Astro / Dr. Fei Dai)
    - `zernike-aberrations.md` (IISER Berhampur / Dr. Vyas Akondi)
    - `special-relativity-reading.md` (IISER Berhampur / Dr. Sandeep Chatterjee)
  - `src/content/projects/`:
    - `astra-rust.md` (Astrodynamics in Rust)
    - `ic1369-pipeline.md` (Automated CCD Photometry Pipeline)
    - `zernike-analyzer.md` (Optical Wavefront & Pupil Scaling Simulator)
  - `src/content/writing/`:
    - `phy305-classical-mechanics.md`
    - `phy303-quantum-mechanics-1.md`
    - `cds301-data-structures-1.md`
    - `classical-thermodynamics.md`
    - `electrodynamics.md`
  - `src/content/visuals/`:
    - `pixophiles-direction.md`
    - `project-pandora.md`
    - `the-selling-shot.md`
    - `astrophotography-odisha.md`

---

## Phase 5: Core Layout Shell & Shared Monograph Components

- [ ] **5.1 Master Layout Shell (`src/components/layout/BaseLayout.astro`):**
  - HTML5 doctype, head metadata, OpenGraph cards.
  - Link `katex.min.css` and local typography imports.
  - Include theme initialization inline script (preventing dark mode flicker).
- [ ] **5.2 Archival Monograph Masthead (`src/components/layout/MonographHeader.astro`):**
  - Classical journal header with publication metadata, live date/time counter, and 7 primary navigation links.
  - Mount `ThemeToggle.astro` for Observatory Dark Mode switching.
- [ ] **5.3 Colophon & Institutional Footer (`src/components/layout/MonographFooter.astro`):**
  - Scholarly attribution, IISER Berhampur affiliation, postal coordinates, and copyright.
- [ ] **5.4 Shared UI Components:**
  - `SectionHeader.astro`: Section counter and serif heading with structural hairline.
  - `FigurePlate.astro`: Academic figure enclosure with `FIG. XX` header and caption block.
  - `EquationBlock.astro`: Centered KaTeX equation with right-aligned tag `(EQ. X.X)`.
  - `MetadataRail.astro`: Asymmetrical sidebar for supervisor, institution, and stack metadata.
  - `TagBadge.astro`: Clean monospace pill badge.

---

## Phase 6: The 7 Core Page Routes & Dynamic Case Study Engine

- [ ] **6.1 Route 1: `/` (Frontispiece & Overview):**
  - Monograph abstract, academic statement of intent, quick-jump journal index.
  - Highlighted research card (ICSP Kolkata / Zernike Optics).
  - Selected project callout (`ASTRA` Rust Toolkit).
- [ ] **6.2 Route 2: `/about` (Biography & Academic Dossier):**
  - Personal background (Arambagh $\to$ Ahmedabad $\to$ Berhampur).
  - Dual-degree academic journey (Physics Major, CDS Minor).
  - Full research interests matrix and technical skill inventory.
- [ ] **6.3 Route 3: `/research` (Research Dossier):**
  - Tabular / 2-column index split strictly into **Part I (Supervised Internships)** and **Part II (Developing Research Questions)**.
  - Detailed methodology cards and supervisor credits.
- [ ] **6.4 Route 4 & 4b: `/projects` & `/projects/[id]` (7-Part Case Study Engine):**
  - `/projects/index.astro`: Technical project catalog with language tags (Rust, Python, MATLAB).
  - `/projects/[id].astro`: Dynamic case study page utilizing `getStaticPaths()` over `entry.id`.
  - Render full 7-part sections with sticky Table of Contents sidebar.
- [ ] **6.5 Route 5 & 5b: `/writing` & `/writing/[id]` (Notes & Compendiums):**
  - Catalog of LaTeX course compendiums (`PHY 305`, `PHY 303`, `CDS 301`, Thermodynamics, Electrodynamics).
  - Download buttons for compiled PDFs and rendered mathematical overview.
- [ ] **6.6 Route 6: `/visuals` (Visual Arts & Pixophiles Archive):**
  - Executive leadership summary of Pixophiles.
  - Curated gallery plates for *Project Pandora*, *The Selling Shot*, astrophotography, and architectural studies.
- [ ] **6.7 Route 7: `/cv` (Academic Curriculum Vitae):**
  - Single-page comprehensive academic CV formatted for screen and physical print (`@media print`).
  - Print trigger button ("Download / Print CV as PDF").

---

## Phase 7: Interactive Scientific Canvas Simulations (`client:visible`)

- [ ] **7.1 Zernike Wavefront Analyzer Simulation (`src/components/interactive/ZernikeWavefrontSim.astro`):**
  - Lightweight, dependency-free HTML5 Canvas component.
  - Interactive sliders: Defocus ($c_2^0$), Astigmatism ($c_2^{\pm 2}$), Coma ($c_3^{\pm 1}$), Spherical ($c_4^0$), and Pupil Scaling factor ($s \in [0.4, 1.0]$).
  - Real-time 2D color-mapped wavefront phase contour display.
  - Numerical readout of root-mean-square phase variance ($\sigma_{\Phi}$) and Strehl ratio ($S$).
- [ ] **7.2 `ASTRA` Astrodynamics Orbit Propagator Simulation (`src/components/interactive/AstraOrbitSim.astro`):**
  - Lightweight HTML5 Canvas orbital simulator.
  - Interactive Keplerian orbital parameters ($a, e, i, \omega$) and $J_2$ perturbation toggle.
  - Real-time orbital trace, apoapsis/periapsis markers, and live state vector telemetry.
  - Play / Pause / Reset controls with reduced-motion compliance.

---

## Phase 8: Accessibility, Print Verification & Rigorous QA

- [ ] **8.1 Anti-Slop Audit:**
  - Verify zero purple gradients, zero floating emoji pills, zero fake metrics, and zero em-dashes in UI copy.
- [ ] **8.2 Accessibility (WCAG 2.2 AA) Audit:**
  - Verify contrast ratios across Archival Paper (light) and Observatory Mode (dark).
  - Keyboard navigation and focus ring visibility check.
  - Confirm `@media (prefers-reduced-motion: reduce)` disables canvas animation loops.
- [ ] **8.3 Mobile Responsiveness & Isolation Audit:**
  - Test viewports: $360\text{px}$, $768\text{px}$, $1024\text{px}$, $1440\text{px}$.
  - Ensure zero horizontal scrolling or layout shifts.
- [ ] **8.4 Static Build & Type Check:**
  - Run `astro check` and `astro build` ensuring static generation outputs clean HTML without runtime errors.
