# Technical Physics Notes & Academic LaTeX Compendiums
**Subject:** Soumitra Pharikal (IISER Berhampur)
**Classification:** Academic Course Compendiums & Theoretical Cheat Sheets
**Toolchain:** `pdfLaTeX`, `XeLaTeX`, `TikZ`, `PGFPlots`, `AmsLaTeX`

---

## 1. Overview & Publishing Rationale

Throughout his undergraduate curriculum in the Department of Physical Sciences and the Center for Computational and Data Sciences at IISER Berhampur, Soumitra Pharikal has maintained comprehensive, standalone theoretical compendiums and reference cheat sheets. Authored in modular LaTeX, these compendiums unify rigorous analytical derivations, physical principles, tensor formulations, and algorithmic implementations into clean, publication-grade reference documents.

These compendiums serve both as high-density study aids for advanced coursework and as reproducible open-access reference manuals for fellow physics undergraduates.

---

## 2. Catalog of Course Compendiums

---

### COMP-01: `PHY 305` — Advanced Classical Mechanics
- **Course Code / Subject:** `PHY 305: Classical Mechanics`
- **Institution:** IISER Berhampur
- **Typesetting Standard:** `XeLaTeX` (KOMA-Script document class, customized `mathpazo` serif typography, inline TikZ diagrams)
- **Document Status:** Complete Coursework Reference
- **Downloadable Reference:** `[TODO: Link to PHY305_Classical_Mechanics_Compendium.pdf]`
- **Key Derivations & Topics Covered:**
  - Variational principles and Hamilton's principle of stationary action: $\delta S = \delta \int L(q_i, \dot{q}_i, t) dt = 0$.
  - Generalized coordinates, Euler-Lagrange equations with non-holonomic constraints via Lagrange multipliers: $\frac{d}{dt}\left(\frac{\partial L}{\partial \dot{q}_k}\right) - \frac{\partial L}{\partial q_k} = \sum_\alpha \lambda_\alpha a_{\alpha k}$.
  - Legendre transformations and Hamiltonian phase space dynamics: $\dot{q}_i = \frac{\partial H}{\partial p_i}$, $\dot{p}_i = -\frac{\partial H}{\partial q_i}$.
  - Canonical transformations, Poisson brackets $\{u, v\}_{q, p}$, and Lie algebra preservation.
  - Hamilton-Jacobi theory, action-angle variables $(J_k, w_k)$, and integrability of the Kepler problem.
  - Rigid body kinematics, Euler angles $(\phi, \theta, \psi)$, inertia tensor $\mathbf{I}$, and torque-free Euler equations: $I_1 \dot{\omega}_1 - (I_2 - I_3)\omega_2 \omega_3 = 0$.

---

### COMP-02: `PHY 303` — Quantum Mechanics I
- **Course Code / Subject:** `PHY 303: Quantum Mechanics I`
- **Institution:** IISER Berhampur
- **Typesetting Standard:** `pdfLaTeX` (revtex4-2 style two-column layout, `braket` Dirac notation package)
- **Document Status:** Complete Coursework Reference
- **Downloadable Reference:** `[TODO: Link to PHY303_Quantum_Mechanics_Compendium.pdf]`
- **Key Derivations & Topics Covered:**
  - Hilbert space formalism, linear operators, spectral theorem, and Dirac bra-ket notation.
  - Generalized Heisenberg uncertainty principle for arbitrary non-commuting observables: $\sigma_A \sigma_B \ge \frac{1}{2} |\langle [A, B] \rangle|$.
  - Time-dependent and time-independent Schrödinger equations; probability current density $\mathbf{J} = \frac{\hbar}{2mi} (\psi^* \nabla \psi - \psi \nabla \psi^*)$.
  - Exact one-dimensional bound states: finite/infinite square wells, Dirac delta potential, and barrier tunneling transmission coefficients $T(E)$.
  - Quantum harmonic oscillator solved via ladder operators $[a, a^\dagger] = 1$ and Hermite polynomials $H_n(\xi)$.
  - Orbital angular momentum algebra $[L_i, L_j] = i\hbar \epsilon_{ijk} L_k$, spherical harmonics $Y_l^m(\theta, \phi)$, and central force potentials.
  - 3D Hydrogen atom analytical solution: radial wavefunctions $R_{nl}(r)$, Laguerre polynomials, and degenerate energy spectra $E_n = -\frac{13.6\text{ eV}}{n^2}$.

---

### COMP-03: `CDS 301` — Programming & Data Structures I
- **Course Code / Subject:** `CDS 301: Programming and Data Structures I`
- **Institution:** Center for Computational and Data Sciences, IISER Berhampur
- **Typesetting Standard:** `pdfLaTeX` (`minted` code syntax highlighter, algorithmic pseudocode blocks)
- **Document Status:** Reference Compendium & Algorithm Handbook
- **Downloadable Reference:** `[TODO: Link to CDS301_Data_Structures_Reference.pdf]`
- **Key Concepts & Implementations Covered:**
  - Computational asymptotic complexity analysis: Big-$O$, Big-$\Omega$, Big-$\Theta$ classifications and master theorem recurrences.
  - Memory architectures, pointer arithmetic, stack vs. heap allocation, and manual memory management in C/C++.
  - Linear data structures: singly and doubly linked lists, circular buffers, array-backed and linked stacks/queues.
  - Non-linear hierarchical structures: Binary Search Trees (BST), AVL self-balancing trees (rotations and balance factors), binary heaps, and priority queues.
  - Sorting and searching algorithms: Quicksort (Lomuto vs. Hoare partitioning), Mergesort, Heapsort, Radix sort, binary search variants.
  - Graph representations: adjacency matrices vs. adjacency lists; traversal algorithms (Breadth-First Search, Depth-First Search); shortest path algorithms (Dijkstra, Bellman-Ford).

---

### COMP-04: Classical Thermodynamics & Kinetic Theory
- **Course Code / Subject:** Foundational Physics Series
- **Institution:** IISER Berhampur
- **Typesetting Standard:** `XeLaTeX` (Classical serif formatting, thermodynamic state diagrams in PGFPlots)
- **Document Status:** Standalone Cheat Sheet & Summary
- **Downloadable Reference:** `[TODO: Link to Thermodynamics_Cheat_Sheet.pdf]`
- **Key Derivations & Topics Covered:**
  - The Four Laws of Thermodynamics: mathematical formulations and empirical origins.
  - State variables, exact differentials $dZ = M dx + N dy$, and Pfaffian differential equations.
  - Thermodynamic potentials: Internal energy $U(S, V)$, Enthalpy $H(S, P)$, Helmholtz free energy $F(T, V)$, and Gibbs free energy $G(T, P)$.
  - Systematic Maxwell relations derived via cross-derivative equality of thermodynamic potentials:
    $$\left(\frac{\partial T}{\partial V}\right)_S = -\left(\frac{\partial P}{\partial S}\right)_V, \quad \left(\frac{\partial T}{\partial P}\right)_S = \left(\frac{\partial V}{\partial S}\right)_P$$
  - Real gases and equations of state: van der Waals gas $(P + a/V_m^2)(V_m - b) = RT$, virial expansions, and Joule-Thomson throttling coefficient $\mu_{JT} = \left(\frac{\partial T}{\partial P}\right)_H$.
  - Maxwell-Boltzmann speed distribution derivation and equipartition of energy.

---

### COMP-05: Classical Electricity & Magnetism (Electrodynamics)
- **Course Code / Subject:** Foundational Physics Series
- **Institution:** IISER Berhampur
- **Typesetting Standard:** `pdfLaTeX` (Vector calculus notation, field line TikZ illustrations)
- **Document Status:** Standalone Cheat Sheet & Summary
- **Downloadable Reference:** `[TODO: Link to Electromagnetism_Compendium.pdf]`
- **Key Derivations & Topics Covered:**
  - Vector calculus identities: divergence theorem, Stokes' theorem, Helmholtz decomposition theorem.
  - Electrostatics: Coulomb's law, Gauss's law, Poisson and Laplace equations $\nabla^2 V = -\frac{\rho}{\epsilon_0}$, method of images, and multipole expansions.
  - Magnetostatics: Biot-Savart law, Ampère's circuital law, magnetic vector potential $\mathbf{A}$, and magnetic dipole moments.
  - Electrodynamics and Maxwell's complete equations in differential and integral forms:
    $$\nabla \cdot \mathbf{E} = \frac{\rho}{\epsilon_0}, \quad \nabla \cdot \mathbf{B} = 0, \quad \nabla \times \mathbf{E} = -\frac{\partial \mathbf{B}}{\partial t}, \quad \nabla \times \mathbf{B} = \mu_0 \mathbf{J} + \mu_0 \epsilon_0 \frac{\partial \mathbf{E}}{\partial t}$$
  - Gauge transformations: Coulomb gauge ($\nabla \cdot \mathbf{A} = 0$) and Lorenz gauge ($\nabla \cdot \mathbf{A} + \frac{1}{c^2}\frac{\partial V}{\partial t} = 0$).
  - Poynting's theorem and electromagnetic energy-momentum flux tensor $\mathbf{S} = \frac{1}{\mu_0}(\mathbf{E} \times \mathbf{B})$.
