---
title: "Quantum Mechanics I (PHY303)"
courseCode: "PHY303"
subject: "Quantum Physics & Wave Mechanics"
date: "Autumn 2026 · Semester V"
typesetEngine: "XeLaTeX · LuaLaTeX · tcolorbox · TikZ"
pdfPath: "/Soumitra_Pharikal_CV.pdf"
pageCount: 48
topicsCovered:
  - "Dirac bra-ket Hilbert space formalism, linear operators, and Heisenberg uncertainty relations"
  - "Exact 1D stationary states, finite potential wells, and WKB/barrier quantum tunneling"
  - "Harmonic oscillator algebraic ladder operators and Hermite polynomial eigenstates"
  - "Central potentials, SO(3)/SU(2) angular momentum algebra, and hydrogen atom wavefunctions"
featured: true
order: 1
---

## Overview

A standalone analytical compendium authored in **pdfLaTeX** for `PHY303: Quantum Physics-I` at the Indian Institute of Science Education and Research (IISER) Berhampur. The text develops rigorous wave mechanics, operator algebra in Hilbert space, and central-field solutions.

## Core Mathematical Formalisms

### Dirac Bra-Ket Formalism & Hilbert Space
States are represented by rays in a complex Hilbert space $\mathcal{H}$:

$$\langle \psi | \phi \rangle = \int_{-\infty}^\infty \psi^*(x) \phi(x) \, dx$$

Observables correspond to Hermitian operators $\hat{A} = \hat{A}^\dagger$ with real eigenvalues:

$$\hat{A}|\psi_n\rangle = a_n |\psi_n\rangle, \quad \sum_n |\psi_n\rangle\langle \psi_n| = \hat{\mathbb{I}}$$

### Generalized Uncertainty Principle
For any pair of Hermitian operators $\hat{A}$ and $\hat{B}$:

$$\sigma_A \sigma_B \ge \frac{1}{2} \left| \langle [\hat{A}, \hat{B}] \rangle \right|$$

With canonical commutation relation $[\hat{x}, \hat{p}] = i\hbar\hat{\mathbb{I}}$.

### Ladder Operator Algebra for the Harmonic Oscillator
Introducing non-Hermitian creation and annihilation operators:

$$\hat{a} = \sqrt{\frac{m\omega}{2\hbar}}\left(\hat{x} + \frac{i}{m\omega}\hat{p}\right), \quad \hat{a}^\dagger = \sqrt{\frac{m\omega}{2\hbar}}\left(\hat{x} - \frac{i}{m\omega}\hat{p}\right)$$

$$[\hat{a}, \hat{a}^\dagger] = 1, \quad \hat{H} = \hbar\omega\left(\hat{a}^\dagger \hat{a} + \frac{1}{2}\right)$$

### Orbital Angular Momentum Algebra
Commutation relations for angular momentum components:

$$[L_i, L_j] = i\hbar \epsilon_{ijk} L_k, \quad [L^2, L_z] = 0$$

$$L^2 |l, m\rangle = \hbar^2 l(l+1) |l, m\rangle, \quad L_z |l, m\rangle = \hbar m |l, m\rangle$$

---

## Download & Resource Access
- **Download PDF Compendium:** Available upon institutional request.
- **LaTeX Source Code:** Archival TeX documents maintained in local repository.
