---
title: "PHY305: Classical Mechanics Compendium"
courseCode: "PHY305"
subject: "Classical Mechanics & Variational Principles"
date: "Autumn 2026"
typesetEngine: "XeLaTeX / KOMA-Script / TikZ"
pdfPath: "[TODO: Add PDF path for PHY305_Classical_Mechanics.pdf]"
pageCount: 42
topicsCovered:
  - "Hamilton's principle of stationary action and variational calculus"
  - "Euler-Lagrange equations with holonomic and non-holonomic constraints"
  - "Hamiltonian mechanics, Legendre transforms, and phase space volume"
  - "Poisson brackets, Lie algebra invariants, and canonical transformations"
  - "Hamilton-Jacobi theory, action-angle variables, and Kepler integrability"
  - "Rigid body kinematics, inertia tensor eigensystems, and Euler equations"
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
