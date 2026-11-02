---
title: "PHY309: Thermal Physics Compendium"
courseCode: "PHY309"
subject: "Thermodynamics & Kinetic Theory"
date: "Autumn 2026"
typesetEngine: "XeLaTeX / PGFPlots / TikZ"
pdfPath: "[TODO: Add PDF path for PHY309_Thermal_Physics.pdf]"
pageCount: 36
topicsCovered:
  - "Fundamental laws of thermodynamics and exact Pfaffian differentials"
  - "Thermodynamic potentials: U, H, F, G and Legendre transforms"
  - "Systematic derivation of Maxwell relations via cross-derivatives"
  - "Real gas equations of state and Joule-Thomson throttling"
  - "Maxwell-Boltzmann velocity distribution and equipartition theorem"
  - "Foundations of canonical and microcanonical ensembles"
featured: true
order: 2
---

## Overview

Authored for `PHY309: Thermal Physics` at IISER Berhampur, this compendium presents a unified mathematical treatment of classical macroscopic thermodynamics, Pfaffian forms, and statistical kinetic foundations.

## Core Mathematical Formalisms

### The Four Fundamental Thermodynamic Potentials
Defined via Legendre transformations of internal energy $U(S, V, N)$:

- **Internal Energy:** $dU = T dS - P dV + \mu dN$
- **Enthalpy:** $H = U + PV \implies dH = T dS + V dP + \mu dN$
- **Helmholtz Free Energy:** $F = U - TS \implies dF = -S dT - P dV + \mu dN$
- **Gibbs Free Energy:** $G = H - TS \implies dG = -S dT + V dP + \mu dN$

### Maxwell Relations
Derived from the equality of mixed second partial derivatives of thermodynamic potentials:

$$\left(\frac{\partial T}{\partial V}\right)_S = -\left(\frac{\partial P}{\partial S}\right)_V, \quad \left(\frac{\partial T}{\partial P}\right)_S = \left(\frac{\partial V}{\partial S}\right)_P$$

$$\left(\frac{\partial S}{\partial V}\right)_T = \left(\frac{\partial P}{\partial T}\right)_V, \quad \left(\frac{\partial S}{\partial P}\right)_T = -\left(\frac{\partial V}{\partial T}\right)_P$$

### Real Gases & Joule-Thomson Throttling
For van der Waals gas $\left(P + \frac{a}{V_m^2}\right)(V_m - b) = RT$, the Joule-Thomson coefficient $\mu_{JT} = \left(\frac{\partial T}{\partial P}\right)_H$ determines cooling upon isenthalpic expansion:

$$\mu_{JT} = \frac{1}{C_p} \left[ T \left(\frac{\partial V}{\partial T}\right)_P - V \right]$$

---

## Download & Resource Access
- **Download PDF Compendium:** Available upon institutional request.
- **Typesetting System:** Custom XeLaTeX with PGFPlots thermodynamic phase diagrams.
