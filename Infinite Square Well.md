#Physics 
$$
U(x)=
\begin{cases}
0, & 0\leq x\leq L \\
\infty, & x<0\text{ or } x>L
\end{cases}
$$
* $\displaystyle L$ is the length of the square potential
## $\displaystyle \psi_{n}(x)=\sqrt{ \frac{2}{L} }\sin\left( \frac{n\pi x}{L} \right),~n=1,2,3,\ldots$
* $\displaystyle n$ is the energy level. It can't equal $\displaystyle 0$ because otherwise, normalization would not be satisfied, demonstrating [[Zero-Point Energy]]
* [Desmos Demo](https://www.desmos.com/calculator/mbsjmkpezu)
* As $\displaystyle n\rightarrow\infty$, the [[PDF]] approaches the classical case of a [[continuous uniform distribution]]
* Solutions for different $\displaystyle n$ are [[Orthogonality|orthogonal]] with respect to the [[Square Integrable Vector Space]]
## $\displaystyle E_{n}=\frac{n^{2}\pi ^{2}\hbar ^{2}}{2mL^{2}}$
* $\displaystyle E_{n}$ is the energy of the $\displaystyle n$th state of the function
## $\displaystyle f(x)=\sum_{n = 1}^{\infty}c_{n}\psi_{n}(x)$
* $\displaystyle c_{n}$ is a [[Wave Function Weighting Coefficient]]
## $\displaystyle \braket{ \psi_{m} | \psi_{n} }=\int \psi_{m}^{*}\psi_{n} \, \mathrm{d}x=\delta_{mn}$
* Dot product of wave functions of different energy levels in the infinite square well are [[Orthonormal]]
* $\displaystyle \delta_{mn}$ is the [[Kronecker Delta]]
# Parameter Values
## $\displaystyle {\left\langle{x}\right\rangle}=\frac{a}{2}$
## $\displaystyle {\left\langle{x^{2}}\right\rangle}=a^{2}\left( \frac{1}{3}-\frac{1}{2(n\pi)^{2}} \right)$
## $\displaystyle {\left\langle{p}\right\rangle}=0$
## $\displaystyle {\left\langle{p^{2}}\right\rangle}=\left( \frac{n\pi \hbar}{a} \right)^{2}$
## $\displaystyle \sigma ^{2}_{x}=\frac{a}{2}\sqrt{ \frac{1}{3}-\frac{2}{(n\pi)^{2}} }$
## $\displaystyle \sigma_{p}=\frac{n\pi \hbar}{a}$