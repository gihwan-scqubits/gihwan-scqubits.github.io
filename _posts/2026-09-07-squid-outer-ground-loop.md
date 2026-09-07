---
title: "The SQUID loop you forgot"
subtitle: "A flux-tunable transmon has two loops, not one. Why does only one of them seem to matter?"
tags: [circuit QED, notes]
math: true
---

Every flux-tunable transmon is drawn as a single SQUID loop threaded by a flux $$\Phi_e$$. But look at a real device and the ground plane closes a *second* loop around the whole qubit. By the circuit topology alone that loop looks just as able to tune the qubit. So why does nobody include it? I ran into this while modeling flux-noise dephasing in a SQUID coupler, where a realistic, gradiometric circuit model is needed to get the numbers right. It turned out to be a nice exercise in where lumped-element circuit models quietly break, and I found the resolution in a supplementary note of the gradiometric quarton coupler paper by Ye et al. [4].

<figure>
  <img src="{{ '/assets/img/blog/squid-outer-loop.png' | relative_url }}" alt="Four circuit diagrams of a flux-tunable transmon: the textbook SQUID, a micrograph, a naive two-loop model, and the corrected model with ground inductances">
  <figcaption><strong>a</strong>, The textbook flux-tunable transmon. <strong>b</strong>, A real one, with the SQUID flux $\Phi_e$ and the ground-plane loop flux $\Phi_e'$ marked. Micrograph from Sung et al. [1]. <strong>c</strong>, The naive way to add the outer loop, which is wrong. <strong>d</strong>, The right way: the ground path has inductance and carries a screening current.</figcaption>
</figure>

## The textbook loop

Start with Fig. a. One node flux $$\phi$$, two junctions with capacitances $$C_1, C_2$$ and Josephson energies $$E_{J1}, E_{J2}$$, a shunt $$C_S$$. I will write $$\varphi_0 \equiv \Phi_0/2\pi$$ for the reduced flux quantum. When the external flux is allowed to depend on time, the Lagrangian has to carry it in the kinetic terms too [2]:

$$
\begin{aligned}
\mathcal{L} &= \tfrac12 C_S \dot\phi^2 + \tfrac12 C_1 \big(\dot\phi + \dot\Phi_{e1}\big)^2 + \tfrac12 C_2 \big(\dot\phi - \dot\Phi_{e2}\big)^2 \\
&\quad + E_{J1}\cos\!\left(\frac{\phi + \Phi_{e1}}{\varphi_0}\right) + E_{J2}\cos\!\left(\frac{\phi - \Phi_{e2}}{\varphi_0}\right), \qquad \Phi_{e1} + \Phi_{e2} = \Phi_e .
\end{aligned}
$$

The last relation is fluxoid quantization. How the total $$\Phi_e$$ is split into the two branch fluxes $$\Phi_{e1}$$ and $$\Phi_{e2}$$ is a gauge choice. For static flux it is invisible: shifting $$\phi$$ moves flux from one junction to the other. For time-dependent flux the choice shows up as $$\dot\Phi$$ terms in the Hamiltonian [2, 3]. The convenient choice is the "irrotational" gauge, in which no term linear in $$\dot\Phi_e$$ survives. With $$C_q \equiv C_S + C_1 + C_2$$ and $$Q = \partial\mathcal{L}/\partial\dot\phi = C_q\dot\phi + C_1\dot\Phi_{e1} - C_2\dot\Phi_{e2}$$,

$$
\mathcal{H} = \frac{\big(Q - C_1\dot\Phi_{e1} + C_2\dot\Phi_{e2}\big)^2}{2C_q} - E_{J1}\cos(\cdots) - E_{J2}\cos(\cdots) + f(t),
$$

where $$f(t)$$ is a c-number that can be dropped. The cross term disappears exactly when $$C_1\dot\Phi_{e1} = C_2\dot\Phi_{e2}$$. Think of it as a voltage divider, since $$\dot\Phi$$ is a voltage. Combined with $$\Phi_{e1} + \Phi_{e2} = \Phi_e$$ this fixes the split:

$$
\Phi_{e1} = \frac{C_2}{C_1 + C_2}\,\Phi_e, \qquad \Phi_{e2} = \frac{C_1}{C_1 + C_2}\,\Phi_e,
$$

$$
\hat H = \frac{\hat Q^2}{2C_q} - E_{J1}\cos\!\left(\frac{\hat\phi + \frac{C_2}{C_1+C_2}\Phi_e}{\varphi_0}\right) - E_{J2}\cos\!\left(\frac{\hat\phi - \frac{C_1}{C_1+C_2}\Phi_e}{\varphi_0}\right). \tag{1}
$$

Each junction gets the fraction of flux weighted by the *other* junction's capacitance. (This treats $$C_S$$ as sitting outside the loop. Where the shunt capacitance physically sits changes the weights, which is the point of Ref. [3].)

## The loop you forgot

Now look at Fig. b. The two junctions connect the island to the ground plane at two points. Between those points the ground plane offers two paths: the short strip that closes the SQUID, and the long way around the island. Together they form a second loop, threaded by some flux $$\Phi_e'$$, and it contains the same two junctions. Nothing in the topology singles out $$\Phi_e$$ over $$\Phi_e'$$.

The obvious first thing anyone would try is Fig. c: draw the outer loop as a perfect wire, because ground is ground. Fluxoid quantization on the inner and outer loops then reads

$$
\Phi_{e1} + \Phi_{e2} = \Phi_e, \qquad -\Phi_{e1} - \Phi_{e2} = \Phi_e' \quad\Longrightarrow\quad \Phi_e + \Phi_e' = 0 \pmod{\Phi_0}.
$$

That says the two applied fluxes must always cancel, which is a contradiction: they are external knobs. The circuit is telling you something real, though. Take the two ground paths on their own. They form a closed superconducting ring with no junctions in it, and a ring with zero inductance can only hold an integer number of flux quanta.

## The missing physics: superconducting films have inductance

A real ring has inductance, and the mismatch is absorbed by a screening current. Fig. c threw that inductance away too early.

Zero resistance is not zero inductance. A superconducting film has the usual geometric inductance of any conductor, plus a kinetic inductance from the inertia of the Cooper pairs, set by the London penetration depth $$\lambda$$ and larger for thinner or dirtier films [6, 7]. For a wide aluminium ground plane both are picohenries, against nanohenries for a junction: tiny, but not zero. The inductance also adds a node. In Fig. c the ground paths are shorted, so two loop constraints act on one node flux. With inductance, the point where the ground paths meet junction 1 becomes its own node $$\phi'$$, the degree of freedom the equations were missing.

Fig. d keeps that inductance. Give the inner ground path an inductance $$L$$ and the outer path $$L'$$, and allocate the external fluxes to the inductors. The inductive energy is

$$
U_L(\phi') = \frac{(\phi' + \Phi_e)^2}{2L} + \frac{(\phi' - \Phi_e')^2}{2L'} .
$$

Because $$E_L \gg E_J$$ for any sensible ground plane, the mode associated with $$\phi'$$ sits far above the qubit in frequency. It follows any change of flux adiabatically, with a negligible rate of nonadiabatic transitions, so we can replace $$\phi'$$ by its equilibrium value and skip the gauge subtleties for this node. (This stops being safe once $$E_J$$ grows comparable to $$E_L$$, as it can with very large junctions.) The minimum of $$U_L$$ is at

$$
\phi'_{\min} = \frac{L\,\Phi_e' - L'\,\Phi_e}{L + L'}, \qquad I_{\text{circ}} = \frac{\Phi_e + \Phi_e'}{L + L'} .
$$

The second expression is the screening current in the ring, which is exactly what the naive model was missing. Junction 1 now sees the phase $$\phi - \phi'_{\min}$$ and junction 2 sees $$\phi$$, so the SQUID as a whole is threaded by an *effective* flux

$$
\Phi_{\text{eff}} \equiv -\phi'_{\min} = \frac{L'\,\Phi_e - L\,\Phi_e'}{L + L'} .
$$

Everything else goes through as before. Redistribute $$\Phi_{\text{eff}}$$ between the junctions with the same capacitance weights and you get Eq. (1) with $$\Phi_e \to \Phi_{\text{eff}}$$:

$$
\hat H = \frac{\hat Q^2}{2C_q} - E_{J1}\cos\!\left(\frac{\hat\phi + \frac{C_2}{C_1+C_2}\Phi_{\text{eff}}}{\varphi_0}\right) - E_{J2}\cos\!\left(\frac{\hat\phi - \frac{C_1}{C_1+C_2}\Phi_{\text{eff}}}{\varphi_0}\right). \tag{2}
$$

The limits are the answer to the question in the title.

- **$$L \ll L'$$.** $$\Phi_{\text{eff}} \to \Phi_e$$, the textbook result. This is the usual situation: the inner ground strip is a few micrometres long, the outer path goes around the whole island. The stiff inner loop pins the flux, and that is why nobody draws $$\Phi_e'$$.
- **$$L' \ll L$$.** $$\Phi_{\text{eff}} \to -\Phi_e'$$. Now the outer loop is the stiff one and the roles swap.
- **$$L = L'$$.** $$\Phi_{\text{eff}} = (\Phi_e - \Phi_e')/2$$. Only the *difference* of the two fluxes matters, and only half of it. This is a gradiometric SQUID: a uniform field that threads both loops equally does nothing, which is the whole point of gradiometric transmons [5] and couplers [4]. The factor of one half is the price.

One more thing worth noticing. For $$L \ll L'$$ the correction is $$\Phi_{\text{eff}} \approx \Phi_e - (L/L')\,(\Phi_e + \Phi_e')$$. The suppression is only $$L/L'$$, and the outer loop encloses the entire qubit pocket, so in a uniform stray field $$\Phi_e'$$ can be hundreds of times larger than $$\Phi_e$$. "Negligible" is a claim about a product, and it is worth checking for your geometry.

## Where this comes from

The two-loop analysis above is a stripped-down version of Supplementary Note 1, "Flux analysis and calibration", of Ye et al. [4]. They include the loops through ground in their quarton coupler circuit by treating the ground path as an inductor with energy $$E_L$$, minimize over the ground node, and find that the junction is biased by half the differential ground-loop flux, $$\tilde\phi_{g\Delta}/2$$. That is the $$L = L'$$ case. The time-dependent flux allocation is from You, Sauls, and Koch [2]; Riwar and DiVincenzo [3] explain why the allocation is ultimately a question about geometry, not topology.

## References

1. Y. Sung et al., *Realization of high-fidelity CZ and ZZ-free iSWAP gates with a tunable coupler*, [Phys. Rev. X **11**, 021058 (2021)](https://doi.org/10.1103/PhysRevX.11.021058).
2. X. You, J. A. Sauls, and J. Koch, *Circuit quantization in the presence of time-dependent external flux*, [Phys. Rev. B **99**, 174512 (2019)](https://doi.org/10.1103/PhysRevB.99.174512).
3. R.-P. Riwar and D. P. DiVincenzo, *Circuit quantization with time-dependent magnetic fields for realistic geometries*, [npj Quantum Inf. **8**, 36 (2022)](https://doi.org/10.1038/s41534-022-00539-x).
4. Y. Ye et al., *Near-ultrastrong nonlinear light-matter coupling in superconducting circuits*, [Nat. Commun. (2025)](https://doi.org/10.1038/s41467-025-59152-z), Supplementary Note 1.
5. J. Braumüller et al., *Concentric transmon qubit featuring fast tunability and an anharmonicity*, [Appl. Phys. Lett. **108**, 032601 (2016)](https://doi.org/10.1063/1.4940230).
6. M. Tinkham, *Introduction to Superconductivity*, 2nd ed. (McGraw-Hill, 1996), Chap. 3.
7. R. Meservey and P. M. Tedrow, *Measurements of the kinetic inductance of superconducting linear structures*, [J. Appl. Phys. **40**, 2028 (1969)](https://doi.org/10.1063/1.1657905).
