// src/data/thumbnails.ts
// Unified Thumbnail Manifest for Research Projects, Computational Pipelines, and Creative Archives

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
  // Flagship Research Projects
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
  'quantum-uncertainty-wavepackets': {
    id: 'quantum-uncertainty-wavepackets',
    src: '/images/thumbnails/quantum-uncertainty-wavepackets.webp',
    alt: 'Gaussian Wave Packet Duality, Fourier Spectral Transform, and Quantum Uncertainty Bound',
    width: 480,
    height: 270,
    fallbackSvg: `<svg viewBox="0 0 480 270" class="teaser-svg" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="var(--bg-surface-sunken)"/>
      <line x1="30" y1="135" x2="450" y2="135" stroke="var(--border-strong)" stroke-width="1.2" opacity="0.5"/>
      <path d="M 40 135 C 140 135, 170 45, 240 45 C 310 45, 340 135, 440 135" fill="none" stroke="var(--accent-primary)" stroke-width="1.8" stroke-dasharray="4 3" opacity="0.85"/>
      <path d="M 40 135 C 140 135, 170 225, 240 225 C 310 225, 340 135, 440 135" fill="none" stroke="var(--accent-primary)" stroke-width="1.8" stroke-dasharray="4 3" opacity="0.85"/>
      <path d="M 50 135 Q 90 135, 120 135 T 150 120 T 175 160 T 200 85 T 220 185 T 240 52 T 260 218 T 280 85 T 305 160 T 330 120 T 360 135 T 430 135" fill="none" stroke="#38BDF8" stroke-width="2.2" stroke-linecap="round"/>
      <circle cx="240" cy="52" r="3.5" fill="var(--accent-primary)"/>
      <circle cx="240" cy="218" r="3.5" fill="var(--accent-primary)"/>
      <line x1="190" y1="238" x2="290" y2="238" stroke="var(--accent-primary)" stroke-width="1.2" opacity="0.8"/>
      <line x1="190" y1="233" x2="190" y2="243" stroke="var(--accent-primary)" stroke-width="1.2" opacity="0.8"/>
      <line x1="290" y1="233" x2="290" y2="243" stroke="var(--accent-primary)" stroke-width="1.2" opacity="0.8"/>
      <text x="240" y="254" fill="var(--accent-primary)" font-family="monospace" font-size="11" text-anchor="middle" font-weight="bold">Δx · Δp ≥ ℏ/2</text>
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

  'kerr-black-hole-geodesics': {
    id: 'kerr-black-hole-geodesics',
    src: '/images/thumbnails/kerr-black-hole-geodesics.webp',
    alt: 'Kerr Spacetime Geodesic Ray Tracing, Photon Orbits and Carter Invariant',
    width: 480,
    height: 270,
    fallbackSvg: `<svg viewBox="0 0 480 270" class="teaser-svg" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="var(--bg-surface-sunken)"/>
      <!-- Static Limit Ergosphere -->
      <ellipse cx="240" cy="135" rx="90" ry="70" fill="none" stroke="var(--accent-amber)" stroke-width="1.4" stroke-dasharray="4 3" opacity="0.85"/>
      <!-- Event Horizon -->
      <circle cx="240" cy="135" r="42" fill="var(--bg-recessed, #070A10)" stroke="var(--border-strong)" stroke-width="1.8"/>
      <!-- Photon Sphere / Critical Orbit -->
      <circle cx="240" cy="135" r="58" fill="none" stroke="var(--accent-primary)" stroke-width="1.2" stroke-dasharray="2 2" opacity="0.6"/>
      <!-- Prograde Frame-Dragged Geodesic -->
      <path d="M 40 185 C 150 185, 200 170, 225 155 C 245 142, 255 120, 240 100 C 220 75, 180 110, 205 150 C 225 180, 310 195, 440 210" fill="none" stroke="#38BDF8" stroke-width="2.2" stroke-linecap="round"/>
      <!-- Deflected Ray -->
      <path d="M 40 85 C 140 85, 185 92, 230 82 C 270 72, 350 45, 440 30" fill="none" stroke="var(--accent-signal)" stroke-width="1.6" stroke-linecap="round" opacity="0.85"/>
      <circle cx="240" cy="135" r="3" fill="var(--accent-amber)"/>
      <text x="240" y="252" fill="var(--accent-primary)" font-family="monospace" font-size="10" text-anchor="middle" font-weight="bold">r+ = M + √(M² - a²) · Q = const</text>
    </svg>`
  },
  'gravitational-wave-parameter-estimation': {
    id: 'gravitational-wave-parameter-estimation',
    src: '/images/thumbnails/gravitational-wave-parameter-estimation.webp',
    alt: 'Gravitational Wave Chirp Waveform, Welch PSD and Matched Filter Peak',
    width: 480,
    height: 270,
    fallbackSvg: `<svg viewBox="0 0 480 270" class="teaser-svg" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="var(--bg-surface-sunken)"/>
      <!-- Time axis zero line -->
      <line x1="30" y1="135" x2="450" y2="135" stroke="var(--border-strong)" stroke-width="1" opacity="0.4"/>
      <!-- Simulated detector noise band -->
      <path d="M 30 135 Q 45 130, 60 137 T 90 133 T 120 136 T 150 132 T 180 138 T 210 133 T 240 137 T 270 132 T 300 138 T 330 132 T 360 137 T 390 133 T 420 136 T 450 135" fill="none" stroke="var(--text-secondary)" stroke-width="0.8" opacity="0.35"/>
      <!-- Inspiral Chirp Waveform -->
      <path d="M 40 135 Q 70 145, 100 135 T 160 135 T 220 135 T 270 120 T 310 155 T 345 105 T 375 170 T 398 85 T 412 190 T 420 70 T 425 150 T 428 135 L 450 135" fill="none" stroke="#38BDF8" stroke-width="2.2" stroke-linecap="round"/>
      <!-- Matched filter SNR peak indicator -->
      <line x1="420" y1="35" x2="420" y2="215" stroke="var(--accent-signal)" stroke-width="1.2" stroke-dasharray="3 3"/>
      <circle cx="420" cy="70" r="4" fill="var(--accent-signal)"/>
      <text x="420" y="26" fill="var(--accent-signal)" font-family="monospace" font-size="10" text-anchor="middle" font-weight="bold">MAX SNR ρ</text>
      <text x="210" y="252" fill="var(--accent-primary)" font-family="monospace" font-size="10" text-anchor="middle" font-weight="bold">⟨d|h⟩ = 4ℜ ∫ [d̃(f)h̃*(f)/Sn(f)] df</text>
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
