# DESIGN SYSTEM: THE SWISS RESEARCH JOURNAL
**Technical Specification & Style Guide**
**Target Architecture:** Astro 5/6 + Custom CSS Tokens (`src/styles/tokens.css` & `src/styles/global.css`)

---

## 1. Design Tokens & CSS Custom Properties

The system uses standard CSS custom properties defined on `:root` (Light / Archival Paper ground) and scoped overrides on `[data-theme="dark"]` (Dark / Observatory Mode).

### 1.1 Color Tokens
```css
:root {
  /* ==========================================================================
     ARCHIVAL PAPER (LIGHT DEFAULT)
     ========================================================================== */
  --bg-primary: #F6F5F0;             /* Unbleached cotton archival paper ground */
  --bg-surface: #EDEBE4;             /* Recessed plate ground / metadata strip */
  --bg-surface-elevated: #E5E2D9;    /* Interactive hover state / elevated card */
  --bg-surface-sunken: #E4E1D8;      /* Deep inset plate / code block background */
  
  --text-primary: #181A1C;           /* High-density carbon printer ink */
  --text-secondary: #5E6368;         /* Neutral slate academic annotation (WCAG AA compliant) */
  --text-tertiary: #858A90;          /* Monospace indices, figure labels, metadata */
  --text-inverse: #F6F5F0;           /* High-contrast inverted text */

  --border-subtle: #DEDCD5;          /* 1px solid structural hairline grid boundary */
  --border-strong: #A8A59C;          /* Active tab, emphasized column divider */
  --border-focus: #2B547E;           /* Keyboard focus ring token */

  --accent-primary: #2B547E;         /* Academic Oxford Blue (hyperlinks, author tag) */
  --accent-primary-hover: #1D3B5A;   /* Deep Oxford Blue hover state */
  --accent-primary-tint: #EBF1F7;    /* Subtle Oxford Blue wash */

  --accent-signal: #C84B31;          /* Muted Vermilion (figures, active traces, alert) */
  --accent-signal-hover: #A73820;    /* Dark Vermilion */
  --accent-signal-tint: #FAECE9;     /* Light Vermilion wash */

  --syntax-keyword: #2B547E;
  --syntax-string: #2E6B47;
  --syntax-comment: #858A90;
  --syntax-number: #C84B31;
}

[data-theme="dark"] {
  /* ==========================================================================
     OBSERVATORY MODE (DARK TOGGLE)
     ========================================================================== */
  --bg-primary: #0B0D10;             /* Deep astronomical vacuum / basalt ground */
  --bg-surface: #13161B;             /* Instrument housing / secondary panel */
  --bg-surface-elevated: #1B2027;    /* Elevated sensor plate / hover highlight */
  --bg-surface-sunken: #0E1014;      /* Deep terminal inset */

  --text-primary: #ECEAE4;           /* Warm starlight white */
  --text-secondary: #9499A1;         /* Atmospheric haze slate secondary */
  --text-tertiary: #5E646E;          /* Monospace index grey */
  --text-inverse: #0B0D10;           /* High-contrast inverted text */

  --border-subtle: #22262E;          /* 1px hairline boundary */
  --border-strong: #3F4756;          /* Emphasized structural grid line */
  --border-focus: #689CD0;           /* Keyboard focus ring token */

  --accent-primary: #689CD0;         /* Spectral blue */
  --accent-primary-hover: #8AB4E0;   /* Bright spectral blue */
  --accent-primary-tint: #142232;    /* Dark spectral wash */

  --accent-signal: #E06D53;          /* Warm vermilion starlight */
  --accent-signal-hover: #F0856E;    /* Active vermilion */
  --accent-signal-tint: #2C1814;     /* Dark vermilion wash */

  --syntax-keyword: #689CD0;
  --syntax-string: #6BB387;
  --syntax-comment: #5E646E;
  --syntax-number: #E06D53;
}
```

### 1.2 Spatial Scale & Layout Tokens
```css
:root {
  /* Base 8px modular spatial units */
  --space-1: 0.25rem;  /* 4px */
  --space-2: 0.5rem;   /* 8px - Base Spatial Unit */
  --space-3: 0.75rem;  /* 12px */
  --space-4: 1rem;     /* 16px */
  --space-5: 1.5rem;   /* 24px - Standard Grid Gap */
  --space-6: 2rem;     /* 32px */
  --space-7: 2.5rem;   /* 40px */
  --space-8: 3rem;     /* 48px */
  --space-10: 4rem;    /* 64px */
  --space-12: 5rem;    /* 80px */
  --space-14: 6rem;    /* 96px - Minimum Section Vertical Rhythm */
  --space-16: 7.5rem;  /* 120px - Standard Section Vertical Rhythm */

  /* Structural Geometry */
  --max-width-container: 1140px;
  --reading-measure-narrow: 56ch;
  --reading-measure: 68ch;
  --reading-measure-wide: 74ch;

  /* Hairlines & Corner Geometry */
  --hairline-width: 1px;
  --radius-none: 0px;
  --radius-sm: 2px;
  --radius-pill: 9999px; /* Strictly for circular toggles and tags */
}
```

---

## 2. Fluid Typography Scale & System

The typography scale utilizes mathematical CSS `clamp()` functions to fluidly interpolate between mobile viewports ($360\text{px}$) and wide desktop displays ($1280\text{px}$).

### 2.1 Font Families
```css
:root {
  --font-serif: 'Newsreader', Georgia, 'Times New Roman', serif;
  --font-sans: 'Geist', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
  --font-mono: 'JetBrains Mono', Menlo, Monaco, Consolas, 'Courier New', monospace;
}
```

### 2.2 Fluid Type Scale (`clamp()`)
```css
:root {
  /* Mono & Micro Metadata (JetBrains Mono) */
  --text-micro: clamp(0.6875rem, 0.65rem + 0.15vw, 0.75rem);      /* 11px -> 12px */
  --text-xs: clamp(0.75rem, 0.72rem + 0.15vw, 0.8125rem);         /* 12px -> 13px */
  --text-sm: clamp(0.8125rem, 0.78rem + 0.2vw, 0.875rem);          /* 13px -> 14px */

  /* Body & General UI (Geist) */
  --text-base: clamp(1rem, 0.96rem + 0.22vw, 1.0625rem);          /* 16px -> 17px */
  --text-lead: clamp(1.125rem, 1.06rem + 0.35vw, 1.25rem);         /* 18px -> 20px */

  /* Display & Section Headings (Newsreader Serif) */
  --text-h4: clamp(1.1875rem, 1.12rem + 0.4vw, 1.35rem);          /* 19px -> 21.6px */
  --text-h3: clamp(1.35rem, 1.22rem + 0.7vw, 1.65rem);            /* 21.6px -> 26.4px */
  --text-h2: clamp(1.65rem, 1.45rem + 1.2vw, 2.25rem);            /* 26.4px -> 36px */
  --text-h1: clamp(2.25rem, 1.85rem + 2.2vw, 3.5rem);             /* 36px -> 56px */
  --text-display: clamp(2.75rem, 2.1rem + 3.2vw, 4.5rem);        /* 44px -> 72px */

  /* Line Heights */
  --leading-tight: 1.15;
  --leading-snug: 1.28;
  --leading-body: 1.68;
  --leading-loose: 1.8;

  /* Letter Spacing */
  --tracking-tighter: -0.03em;
  --tracking-tight: -0.02em; /* Standard for Newsreader Headings */
  --tracking-normal: 0em;
  --tracking-wide: 0.04em;
  --tracking-wider: 0.06em;  /* Standard for JetBrains Mono uppercase metadata */
}
```

---

## 3. Swiss 12-Column Hairline Grid & Layout Classes

### 3.1 Container & Grid Foundation
```css
/* Container */
.monograph-container {
  width: 100%;
  max-width: var(--max-width-container);
  margin-left: auto;
  margin-right: auto;
  padding-left: clamp(1.25rem, 3.5vw, 2.5rem);
  padding-right: clamp(1.25rem, 3.5vw, 2.5rem);
}

/* 12-Column Grid */
.swiss-grid-12 {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: var(--space-5); /* 24px */
  align-items: start;
}

/* Column Spans */
.col-12 { grid-column: span 12; }
.col-10 { grid-column: span 10; }
.col-9  { grid-column: span 9; }
.col-8  { grid-column: span 8; }
.col-7  { grid-column: span 7; }
.col-6  { grid-column: span 6; }
.col-5  { grid-column: span 5; }
.col-4  { grid-column: span 4; }
.col-3  { grid-column: span 3; }
.col-2  { grid-column: span 2; }

/* Responsive adjustments */
@media (max-width: 1024px) {
  .col-8, .col-7, .col-9 { grid-column: span 12; }
  .col-4, .col-5, .col-3 { grid-column: span 12; }
  .col-6 { grid-column: span 12; }
}
```

### 3.2 Hairlines & Structural Partitions
```css
/* Precision Hairlines */
.hairline-top { border-top: var(--hairline-width) solid var(--border-subtle); }
.hairline-bottom { border-bottom: var(--hairline-width) solid var(--border-subtle); }
.hairline-left { border-left: var(--hairline-width) solid var(--border-subtle); }
.hairline-right { border-right: var(--hairline-width) solid var(--border-subtle); }

.hairline-box {
  border: var(--hairline-width) solid var(--border-subtle);
  border-radius: var(--radius-sm);
  background: var(--bg-surface);
}

/* Technical Corner Crosshair Tick */
.corner-crosshair {
  position: relative;
}
.corner-crosshair::before,
.corner-crosshair::after {
  content: "+";
  position: absolute;
  font-family: var(--font-mono);
  font-size: 11px;
  color: var(--border-strong);
  line-height: 1;
  pointer-events: none;
}
.corner-crosshair::before { top: -6px; left: -5px; }
.corner-crosshair::after { bottom: -6px; right: -5px; }
```

### 3.3 Asymmetrical Editorial Layout Patterns
1. **The Research Monograph Layout (8/4 Split):**
   - Left 8 columns (`grid-column: span 8`): Primary narrative, analytical derivations, interactive canvas, high-resolution figures.
   - Right 4 columns (`grid-column: span 4`): Hairline-divided metadata rail containing supervisor info, institution tags, software stack, dataset links, and side-notes.
2. **The Archival Index Layout (3/9 Split):**
   - Left 3 columns (`grid-column: span 3`): Sticky chronological year index (`2026`, `2025`, `2024`) with category tags.
   - Right 9 columns (`grid-column: span 9`): Detailed archival entry list separated by horizontal hairlines.

---

## 4. Figure Plates, Data Annotations & Equation Styling

### 4.1 Figure Plate Component CSS
```css
.figure-plate {
  margin: var(--space-8) 0;
  border: var(--hairline-width) solid var(--border-subtle);
  border-radius: var(--radius-sm);
  background: var(--bg-surface);
  overflow: hidden;
}

.figure-plate-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--space-2) var(--space-4);
  background: var(--bg-primary);
  border-bottom: var(--hairline-width) solid var(--border-subtle);
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  letter-spacing: var(--tracking-wider);
  text-transform: uppercase;
  color: var(--text-secondary);
}

.figure-plate-tag {
  color: var(--accent-signal);
  font-weight: 500;
}

.figure-plate-canvas {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--space-4);
  background: var(--bg-surface);
  min-height: 280px;
}

.figure-plate-caption {
  padding: var(--space-3) var(--space-4);
  background: var(--bg-primary);
  border-top: var(--hairline-width) solid var(--border-subtle);
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  line-height: 1.5;
  color: var(--text-secondary);
}

.figure-plate-caption strong {
  color: var(--text-primary);
  font-family: var(--font-mono);
  font-size: var(--text-xs);
}
```

### 4.2 Equation Block Typesetting
```css
.equation-block {
  margin: var(--space-6) 0;
  padding: var(--space-4) var(--space-6);
  border-left: 2px solid var(--accent-primary);
  background: var(--bg-surface);
  border-radius: 0 var(--radius-sm) var(--radius-sm) 0;
  overflow-x: auto;
  position: relative;
}

.equation-tag {
  float: right;
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  color: var(--text-tertiary);
  margin-top: var(--space-2);
}
```

---

## 5. Micro-Interactions, Focus States & Motion Rules

### 5.1 Transitions & Timing
- **Standard Transition:** `all 140ms cubic-bezier(0.16, 1, 0.3, 1)`
- **Color Shift Transition:** `color 120ms ease, background-color 120ms ease, border-color 120ms ease`
- Never apply duration $> 240\text{ms}$ on interactive UI components.
- Zero spring physics or bouncy easing curves.

### 5.2 Interactive Link & Button States
```css
/* Editorial Text Links */
a.editorial-link {
  color: var(--accent-primary);
  text-decoration: underline;
  text-decoration-thickness: 1px;
  text-underline-offset: 3px;
  transition: color 120ms ease, text-decoration-color 120ms ease;
}
a.editorial-link:hover {
  color: var(--accent-primary-hover);
  text-decoration-color: var(--accent-primary-hover);
}

/* Archival Monograph Button */
.btn-monograph {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  padding: var(--space-2) var(--space-4);
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  letter-spacing: var(--tracking-wider);
  text-transform: uppercase;
  color: var(--text-primary);
  background: var(--bg-surface);
  border: var(--hairline-width) solid var(--border-strong);
  border-radius: var(--radius-sm);
  cursor: pointer;
  transition: all 140ms cubic-bezier(0.16, 1, 0.3, 1);
}
.btn-monograph:hover {
  background: var(--bg-surface-elevated);
  border-color: var(--text-primary);
  transform: translateY(-1px);
}
```

### 5.3 Keyboard Accessibility & Focus
```css
:focus-visible {
  outline: 2px solid var(--accent-primary);
  outline-offset: 2px;
}
```

### 5.4 Reduced Motion Overrides
```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

### 5.5 Mobile Isolation Standards
```css
@media (max-width: 768px) {
  :root {
    --space-14: 4rem;
    --space-16: 5rem;
  }
  
  body {
    overflow-x: hidden;
  }
  
  .monograph-container {
    padding-left: 1rem;
    padding-right: 1rem;
  }
}
```
