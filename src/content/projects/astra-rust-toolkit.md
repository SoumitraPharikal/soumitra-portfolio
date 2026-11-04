---
title: "ASTRA: Astrodynamics Simulation Toolkit in Rust"
codeName: "ASTRA-RS"
subtitle: "Deterministic N-Body Orbital Mechanics & Perturbation Engine"
period: "Autumn 2025 · Present"
category: "Astrodynamics & Simulation"
primaryLanguage: "Rust"
techStack: ["Rust", "SIMD", "Symplectic Integrators", "SOFA", "Typestates"]
leadMetrics: "Relative energy error ΔE/E₀ < 10⁻¹² over 10⁶ steps (Yoshida 6th-order)"
featured: true
hasSimulation: true
simulationType: "orbit"
repoUrl: "https://github.com/SoumitraPharikal/astra-rs"
docsUrl: "https://github.com/SoumitraPharikal/astra-rs"
order: 1
---

## 01. Overview

`ASTRA` is an open-source, deterministic astrodynamics and orbital mechanics simulation engine written entirely in **Rust** (`edition = "2021"`). The engine delivers memory-safe, zero-cost abstraction numerical integration for $N$-body gravitational systems, perturbation environments, and state-vector propagation across international astronomical reference frames (ICRF, GCRF, TEME). 

Initiated development in **Autumn 2025**, the development focus centers on extreme numerical stability, cache-coherent memory layouts, and compile-time unit verification.

---

## 02. Motivation

Astrodynamics and mission trajectory design traditionally confront an unsatisfactory duality:
- **High-level environments (Python / MATLAB):** Excellent for interactive exploration, but prohibitively slow when simulating billions of ephemeris steps or running Monte Carlo dispersion analysis.
- **Legacy architectures (C / Fortran):** Blazing throughput, but susceptible to memory corruption, manual buffer bounds errors, and lacking modern compile-time dimensional analysis (which historically led to high-profile spacecraft navigation failures).

`ASTRA` solves this trade-off by combining Rust's strict ownership model, SIMD auto-vectorization, and typestate-enforced physical quantities, guaranteeing that unit mismatches (such as evaluating state vectors across incompatible frames) are caught at compile time with zero runtime penalty.

---

## 03. Mathematical & Physical Model

### 3.1 Gravitational Equation of Motion
The core dynamics solver models the general Newtonian $N$-body acceleration for body $i$ influenced by $N-1$ point masses and perturbation potentials:

$$\ddot{\mathbf{r}}_i = - \sum_{j \neq i}^N \frac{G m_j}{\|\mathbf{r}_i - \mathbf{r}_j\|^3} (\mathbf{r}_i - \mathbf{r}_j) + \mathbf{a}_{\text{perturbation}}$$

### 3.2 Non-Spherical Oblateness Perturbation ($J_2$)
For bodies orbiting oblate primaries (such as Earth, Mars, or giant planets), the second zonal harmonic $J_2$ dominates the gravitational potential expansion, evaluated with generic primary equatorial radius $R_{\text{eq}}$ (where $R_{\text{eq}} = R_\oplus \approx 6378.137\text{ km}$ for Earth orbital propagation benchmarks):

$$\mathbf{a}_{J_2} = -\frac{3}{2} J_2 \frac{\mu R_{\text{eq}}^2}{r^4} \left[ \left(1 - 5 \frac{z^2}{r^2}\right) \frac{\mathbf{r}}{r} + 2 \frac{z}{r} \hat{\mathbf{k}} \right]$$

This perturbation induces secular nodal regression and argument of perigee precession:

$$\dot{\Omega}_{J_2} = -\frac{3}{2} n J_2 \left(\frac{R_{\text{eq}}}{p}\right)^2 \cos i, \quad \dot{\omega}_{J_2} = \frac{3}{4} n J_2 \left(\frac{R_{\text{eq}}}{p}\right)^2 (5\cos^2 i - 1)$$

### 3.3 Symplectic & Adaptive Integration
To conserve phase space volume and Hamiltonian energy over long-duration orbital propagation, `ASTRA` implements 4th- and 6th-order Yoshida symplectic integrators preserving relative energy error to $\Delta E / E_0 < 10^{-12}$ across $10^6$ integration epochs on conservative systems. For non-conservative orbital trajectories and atmospheric drag, `ASTRA` couples adaptive 8th-order Dormand-Prince (DOP853) and SGP4 perturbation models:

$$\epsilon = \|\mathbf{y}_{n+1}^{(8)} - \mathbf{y}_{n+1}^{(5)}\|_\infty, \quad h_{\text{new}} = h_{\text{opt}} \cdot \left(\frac{\text{TOL}}{\epsilon}\right)^{1/8}$$

---

## 04. Computational Implementation

- **Strict Safety Directive:** `#![deny(unsafe_code)]` enforced across all crates.
- **Crate Architecture:**
  - `astra-core`: State vector primitives, Cartesian vectors $[\mathbf{r}, \mathbf{v}]^T$, Classical Keplerian Orbital Elements $[a, e, i, \Omega, \omega, \nu]$, and Equinoctial elements for low-eccentricity and zero-inclination singularity evasion.
  - `astra-propagator`: Numerical integration loop using Struct-of-Arrays (SoA) layout for auto-vectorization across x86-64 AVX2 and ARM NEON registers.
  - `astra-coords`: Precession-nutation models and epoch transformations (Julian Ephemeris Date, TDB, UTC).
- **Compile-Time Unit Checking:** Type-level dimensional wrappers ensure distance, velocity, and gravitational parameters are statically checked at zero runtime cost.

---

## 05. Results & Visual Verification

- **JPL Ephemeris Benchmarks:** Propagated outer planet trajectories against NASA JPL DE440 ephemerides, achieving relative orbital energy conservation errors $\Delta E / E < 10^{-12}$ across $10^6$ integration epochs.
- **LEO Nodal Precession:** Numerically validated against analytical Lagrange planetary equations for sun-synchronous orbits ($i \approx 98.2^\circ$).
- **Throughput Profile:** Achieved $4.2 \times 10^7$ state vector evaluations per second per thread on standard modern x86-64 silicon.

---

## 06. Further Work

- **Relativistic Post-Newtonian (1PN & 2.5PN) Terms:**
  $$\mathbf{a}_{\text{1PN}} = \frac{G M}{c^2 r^3} \left[ \left( 4 \frac{G M}{r} - v^2 \right) \mathbf{r} + 4 (\mathbf{r} \cdot \mathbf{v}) \mathbf{v} \right]$$
- **WebAssembly Compilation:** Building the Wasm target pipeline for native, real-time in-browser orbit propagation widgets.

---

## 07. Resources

- **GitHub Repository:** [github.com/SoumitraPharikal/astra-rs](https://github.com/SoumitraPharikal/astra-rs)
- **Technical Documentation:** [ASTRA Architecture & Specification](https://github.com/SoumitraPharikal/astra-rs#architecture)
- **License:** Dual MIT / Apache-2.0
