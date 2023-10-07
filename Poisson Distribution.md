#Math 
## $X \sim \text{Poisson}(\lambda t)$
* A Poisson variable represents the number of occurrences of an event in $t$ units of time that has an average occurrence of $\lambda$ occurrences per unit time
* Analogous to binomial distributions in the discrete world
* The $\lambda$ below $=$ $\lambda t$
* $p_X(x) = e^{-\lambda}\frac{\lambda^x}{x!}, ~ x \in \{ 0, 1, 2, \ldots \}$
* $F_X(x) =$ 
* $M_X(t) = e^{\lambda(e^t - 1)}$
* $\mathbb{E}[X] = \lambda$
* $\text{var}(X) = \lambda$
## Example
* A radioactive particle emits a 10 photon every 5 seconds on average. What's the probability that no particles are emitted over the timespan of one second?
	* $\displaystyle \lambda=\frac{10}{5}=2{\rightarrow}p_{x}(0)=e^{-2}\frac{2^{0}}{0!}=\frac{1}{e^{2}}{\approx}0.135$
## Applications
* [[Poisson Scattering]]