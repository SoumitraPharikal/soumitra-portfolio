# Research Dossier & Scientific Investigations
**Subject:** Soumitra Pharikal (IISER Berhampur)
**Classification:** Academic Research Portfolio
**Structure:** Part I (Supervised Research Internships) & Part II (Developing Research Questions & Reading Projects)

---

# PART I: SUPERVISED RESEARCH INTERNSHIPS

---

## RESEARCH-01: Open Cluster IC 1369 Photometry & Stellar Light Curves
- **Period:** Summer 2026
- **Host Institution:** Indian Centre for Space Physics (ICSP), Kolkata, India
- **Principal Investigator / Supervisor:** Dr. Devendra Bisht (Scientist / Faculty, ICSP Kolkata)
- **Primary Domain:** Observational Astronomy, Stellar Astrophysics, Precision Photometry
- **Key Methodologies & Tools:** `Python` (`Astropy`, `photutils`, `NumPy`, `Matplotlib`), `IRAF`, `SAOImage DS9`, `PARSEC` Isochrone Database
- **Project Report / Repository:** `[TODO: Add link to research report or GitHub repo when available]`

### 1. Context & Objectives
Open clusters serve as fundamental astrophysical laboratories for testing stellar evolution theories because member stars share approximately the same age, initial chemical composition, and distance from the Sun. IC 1369 is a moderately faint, distant open cluster located in the constellation Cygnus. The primary objectives of this research project were:
1. Conduct complete astronomical CCD image reduction, calibration, and artifact rejection on raw telescope observations.
2. Perform high-precision aperture and PSF-fitting photometry on dense stellar fields to obtain instrumental and standardized magnitudes across optical photometric passbands ($U, B, V, R, I$).
3. Extract time-series stellar light curves to isolate potential variable stars, eclipsing binaries, or pulsating members within the cluster field.
4. Derive fundamental cluster parameters (distance modulus, age $\tau$, reddening $E(B-V)$, and metallicity $Z$) by fitting theoretical PARSEC stellar isochrones to observed Color-Magnitude Diagrams (CMDs).

### 2. Methodological & Computational Framework
- **Data Reduction:** Pre-processing of raw FITS frames including bias subtraction, dark current correction, and flat-field normalization using `IRAF` tasks and automated `Astropy` scripts:
  $$I_{\text{calibrated}} = \frac{I_{\text{raw}} - \bar{I}_{\text{dark}} - \bar{I}_{\text{bias}}}{\bar{I}_{\text{flat}} - \bar{I}_{\text{bias}}}$$
- **Photometric Extraction:** Source detection via 2D Gaussian kernel convolution using `photutils.detection.DAOStarFinder`. Curve-of-growth analysis to establish optimal aperture radii ($r_{\text{aper}}$), inner sky annuli ($r_{\text{in}}$), and outer sky annuli ($r_{\text{out}}$).
- **Astrometric & Photometric Calibration:** World Coordinate System (WCS) solving and cross-matching detected stellar sources against Gaia and Pan-STARRS catalogs to calibrate zeropoint offsets.
- **Isochrone Fitting:** Parameter space exploration utilizing Padova/PARSEC evolutionary tracks to model cluster age, total absorption $A_V = R_V \cdot E(B-V)$, and distance modulus $(m - M)_0$.

### 3. Key Findings & Outcomes
- Extracted clean calibrated Color-Magnitude Diagrams ($V \text{ vs } B-V$ and $V \text{ vs } V-I$) identifying the cluster turn-off point and giant branch morphology.
- Generated light curves for candidate variable stars within the cluster field, establishing baseline photometric scatter bounds ($\sigma \sim 0.01\text{–}0.02\text{ mag}$).
- Formulated an automated, reproducible Python reduction pipeline bridging traditional `IRAF` routines with modern Python scientific frameworks.

---

## RESEARCH-02: Zernike Polynomials & Optical System Wavefront Aberrations
- **Period:** Summer 2025
- **Host Institution:** Department of Physical Sciences, IISER Berhampur, Odisha, India
- **Principal Investigator / Supervisor:** Dr. Vyas Akondi (Assistant Professor, Department of Physical Sciences, IISER Berhampur)
- **Primary Domain:** Physical Optics, Wavefront Sensing, Aberration Theory, Computational Optics
- **Key Methodologies & Tools:** `MATLAB`, Analytical Wavefront Decomposition, Numerical Matrix Inversion, 2D Phase Profiling
- **Project Report / Repository:** `[TODO: Add link to internship manuscript or MATLAB codebase]`

### 1. Context & Objectives
In classical and adaptive optics, optical phase distortions introduced by imperfect lenses, mirrors, or turbulent media degrade the ideal spherical or planar wavefront. Zernike circle polynomials $Z_n^m(\rho, \theta)$ form a complete orthogonal set over a unit disk, making them the standard mathematical basis for describing classical optical aberrations (such as defocus, astigmatism, coma, and spherical aberration).

The objectives of this investigation under Dr. Vyas Akondi were:
1. Analytically model and simulate 2D wavefront phase distortion functions $W(\rho, \theta)$ across varying radial orders $n$ and azimuthal frequencies $m$.
2. Investigate the numerical behavior of Zernike decomposition when pupil aperture sizes change or when optical systems suffer from pupil scaling and decentering.
3. Quantify modal cross-coupling effects and Phase Variance ($\sigma_{\Phi}^2$) across varying aperture stops.

### 2. Mathematical Formalism
The optical wavefront error $W(\rho, \theta)$ over a circular pupil of normalized radius $\rho \in [0, 1]$ and azimuthal angle $\theta \in [0, 2\pi)$ is represented as a linear combination of orthonormal Zernike polynomials:
$$W(\rho, \theta) = \sum_{n=0}^{\infty} \sum_{m=-n}^{n} c_n^m Z_n^m(\rho, \theta)$$
where the Zernike polynomials are defined as:
$$Z_n^m(\rho, \theta) = \begin{cases} N_n^m R_n^m(\rho) \cos(m\theta) & \text{for } m \ge 0 \\ N_n^m R_n^{|m|}(\rho) \sin(|m|\theta) & \text{for } m < 0 \end{cases}$$
The radial polynomial $R_n^{|m|}(\rho)$ is given by:
$$R_n^{|m|}(\rho) = \sum_{k=0}^{\frac{n - |m|}{2}} \frac{(-1)^k (n - k)!}{k! \left(\frac{n + |m|}{2} - k\right)! \left(\frac{n - |m|}{2} - k\right)!} \rho^{n - 2k}$$
with normalization factor $N_n^m = \sqrt{\frac{2(n+1)}{1 + \delta_{m0}}}$.

When an optical pupil is scaled from radius $R_1$ to $R_2$ ($s = R_2 / R_1 < 1$), the orthogonality of standard circle polynomials is broken over the new domain, requiring a linear transformation matrix $\mathbf{M}$ to re-expand the scaled coefficients:
$$\mathbf{c}' = \mathbf{M}(s) \mathbf{c}$$

### 3. Computational Implementation & Findings
- Constructed a MATLAB simulation suite generating high-resolution interferometric fringe patterns and 2D phase aberration topographies.
- Derived and numerically verified modal conversion matrices for lower- and higher-order aberrations (defocus $Z_2^0$, astigmatism $Z_2^{\pm 2}$, coma $Z_3^{\pm 1}$, and spherical aberration $Z_4^0$) as a function of pupil scaling parameter $s$.
- Demonstrated that pupil truncation induces severe energy leakage into lower-order radial modes, establishing the necessity of modal re-orthogonalization in optical testing setups.

---

## RESEARCH-03: Astronomy Research Trainee — University of Hawaii at Manoa
- **Period:** July 2025 – August 2025
- **Host Institution:** University of Hawaii at Manoa (Remote, United States)
- **Programme & Lead:** Intro2Astro (8-week intensive research training), led by Dr. Fei Dai (UH Manoa)
- **Associated Workshop:** Remote Participant, 2025 Caltech Sagan Summer Workshop
- **Primary Domain:** Observational Astronomy, Exoplanetary Science, Transit Photometry
- **Key Methodologies & Tools:** `Python` (`Astropy`, `Lightkurve`), `TESS`, `Gaia DR3`, `MAST Archive`, UNIX Shell Scripting Automation
- **Project Scope & Outcomes:**
  - Analyzed space-based observational datasets from the Transiting Exoplanet Survey Satellite (TESS), Gaia, and the Barbara A. Mikulski Archive for Space Telescopes (MAST).
  - Extracted planetary transit signatures and radial velocity patterns using automated Python pipelines.
  - Performed phase-folding on stellar light curves, detrending instrumental systematics, and constraining orbital periods and transit depths.

---

# PART II: DEVELOPING RESEARCH QUESTIONS & READING PROJECTS

---

## READING-01: Special Theory of Relativity
- **Period:** May 2025 – July 2025
- **Host Institution:** Department of Physical Sciences, IISER Berhampur
- **Faculty Mentor:** Dr. Sandeep Chatterjee (Assistant Professor, Physics, IISER Berhampur)
- **Primary Domain:** Relativistic Mechanics, Minkowski Spacetime, Tensor Formalism
- **Topics & Derivations Covered:**
  - Foundational postulates of special relativity and constancy of the speed of light $c$.
  - Algebraic derivation of Lorentz transformation equations and geometry of Minkowski spacetime $(\mathbb{R}^{1,3}, \eta_{\mu\nu})$.
  - Loss of absolute simultaneity, kinematic time dilation $\Delta t = \gamma \Delta \tau$, and Lorentz length contraction.
  - Energy-momentum four-vector formalism $P^\mu = (E/c, \mathbf{p})$ with invariant norm $P^\mu P_\mu = m_0^2 c^2$, and introductory tensorial notation for relativistic electrodynamics.
