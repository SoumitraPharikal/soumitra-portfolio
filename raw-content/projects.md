# Academic Computational Projects & Software Dossier
**Subject:** Soumitra Pharikal (IISER Berhampur)
**Classification:** Deep Technical Case Studies
**Format:** 7-Part Standardized Engineering & Physical Specification

---

# CASE STUDY 01: `ASTRA` (Astrodynamics Simulation Toolkit in Rust for Astronomy)

### 01. Overview
`ASTRA` is an open-source, high-performance astrodynamics and orbital mechanics simulation toolkit engineered in **Rust**. Selected as a core contributor in **May 2026**, the project delivers deterministic, memory-safe, and zero-cost abstraction numerical integration for $N$-body gravitational systems, perturbation models (J2 oblateness, solar radiation pressure, atmospheric drag), and orbital state propagation across standard astronomical reference frames (ICRF, GCRF, TEME).

### 02. Motivation
Astrodynamics computations frequently face a painful trade-off: high-level interpreted environments like Python offer rapid prototyping but suffer severe performance penalties when evaluating billions of orbital step evaluations; legacy C/Fortran libraries deliver raw speed but lack memory safety, modern build infrastructure, and strict type-level dimensional analysis. `ASTRA` leverages Rust's strict ownership model, compile-time unit verification, and SIMD-accelerated linear algebra to provide an uncompromising, thread-safe computational engine suitable for mission design, ephemeris generation, and astronomical survey simulation.

### 03. Mathematical & Physical Model
The core propagation engine solves the general $N$-body equations of motion under Newtonian gravity with arbitrary higher-order perturbation potentials:
$$\ddot{\mathbf{r}}_i = - \sum_{j \neq i}^N \frac{G m_j}{\|\mathbf{r}_i - \mathbf{r}_j\|^3} (\mathbf{r}_i - \mathbf{r}_j) + \mathbf{a}_{\text{perturbation}}$$

For Earth-orbiting bodies, the dominant non-spherical gravitational potential (zonal harmonic $J_2$) produces a perturbation acceleration:
$$\mathbf{a}_{J_2} = -\frac{3}{2} J_2 \frac{\mu R_E^2}{r^4} \left[ \left(1 - 5 \frac{z^2}{r^2}\right) \frac{\mathbf{r}}{r} + 2 \frac{z}{r} \hat{\mathbf{k}} \right]$$

To preserve energy and symplectic phase space volume over multi-decade integration times, symplectic integrators (such as the 4th-order Yoshida integrator and adaptive Gauss-Jackson 8th-order multistep methods) are implemented alongside embedded Runge-Kutta-Fehlberg (RK45 / Dormand-Prince DP853) algorithms with adaptive step control:
$$\epsilon = \|\mathbf{y}_{n+1}^{(8)} - \mathbf{y}_{n+1}^{(5)}\|_\infty, \quad h_{\text{new}} = h_{\text{opt}} \cdot \left(\frac{\text{TOL}}{\epsilon}\right)^{1/8}$$

### 04. Computational Implementation
- **Language / Toolchain:** Rust (`edition = "2021"`, strict `#![deny(unsafe_code)]`).
- **Core Architecture:**
  - `astra-core`: State vector representations (Cartesian state $\mathbf{x} = [\mathbf{r}, \mathbf{v}]^T$, Classical Keplerian Orbital Elements $[a, e, i, \Omega, \omega, \nu]$, Equinoctial elements).
  - `astra-propagator`: Numerical integrators featuring generic step-handler traits and SIMD vectorization.
  - `astra-coords`: Epoch time-conversion engines (Julian Date, TT, TDB, UTC) and SOFA-compliant frame rotation transformations.
- **Key Rust Idiom:** Zero-cost type-checked physical units via custom typestates ensuring compile-time prevention of dimensional unit mismatches (e.g. adding meters to kilometers).

### 05. Results & Visual Verification
- Validated orbital propagation against NASA JPL Horizons ephemerides for inner solar system planets with energy conservation errors $\Delta E / E < 10^{-12}$ over $10^6$ orbital steps.
- Accurately reproduced nodal regression rates $\dot{\Omega}_{J_2} = -\frac{3}{2} n J_2 \left(\frac{R_E}{p}\right)^2 \cos i$ for Low Earth Orbit (LEO) satellites.
- Benchmarked against standard C++ integration loops, demonstrating competitive or superior throughput due to LLVM auto-vectorization and cache-locality in struct-of-arrays (SoA) layout.

### 06. Further Work
- Integration of general relativistic post-Newtonian (1PN and 2.5PN) gravitational radiation terms:
  $$\mathbf{a}_{\text{1PN}} = \frac{G M}{c^2 r^3} \left[ \left( 4 \frac{G M}{r} - v^2 \right) \mathbf{r} + 4 (\mathbf{r} \cdot \mathbf{v}) \mathbf{v} \right]$$
- WebAssembly (Wasm) target compilation for native, real-time client-side orbital simulations in web browsers.

### 07. Resources
- **Repository:** `[TODO: Insert link to ASTRA Rust repository]`
- **Crate Documentation:** `[TODO: Insert crates.io or docs.rs link]`
- **License:** MIT / Apache-2.0 Dual License

---

# CASE STUDY 02: Automated CCD Photometry & Isochrone Fitting Pipeline for IC 1369

### 01. Overview
An automated, reproducible astronomical data analysis pipeline engineered in **Python** (`Astropy`, `photutils`, `NumPy`, `SciPy`) and **IRAF** for processing multi-epoch FITS images of the open cluster **IC 1369**, performing precision point-spread-function (PSF) and aperture photometry, generating calibrated Color-Magnitude Diagrams (CMDs), and extracting candidate variable star light curves.

### 02. Motivation
Manual astronomical image reduction using classic IRAF terminal commands is notoriously prone to operator bias, difficult to reproduce across different observatories, and labor-intensive when processing hundreds of multi-filter frames. This pipeline was developed during research at the Indian Centre for Space Physics (ICSP) to eliminate manual bottlenecks by establishing an end-to-end, scriptable, and statistically rigorous workflow from raw FITS files to physical cluster parameters.

### 03. Mathematical & Physical Model
- **Aperture Photometry & Sky Subtraction:** The source flux $F_{\text{net}}$ within an aperture of radius $r_{\text{aper}}$ enclosing $N_{\text{aper}}$ pixels with local sky background level $\bar{B}_{\text{sky}}$ and variance $\sigma_{\text{sky}}^2$ is given by:
  $$F_{\text{net}} = \sum_{i \in \text{aper}} I_i - N_{\text{aper}} \bar{B}_{\text{sky}}$$
  The photometric instrumental error is computed via the CCD equation:
  $$\sigma_{\text{inst}} = \frac{\sqrt{\frac{F_{\text{net}}}{g} + N_{\text{aper}} \sigma_{\text{sky}}^2 + N_{\text{aper}} \left(\frac{\sigma_{\text{sky}}^2}{N_{\text{sky}}}\right) + N_{\text{aper}} \left(\frac{\sigma_{\text{read}}}{g}\right)^2}}{F_{\text{net}}}$$
  where $g$ is the CCD gain ($e^-/\text{ADU}$) and $\sigma_{\text{read}}$ is readout noise ($e^-$).
- **Synthetic CMD Modeling:** Observed magnitudes $m_\lambda$ are related to absolute magnitudes $M_\lambda$ via:
  $$m_\lambda - M_\lambda = 5 \log_{10}(d) - 5 + A_\lambda = (m - M)_0 + R_\lambda E(B-V)$$
  where theoretical stellar tracks are mapped across varying metallicity grids $Z \in [0.008, 0.02]$.

### 04. Computational Implementation
- **Architecture:**
  - `pipeline/preprocess.py`: Automated header inspection, master bias construction (median with sigma-clipping), master flat normalization, cosmic ray rejection via Laplacian edge detection (`astroscrappy`).
  - `pipeline/photometry.py`: Adaptive 2D source identification, radial curve-of-growth evaluation to determine curve asymptote, multi-aperture annulus subtraction.
  - `pipeline/calibration.py`: Coordinate cross-referencing with external Gaia DR3 catalog via k-d tree spatial queries; least-squares calibration of transformation coefficients.
  - `pipeline/isochrone.py`: Chi-squared ($\chi^2$) minimization over PARSEC grid parameters.

### 05. Results & Visual Verification
- Reduced raw FITS observation archives across multiple nights.
- Successfully constructed clean $V \text{ vs } (B-V)$ Color-Magnitude Diagrams with calibrated zero-point residuals $\Delta m < 0.02\text{ mag}$.
- Detected and isolated candidate variable stars exhibiting periodic light curves consistent with short-period pulsating variables.

### 06. Further Work
- Implementation of full Point Spread Function (PSF) modeling using Moffat and elliptical Gaussian kernels for extreme stellar crowd deblending.
- Bayesian Markov Chain Monte Carlo (MCMC) sampling for simultaneous posterior probability estimation of cluster age, distance, and extinction parameters.

### 07. Resources
- **Repository:** `[TODO: Insert link to IC 1369 Photometry Pipeline GitHub repository]`
- **Technical Report:** `[TODO: Insert link to ICSP Technical Report / Preprint]`

---

# CASE STUDY 03: Optical Pupil Scaling & Zernike Wavefront Analyzer

### 01. Overview
A computational optics simulation framework engineered in **MATLAB** to investigate the mathematical behavior and modal cross-coupling of **Zernike circle polynomials** across optical systems undergoing pupil scaling, aperture stops, and decentering. The tool computes wavefront reconstruction error, Strehl ratio degradation, and phase variance across arbitrary pupil geometries.

### 02. Motivation
In astronomical telescopes, ophthalmic wavefront sensors, and laser cavity optics, optical components often operate under sub-apertures or varying pupil stop diameters. Because Zernike polynomials are orthogonal strictly over a unit disk of fixed radius, changing the physical aperture radius breaks this orthogonality. Consequently, an optical aberration described by a pure high-order mode (such as spherical aberration $Z_4^0$) in an unvignetted pupil leaks energy into lower-order modes (such as defocus $Z_2^0$ and piston $Z_0^0$) when the pupil is scaled. This project quantifies this modal transformation to prevent severe systematic mischaracterization in optical diagnostics.

### 03. Mathematical & Physical Model
The optical phase aberration $W(\rho, \theta)$ on a pupil of radius $R_1$ is:
$$W(\rho_1, \theta) = \sum_{j=1}^J c_j Z_j(\rho_1, \theta), \quad \rho_1 = \frac{r}{R_1} \le 1$$
When the aperture is scaled by factor $s = R_2 / R_1$ ($0 < s \le 1$), the radial coordinate scales as $\rho_2 = \frac{r}{R_2} = \frac{\rho_1}{s}$. The wavefront over the reduced pupil is re-expressed in the basis of scaled Zernike polynomials:
$$W(s \rho_2, \theta) = \sum_{j=1}^J c'_j(s) Z_j(\rho_2, \theta)$$
The coefficient transformation vector $\mathbf{c}'(s)$ satisfies the matrix linear relationship:
$$\mathbf{c}'(s) = \mathbf{T}(s) \cdot \mathbf{c}$$
where elements of transformation matrix $\mathbf{T}(s)$ are calculated via the inner product:
$$T_{ij}(s) = \frac{1}{\pi} \int_0^{2\pi} \int_0^1 Z_i(\rho, \theta) Z_j(s \rho, \theta) \rho \, d\rho \, d\theta$$
Phase variance $\sigma_{\Phi}^2$ and corresponding Maréchal Strehl ratio approximation are derived:
$$S \approx \exp(-\sigma_{\Phi}^2), \quad \sigma_{\Phi}^2 = \sum_{j=2}^J |c'_j|^2$$

### 04. Computational Implementation
- **Platform:** MATLAB (compatible with GNU Octave).
- **Core Modules:**
  - `zernike_gen.m`: High-order analytical radial polynomial evaluation without factorial overflow using recurrence relations.
  - `pupil_scale_matrix.m`: Symbolic and numerical calculation of the transformation matrix $\mathbf{T}(s)$ for radial degrees up to $n = 10$.
  - `wavefront_reconstruct.m`: 2D surface phase topography map generator, point-spread function (PSF) calculation via 2D Fast Fourier Transform:
    $$\text{PSF}(u, v) = |\mathcal{F}\{ P(\rho, \theta) e^{i \frac{2\pi}{\lambda} W(\rho, \theta)} \}|^2$$
  - `interferogram_synth.m`: Synthetic interferometric fringe pattern generator for simulated Twyman-Green and Mach-Zehnder setups.

### 05. Results & Visual Verification
- Analytically derived and numerically confirmed exact algebraic transformation relations for primary Seidel aberrations:
  - Defocus: $c'_4(s) = s^2 c_4 + \sqrt{3}(s^2 - s^4) c_{11}$
  - Spherical Aberration: $c'_{11}(s) = s^4 c_{11}$
- Visualized 2D and 3D false-color wavefront deformation maps showing residual error escalation as pupil stop scaling $s \to 0.5$.
- Simulated corresponding Point Spread Functions (PSF) demonstrating peak intensity reduction and diffraction ring energy broadening.

### 06. Further Work
- Extending the algorithm from concentric circular apertures to off-axis decentered pupils and elliptical apertures using Lukosz and elliptical Zernike polynomials.
- Compiling an interactive HTML5 Canvas / WebGL client-side simulation demonstrating real-time Zernike phase surface deformation under interactive slider controls.

### 07. Resources
- **Repository:** `[TODO: Insert link to Zernike Analyzer repository]`
- **Project Report:** `[TODO: Insert link to IISER Berhampur Summer 2025 Report]`
