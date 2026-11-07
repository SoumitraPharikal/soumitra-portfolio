---
title: "Mathematical Methods II (PHY302)"
courseCode: "PHY302"
subject: "Partial Differential Equations, Green's Functions & Complex Analysis"
date: "Spring 2026 · Semester VI"
typesetEngine: "XeLaTeX · LuaLaTeX · tcolorbox · TikZ"
pdfPath: "/notes/PHY302_Mathematical_Methods_II.pdf"
pageCount: 78
topicsCovered:
  - "Sturm-Liouville self-adjoint eigenvalue problems, generalized Fourier-Legendre series & completeness"
  - "Fourier and Laplace integral transforms, Parseval theorem & quantum uncertainty relations"
  - "Classification and characteristic curves of 2nd-order PDEs; separation of variables in cylindrical/spherical systems"
  - "Green's functions for Poisson and Helmholtz equations, method of images & Cauchy residue contour integration"
featured: true
order: 7
---

## Course Overview

A comprehensive, publication-grade LaTeX compendium for `PHY302: Mathematical Methods II`, covering advanced boundary-value problems, transform theory, operator methods, and distribution theory in the Department of Physical Sciences at IISER Berhampur. Typeset in **XeLaTeX · LuaLaTeX · tcolorbox · TikZ** across 78 pages of rigorous analytical derivations, worked exam problems, and formula sheets.

---

## Representative Mathematical Formulations

### 1. Sturm–Liouville Self-Adjoint Eigenvalue Systems

The canonical self-adjoint differential operator acting on Hilbert space $L^2([a,b], w(x)dx)$ is expressed as:

$$\mathcal{L} u(x) = -\frac{d}{dx}\left[p(x)\frac{du}{dx}\right] + q(x)u(x) = \lambda w(x)u(x)$$

Subject to unmixed homogeneous boundary conditions:

$$\alpha_1 u(a) + \alpha_2 u'(a) = 0, \qquad \beta_1 u(b) + \beta_2 u'(b) = 0$$

For any two twice-differentiable test functions $u(x), v(x)$, the Lagrange identity yields the exact boundary wronskian term:

$$\int_a^b \left[ u \mathcal{L} v - v \mathcal{L} u \right] dx = \left[ p(x)\left( u \frac{dv}{dx} - v \frac{du}{dx} \right) \right]_a^b = 0$$

Guaranteeing real eigenvalues $\lambda_0 < \lambda_1 < \lambda_2 < \dots \to \infty$ and an orthonormal, complete eigenbasis:

$$\int_a^b u_n(x) u_m(x) w(x)\, dx = \delta_{nm}, \qquad f(x) = \sum_{n=0}^\infty c_n u_n(x), \quad c_n = \int_a^b f(x) u_n(x) w(x)\, dx$$

---

### 2. Generalized Functions & Distributional Derivatives

The Dirac delta distribution $\delta(x - a)$ and its distributional derivatives satisfy the integration-by-parts pairing:

$$\int_{-\infty}^\infty f(x) \delta^{(k)}(x - a)\, dx = (-1)^k f^{(k)}(a)$$

With the Sokhotski–Plemelj boundary relation linking Cauchy principal values and distributional delta limits on the real axis:

$$\lim_{\epsilon \to 0^+} \frac{1}{x \pm i\epsilon} = \mathcal{P}\left(\frac{1}{x}\right) \mp i\pi \delta(x)$$

---

### 3. Classification of Second-Order PDEs & Method of Characteristics

For general quasi-linear second-order partial differential equations in two variables:

$$A(x,y) u_{xx} + 2B(x,y) u_{xy} + C(x,y) u_{yy} + D u_x + E u_y + F u = G$$

The characteristic curves satisfy $\frac{dy}{dx} = \frac{B \pm \sqrt{B^2 - AC}}{A}$, establishing the fundamental classification:
- **Hyperbolic ($\Delta = B^2 - AC > 0$):** Wave equations, admitting real propagating characteristics $\xi(x,y), \eta(x,y)$ and d'Alembert solutions.
- **Parabolic ($\Delta = B^2 - AC = 0$):** Heat and diffusion equations, dissipative transport with single real characteristic families.
- **Elliptic ($\Delta = B^2 - AC < 0$):** Laplace and Poisson equations, potential equilibria with conjugate complex characteristics and maximum principles.

---

### 4. Green's Functions & Representation Formulas

For inhomogeneous linear partial differential operators $\mathcal{L}_{\mathbf{r}} u(\mathbf{r}) = f(\mathbf{r})$, the distributional Green's function solves:

$$\mathcal{L}_{\mathbf{r}} G(\mathbf{r}, \mathbf{r}') = \delta(\mathbf{r} - \mathbf{r}')$$

Yielding the fundamental solution for the 3D Laplace/Poisson operator in free space:

$$\nabla^2 G(\mathbf{r}, \mathbf{r}') = -\delta(\mathbf{r} - \mathbf{r}') \implies G(\mathbf{r}, \mathbf{r}') = \frac{1}{4\pi \|\mathbf{r} - \mathbf{r}'\|}$$

And the outgoing radiation Helmholtz Green's function:

$$(\nabla^2 + k^2) G_k(\mathbf{r}, \mathbf{r}') = -\delta(\mathbf{r} - \mathbf{r}') \implies G_k(\mathbf{r}, \mathbf{r}') = \frac{e^{ik\|\mathbf{r} - \mathbf{r}'\|}}{4\pi \|\mathbf{r} - \mathbf{r}'\|}$$

Using Green's second identity, the interior field $u(\mathbf{r})$ within volume $V$ bounded by surface $S$ is uniquely reconstructed:

$$u(\mathbf{r}) = \int_V G(\mathbf{r}, \mathbf{r}') f(\mathbf{r}')\, dV' + \oint_S \left[ G(\mathbf{r}, \mathbf{r}') \frac{\partial u}{\partial n'} - u(\mathbf{r}') \frac{\partial G(\mathbf{r}, \mathbf{r}')}{\partial n'} \right] dS'$$

---

## Syllabus & Comprehensive Modular Breakdown

1. **Part I: Sturm–Liouville Theory & Orthogonal Expansions**
   - Function spaces, inner products, and boundary condition classifications.
   - Reducing general linear second-order differential equations to self-adjoint form.
   - Eigenvalue spectra, oscillation theorems, and Fourier–Legendre expansions on $x \in [-1, 1]$.

2. **Part II: Fourier Series, Fourier Transforms & Laplace Transforms**
   - Complex Fourier series, Dirichlet kernel convergence, and Parseval energy conservation.
   - Continuous Fourier transforms, Gaussian packets, and minimum-uncertainty relations $\Delta t \Delta \omega \ge 1/2$.
   - Laplace transform operational calculus, convolution theorems, and Bromwich contour inversion.

3. **Part III: Generalized Functions & Distribution Theory**
   - Dirac delta definition, testing function spaces, and distributional derivatives.
   - Fourier representations of $\delta(x)$ and completeness relations.
   - Principal value distributions, Cauchy kernels, and the Sokhotski–Plemelj theorem.

4. **Part IV: Partial Differential Equations in Physical Systems**
   - Method of characteristics for first-order quasi-linear equations and shock formations.
   - Canonical transformations of hyperbolic, parabolic, and elliptic equations.
   - Boundary-value solutions in curvilinear geometries: circular membranes (Bessel functions $J_m$), finite cylinders, and spherical shells (Legendre polynomials $P_l$).

5. **Part V: Green's Function Techniques**
   - Construction of Green's functions for ordinary differential equations via jump-discontinuity matching.
   - Free-space Green's functions for Poisson, Helmholtz, and d'Alembert wave operators.
   - Method of images for conducting planar, spherical, and cylindrical boundaries.

6. **Part VI: Integral Equations & Fredholm Theory**
   - Fredholm and Volterra equations of the first and second kinds.
   - Resolvent kernels, Neumann series iteration, and degenerate separable kernels.

7. **Part VII: Complex Contour Integration & Branch Cuts**
   - Branch points, branch cuts, and multi-valued Riemann sheet navigation.
   - Keyhole contour integration for algebraic integrals $\int_0^\infty \frac{x^\alpha}{x^2 + \sqrt{2}x + 1} dx$.
   - Infinite series evaluation and binomial summation via residue calculus.
