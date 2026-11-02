---
title: "Physics-Informed CT Imaging & Machine Learning for Tumour Detection"
codeName: "CT-RADON-ML"
subtitle: "Analytical Radon Transforms, Filtered Back-Projection & Logistic Regression Classification"
period: "Feb 2026 – Aug 2026"
category: "Computational Physics & Medical Imaging"
primaryLanguage: "Python"
techStack: ["Python", "NumPy", "SciPy", "scikit-image", "scikit-learn", "Matplotlib"]
leadMetrics: "Full Radon inversion pipeline · Hounsfield Unit mapping · Logistic regression classification"
featured: true
hasSimulation: false
repoUrl: "[TODO: Add CT Imaging GitHub repository URL]"
docsUrl: "[TODO: Add project documentation link]"
order: 2
---

## 01. Overview

An end-to-end computational medical imaging and machine learning project engineered in **Python** (`NumPy`, `SciPy`, `scikit-image`, `scikit-learn`). The project models the forward physics of X-ray Computed Tomography (CT) by projecting mathematical Shepp-Logan phantoms into sinogram space via the **Radon transform** $\mathcal{R}f(s, \theta)$, reconstructs tomographic cross-sectional slices through **Filtered Back-Projection (FBP)** with Ram-Lak ramp filters, converts linear attenuation coefficients into standard clinical **Hounsfield Units (HU)**, and trains a supervised machine learning classifier to differentiate normal anatomical scans from tumour-bearing tissue slices.

---

## 02. Motivation

X-ray Computed Tomography is one of the most vital diagnostic applications of inverse mathematical physics. Understanding how continuous line integrals of attenuation coefficients are acquired in physical projection space, discretized into sinograms, and reconstructed via Fourier slice theorem principles provides critical physical insight into medical instrumentation artifacts (such as beam hardening, aliasing, and streak noise). Combining this physical reconstruction pipeline with downstream statistical machine learning creates an interpretable, physics-grounded workflow for computer-aided tumour detection.

---

## 03. Mathematical & Physical Model

### 3.1 The Forward Radon Transform
X-ray photons traversing heterogeneous biological tissue attenuate according to the Beer-Lambert law: $I = I_0 \exp\left(-\int \mu(x, y) ds\right)$. The Radon transform $\mathcal{R}f(s, \theta)$ represents the line integral of attenuation coefficient distribution $f(x, y)$ along a line inclined at angle $\theta$ with perpendicular offset $s$:

$$\mathcal{R}f(s, \theta) = \iint_{-\infty}^{\infty} f(x, y) \, \delta(x\cos\theta + y\sin\theta - s) \, dx \, dy$$

### 3.2 Filtered Back-Projection (FBP) Reconstruction
By the Fourier Slice Theorem, the 1D Fourier transform of projection $\mathcal{R}f(s, \theta)$ equals the 2D Fourier transform of object $F(u, v)$ along a radial slice. The reconstructed image $f(x, y)$ is obtained by filtering sinogram projections with a frequency ramp filter $|w|$ and back-projecting over angular range $\theta \in [0, \pi)$:

$$f(x, y) = \int_0^\pi \left[ \int_{-\infty}^\infty \mathcal{F}_{1D}\{\mathcal{R}f\}(w, \theta) \, |w| \, e^{i 2\pi w (x\cos\theta + y\sin\theta)} dw \right] d\theta$$

### 3.3 Hounsfield Unit (HU) Calibration & ML Classification
Linear attenuation coefficients $\mu(x, y)$ are normalized relative to water ($\mu_{\text{water}}$) and air ($\mu_{\text{air}}$) into clinical Hounsfield Units:

$$\text{HU} = 1000 \times \frac{\mu - \mu_{\text{water}}}{\mu_{\text{water}} - \mu_{\text{air}}}$$

Tissue slices are parameterized with synthetic circular tumour lesions characterized by abnormal hyper-attenuating HU profiles ($\Delta \text{HU} \in [+40, +120]$). A regularized logistic regression model is trained on spatial density and contrast features to evaluate classification accuracy:

$$P(y = 1 \mid \mathbf{x}) = \frac{1}{1 + \exp\left(-(\mathbf{w}^T \mathbf{x} + b)\right)}$$

---

## 04. Computational Implementation

- **Phantom Generation:** High-resolution Shepp-Logan phantom matrices parameterized with controllable elliptical organ boundaries and synthetic tumour perturbations.
- **Sinogram Forward Solver:** Multithreaded line-integral projection evaluating $180$ angular projections across $256$ detector channels.
- **Inverse FBP Engine:** Custom Python implementation of Ram-Lak and Shepp-Logan frequency-domain ramp filtering paired with spatial back-projection.
- **Feature Pipeline & ML:** Statistical feature extraction (mean attenuation, peak variance, HU distribution skewness) coupled with `scikit-learn` logistic regression and cross-validated ROC-AUC evaluation.

---

## 05. Results & Visual Verification

- Accurately simulated complete 2D sinograms demonstrating the characteristic sinusoidal traces of off-axis anatomical features.
- Successfully reconstructed cross-sectional slices with minimal streak artifacts, recovering true anatomical geometries.
- Demonstrated robust classification performance for embedded tumour lesions across signal-to-noise ratios, achieving high sensitivity while illustrating how FBP filtering choices impact machine learning feature boundaries.

---

## 06. Further Work

- Extension to fan-beam and cone-beam 3D helical geometries (Feldkamp-Davis-Kress algorithm).
- Implementation of deep convolutional neural network (CNN) segmentation models on reconstructed HU volumes.

---

## 07. Resources

- **GitHub Repository:** `[TODO: Add link to CT Imaging repository]`
- **Interactive Demonstration:** Available in the homepage physics plate.
