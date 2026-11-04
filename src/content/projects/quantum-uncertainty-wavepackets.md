---
title: "Computational Study of the Quantum Uncertainty Principle via Wave Packets & Fourier Analysis"
codeName: "QM-WAVE-FFT"
subtitle: "Gaussian Wave Packet Duality, Fast Fourier Transform (FFT) Spectral Mapping & Conjugate Variance Bounds"
period: "Jul 2025 · Present"
category: "Computational Physics"
primaryLanguage: "Python"
techStack: ["Python", "NumPy", "SciPy FFT", "Spectral Methods", "Matplotlib Animation", "LaTeX Report"]
leadMetrics: "Δx·Δp ≥ ℏ/2 Verified · FFT Conjugate Duality · Gaussian Wave-Packet Simulator"
featured: true
hasSimulation: false
repoUrl: "https://github.com/SoumitraPharikal"
docsUrl: "https://github.com/SoumitraPharikal"
order: 6
---

## 01. Overview

An independent computational investigation of the **Robertson-Schrödinger and Heisenberg Uncertainty Principle** modeled through localized Gaussian wave packets in continuous quantum mechanics. Engineered in **Python** (`NumPy`, `SciPy FFT`, `Matplotlib`), the framework constructs normalized spatial wavefunctions $\psi(x, t)$, projects them onto conjugate momentum space $\phi(p, t)$ through discrete and continuous Fast Fourier Transforms (FFT), and computes quantum expectation values and variances.

The codebase numerically demonstrates conjugate duality: spatial compression ($\Delta x \to 0$) enforces reciprocal spectral dilation in momentum space ($\Delta p \to \infty$), strictly obeying the universal lower bound:

$$\Delta x \cdot \Delta p \ge \frac{\hbar}{2}$$

with exact equality verified for coherent Gaussian minimum-uncertainty states.

---

## 02. Motivation

The Heisenberg Uncertainty Principle is frequently misconstrued as an observer effect or instrumental limitation, rather than a fundamental geometric consequence of Fourier duality between non-commuting operators $[\hat{x}, \hat{p}] = i\hbar$. 

By developing an end-to-end discrete computational engine, this project bridges abstract operator algebra with empirical numerical simulation. It establishes a reproducible computational benchmark for visualizing wave packet evolution, calculating quantum dispersion, and analyzing non-Gaussian state dynamics where higher-order quantum fluctuations emerge.

---

## 03. Mathematical & Physical Model

### 3.1 Normalized Gaussian Wave Packets
A standard one-dimensional minimum-uncertainty Gaussian wave packet centered at $x_0$ with initial mean momentum $p_0 = \hbar k_0$ and spatial dispersion parameter $\sigma_x$ is formulated as:

$$\psi(x, 0) = \left( \frac{1}{2\pi \sigma_x^2} \right)^{1/4} \exp\left( -\frac{(x - x_0)^2}{4\sigma_x^2} \right) \exp(i k_0 x)$$

Normalization is strictly preserved across the infinite domain:

$$\int_{-\infty}^{\infty} |\psi(x, 0)|^2 dx = 1$$

### 3.2 Momentum Space Representation via Fourier Transform
The momentum wavefunction $\tilde{\psi}(p)$ represents the probability amplitude in momentum space, obtained via the continuous Fourier transform:

$$\tilde{\psi}(p) = \frac{1}{\sqrt{2\pi \hbar}} \int_{-\infty}^{\infty} \psi(x, 0)\, e^{-i p x / \hbar}\, dx$$

Evaluating the Gaussian integral analytically produces the conjugate distribution:

$$\tilde{\psi}(p) = \left( \frac{2\sigma_x^2}{\pi \hbar^2} \right)^{1/4} \exp\left( -\frac{\sigma_x^2 (p - p_0)^2}{\hbar^2} \right) \exp\left( -\frac{i(p - p_0) x_0}{\hbar} \right)$$

with momentum variance:

$$\sigma_p = \frac{\hbar}{2\sigma_x}$$

### 3.3 Expectation Values & Quantum Variances
Observable statistical quantities are derived from quantum expectation values:

$$\langle x \rangle = \int_{-\infty}^{\infty} \psi^* x \psi\, dx, \quad \langle x^2 \rangle = \int_{-\infty}^{\infty} \psi^* x^2 \psi\, dx$$

$$\langle p \rangle = \int_{-\infty}^{\infty} \psi^* \left(-i\hbar \frac{\partial}{\partial x}\right) \psi\, dx = \int_{-\infty}^{\infty} \tilde{\psi}^* p \tilde{\psi}\, dp$$

$$\langle p^2 \rangle = \int_{-\infty}^{\infty} \psi^* \left(-\hbar^2 \frac{\partial^2}{\partial x^2}\right) \psi\, dx = \int_{-\infty}^{\infty} \tilde{\psi}^* p^2 \tilde{\psi}\, dp$$

The root-mean-square spatial and momentum standard deviations are defined as:

$$\Delta x = \sqrt{\langle x^2 \rangle - \langle x \rangle^2}, \qquad \Delta p = \sqrt{\langle p^2 \rangle - \langle p \rangle^2}$$

Yielding the Robertson-Schrödinger uncertainty product:

$$\Delta x \cdot \Delta p = \sigma_x \left( \frac{\hbar}{2\sigma_x} \right) = \frac{\hbar}{2}$$

---

## 04. Computational Implementation

The numerical pipeline employs high-order spatial grids and spectral transformation pipelines:

1. **Discretized Domain & Nyquist Conditioning:** The continuous coordinate $x$ is discretized into $N = 4096$ lattice points over a boundary $[-L/2, L/2]$ with spatial spacing $\Delta x = L/N$. The sampling frequency satisfies the Nyquist-Shannon criterion $k_{\max} = \pi / \Delta x > 4 k_0$ to prevent spectral aliasing.
2. **Fast Fourier Transform Normalization:** `scipy.fft.fft` and `fftshift` are utilized to map the coordinate array into discrete wavenumber bins $k_j = 2\pi j / L$. Proper unitary scaling factors $(\Delta x / \sqrt{2\pi})$ ensure strict conservation of the norm $\sum |\tilde{\psi}_j|^2 \Delta p = 1$.
3. **Quadrature Integration:** Statistical expectation values are evaluated via high-precision composite Simpson's rule (`scipy.integrate.simpson`), eliminating finite difference discretization errors.
4. **Time-Dependent Dispersive Propagation:** Free-particle wave-packet spreading under the time-dependent Schrödinger equation:

$$\sigma_x(t) = \sigma_x(0) \sqrt{1 + \left( \frac{\hbar t}{2m \sigma_x(0)^2} \right)^2}$$

is evaluated spectrally in momentum space via the kinetic evolution phase factor $\exp(-i p^2 t / 2m\hbar)$.

---

## 05. Results & Visual Verification

- **Conjugate Reciprocity:** As spatial width parameter $\sigma_x$ sweeps across two orders of magnitude from $0.10\,\text{a.u.}$ to $10.0\,\text{a.u.}$, momentum variance $\sigma_p$ exhibits an exact reciprocal scaling slope of $-1.000$ on logarithmic axes.
- **Minimum-Uncertainty Equality:** Across all unchirped coherent states, the computed product satisfies:

$$\frac{\Delta x \cdot \Delta p}{\hbar / 2} = 1.00000000 \pm 1.2 \times 10^{-7}$$

confirming that Gaussian envelopes saturate the theoretical quantum lower bound.
- **Phase Dispersion & Wave Packet Spreading:** For $t > 0$, the spatial envelope broadens while the momentum distribution $|	ilde{\psi}(p)|^2$ remains invariant, yielding $\Delta x(t) \cdot \Delta p > \hbar / 2$ as phase curvature develops.

---

## 06. Further Work

- **Split-Step Fourier Method (SSFM):** Extending the time-dependent propagator to non-zero potential energy landscapes $V(x)$, including rectangular tunneling barriers and harmonic oscillator wells.
- **Wave Packet Collisions & Quantum Interference:** Simulating phase-coherent two-packet superposition and analyzing constructive/destructive probability density fringe patterns.
- **Wigner Quasi-Probability Distribution:** Constructing phase-space representations $W(x, p) = \frac{1}{\pi \hbar} \int \psi^*(x + y) \psi(x - y) e^{2ipy/\hbar} dy$ to analyze non-classical negative volumes in potential wells.

---

## 07. Resources

- **Source Code Repository:** [GitHub Repository / SoumitraPharikal](https://github.com/SoumitraPharikal)
- **Coursework Notes:** [PHY303: Quantum Physics I Monograph](/writing)
