# Additional exercises 2

## Exercise

Let $f(x) = (x,x^2,x^3)$ and $g(x,y,z) = x + y -z$.
Identify the domain and codomain of $f$, $g$. Determine if $f\circ g$ and $g\circ f$ are well defined. If it is well defined then write the function explicitly and determine the domain and codomain.

## Exercise

Let $f(x,y) = x^2 + 5xy + \ln y$.
Compute the partial derivatives $\frac{\partial f}{\partial x}$, $\frac{\partial f}{\partial y}$.

## Exercise

Let $f(x,y) = x^3 + 5 + e^{xy}$.
Calculate $\nabla f$, the gradient of $f$.

## Exercise

Determine the directional derivative, $D_vf(−1,4,6)$ for $f(x,y,z) = e^{xy^2}+4zy^3$ in the direction of $v = (2,−3,6)$.

## Exercise

Compute the Jacobian matrix of the transformation

$$
(u,v) \mapsto (e^u \cos v, e^u \sin v).
$$

## Exercise

Consider the functions,

$$
\boldsymbol{\alpha}: [0,\infty) \to \mathbb{R}^2; \quad t \mapsto (t \cos t, t \sin t),
$$

$$
f: \mathbb{R}^2 \to \mathbb{R}; \quad (x,y) \mapsto 3x^2 + y^2.
$$

Let $g = f \circ \boldsymbol{\alpha}$. Calculate $g^\prime$ both by using the chain rule and by first calculating $g$ and then differentiating and confirm that the answer is the same using either method.
_Out of curiosity, try to understand what curve $\alpha(t)$ traces out as $t$ varies._

<!-- ## Exercise

Let

$$
f: (u,v) \mapsto (u \cos v, u \sin v),
$$

$$
g: (x,y) \mapsto (x^2 + y^2, x),
$$

and let $h = g \circ f$.
Calculate $h$ and the Jacobians $Df$, $Dg$. Calculate $D h$, the Jacobian of $h$, both directly from the formula from $h$ and by the chain rule for Jacobians. -->

## Exercise

Let $f$ be defined, for $(x,y)\neq (0,0)$, as

$$
    f(x,y) = \frac{x y}{x^2 + y^2},
$$

and $f(x,y) = 0$. Calculate the 4 missing values in the following table, assuming that $t= \neq 0$.

| line       | value         |
| ---------- | ------------- |
| $\{x=0\}$  | $f(0,t) =$ ?  |
| $\{y=0\}$  | $f(t,0) =$ ?  |
| $\{x=y\}$  | $f(t,t) =$ ?  |
| $\{x=-y\}$ | $f(t,-t) =$ ? |

What does this say about $f$ when approaching $(0,0)$ along these different lines?

## Exercise

Consider the surface $x^2 + y^2 - z^2 = 1$.
Verify that the point $(1,1,1)$ is contained in the surface.
Find the tangent plane to this surface at this point.

_Hint: write this surface as a level set $\{ (x,y,z) : f(x,y,z) = c\}$, calculate $\nabla f$ at the specified point and use the known connection between gradient and tangent plane._

<style scoped>
h1 {
    counter-reset: h2
}
h2:after {
    counter-increment: h2;
    content: "2." counter(h2) 
}
</style>
