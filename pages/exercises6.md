# Additional exercises 6

<!--@include: notation.md-->


## Exercise


Consider the parametric surface
$$\mathbf{r}(u,v) = (2u \cos v, 3u \sin v, u^2).$$
1. Write the equation for $x,y,z$ which describes this surface.
2. Find the fundamental vector product of $\mathbf{r}$.


## Exercise
Consider the parametric surface
$$\mathbf{r}(u,v) = ( (2+\cos u) \sin v, (2+\cos u) \cos v, \sin u).$$
1. Write the equation for $x,y,z$ which describes this surface.
2. Find the fundamental vector product of $\mathbf{r}$.


## Exercise
Let $S$ be the bounded portion of the paraboloid $x^2 + y^2 = 8z$ which is cut off by the plane $z=4$.
Sketch $S$ and choose a parametric representation of this surface.
_Hint_: a possible parametric representation is $\mathbf{r}(u,v)=(u \cos v, u \sin v, u^2/2)$, $(u,v) \in T$ for a suitable choice of $T \subset \mathbb{R}^2$.

Use this to compute the area of $S$.


## Exercise

Let $S$ denote the plane surface whose boundary is the triangle with vertices at $(1,0,0)$, $(0,1,0)$ and $(0,0,1)$.
Consider the vector field $\mathbf{f}(x,y,z)= 14 \left(\begin{smallmatrix}
	    x \\ y \\ z
	\end{smallmatrix}\right)$.

Compute the surface integral
$\iint_{S} \mathbf{f} \cdot \mathbf{n} \ dS$,
where $\mathbf{n}$ denotes the unit normal to $S$ which has positive $z$-component.


## Exercise

Consider the vector field
$$
    \mathbf{f}(x,y,z) =
    \begin{pmatrix}
	x^2 + yz \\ y^2 + xz \\ z^2 + xy
    \end{pmatrix}.
$$

Calculate the curl and divergence of $\mathbf{f}$ and find
$$
    (\nabla \times \mathbf{f})(1,2,3)
    \quad \textup{ and } \quad
    (\nabla \cdot \mathbf{f})(1,2,3).
$$

## Exercise
Consider the vector field
$$
\mathbf{f}(x,y,z)
=
\begin{pmatrix}
z + \sin y \\ -z + x \cos y \\ 0
\end{pmatrix}
.
$$


Calculate $(\nabla \times \mathbf{f})(7,\tfrac\pi2,3)$
and $(\nabla \cdot \mathbf{f})(7,\frac{\pi}{2},3)$.

## Exercise
Let 
$$
\mathbf{f}(x,y,z) :=\left(\begin{smallmatrix}
	    y \\ z \\ x
	\end{smallmatrix}\right)
$$
be a vector field.
Let $S$ be the portion of the paraboloid $z = 1 - x^2 - y^2$ with $z\geq 0$ and let $\mathbf{n}$ be the unit normal to $S$ with non-negative $z$-component.
Using Stokes' Theorem (to transform the surface integral to a line integral), evaluate
$\iint_{S} (\nabla \times \mathbf{f}) \cdot \mathbf{n} \ dS$.


## Exercise

Let $V\subset \mathbb{R}^3$ be the set of $(x,y,z)$ such that $x^2+y^2+z^2 \leq 25$ and $z\geq 3$.
This solid is bounded by a closed surface $S$ which is composed of two parts: Let $S_1$ denote the curved top part and let $S_2$ denote the planar part.

Consider the vector field 
$$ \mathbf{f}(x,y,z) :=  \left(\begin{smallmatrix}
	    xz \\ yz \\ 1
	\end{smallmatrix}\right)
.
$$

1. Evaluate the surface integral $\iint_{S_2}\mathbf{f}\cdot \mathbf{n} \ dS$.
2. Evaluate the multiple integral  $\iiint_{V} \nabla\cdot\mathbf{f} \ dxdydz$.
3. Evaluate the surface integral $\iint_{S_1} \mathbf{f}\cdot \mathbf{n} \ dS$.

## Exercise

Consider the surface $S = \left\{(x,y,z) : x^2 + y^2 =  z, z\leq 9\right\}$.
Find a parametric form for $S$ based on polar coordinates $x=r \cos \theta, \ y = r \sin \theta$, and find the associated fundamental vector product.

Use this to find the surface integral $\int_S \mathbf{f} \cdot \mathbf{n} \ dS$, 
where $\mathbf{f}$ is the vector field 
$$  \mathbf{f}(x,y,z) =
    \left(\begin{smallmatrix}
	    y^2 \\
	    0 \\
	    z
	\end{smallmatrix}\right)$$
and $\mathbf{n}$ is the unit normal to $S$ which has *positive* $z$-component.

## Exercise

Consider the the sphere $S = \{(x,y,z):x^2+y^2+z^2=1/4\}$
and the vector-field
$$
    \mathbf{f}(x,y,z) =
    \begin{pmatrix}
	2x^3 \\
	2y^3 \\
	2z^3
    \end{pmatrix}.
$$

Calculate $\iint_{S} \mathbf{f} \cdot \mathbf{n} \ dS$, where $\mathbf{n}$ is the outgoing unit normal on $S$.

_Hint_: Use Gauss's theorem to rewrite this as a volume integral.





<style scoped>
h1 {
    counter-reset: h2
}
h2:after {
    counter-increment: h2;
    content: "5." counter(h2) 
}
</style>
