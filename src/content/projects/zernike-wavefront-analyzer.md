---
title: "Optical Pupil Scaling & Zernike Wavefront Analyzer"
codeName: "ZERNIKE-OPT"
subtitle: "Modal Aberration Decomposition, Cross-Coupling Matrix Inversion & 2D Phase Topography"
period: "Summer 2025"
category: "Computational Optics"
primaryLanguage: "MATLAB"
techStack: ["MATLAB", "Numerical Linear Algebra", "Fourier Optics", "Wavefront Reconstruction"]
leadMetrics: "Modal cross-coupling verified analytically up to radial order n = 10"
featured: true
hasSimulation: true
simulationType: "zernike"
repoUrl: "https://github.com/SoumitraPharikal"
docsUrl: "https://github.com/SoumitraPharikal"
order: 5
---

## 01. Overview

A computational optics simulation and wavefront sensing framework engineered in **MATLAB** to investigate the behavior, transformation, and modal cross-coupling of **Zernike circle polynomials** across optical systems undergoing pupil scaling, sub-aperture stops, and decentering. Developed during an academic research internship at **IISER Berhampur** under **Dr. Vyas Akondi**, the tool computes wavefront phase error profiles, Strehl ratio degradation, and energy redistribution matrices between optical modes.

---

## 02. Motivation

In optical metrology, adaptive optics, and ophthalmic instruments, optical beams often encounter varying pupil stop diameters. Because standard Zernike circle polynomials form a complete orthogonal basis strictly over a unit disk of fixed radius, changing the physical aperture radius breaks this mathematical orthogonality. Consequently, an optical aberration described by a single high-order radial mode (such as primary spherical aberration $Z_4^0$) in a fully open pupil leaks energy into lower-order modes (such as defocus $Z_2^0$ and piston $Z_0^0$) when stopped down. This project quantifies this modal transformation to prevent severe systematic errors in optical diagnosis and wavefront reconstruction.

---

## 03. Mathematical & Physical Model

### 3.1 Zernike Circle Polynomial Expansion
The optical phase error $W(\rho, \theta)$ over a circular aperture of normalized radius $\rho \le 1$ and azimuthal angle $\theta \in [0, 2\pi)$ is represented as:

$$W(\rho, \theta) = \sum_{n=0}^\infty \sum_{m=-n}^n c_n^m Z_n^m(\rho, \theta)$$

where the orthonormal circle polynomials are given by:

$$Z_n^m(\rho, \theta) = \begin{cases} N_n^m R_n^m(\rho) \cos(m\theta) & \text{for } m \ge 0 \\ N_n^m R_n^{|m|}(\rho) \sin(|m|\theta) & \text{for } m < 0 \end{cases}$$

with radial polynomials:

$$R_n^{|m|}(\rho) = \sum_{k=0}^{\frac{n-|m|}{2}} \frac{(-1)^k (n - k)!}{k! \left(\frac{n+|m|}{2} - k\right)! \left(\frac{n-|m|}{2} - k\right)!} \rho^{n - 2k}$$

### 3.2 Modal Transformation Under Pupil Scaling
When the aperture radius is scaled from $R_1$ to $R_2$ by scaling factor $s = R_2 / R_1 \le 1$, the wavefront over the contracted pupil is expanded in the new basis:

$$W(s\rho_2, \theta) = \sum_{j=1}^J c'_j(s) Z_j(\rho_2, \theta)$$

The transformed expansion vector $\mathbf{c}'(s)$ satisfies the linear matrix relationship:

$$\mathbf{c}'(s) = \mathbf{T}(s) \cdot \mathbf{c}$$

where matrix elements $T_{ij}(s)$ are derived from modal inner products:

$$T_{ij}(s) = \frac{1}{\pi} \int_0^{2\pi} \int_0^1 Z_i(\rho, \theta) Z_j(s\rho, \theta) \rho \, d\rho \, d\theta$$

### 3.3 Phase Variance & The Maréchal Strehl Ratio
Phase variance $\sigma_\Phi^2$ across the exit pupil is computed from the sum of squared non-piston coefficients, directly relating to optical image quality:

$$S \approx \exp(-\sigma_\Phi^2), \quad \sigma_\Phi^2 = \sum_{j=2}^J |c'_j|^2$$

---

## 04. Computational Implementation

- **Recursive Polynomial Generator:** Evaluates high-order radial polynomials using recurrence relations to completely avoid factorial arithmetic overflow up to radial order $n = 10$.
- **Transformation Engine:** Symbolic and numeric computation of the scaling matrix $\mathbf{T}(s)$ for arbitrary scaling factors $s \in (0, 1]$.
- **Fourier Optical Propagation:** Computes the far-field complex Point Spread Function (PSF) via 2D Fast Fourier Transform of the pupil phase function:
  $$\text{PSF}(u, v) = \left| \mathcal{F}\left\{ P(\rho, \theta) \exp\left( i \frac{2\pi}{\lambda} W(\rho, \theta) \right) \right\} \right|^2$$
- **Synthetic Interferogram Generator:** Simulates physical Twyman-Green interferometric fringe lines with tilt reference waves.

---

## 05. Results & Visual Verification

- Formulated and verified exact closed-form algebraic conversion expressions for classic Seidel aberrations:
  - Defocus: $c'_4(s) = s^2 c_4 + \sqrt{3}(s^2 - s^4) c_{11}$
  - Primary Spherical Aberration: $c'_{11}(s) = s^4 c_{11}$
- Mapped 2D false-color wavefront topographies demonstrating progressive phase variance attenuation as aperture stops reduce from $s = 1.0 \to 0.5$.
- Confirmed that neglecting modal transformation leads to over a $40\%$ discrepancy in estimated optical Strehl ratios.

---

## 06. Further Work

- Extension to decentered and elliptical apertures using Lukosz and elliptical polynomial bases.
- Mounting an interactive HTML5 Canvas client-side wavefront generator in web browsers.

---

## 07. Resources

- **GitHub Repository:** [github.com/SoumitraPharikal](https://github.com/SoumitraPharikal)
- **Technical Report:** Available upon academic request from IISER Berhampur optics archive.
- **Interactive Simulation:** Embedded on this case study page.
