# DESIGN BRIEF: THE SWISS RESEARCH JOURNAL
**Flagship Academic Portfolio & Monograph Architecture**
**Author & Subject:** Soumitra Pharikal (BS-MS Dual Degree, IISER Berhampur)

---

## 1. Aesthetic Philosophy & Visual Identity

### 1.1 The Concept
The visual identity of this portfolio is titled **"The Swiss Research Journal"**. It sits at the precise intersection of two historic print and scientific traditions:
1. **Editorial Academic Minimalism:** Warm archival paper, literary serif display typography, generous and deliberate margins, classical text measures ($65\text{ch}$ to $72\text{ch}$), and mathematical prose rendered with typographical integrity.
2. **The Swiss Scientific Monograph:** Disciplined 12-column grid geometry, exposed $1\text{px}$ solid structural hairlines (`var(--border-subtle)`), explicit figure numbering (`FIG. 01`, `TAB. 03`, `EQ. 04`), and technical monospace metadata overlays reminiscent of physical laboratory logs, telescope manifests, and technical reprints.

The portfolio explicitly avoids the look of a generic tech company landing page, a modern SaaS dashboard, or a "creative developer" purple-neon experiment. Instead, it feels like an archival monograph produced by an elite university press (e.g., MIT Press, Cambridge University Press) that has been seamlessly adapted for the modern web with subtle digital interactions.

### 1.2 Taste-Skill Calibration Dials
- **`DESIGN_VARIANCE: 7/10`**: High editorial distinction. Distinct asymmetrical grid layouts, split-column article margins, archival index headers, and technical data plates. Avoids standard cookie-cutter layouts.
- **`MOTION_INTENSITY: 3/10`**: Restrained, silent, and functional. Micro-interactions are strictly physical and instantaneous ($120\text{ms}$–$200\text{ms}$, cubic-bezier timing). No dizzying parallax, no floating canvas swarms, no continuous ambient rotations. Motion only occurs in direct response to user intent or inside dedicated physical simulations.
- **`VISUAL_DENSITY: 6/10`**: Balanced information density. High-density technical metadata bars juxtaposed against airy, high-legibility reading columns with substantial vertical section breathing room ($96\text{px}$–$120\text{px}$).

---

## 2. Color Palette & Token System

The color system operates via CSS custom properties with a light default ("Archival Paper") and a secondary high-contrast night mode ("Observatory Dark Mode").

### 2.1 Default: "Archival Paper" (Light Theme)
Designed to emulate unbleached, high-rag archival cotton paper and printer's carbon black ink:
- `--bg-primary: #F6F5F0` (Archival warm ground, low glare)
- `--bg-surface: #EDEBE4` (Recessed secondary container ground, metadata plate tint)
- `--bg-surface-elevated: #E5E2D9` (Interactive hover/accent ground)
- `--text-primary: #181A1C` (High-density carbon black, neutral charcoal tint)
- `--text-secondary: #5E6368` (Muted academic caption grey; passes WCAG 2.2 AA)
- `--text-tertiary: #858A90` (Monospace labels, metadata indices)
- `--border-subtle: #DEDCD5` (Structural hairline boundary, $1\text{px}$ solid)
- `--border-strong: #A8A59C` (Emphasized grid axes and active tab indicators)
- `--accent-primary: #2B547E` (Academic Oxford Blue; primary links, author callouts)
- `--accent-signal: #C84B31` (Muted Vermilion; figure flags, active plot traces, error bounds)

### 2.2 Toggle: "Observatory Mode" (Dark Theme)
Inspired by deep-space astronomical control rooms and cold red-filtered CCD monitor suites:
- `--bg-primary: #0B0D10` (Deep obsidian/space vacuum ground)
- `--bg-surface: #13161B` (Chambered surface block, cool basalt tone)
- `--bg-surface-elevated: #1B2027` (Hover states and active plate ground)
- `--text-primary: #ECEAE4` (Warm starlight white, soft legibility)
- `--text-secondary: #9499A1` (Neutral slate secondary prose)
- `--text-tertiary: #5E646E` (Technical metadata markings)
- `--border-subtle: #22262E` (Structural hairline boundary, $1\text{px}$ solid)
- `--border-strong: #3F4756` (Active grid boundary and coordinate axis)
- `--accent-primary: #689CD0` (Atmospheric cyan-blue; links, telescope markers)
- `--accent-signal: #E06D53` (Warm vermilion starlight; active photometry indicators)

---

## 3. Strict Typography System

Typography must strictly follow a three-family hierarchy plus KaTeX for mathematical expressions.

```
+-------------------------------------------------------------------------------+
| Headings: Newsreader (Serif, Optical Size 16-72, Tracking -0.02em)            |
| Body & UI: Geist (Sans, Weights 400/500, Measure 65ch-72ch)                   |
| Metadata & Figures: JetBrains Mono (Mono, Weight 400/500, Tracking +0.06em)   |
| Mathematical Proofs: KaTeX (Remark-Math + Rehype-KaTeX)                       |
+-------------------------------------------------------------------------------+
```

### 3.1 Display & Section Headings (`--font-serif`)
- **Family:** `'Newsreader'`, Georgia, serif
- **Optical Sizing:** Dynamic optical sizing enabled (`font-optical-sizing: auto`).
- **Characteristics:** Tight letter-spacing (`letter-spacing: -0.02em`), proportional lining figures for dates, true italic glyphs for physical quantity symbols ($c$, $\hbar$, $\rho$, $\theta$).
- **Scale:**
  - H1 (Paper / Document Title): `clamp(2.25rem, 4.5vw, 3.5rem)` (`36px`–`56px`), `line-height: 1.15`, weight `500`.
  - H2 (Section Monograph Header): `clamp(1.5rem, 2.8vw, 2.15rem)` (`24px`–`34px`), `line-height: 1.25`, weight `500`.
  - H3 (Subsection Header): `1.25rem`–`1.4rem` (`20px`–`22px`), `line-height: 1.35`, weight `500`.

### 3.2 Reading Prose & General UI (`--font-sans`)
- **Family:** `'Geist'`, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif
- **Characteristics:** Clean, neo-grotesque Swiss clarity with neutral geometry and generous x-height.
- **Reading Measure:** Strictly constrained between `65ch` and `72ch` for long-form academic exposition.
- **Scale:**
  - Body Base: `1.0625rem` (`17px`) on desktop, `1rem` (`16px`) on mobile; `line-height: 1.68`; weight `400`.
  - Lead Paragraph: `1.1875rem` (`19px`); `line-height: 1.6`; weight `400`.
  - Navigation & Interactive Controls: `0.875rem` (`14px`); `line-height: 1.4`; weight `500`.

### 3.3 Technical Metadata, Figure Labels & Code (`--font-mono`)
- **Family:** `'JetBrains Mono'`, Menlo, Consolas, monospace
- **Characteristics:** High tabular legibility, distinct glyph differentiators (slashed zero, explicit brackets).
- **Scale:** `0.75rem`–`0.8125rem` (`12px`–`13px`); `letter-spacing: 0.06em`; uppercase for metadata indices (`[INDEX: 01]`, `FIG. 04`, `STATUS: ACCEPTED`, `JULY 2026`).

### 3.4 Mathematical Typesetting (KaTeX)
- Mathematical equations must be processed server-side via `remark-math` and `rehype-katex`.
- Inline equations (`$W(\rho, \theta) = \sum c_n^m Z_n^m$`) must sit cleanly on the baseline with matching text optical weight.
- Display equations (`$$ ... $$`) are typeset in dedicated indented block containers with an optional right-aligned equation serial tag: `(EQ. 1.2)`.

### 3.5 BANNED FONTS
The following fonts represent overused tech templates and must **NEVER** be imported, loaded, or assigned:
- ❌ `Inter` (prohibited; replaces monograph warmth with generic SaaS)
- ❌ `Roboto` (prohibited)
- ❌ `Poppins` (prohibited)
- ❌ `Open Sans` (prohibited)

---

## 4. Layout, Grid & Hairline Spatial Structure

### 4.1 Grid Geometry
- **Max Page Container:** `1140px` centered with auto margins.
- **Desktop Grid:** 12-column CSS Grid with `24px` gutter gaps (`gap: 24px`) and explicit column coordinates.
- **Base Spatial Unit:** Multiples of `8px` (`8px`, `16px`, `24px`, `32px`, `48px`, `64px`, `96px`, `120px`).
- **Section Vertical Rhythm:** Top and bottom padding of `96px`–`120px` to create scholarly monograph cadence.

### 4.2 Structural Hairlines
- No floating cards with fuzzy drop shadows.
- Sections and content partitions are delineated using `1px solid var(--border-subtle)` lines.
- Grid boundaries may feature subtle crosshair tick marks (`+`) at intersection corners to evoke technical draftsmanship.
- Card corners are sharp (`0px`) or micro-beveled (`border-radius: 2px`).

---

## 5. Figures, Data Plates & Laboratory Aesthetics

All media and diagrams must adhere to the physical research reprint specification:
- **Figure Header:** Monospace tag at the top-left of the figure plate (e.g., `FIG. 02 // WAVEFRONT ERROR RESIDUALS`).
- **Frame:** Enclosed in a `1px solid var(--border-subtle)` container with a `4px` padding perimeter or background wash (`var(--bg-surface)`).
- **Caption Block:** Placed directly beneath the figure, rendered in `--font-sans` (`13px–14px`), with secondary color (`var(--text-secondary)`), accompanied by full scientific parameter notes:
  - *Example:* "FIG. 01 — Optical wavefront aberration map for a 6 mm circular exit pupil reconstructed from 15 Zernike radial orders. Residual root-mean-square error: $\sigma = 0.042\lambda$."

---

## 6. Anti-Slop Hard Bans

The following stylistic cliches and AI-generated tropes are strictly forbidden across all stylesheets, components, and content:
1. ❌ **Zero Purple / Violet / Indigo Gradients:** No AI-brand gradient text, no neon mesh glows, no colorful rainbow hero titles.
2. ❌ **Zero Glowing Neon Blobs:** No blurred radial gradients behind cards or hero sections.
3. ❌ **Zero Glassmorphic Blur Cards:** No `backdrop-filter: blur(20px)` floating white cards.
4. ❌ **Zero 3-Equal-Card Icon Rows:** No "Feature 1 / Feature 2 / Feature 3" boxes with generic icon circles.
5. ❌ **Zero Artificial Skill Progress Bars:** Never display "Python: 90%", "Physics: 85%", or similar absurd quantitative skill bars.
6. ❌ **Zero Typewriter Text Headings:** No typewriter JavaScript effects cycling through strings.
7. ❌ **Zero Floating Emoji Pills:** No "🚀 Passionate Researcher" or "✨ Student" chip tags.
8. ❌ **Zero Fake Metrics:** Never invent numbers like "500+ Commits", "10k Lines of Code", "100% Satisfied Mentors", or fake citations.
9. ❌ **Zero Em-Dashes in UI Copy:** No careless em-dash abuse (`—`) in navigation buttons, pills, badge titles, or microcopy. Use colons, parentheses, or periods.

---

## 7. Accessibility, Motion & Technical Standards

- **Contrast:** Every text color / ground combination must meet or exceed WCAG 2.2 Level AA ($4.5:1$ for body, $3:1$ for large text).
- **Focus Rings:** Distinct, non-offset keyboard focus indicators: `outline: 2px solid var(--accent-primary); outline-offset: 2px;`.
- **Motion Reduction:** Full compliance with `@media (prefers-reduced-motion: reduce)`: transitions set to `0ms` and interactive animations disabled or rendered as static snapshots.
- **Mobile First Responsiveness:** Strict horizontal containment (`max-width: 100vw; overflow-x: hidden;`). Breakpoints: Desktop (`> 1024px`), Tablet (`768px–1024px`), Mobile (`< 768px`).
