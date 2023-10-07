#Math
# Basics
* An $\displaystyle n\times m$ matrix has $\displaystyle n$ rows and $\displaystyle m$ columns
	* $$
\begin{bmatrix}
a_{11} & \cdots   & a_{1m} \\
\vdots  & \ddots  & \vdots  \\
a_{n_{1}} & \cdots  & a_{nm}
\end{bmatrix}
$$

	* A system of linear equation's coefficient matrix would have $\displaystyle n$ equations and $\displaystyle m$ variables
* Elementary Row Operations
	* The following operations are the only ones allowed when solving systems by rref method
	1. Scale a row by a nonzero factor
	2. Swap rows
	3. Add multiple of one row to another row
* Reduced Row-Echelon (rref) Form
	* Requirements:
	1. The first nonzero entry must be a 1 in a nonzero row, called the leading 1/pivot
	2. If a column as a pivot, all other entries in the column must be 0
	3. All rows with pivots must contain a pivot above and to the left
	* E.g.:
	* $$
\begin{bmatrix}
0 & 1 & 0 & 3 & 5 \\
0 & 0 & 1 & 3 & 1 \\
0 & 0 & 0 & 0 & 0
\end{bmatrix}
$$
# Eigenvalues and Eigenvectors
* Cool way to solve 2x2 matrices quickly: https://www.youtube.com/watch?v=e50Bj7jn9IQ
	* $\displaystyle {\lambda}_{1},{\lambda}_{2}=m\pm\sqrt{ m^{2}-p },\,m=\frac{1}{2}\mathrm{Tr}(A),\,p=\det(A)$