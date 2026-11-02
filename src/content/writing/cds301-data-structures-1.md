---
title: "CDS301: Data Structures-I Compendium"
courseCode: "CDS301"
subject: "Data Structures & Computational Complexity"
date: "Autumn 2026"
typesetEngine: "pdfLaTeX / minted / Algorithm2e"
pdfPath: "[TODO: Add PDF path for CDS301_Data_Structures_1.pdf]"
pageCount: 38
topicsCovered:
  - "Pointers, memory layout, stack vs heap allocation, and memory management in C"
  - "Linear structures: linked lists, circular buffers, and array-backed queues"
  - "Hierarchical structures: binary search trees, AVL self-balancing trees, and heaps"
  - "Graph representations: adjacency matrices vs lists and traversal algorithms"
  - "Asymptotic complexity analysis: Big-O, Big-Omega, Big-Theta, and master recurrences"
  - "Sorting algorithms: Quicksort partitioning, Mergesort, and Heapsort implementations"
featured: true
order: 5
---

## Overview

Reference handbook and computational monograph for `CDS301: Programming and Data Structures I` at the Center for Computational and Data Sciences, IISER Berhampur. Covers pointer-level memory models in C, algorithmic time-space complexity, and balanced data structure operations.

## Core Implementations & Complexity

### Pointer Memory Layout & Asymptotic Bounds
Memory in modern systems is addressed linearly, with call stacks growing toward the heap. Complexity metrics adhere to formal definitions:

$$f(n) = \mathcal{O}(g(n)) \iff \exists c > 0, n_0 > 0 \text{ such that } |f(n)| \le c |g(n)| \quad \forall n \ge n_0$$

### Master Theorem for Divide-and-Conquer Recurrences
For recurrences of the form $T(n) = a T(n/b) + f(n)$:

$$c_{\text{crit}} = \log_b a$$

- If $f(n) = \mathcal{O}(n^{c_{\text{crit}} - \epsilon})$, then $T(n) = \Theta(n^{\log_b a})$.
- If $f(n) = \Theta(n^{c_{\text{crit}}} \log^k n)$, then $T(n) = \Theta(n^{\log_b a} \log^{k+1} n)$.
- If $f(n) = \Omega(n^{c_{\text{crit}} + \epsilon})$, then $T(n) = \Theta(f(n))$.

### Self-Balancing AVL Trees
Height balance invariant ensures $|h(T_{\text{left}}) - h(T_{\text{right}})| \le 1$. Restored via four canonical rotation cases: Left-Left, Right-Right, Left-Right, and Right-Left, guaranteeing $\mathcal{O}(\log n)$ lookup, insertion, and deletion.

---

## Download & Resource Access
- **Download PDF Compendium:** Available upon academic request.
- **Reference Code Repository:** C and Python benchmark scripts available on GitHub.
