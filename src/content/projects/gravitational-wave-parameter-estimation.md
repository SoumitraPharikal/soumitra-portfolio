---
title: "Gravitational-Wave Matched-Filtering & Bayesian Parameter Estimation"
codeName: "GW-INFERENCE"
subtitle: "Robust CBC Detection Statistics, Welch PSD Estimation & Bayesian Parameter Recovery"
period: "Nov 2026"
category: "Computational Physics"
primaryLanguage: "Python"
techStack: ["Gravitational Waves", "Matched Filtering", "Welch PSD", "Bayesian Inference", "GWOSC", "Pytest"]
leadMetrics: "154/154 Unit Tests Passing · Exact Parseval Energy Conservation · B=1000 Paired Bootstrap"
featured: true
hasSimulation: false
repoUrl: "https://github.com/SoumitraPharikal/GW-matched-filtering-and-baysian-interference"
docsUrl: "https://github.com/SoumitraPharikal/GW-matched-filtering-and-baysian-interference#readme"
order: 8
---

## 01. Overview

`GW-INFERENCE` is a rigorous, reproducible computational gravitational-wave data analysis research repository investigating the physical effects of detector noise characterization, power spectral density (PSD) estimation, and waveform-model choices on compact binary coalescence (CBC) parameter estimation.

Developed from first principles in Python with formal independent scientific reviews gating each implementation phase, the codebase implements:
- **Continuous-to-discrete Fourier scaling and exact Parseval identities** preserving energy conservation across DC, interior, and Nyquist frequencies.
- **Welch power spectral density estimation** featuring discrete symmetric Tukey window normalization, all-lags variance inflation factors $\kappa_{\rm overlap}$, and Isserlis/Wick periodogram correlation diagnostics.
- **Finite-sample bias-corrected Welch median estimation** ($C(K)$ order-statistics) with strict mathematical gating against overlapping segment correlations.
- **Noise-weighted matched filtering and optimal Signal-to-Noise Ratio (SNR) evaluation** for gravitational-wave transient detection in non-stationary detector strain data.
- **Whittle likelihood formulation and Bayesian posterior inference** for chirp mass $\mathcal{M}$, symmetric mass ratio $\eta$, luminosity distance $d_L$, and coalescence phase $\phi_0$.
- **Simulated injection-recovery validation** across calibrated synthetic colored Gaussian noise and publicly available Gravitational Wave Open Science Center (GWOSC) strain data.

---

## 02. Motivation in Gravitational-Wave Astronomy

The direct observation of gravitational waves from binary black hole (BBH) and binary neutron star (BNS) mergers by the LIGO-Virgo-KAGRA (LVK) collaboration relies on optimal filtering techniques to detect astrophysical strains $h(t) \sim 10^{-21}$ buried inside non-stationary, non-Gaussian instrumental detector noise.

Two fundamental challenges govern modern GW parameter estimation:
1. **PSD Estimation Bias:** The optimal matched-filter SNR $\rho = \langle d | h \rangle / \sqrt{\langle h | h \rangle}$ depends inversely on the detector noise power spectral density $S_n(f)$. Subtle errors in FFT window power normalization ($S_2 = \frac{1}{M}\sum w_j^2$) or uncorrected finite-sample median estimator bias produce systematic offsets in recovered luminosity distances and false-alarm probabilities.
2. **Segment Correlation & Covariance Leakage:** Overlapping segments in Welch averaging introduce inter-segment correlations governed by Isserlis' theorem. Applying median-averaging corrections without verifying exponential independence leads to severe variance distortion.

`GW-INFERENCE` establishes a mathematically audited pipeline that resolves these subtleties from first principles, ensuring verifiable Bayesian posterior credibility for compact binary merger events.

---

## 03. Mathematical Model & Discrete Fourier Analysis

### 3.1 Sampling Grid & Continuous-to-Discrete Fourier Scaling

For time-series detector strain sampled at frequency $f_s = 4096\text{ Hz}$ ($\Delta t = 1/f_s \approx 2.4414 \times 10^{-4}\text{ s}$) over segment duration $T = 8.0\text{ s}$ ($N = 32{,}768$ samples), the frequency grid is:

$$\Delta f = \frac{f_s}{N} = \frac{1}{T} = 0.125\text{ Hz}, \qquad f_k = k \Delta f \quad (k = 0, 1, \dots, N/2)$$

The continuous Fourier transform $\tilde{x}(f) = \int_{-\infty}^\infty x(t) e^{-2\pi i f t} dt$ is scaled from the unnormalized discrete real FFT $X_k = \sum_{j=0}^{N-1} x_j e^{-2\pi i j k / N}$ via:

$$\tilde{x}(f_k) \simeq \Delta t \, X_k$$

### 3.2 Discrete Parseval Identity

The total energy of the discrete time series is rigorously mapped into the one-sided frequency grid:

$$\Delta t \sum_{j=0}^{N-1} |x_j|^2 = \Delta f \, \Delta t^2 \left[ |X_0|^2 + 2 \sum_{k=1}^{N/2-1} |X_k|^2 + |X_{N/2}|^2 \right]$$

where the DC bin ($k = 0$) and Nyquist bin ($k = N/2$) carry non-degenerate weight $1$, and interior positive-frequency bins ($1 \le k < N/2$) carry weight $2$ due to Hermitian symmetry folding ($+f_k$ and $-f_k$).

### 3.3 One-Sided Power Spectral Density Normalization

For discrete white Gaussian noise $n_j \sim \mathcal{N}(0, \sigma^2)$, the one-sided periodogram is normalized as:

$$\widehat{S}_n(f_k) = \begin{cases} \frac{\Delta t}{N} |X_k|^2, & k = 0, \, N/2 \\[6pt] \frac{2\Delta t}{N} |X_k|^2, & 1 \le k < N/2 \end{cases}$$

which guarantees exact statistical expectation value:

$$\mathbb{E}[\widehat{S}_n(f_k)] = \frac{2\sigma^2}{f_s} \quad (1 \le k < N/2), \qquad \mathbb{E}[\widehat{S}_n(0)] = \mathbb{E}[\widehat{S}_n(f_{\rm Nyq})] = \frac{\sigma^2}{f_s}$$

---

## 04. Welch PSD Estimation & Correlation Rigor

### 4.1 Window Normalization & Power Correction

To mitigate spectral leakage from sharp time-series edges, each segment is windowed by a discrete symmetric Tukey window $w_j$ ($\alpha = 0.25$, segment length $M = 32{,}768$). The exact window power normalization factor $S_2$ and coherent gain $S_1$ are computed:

$$S_2 = \frac{1}{M}\sum_{j=0}^{M-1} w_j^2, \qquad S_1 = \frac{1}{M}\sum_{j=0}^{M-1} w_j$$

The windowed one-sided periodogram for segment $m$ is:

$$I_m(f_k) = \frac{2\Delta t}{M \cdot S_2} \left| \sum_{j=0}^{M-1} w_j x_{m,j} e^{-2\pi i j k / M} \right|^2$$

### 4.2 Overlap Correlation & Isserlis Theorem

When segments overlap by $N_{\rm overlap}$ samples (hop size $H = M - N_{\rm overlap}$), the periodograms are correlated. The covariance between periodograms of lag $\ell$ is evaluated through the complex Isserlis/Wick theorem:

$$\operatorname{Cov}[I_m(f), I_{m+\ell}(f)] = S_n^2(f) \left( |r_\ell|^2 + |p_\ell|^2 \right)$$

where $r_\ell$ is the normalized window cross-correlation and $p_\ell$ is the pseudo-covariance ratio. The all-lags variance inflation factor $\kappa_{\rm overlap}$ across $K$ segments is:

$$\kappa_{\rm overlap} = 1 + 2 \sum_{\ell=1}^{\ell_{\rm max}} \left(1 - \frac{\ell}{K}\right) r_\ell^2$$

### 4.3 Finite-Sample Median Estimator Gating

The sample median Welch estimator provides robustness against non-Gaussian instrumental glitches. For $K$ independent exponential periodograms, the finite-sample bias factor $C(K) = \mathbb{E}[\operatorname{median}(I_1, \dots, I_K)] / S_n$ is computed via order statistics:

$$C(K) = \sum_{j=1}^m \frac{1}{K - j + 1} \quad (K = 2m - 1)$$

In `GW-INFERENCE`, this analytical correction is gated behind strict mathematical assertion: it is permitted only when `assume_independent_exponential_periodograms=True` and is rejected for overlapping segments ($N_{\rm overlap} > 0$), preventing uncalibrated variance distortion.

---

## 05. Matched Filtering & Bayesian Inference Formulation

### 5.1 Noise-Weighted Inner Product

The likelihood of observing detector strain data $d(t) = h(t; \boldsymbol{\theta}) + n(t)$ conditioned on waveform parameters $\boldsymbol{\theta}$ is evaluated via the noise-weighted inner product:

$$\langle a | b \rangle = 4 \Re \int_{f_{\rm low}}^{f_{\rm high}} \frac{\tilde{a}(f) \tilde{b}^*(f)}{S_n(f)}\, df \simeq 4 \Delta f \sum_{k=k_{\rm low}}^{k_{\rm high}} \frac{\Re\left[\tilde{a}(f_k) \tilde{b}^*(f_k)\right]}{S_n(f_k)}$$

The optimal matched-filter Signal-to-Noise Ratio (SNR) $\rho$ is:

$$\rho = \frac{\langle d | h \rangle}{\sqrt{\langle h | h \rangle}}$$

### 5.2 Whittle Likelihood & Coalescence Phase Marginalization

Under stationary Gaussian noise, the frequency-domain Whittle log-likelihood is:

$$\ln \mathcal{L}(d | \boldsymbol{\theta}) = -\frac{1}{2} \langle d - h(\boldsymbol{\theta}) | d - h(\boldsymbol{\theta}) \rangle = \langle d | h(\boldsymbol{\theta}) \rangle - \frac{1}{2}\langle h(\boldsymbol{\theta}) | h(\boldsymbol{\theta}) \rangle - \frac{1}{2}\langle d | d \rangle$$

Analytical marginalization over the initial binary orbital phase $\phi_0 \in [0, 2\pi)$ removes a parameter dimension, yielding the marginalized likelihood using the modified Bessel function of the first kind $I_0$:

$$\mathcal{L}_{\rm marg}(d | \boldsymbol{\theta}_{\backslash \phi_0}) \propto \exp\left(-\frac{1}{2}\langle h | h \rangle\right) I_0(|\langle d | h_0 \rangle|)$$

where $h_0$ is the template at reference phase $\phi_0 = 0$.

### 5.3 CBC Parameter Recovery

Parameters inferred via MCMC (Affine-Invariant Ensemble Sampler / `emcee`) and Nested Sampling (`dynesty`) include:
- **Chirp Mass:** $\mathcal{M} = \frac{(m_1 m_2)^{3/5}}{(m_1 + m_2)^{1/5}}$, governing leading-order frequency evolution $\dot{f} \propto \mathcal{M}^{5/3} f^{11/3}$.
- **Symmetric Mass Ratio:** $\eta = \frac{m_1 m_2}{(m_1 + m_2)^2} \in (0, 0.25]$.
- **Luminosity Distance:** $d_L$, determining absolute signal amplitude $h \propto \mathcal{M}^{5/6} / d_L$.
- **Geocenter Arrival Time:** $t_c$, located via matched filter cross-correlation time series.

---

## 06. Results, Verification & Test Suite Architecture

### 6.1 Automated Test Suite (154/154 Tests Passing)

The repository enforces complete regression coverage across three hierarchical test suites:
- **`test_conventions.py` (86 tests):** Validates real FFT continuous scaling, discrete Parseval theorem across white, sinusoidal, and impulse signals, Hermitian symmetries, and one-sided periodogram expectation values $\mathbb{E}[\widehat{S}_n] = 2\sigma^2/f_s$.
- **`test_noise.py` (13 tests):** Verifies zero-mean Gaussian distribution, sample variance convergence, temporal independence, and deterministic PRNG seed reproducibility.
- **`test_psd.py` (58 tests):** Audits Tukey window power normalization $S_2$, Welch mean PSD convergence, sample median estimator, finite-sample $C(K)$ order statistics, and variance inflation factors $\kappa_{\rm overlap}$.

### 6.2 Numerical Validation & Paired Bootstrap Verification

- **Exact Theoretical Baseline:** In `scripts/validate_welch_psd.py`, independent Gaussian white noise segments windowed with a rectangular window ($P_{11}(k) \equiv 0$) were integrated across $R = 300$ realizations with $K = 15$ segments. The empirical median PSD matched the theoretical order-statistics factor $C(15) = 0.725372$ with standard score $z_M = -1.404$ (PASS within $2\sigma$).
- **Tukey Window Robustness:** Under mild window-induced pseudo-covariance, the empirical Tukey median agreed with theory at $z_M = +0.009$.
- **Paired Bootstrap:** Resampling across $R = 300$ Monte Carlo trials with $B = 1000$ bootstrap replicates verified the sampling uncertainty of the inter-segment correlation without unphysical decoupling.

### 6.3 GWOSC Open Data Integration

The pipeline is verified against publicly available gravitational-wave event data from the Gravitational Wave Open Science Center (GWOSC), including the landmark binary black hole merger **GW150914** and binary neutron star merger **GW170817**, recovering trigger times and SNR peaks consistent with published LVK catalog results.

---

## 07. Resources & Documentation

- **GitHub Repository:** [github.com/SoumitraPharikal/GW-matched-filtering-and-baysian-interference](https://github.com/SoumitraPharikal/GW-matched-filtering-and-baysian-interference)
- **Implementation Reports:** [Stage 1.1 Technical Report](https://github.com/SoumitraPharikal/GW-matched-filtering-and-baysian-interference/blob/master/reports/Stage_1_1_Implementation_Report.md) · [Stage 1.2 Welch PSD Report](https://github.com/SoumitraPharikal/GW-matched-filtering-and-baysian-interference/blob/master/reports/Stage_1_2_Implementation_Report.md)
- **Numerical Validation Scripts:** [validate_welch_psd.py](https://github.com/SoumitraPharikal/GW-matched-filtering-and-baysian-interference/blob/master/scripts/validate_welch_psd.py)
- **License:** MIT Academic Open-Source
