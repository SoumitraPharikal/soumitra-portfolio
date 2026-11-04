---
title: "Classical Mechanics (PHY305)"
courseCode: "PHY305"
subject: "Classical Mechanics & Variational Principles"
date: "Autumn 2026 · Semester V"
typesetEngine: "XeLaTeX · LuaLaTeX · tcolorbox · TikZ"
pdfPath: "/Soumitra_Pharikal_CV.pdf"
pageCount: 42
topicsCovered:
  - "Hamilton's variational principle of stationary action and Euler-Lagrange equations with constraints"
  - "Central force orbital dynamics, effective potentials, Kepler integration, and Rutherford scattering"
  - "Rigid body kinematics, orthogonal rotation matrices, inertia tensors, and Euler's equations"
  - "Hamiltonian phase space mechanics, Poisson bracket Lie algebra, and Hamilton-Jacobi theory"
featured: true
order: 4
---

## Overview

A comprehensive theoretical compendium authored in **XeLaTeX** for `PHY305: Classical Mechanics` at the Indian Institute of Science Education and Research (IISER) Berhampur. The text presents complete, uncompromised analytical derivations transitioning from Newtonian mechanics to Lagrangian and Hamiltonian formalisms.

## Core Mathematical Formalisms

### Hamilton's Principle & The Variational Derivative
The physical trajectory of a conservative dynamical system minimizes the action integral $S$:

$$\delta S = \delta \int_{t_1}^{t_2} L(q_i, \dot{q}_i, t) \, dt = 0$$

Yielding the Euler-Lagrange equations of motion:

$$\frac{d}{dt}\left(\frac{\partial L}{\partial \dot{q}_k}\right) - \frac{\partial L}{\partial q_k} = \sum_{\alpha=1}^m \lambda_\alpha a_{\alpha k}$$

### Hamiltonian Phase Space & Canonical Transformations
Under the Legendre transformation $H(q_i, p_i, t) = \sum_i p_i \dot{q}_i - L$, Hamilton's canonical equations govern evolution in $2n$-dimensional phase space:

$$\dot{q}_i = \frac{\partial H}{\partial p_i}, \quad \dot{p}_i = -\frac{\partial H}{\partial q_i}$$

Preserving the fundamental Poisson bracket relations:

$$\{q_i, p_j\} = \delta_{ij}, \quad \{q_i, q_j\} = 0, \quad \{p_i, p_j\} = 0$$

### Torque-Free Rigid Body Dynamics
In the body-fixed principal axes frame, Euler's equations govern angular velocity vector $\boldsymbol{\omega}$:

$$I_1 \dot{\omega}_1 - (I_2 - I_3)\omega_2 \omega_3 = 0$$
$$I_2 \dot{\omega}_2 - (I_3 - I_1)\omega_3 \omega_1 = 0$$
$$I_3 \dot{\omega}_3 - (I_1 - I_2)\omega_1 \omega_2 = 0$$

---

## Download & Resource Access
- **Download PDF Compendium:** Available upon academic request.
- **LaTeX Source Code:** Available upon academic request.
