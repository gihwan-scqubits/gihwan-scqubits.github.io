---
title: "The SQUID loop you forgot"
subtitle: "A flux-tunable transmon has two loops, not one. Why does only one of them seem to matter?"
tags: [circuit QED, notes]
math: true
thumb: /assets/img/blog/squid-outer-loop-thumb.png
---

Every flux-tunable transmon is drawn as a single SQUID loop threaded by a flux $$\Phi_e$$. In a real device the ground plane closes a *second* loop around the whole qubit, and by topology alone it looks just as able to tune the qubit. So why does nobody include it? I ran into this while modeling flux-noise dephasing in a SQUID coupler, where a realistic, gradiometric circuit model is needed to get the numbers right, and found the resolution in a supplementary note of the gradiometric quarton coupler paper by Ye et al. [4].

<figure>
  <img src="{{ '/assets/img/blog/squid-outer-loop.png' | relative_url }}" alt="Four circuit diagrams of a flux-tunable transmon: the textbook SQUID, a micrograph, a naive two-loop model, and the corrected model with ground inductances">
  <figcaption><strong>a</strong>, The textbook flux-tunable transmon. <strong>b</strong>, A real one, with the SQUID flux $\Phi_e$ and the ground-plane loop flux $\Phi_e'$ marked. Micrograph from Sung et al. [1]. <strong>c</strong>, The naive way to add the outer loop, which is wrong. <strong>d</strong>, The right way: the ground path has inductance and carries a screening current.</figcaption>
</figure>

## The textbook loop

Fig. a has one node flux $$\phi$$, two junctions with capacitances $$C_1, C_2$$ and Josephson energies $$E_{J1}, E_{J2}$$, and a shunt $$C_S$$. With $$\varphi_0 \equiv \Phi_0/2\pi$$, and with the external flux allowed to depend on time so that it enters the kinetic terms too [2],

$$
\begin{aligned}
\mathcal{L} &= \tfrac12 C_S \dot\phi^2 + \tfrac12 C_1 \big(\dot\phi + \dot\Phi_{e1}\big)^2 + \tfrac12 C_2 \big(\dot\phi - \dot\Phi_{e2}\big)^2 \\
&\quad + E_{J1}\cos\!\left(\frac{\phi + \Phi_{e1}}{\varphi_0}\right) + E_{J2}\cos\!\left(\frac{\phi - \Phi_{e2}}{\varphi_0}\right), \qquad \Phi_{e1} + \Phi_{e2} = \Phi_e .
\end{aligned}
$$

The last relation is fluxoid quantization. How $$\Phi_e$$ is split between the two junctions is a gauge choice: invisible for static flux, since shifting $$\phi$$ moves flux from one junction to the other, but visible as $$\dot\Phi$$ terms in the Hamiltonian when the flux varies [2, 3]. The convenient choice is the "irrotational" gauge, in which no term linear in $$\dot\Phi_e$$ survives. With $$C_q \equiv C_S + C_1 + C_2$$ and $$Q = \partial\mathcal{L}/\partial\dot\phi = C_q\dot\phi + C_1\dot\Phi_{e1} - C_2\dot\Phi_{e2}$$,

$$
\mathcal{H} = \frac{\big(Q - C_1\dot\Phi_{e1} + C_2\dot\Phi_{e2}\big)^2}{2C_q} - E_{J1}\cos(\cdots) - E_{J2}\cos(\cdots) + f(t),
$$

where $$f(t)$$ depends only on time and can be dropped. The cross term vanishes when $$C_1\dot\Phi_{e1} = C_2\dot\Phi_{e2}$$, a voltage-divider condition since $$\dot\Phi$$ is a voltage. Together with $$\Phi_{e1} + \Phi_{e2} = \Phi_e$$,

$$
\Phi_{e1} = \frac{C_2}{C_1 + C_2}\,\Phi_e, \qquad \Phi_{e2} = \frac{C_1}{C_1 + C_2}\,\Phi_e,
$$

$$
\hat H = \frac{\hat Q^2}{2C_q} - E_{J1}\cos\!\left(\frac{\hat\phi + \frac{C_2}{C_1+C_2}\Phi_e}{\varphi_0}\right) - E_{J2}\cos\!\left(\frac{\hat\phi - \frac{C_1}{C_1+C_2}\Phi_e}{\varphi_0}\right). \tag{1}
$$

Each junction gets the flux fraction weighted by the *other* junction's capacitance. This treats $$C_S$$ as outside the loop; where the shunt physically sits changes the weights, which is the point of Ref. [3].

## The loop you forgot

In Fig. b the two junctions meet the ground plane at two points, and the ground plane connects them two ways: the short strip that closes the SQUID, and the long way around the island. That is a second loop, threaded by a flux $$\Phi_e'$$, containing the same two junctions. Nothing in the topology singles out $$\Phi_e$$ over $$\Phi_e'$$.

The obvious first thing anyone would try is Fig. c: draw the outer loop as a perfect wire, because ground is ground. Fluxoid quantization on the two loops then gives

$$
\Phi_{e1} + \Phi_{e2} = \Phi_e, \qquad -\Phi_{e1} - \Phi_{e2} = \Phi_e' \quad\Longrightarrow\quad \Phi_e + \Phi_e' = 0 \pmod{\Phi_0},
$$

a contradiction, since the two applied fluxes are set externally and independently. What the circuit is really saying: the two ground paths form a closed superconducting ring with no junctions, and a ring with zero inductance can only hold an integer number of flux quanta.

## The missing physics: superconducting films have inductance

A real ring has inductance, and a screening current absorbs the mismatch. Fig. c threw that inductance away too early.

Zero resistance is not zero inductance. A superconducting film has the geometric inductance of any conductor plus a kinetic inductance from the inertia of the Cooper pairs, set by the London penetration depth $$\lambda$$ and larger for thinner or dirtier films [6, 7]. For a wide aluminium ground plane both are picohenries, against nanohenries for a junction: tiny, but not zero. The inductance also adds a node. In Fig. c two loop constraints act on one node flux; with inductance, the point where the ground paths meet junction 1 becomes its own node $$\phi'$$, the degree of freedom the equations were missing.

Fig. d includes it. Give the inner ground path an inductance $$L$$ and the outer path $$L'$$, and allocate the external fluxes to the inductors:

$$
U_L(\phi') = \frac{(\phi' + \Phi_e)^2}{2L} + \frac{(\phi' - \Phi_e')^2}{2L'} .
$$

Because $$E_L \gg E_J$$, the $$\phi'$$ mode sits far above the qubit in frequency and follows any flux change adiabatically, so we can replace it by its equilibrium value and skip the gauge subtleties for this node. (This stops being safe once $$E_J$$ becomes comparable to $$E_L$$, as it can with very large junctions.) Minimizing $$U_L$$,

$$
\phi'_{\min} = \frac{L\,\Phi_e' - L'\,\Phi_e}{L + L'}, \qquad I_{\text{circ}} = \frac{\Phi_e + \Phi_e'}{L + L'} ,
$$

where $$I_{\text{circ}}$$ is the screening current in the ring. Junction 1 now sees $$\phi - \phi'_{\min}$$ and junction 2 sees $$\phi$$, so the SQUID is threaded by an *effective* flux

$$
\Phi_{\text{eff}} \equiv -\phi'_{\min} = \frac{L'\,\Phi_e - L\,\Phi_e'}{L + L'} .
$$

Redistributing $$\Phi_{\text{eff}}$$ between the junctions with the same capacitance weights gives Eq. (1) with $$\Phi_e \to \Phi_{\text{eff}}$$:

$$
\hat H = \frac{\hat Q^2}{2C_q} - E_{J1}\cos\!\left(\frac{\hat\phi + \frac{C_2}{C_1+C_2}\Phi_{\text{eff}}}{\varphi_0}\right) - E_{J2}\cos\!\left(\frac{\hat\phi - \frac{C_1}{C_1+C_2}\Phi_{\text{eff}}}{\varphi_0}\right). \tag{2}
$$

The limits answer the question in the title.

- **$$L \ll L'$$.** $$\Phi_{\text{eff}} \to \Phi_e$$, the textbook result. This is the usual case: the inner ground strip is a few micrometres long, the outer path goes around the whole island, and the loop with the smaller inductance sets the flux. That is why nobody draws $$\Phi_e'$$.
- **$$L' \ll L$$.** $$\Phi_{\text{eff}} \to -\Phi_e'$$. The roles swap.
- **$$L = L'$$.** $$\Phi_{\text{eff}} = (\Phi_e - \Phi_e')/2$$. Only the *difference* matters, and only half of it. This is a gradiometric SQUID: a uniform field does nothing, which is the point of gradiometric transmons [5] and couplers [4].

For $$L \ll L'$$ the correction is $$\Phi_{\text{eff}} \approx \Phi_e - (L/L')\,(\Phi_e + \Phi_e')$$. The suppression is only $$L/L'$$, and the outer loop encloses the entire qubit pocket, so in a uniform stray field $$\Phi_e'$$ can be hundreds of times larger than $$\Phi_e$$. Whether the product is negligible depends on the geometry.

The lesson: model the ground loops explicitly whenever they can matter. Eq. (2) is no harder to use than Eq. (1). This applies above all to dephasing, since flux noise couples through every loop, each with its own area and inductance, and the sensitivity $$\partial\omega/\partial\Phi$$ that sets the dephasing rate must be taken with respect to $$\Phi_{\text{eff}}$$, not the SQUID flux alone.

## Where this comes from

The two-loop analysis is a stripped-down version of Supplementary Note 1, "Flux analysis and calibration", of Ye et al. [4], who treat the ground path as an inductor with energy $$E_L$$, minimize over the ground node, and find the junction biased by half the differential ground-loop flux, $$\tilde\phi_{g\Delta}/2$$: the $$L = L'$$ case above. The time-dependent flux allocation is from You, Sauls, and Koch [2]; Riwar and DiVincenzo [3] explain why the allocation is ultimately a question of geometry, not topology.

## References

1. Y. Sung et al., *Realization of high-fidelity CZ and ZZ-free iSWAP gates with a tunable coupler*, [Phys. Rev. X **11**, 021058 (2021)](https://doi.org/10.1103/PhysRevX.11.021058).
2. X. You, J. A. Sauls, and J. Koch, *Circuit quantization in the presence of time-dependent external flux*, [Phys. Rev. B **99**, 174512 (2019)](https://doi.org/10.1103/PhysRevB.99.174512).
3. R.-P. Riwar and D. P. DiVincenzo, *Circuit quantization with time-dependent magnetic fields for realistic geometries*, [npj Quantum Inf. **8**, 36 (2022)](https://doi.org/10.1038/s41534-022-00539-x).
4. Y. Ye et al., *Near-ultrastrong nonlinear light-matter coupling in superconducting circuits*, [Nat. Commun. (2025)](https://doi.org/10.1038/s41467-025-59152-z), Supplementary Note 1.
5. J. Braumüller et al., *Concentric transmon qubit featuring fast tunability and an anharmonicity*, [Appl. Phys. Lett. **108**, 032601 (2016)](https://doi.org/10.1063/1.4940230).
6. M. Tinkham, *Introduction to Superconductivity*, 2nd ed. (McGraw-Hill, 1996), Chap. 3.
7. R. Meservey and P. M. Tedrow, *Measurements of the kinetic inductance of superconducting linear structures*, [J. Appl. Phys. **40**, 2028 (1969)](https://doi.org/10.1063/1.1657905).
