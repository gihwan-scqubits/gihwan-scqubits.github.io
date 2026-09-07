---
title: "Hello, world"
subtitle: "What this blog is for"
tags: [meta]
math: true
---

This is a placeholder post so the blog machinery has something to render. It will be replaced.

The plan for this space: short, practical notes from the lab. Things like how to set up
a flux-modulation calibration, what to watch for when meshing a coplanar waveguide in
[Palace](https://github.com/awslabs/palace), or why a coupler design that looks fine in
a lumped model falls apart once the stray capacitances are included.

Equations render with KaTeX when a post sets `math: true` in its front matter. For example,
the transmon Hamiltonian in the charge basis,

$$
\hat H = 4E_C(\hat n - n_g)^2 - E_J \cos\hat\varphi,
$$

and inline math such as $E_J/E_C \sim 50$ work as expected. Code blocks are highlighted:

```python
import scqubits as scq

tmon = scq.Transmon(EJ=25.0, EC=0.3, ng=0.0, ncut=30)
print(tmon.eigenvals(evals_count=4))
```

Posts live in `_posts/` as Markdown files named `YYYY-MM-DD-slug.md`.
