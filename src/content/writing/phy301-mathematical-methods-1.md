---
title: "PHY301: Mathematical Methods-I Compendium"
courseCode: "PHY301"
subject: "Mathematical Physics & Complex Analysis"
date: "Autumn 2026"
typesetEngine: "pdfLaTeX / AmsLaTeX / TikZ"
pdfPath: "[TODO: Add PDF path for PHY301_Mathematical_Methods_1.pdf]"
pageCount: 52
topicsCovered:
  - "Vector calculus and general orthogonal curvilinear coordinates"
  - "Complex analysis: Cauchy-Riemann equations and residue theorem"
  - "Contour integration around branch cuts and essential singularities"
  - "Fourier series expansions and continuous Fourier transforms"
  - "Frobenius method for ordinary differential equations around regular singular points"
  - "Special functions: Legendre polynomials, Bessel functions, and spherical harmonics"
featured: true
order: 3
---

## Overview

A high-density reference monograph for `PHY301: Mathematical Methods-I` at IISER Berhampur. It serves as an analytical handbook covering curvilinear tensor operations, complex contour calculus, and second-order linear differential equations of mathematical physics.

## Core Mathematical Formalisms

### Orthogonal Curvilinear Coordinates
For scale factors $h_i = \left|\frac{\partial \mathbf{r}}{\partial u_i}\right|$:

$$\nabla \psi = \sum_i \frac{1}{h_i} \frac{\partial \psi}{\partial u_i} \hat{\mathbf{e}}_i$$

$$\nabla \cdot \mathbf{A} = \frac{1}{h_1 h_2 h_3} \sum_i \frac{\partial}{\partial u_i} \left( \frac{h_1 h_2 h_3}{h_i} A_i \right)$$

$$\nabla^2 \psi = \frac{1}{h_1 h_2 h_3} \sum_i \frac{\partial}{\partial u_i} \left( \frac{h_1 h_2 h_3}{h_i^2} \frac{\partial \psi}{\partial u_i} \right)$$

### Cauchy's Integral Formula & Residue Theorem
For an analytic function $f(z)$ inside and on a closed contour $C$:

$$f(z_0) = \frac{1}{2\pi i} \oint_C \frac{f(z)}{z - z_0} \, dz$$

$$\oint_C f(z) \, dz = 2\pi i \sum_{k=1}^n \text{Res}(f, z_k)$$

### Frobenius Method for Ordinary Differential Equations
For $y'' + P(x)y' + Q(x)y = 0$ with regular singular point at $x = 0$, trial series:

$$y(x) = \sum_{n=0}^\infty a_n x^{n+r}, \quad a_0 \ne 0$$

Yielding the indicial equation $r(r - 1) + p_0 r + q_0 = 0$.

---

## Download & Resource Access
- **Download PDF Compendium:** Available upon academic request.
- **LaTeX Source Code:** Structured modular TeX files with inline analytical proofs.
