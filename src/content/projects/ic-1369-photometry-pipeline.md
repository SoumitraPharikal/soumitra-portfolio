---
title: "Variable Star Photometry & Isochrone Fitting Pipeline for IC 1369"
codeName: "IC1369-PIPE"
subtitle: "Astronomical CCD Reduction, DAOPHOT PSF Photometry & Lomb-Scargle Variability Analysis"
period: "Jun 2026 – Aug 2026"
category: "Observational Astrophysics"
primaryLanguage: "Python"
techStack: ["Python", "Astropy", "photutils", "DAOPHOT", "IRAF", "DS9", "PARSEC Isochrones"]
leadMetrics: "814 CCD frames reduced · 4 candidate variable stars isolated · Period FAP < 10^-6"
featured: true
hasSimulation: false
repoUrl: "https://github.com/SoumitraPharikal"
docsUrl: "https://github.com/SoumitraPharikal"
order: 1
---

## 01. Overview

An automated astronomical data reduction and time-series photometric analysis pipeline engineered in **Python** (`Astropy`, `photutils`, `NumPy`, `SciPy`) and **IRAF/DAOPHOT**. Developed during an observational research internship at the **Indian Centre for Space Physics (ICSP)**, Kolkata under **Dr. Devendra Bisht**, the pipeline reduced and analyzed **814 time-series CCD image frames** of the distant open cluster **IC 1369**. The system performed high-precision point-spread-function (PSF) and aperture photometry, extracted calibrated light curves, executed Lomb-Scargle period searches to characterize **four candidate variable stars**, and fitted Padova/PARSEC isochrones to determine the cluster age and distance.

---

## 02. Motivation

Open clusters serve as celestial benchmarks for stellar evolution models because their constituent stars share common ages, distances, and initial chemical abundances. Detecting variable stars within open clusters constrains stellar pulsation physics and binary star evolutionary pathways. Traditional manual execution of legacy `IRAF` tasks over hundreds of frames is labor-intensive and subjective. This project engineered a modern, automated Python workflow ensuring statistical rigor, repeatable calibration, and automated period finding across multi-epoch CCD archives.

---

## 03. Mathematical & Physical Model

### 3.1 Time-Series Instrumental Photometry & Noise Calibration
Raw CCD image frames $I_{\text{raw}}$ are corrected for electronic bias offsets and flat-field illumination variations:

$$I_{\text{cal}} = \frac{I_{\text{raw}} - \text{Bias} - \text{Dark}_{\text{scaled}}}{\text{Flat}_{\text{norm}}}$$

Net stellar fluxes $F_*$ are evaluated via Gaussian and Moffat PSF fitting, converting to standard magnitude scales:

$$\Delta m = -2.5 \log_{10}\left(\frac{F_*}{F_0}\right)$$

### 3.2 Lomb-Scargle Spectral Period Analysis
For unevenly sampled time-series observation times $t_i$ and magnitudes $m_i$ with uncertainties $\sigma_i$, the Generalized Lomb-Scargle power spectrum $P_{LS}(\omega)$ evaluates periodicity across trial angular frequencies $\omega = 2\pi / P$:

$$P_{LS}(\omega) = \frac{1}{2\sigma^2} \left[ \frac{\left( \sum_i (m_i - \bar{m}) \cos\omega(t_i - \tau) \right)^2}{\sum_i \cos^2\omega(t_i - \tau)} + \frac{\left( \sum_i (m_i - \bar{m}) \sin\omega(t_i - \tau) \right)^2}{\sum_i \sin^2\omega(t_i - \tau)} \right]$$

where phase offset $\tau$ satisfies $\tan(2\omega\tau) = \frac{\sum_i \sin(2\omega t_i)}{\sum_i \cos(2\omega t_i)}$. Candidate periodic signals are evaluated against False Alarm Probabilities (FAP):

$$\text{FAP}(z) = 1 - (1 - e^{-z})^{N_{\text{eff}}}$$

### 3.3 Color-Magnitude Diagram (CMD) & PARSEC Isochrone Fitting
Standard $V$ band magnitudes and $(B-V)$ color indices are matched to Padova/PARSEC stellar evolution models parameterized by age $\tau$, metallicity $Z$, distance modulus $(m-M)_0$, and color excess $E(B-V)$:

$$V - M_V = 5 \log_{10}(d) - 5 + R_V E(B-V)$$

---

## 04. Computational Implementation

- **Data Ingestion:** Batch processing of 814 raw FITS frames with header sanitization and outlier cosmic-ray rejection.
- **PSF Extraction:** `DAOPHOT` profile modeling coupled with automated local sky background estimation using concentric annuli.
- **Periodogram Engine:** Vectorized Lomb-Scargle computation over frequency grids spanning $0.05 \text{ to } 30 \text{ cycles/day (c/d)}$.
- **Phase-Folding Routine:** Phase folding observations $\phi_i = \left(\frac{t_i - t_0}{P}\right) \pmod 1$ and robust spline fitting.

---

## 05. Results & Visual Verification

- Reduced all 814 CCD frames across multi-night observations.
- Isolated and characterized **four candidate variable stars**, confirming periodic pulsation signatures with periods ranging from $0.24\text{ d}$ to $1.48\text{ d}$ and $\text{FAP} < 10^{-6}$.
- Successfully generated clean $V \text{ vs. } (B-V)$ Color-Magnitude Diagrams, constraining the cluster age to $\tau \approx 1.0\text{–}1.2\text{ Gyr}$ via PARSEC isochrone matching.

---

## 06. Further Work

- Extended multi-site observation campaigns to resolve aliasing in period determinations.
- Cross-matching with high-precision Gaia DR3 radial velocities to confirm cluster membership probability.

---

## 07. Resources

- **Repository:** [github.com/SoumitraPharikal](https://github.com/SoumitraPharikal)
- **Technical Report:** Available from ICSP Kolkata research archives.
