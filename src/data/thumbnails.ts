// src/data/thumbnails.ts
// Unified Thumbnail Manifest for Academic Monographs, Computational Projects, and Creative Archives

export interface ThumbnailItem {
  id: string;
  src: string;          // Primary WebP image path in public/
  avifSrc?: string;      // Next-gen AVIF path if available
  alt: string;
  width: number;
  height: number;
  fallbackSvg: string;   // Clean inline/embedded scientific SVG diagram
}

export const thumbnailManifest: Record<string, ThumbnailItem> = {
  // Monographs
  'monograph-01-ic1369': {
    id: 'monograph-01-ic1369',
    src: '/images/thumbnails/monograph-01-ic1369.webp',
    avifSrc: '/images/thumbnails/monograph-01-ic1369.avif',
    alt: 'IC 1369 Stellar Photometry & Period Folding Light Curve',
    width: 480,
    height: 270,
    fallbackSvg: `<svg viewBox="0 0 480 270" class="teaser-svg" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="monoGrad1" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stop-color="#38BDF8" stop-opacity="0.8"/>
          <stop offset="100%" stop-color="#818CF8" stop-opacity="0.8"/>
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="var(--bg-surface-sunken)"/>
      <path d="M 40 135 Q 150 40, 240 135 T 440 135" fill="none" stroke="url(#monoGrad1)" stroke-width="2.5" stroke-linecap="round"/>
      <circle cx="150" cy="88" r="4.5" fill="var(--accent-amber)"/>
      <circle cx="240" cy="135" r="4.5" fill="var(--accent-amber)"/>
      <circle cx="340" cy="182" r="4.5" fill="var(--accent-amber)"/>
      <circle cx="70" cy="115" r="2" fill="var(--text-secondary)" opacity="0.6"/>
      <circle cx="110" cy="65" r="2" fill="var(--text-secondary)" opacity="0.6"/>
      <circle cx="190" cy="95" r="2" fill="var(--text-secondary)" opacity="0.6"/>
      <circle cx="290" cy="155" r="2" fill="var(--text-secondary)" opacity="0.6"/>
      <circle cx="380" cy="175" r="2" fill="var(--text-secondary)" opacity="0.6"/>
      <circle cx="410" cy="140" r="2" fill="var(--text-secondary)" opacity="0.6"/>
    </svg>`
  },
  'monograph-02-radon-ct': {
    id: 'monograph-02-radon-ct',
    src: '/images/thumbnails/monograph-02-radon-ct.webp',
    avifSrc: '/images/thumbnails/monograph-02-radon-ct.avif',
    alt: 'Tomographic CT Reconstruction and Sinogram Wavefront Traces',
    width: 480,
    height: 270,
    fallbackSvg: `<svg viewBox="0 0 480 270" class="teaser-svg" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="var(--bg-surface-sunken)"/>
      <circle cx="140" cy="135" r="65" fill="none" stroke="var(--border-strong)" stroke-width="1.5"/>
      <ellipse cx="140" cy="135" rx="42" ry="50" fill="none" stroke="var(--accent-primary)" stroke-width="1.8"/>
      <circle cx="155" cy="145" r="12" fill="var(--accent-signal)" opacity="0.85"/>
      <path d="M 270 135 Q 320 70, 370 135 T 450 135" fill="none" stroke="var(--accent-primary)" stroke-width="2.2"/>
      <path d="M 270 115 Q 320 170, 370 115 T 450 115" fill="none" stroke="var(--accent-signal)" stroke-width="1.8" stroke-dasharray="4 3"/>
    </svg>`
  },

  // Projects
  'ic-1369-photometry-pipeline': {
    id: 'ic-1369-photometry-pipeline',
    src: '/images/thumbnails/ic-1369-photometry-pipeline.webp',
    alt: 'IC 1369 Aperture Photometry and Period Folding Pipeline',
    width: 480,
    height: 270,
    fallbackSvg: `<svg viewBox="0 0 480 270" class="teaser-svg" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="var(--bg-surface-sunken)"/>
      <path d="M 20 135 Q 120 40, 240 135 T 460 135" fill="none" stroke="var(--accent-primary)" stroke-width="2.2" />
      <circle cx="120" cy="85" r="4" fill="var(--accent-amber)" />
      <circle cx="240" cy="135" r="4" fill="var(--accent-amber)" />
      <circle cx="360" cy="185" r="4" fill="var(--accent-amber)" />
      <circle cx="60" cy="110" r="2" fill="var(--text-secondary)" opacity="0.6" />
      <circle cx="180" cy="95" r="2" fill="var(--text-secondary)" opacity="0.6" />
      <circle cx="300" cy="155" r="2" fill="var(--text-secondary)" opacity="0.6" />
      <circle cx="420" cy="160" r="2" fill="var(--text-secondary)" opacity="0.6" />
    </svg>`
  },
  'ct-imaging-tumour-detection': {
    id: 'ct-imaging-tumour-detection',
    src: '/images/thumbnails/ct-imaging-tumour-detection.webp',
    alt: 'Simulated CT Imaging and Filtered Backprojection Architecture',
    width: 480,
    height: 270,
    fallbackSvg: `<svg viewBox="0 0 480 270" class="teaser-svg" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="var(--bg-surface-sunken)"/>
      <circle cx="130" cy="135" r="60" fill="none" stroke="var(--border-strong)" stroke-width="1.5" />
      <ellipse cx="130" cy="135" rx="38" ry="46" fill="none" stroke="var(--accent-primary)" stroke-width="1.6" />
      <circle cx="145" cy="145" r="10" fill="var(--accent-signal)" />
      <path d="M 260 135 Q 315 80, 370 135 T 460 135" fill="none" stroke="var(--accent-primary)" stroke-width="2" />
      <path d="M 260 115 Q 315 170, 370 115 T 460 115" fill="none" stroke="var(--accent-signal)" stroke-width="1.8" stroke-dasharray="4 3" />
    </svg>`
  },
  'monte-carlo-stochastic-decay': {
    id: 'monte-carlo-stochastic-decay',
    src: '/images/thumbnails/monte-carlo-stochastic-decay.webp',
    alt: 'Monte Carlo Stochastic Lattice Kinetics and Decay Curves',
    width: 480,
    height: 270,
    fallbackSvg: `<svg viewBox="0 0 480 270" class="teaser-svg" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="var(--bg-surface-sunken)"/>
      <path d="M 30 50 Q 180 140, 450 210" fill="none" stroke="var(--accent-amber)" stroke-width="2.5" />
      <path d="M 30 50 Q 120 70, 210 130 T 360 185 T 450 210" fill="none" stroke="var(--accent-primary)" stroke-width="1.6" opacity="0.65" />
      <path d="M 30 50 Q 140 85, 250 155 T 390 195 T 450 210" fill="none" stroke="#10B981" stroke-width="1.6" opacity="0.65" />
    </svg>`
  },
  'zernike-wavefront-analyzer': {
    id: 'zernike-wavefront-analyzer',
    src: '/images/thumbnails/zernike-wavefront-analyzer.webp',
    alt: 'Zernike Optical Wavefront Aberrations and Phase Maps',
    width: 480,
    height: 270,
    fallbackSvg: `<svg viewBox="0 0 480 270" class="teaser-svg" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="var(--bg-surface-sunken)"/>
      <circle cx="240" cy="135" r="75" fill="none" stroke="var(--border-strong)" stroke-width="1.5" />
      <circle cx="240" cy="135" r="50" fill="none" stroke="#A855F7" stroke-width="1.8" stroke-dasharray="5 4" />
      <circle cx="240" cy="135" r="25" fill="rgba(168, 85, 247, 0.35)" />
      <line x1="150" y1="135" x2="330" y2="135" stroke="#A855F7" stroke-width="1.2" opacity="0.7" />
      <line x1="240" y1="45" x2="240" y2="225" stroke="#A855F7" stroke-width="1.2" opacity="0.7" />
    </svg>`
  },
  'astra-rust-toolkit': {
    id: 'astra-rust-toolkit',
    src: '/images/thumbnails/astra-rust-toolkit.webp',
    alt: 'ASTRA Rust Astrophysics Pipeline Core and Coordinate Geometry',
    width: 480,
    height: 270,
    fallbackSvg: `<svg viewBox="0 0 480 270" class="teaser-svg" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="var(--bg-surface-sunken)"/>
      <polygon points="240,55 330,195 150,195" fill="none" stroke="#F59E0B" stroke-width="2" />
      <circle cx="240" cy="135" r="45" fill="none" stroke="var(--accent-primary)" stroke-width="1.5" stroke-dasharray="4 4" />
      <circle cx="240" cy="55" r="5" fill="#F59E0B" />
      <circle cx="330" cy="195" r="5" fill="#F59E0B" />
      <circle cx="150" cy="195" r="5" fill="#F59E0B" />
    </svg>`
  },

  // Creative & Visual Archive
  'sketch-gallery': {
    id: 'sketch-gallery',
    src: '/images/thumbnails/sketch-gallery.webp',
    alt: 'Graphite and Pencil Field Sketches of Optics and Architecture',
    width: 480,
    height: 270,
    fallbackSvg: `<svg viewBox="0 0 480 270" class="teaser-svg" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="var(--bg-surface-sunken)"/>
      <path d="M 60 200 L 160 80 L 260 170 L 340 100 L 420 200 Z" fill="none" stroke="var(--text-secondary)" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
      <line x1="60" y1="210" x2="420" y2="210" stroke="var(--border-strong)" stroke-width="1.5"/>
      <circle cx="340" cy="90" r="18" fill="none" stroke="var(--accent-amber)" stroke-width="1.5" stroke-dasharray="3 3"/>
    </svg>`
  }
};
