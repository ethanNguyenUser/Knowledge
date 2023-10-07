#Math #Physics 
## $X\sim\text{Binomial}(n,p)$
A binomial random variable represents the number of successes out of $n$independent trials that each have a probability $p$ of success
* $p_X(x)={n\choose x}p^x(1-p)^{n-x},~x\in\{0,1,\ldots,n\}$
* $F_X(x) =$ 
- $M_X(t)=(1-p+pe^t)^n$
	This occurs because:
	1. $M_X(t)=\displaystyle\sum_{x=0}^ne^{tx}p_X(x)$
	2. $M_X(t)=\displaystyle\sum_{x=0}^ne^{tx}p^x(1-p)^{n-x}$
	3. $M_X(t)=\displaystyle\sum_{x=0}^n(e^tp)^x(1-p)^{n-x}$
	4. By Binomial theorem: $M_X(t)=(1-p+pe^t)^n$
* $\mathbb{E}[X]=np$
* $\text{var}(X) = np(1 - p)$
* A binomial distribution describes the number of successes when running $n$ independent trials where the probability of a success for each trial is $p$
## Spin Magnet System
* $\displaystyle g(N,s)=\frac{N!}{\left( \frac{1}{2}N+s \right)!\left( \frac{1}{2}N-s \right)!}=\frac{N!}{N_{\uparrow}!N_{\downarrow}!}$
	* $\displaystyle N$ is the number of magnets
	* $\displaystyle s$ is $\displaystyle \frac{N_{\uparrow}-N_{\downarrow}}{2}$, or half the spin-excess
* $\displaystyle g(N,s)\approx\left( \frac{2}{\pi N} \right)^{1/2}2^{N}e^{-2s^{2/N}}$
	* For $\displaystyle \frac{s}{N}\ll 1 \land N\gg 1$
* 