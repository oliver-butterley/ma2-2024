# Additional exercises 5

<!--@include: notation.md-->


## Exercise

Evaluate the multiple integral $I = \iint_R f(x,y) \ dx dy$ by iterated integration, where:

1. $R = [0,1]\times [0,1]$, $f(x,y) = 27 xy(x+y)$
1. $R = [0,1]\times [0,1]$, $f(x,y) = 4x^3$
2. $R = [0,\pi/2]\times [0,\pi/2]$, $f(x,y) = 7 \sin(x+y)$.
3. $R = [0,1] \times [1,2]$, $f(x,y) = x e^{xy}$
4. $R = [0,1] \times [1,2]$, $f(x,y) = x e^{x-y}$

## Exercise

Let $R=[0,\pi]\times [0,\pi]$.

Evaluate the following  integral:

$$
    \iint_{R} {\left( \sin x  \sin y \right)}^2\ dx dy
$$


_Hint: integrals of the form $\iint_{R} f(x) g(y) \ dx dy$ are equal to the product of integrals._


## Exercise

Let $S\subset \mathbb{R}^2$ be the triangular region with vertices $(0,0)$,  $(\pi,0)$,  $(\pi,\pi)$.
Evaluate  integral

$$ \iint_{S} x \cos(x+y) \ dx dy . $$



## Exercise

Let  $S\subset \mathbb{R}^2$ be the region bounded by the curves $y=\sin x$ and the line segment $\{(x,0) : x\in [0,\pi] \}$.

Sketch $S$ and evaluate the integral
$$\iint_{S} (x^2 - y^2) \ dx dy .$$


## Exercise

Let  $S\subset \mathbb{R}^2$ be the region bounded by the four curves $x-2y+8=0,$ $x+3y+5 =0,$ $x=-2$ and $x=4$.
Sketch $S$ and find its centroid.

## Exercise

Find the center of mass of trapezoidal object with corners $(x,y)=(2,0)$, $(2,4)$, $(-4,-2)$ and $(-2,0)$ and density $\rho(x,y) = x^2 + y^2 + 1$.

## Exercise

Use polar coordinates to evaluate

$$
    \int_{0}^{1}  \left[\int_{0}^{x} \sqrt{x^2 + y^2} \ dy  \right] \ dx.
$$


_Hint_: $\int \sec^3 x \ dx = \frac{1}{2}( \sec x \tan x + \ln | \sec x + \tan x| ) +C.$ 



## Exercise

In this question we will evaluate the integral
$$
    I = \iiint_{V} 10x + 8y + 6z \ dx dy dz
$$
where the integral is over the half ellipsoid
$$
    V = \left\{(x,y,z) : \frac{x^2}{4} + y^2 + z^2 \leq 1, x \geq 0  \right\}   \subset \mathbb{R}^3.
$$

We choose a change of coordinates $x = r \cos \theta$, $y=\frac{1}{2} r \sin \theta$, $z=z$.

1. Find the Jacobian of this transformation.
2. Find the set of $(r,\theta,z)$ which corresponds to $V$.
3. Using these, evaluate the integral $I$.


## Exercise

The set  $V = \{(x,y,z): x^2 + y^2 \leq 4^2, 0\leq z \leq 4-\sqrt{x^2 + y^2}\}$ is a cone of height $4$ with base in the $xy$-plane.

The set  $W = \{(x,y,z): (x-2)^2 + y^2 \leq 4\}$ is a cylinder.

Find the volume of the set $D \subset \mathbb{R}^3$ which is the subset of the cone $V$ which is contained within the cylinder $W$.

_Hint_: Use polar coordinates $x=r\cos \theta$, $y=r\sin \theta$ to write the volume of $D$ as 
$$
    \iint_{T} r( a -r) \ dr d\theta.
$$
for some $a \in \bR$, $T \subset \bR^2$.

## Exercise

Let $V$ be the solid bounded above by the sphere $x^2 + y^2 + z^2 = 4$
and below by the cone
$z = \sqrt{x^2 + y^2}$.

Find the volume of $V$.









<style scoped>
h1 {
    counter-reset: h2
}
h2:after {
    counter-increment: h2;
    content: "5." counter(h2) 
}
</style>
