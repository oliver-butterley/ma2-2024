<!--@include: ./pages/notation.md-->

::: warning
Draft text ⚠️
:::

# Extrema & other applications

See also the [additional exercises](/pages/exercises3) associated to this part of the course.

In the previous chapter we introduced various notions of differentials for higher dimensional functions (scalar fields, vector
fields, paths, etc.). In this chapter we now explore various applications of these notions and work with some of the implementations, rather than just the objects. Firstly we will consider certain partial differential equations which we now have the tools to solve. Then the majority of the chapter is devoted to searching for extrema (minima / maxima) in various different scenarios. This extends what we already know for functions in $\bR$ and we will find that in higher dimensions many more possibilities and subtleties exist.

## Partial differential equations

There are a huge number of different types of partial differential equations (PDEs) and here we consider just two types, _first order linear PDEs_ and the _1D wave equation_. We start by consider an example of the first type.

Find all solutions of the PDE,
$$3 \tfrac{\partial f}{\partial x}(x,y) + 2 \tfrac{\partial f}{\partial y} (x,y) = 0.$$

The given PDE is equivalent to

$$
\left( \begin{smallmatrix}
            3 \\ 2
        \end{smallmatrix} \right)
    \cdot
    \nabla f(x,y) =0.
$$

We can also phrase this in terms of the directional derivative, namely

$$
D_{\mathbf{v}}f(x,y) = 0 \quad \text{where \(\mathbf{v}=\left( \begin{smallmatrix}
                3 \\ 2
            \end{smallmatrix} \right)\)}.
$$

This means that if a function $f$ is a solution to the PDE then it is constant in the
direction $\left( \begin{smallmatrix}
            3 \\ 2
        \end{smallmatrix} \right)$. This means that all solutions have
the form $f(x,y) = g(2x-3y)$ for some $g:\bR \to \bR$.

The same idea as used for the above example gives the following general
result.
Let $g:\bR\to\bR$ be differentiable, $a,b\in \bR$, $(a,b)\neq (0,0)$. If
$f(x,y)= g(bx-ay)$ then
$$a \tfrac{\partial f}{\partial x} (x,y) + b \tfrac{\partial f}{\partial y} (x,y) = 0.$$
Conversely, every $f$ which satisfies this equation is of the form
$g(bx-ay)$.

First we prove **($\Rightarrow$)**. If $f(x,y)= g(bx-ay)$
then, by the chain rule,

$$
\partial_x f(x,y) = bg'(bx-ay), \quad \partial_y f(x,y) = -ag'(bx-ay).
$$

Consequently
$$a\partial_x f(x,y) + b \partial_y f(x,y) = a bg'(bx-ay) - abg'(bx-ay) = 0.$$
Now we prove **($\Leftarrow$)**. It's convenient to work in
coordinates which correspond to the lines along which the solutions are
constant. Let

$$
\left(\begin{smallmatrix}
            u\\ v
        \end{smallmatrix}\right)
    = \left(\begin{smallmatrix}
            a & b \\ b & -a
        \end{smallmatrix}\right)
    \left(\begin{smallmatrix}
            x \\ y
        \end{smallmatrix}\right).
$$

This means that
$\left(\begin{smallmatrix}
            x\\ y
        \end{smallmatrix}\right)
    = \frac{-1}{a^2 + b^2} \left(\begin{smallmatrix}
            a & b \\ b & -a
        \end{smallmatrix}\right)
    \left(\begin{smallmatrix}
            u \\ v
        \end{smallmatrix}\right)$.
Let

$$
h(u,v)=f\left(\frac{au + bv}{a^2 + b^2}, \frac{bu-av}{a^2+b^2}\right).
$$

We
calculate that

$$
\partial_u h(u,v)
        = \tfrac{1}{{a^2 + b^2}}
        \left( a \partial_x f
        + b \partial_y f \right)  (au + bv, bu-av) = 0.
$$

Namely,
$h(u,v)$ is a function of $v$ only and does not depend on $u$ so we take $g(v) = h(u,v)$ and so $f(x,y) = g(bx-ay)$.

Now we look at another type of PDE. The [1D wave equation](https://en.wikipedia.org/wiki/Wave_equation) is

$$
\frac{\partial^2 f}{\partial x^2}(x,t) = c^2  \frac{\partial^2 f}{\partial t^2}(x,t).
$$

Here $x$ represents the position along string, $t$ is time and $f(x,t)$ is the displacement of the string from the centre at position $x$, at time $t$. The constant $c$ is a fixed parameter depending on the string.

This partial differential equation is derived from the equation of motion $F = m a$ where $F$ is the tension in the string, $a$ is the acceleration from horizontal and $m$ is the mass of a little piece of the string. The equation is valid for small displacement. In this case the _boundary conditions_ are natural: Are the ends of the string fixed? Is only one end fixed? At time $t=0$, is the string already moving?

::: tip Theorem
Let $F$ be a twice differentiable function and $G$ a differentiable function.
The function defined as

$$
f(x,t) = \frac{1}{2}(F(x+ct) + F(x-ct)) + \frac{1}{2c} \int_{x-ct}^{x+ct} G(s) \ ds
$$

satisfies
$\frac{\partial^2 f}{\partial x^2}(x,t) = c^2  \frac{\partial^2 f}{\partial t^2}(x,t)$,
$f(x,0) = F(x)$ and $\frac{\partial f}{\partial t}(x,0) = G(x)$.

Conversely, if a solution of
$$\frac{\partial^2 f}{\partial x^2}(x,t) = c^2  \frac{\partial^2 f}{\partial t^2}(x,t)$$
satisfies
$\frac{\partial^2 f}{\partial x \partial t} = \frac{\partial^2 f}{\partial t \partial x}$,
then it has the above
form.

:::

Let $f(x,t)$ be as defined in the statement of the theorem. We calculate the
partial derivatives

$$
\begin{aligned}
    \tfrac{\partial f}{\partial x} (x,t)
        & = \tfrac{1}{2} \left(F'(x+ct) + F'(x-ct)\right)          \\
        & \quad\quad\quad
    + \tfrac{1}{2c}\left(G(x+ct) - G(x-ct)\right)               \\
    \tfrac{\partial^2 f}{\partial x^2}(x,t)
        & = \tfrac{1}{2} \left(F''(x+ct) + F''(x-ct)\right)        \\
        & \quad\quad\quad
    + \tfrac{1}{2c}\left(G'(x+ct) - G'(x-ct)\right)             \\
    \tfrac{\partial f}{\partial t} (x,t)
        & = \tfrac{1}{2} \left(cF'(x+ct) - c F'(x-ct)\right)       \\
        & \quad\quad\quad
    + \tfrac{1}{2}\left(G(x+ct) + G(x-ct)\right)                \\
    \tfrac{\partial^2 f}{\partial t^2} f(x,t)
        & = \tfrac{1}{2} \left(c^2F''(x+ct) + c^2 F''(x-ct)\right) \\
        & \quad\quad\quad
    + \tfrac{c}{2}\left(G'(x+ct) + G'(x-ct)\right).
    \end{aligned}
$$

From this calculation we see that
$\frac{\partial^2 f}{\partial x^2}(x,t) = c^2  \frac{\partial^2 f}{\partial t^2}(x,t)$.
Additionally we have $f(x,0) = F(x)$ and
$\frac{\partial f}{\partial t}(x,0) = G(x)$.

Suppose that $f$ satisfies the 1D wave equation; Introduce $u = x + ct$,
$v=x-ct$ and observe that $x = \frac{u+v}{2}$, $t=\frac{u-v}{2c}$.
Define $g(u,v) = f(   \frac{u+v}{2} , \frac{u-v}{2c} )$.
By the chain
rule

$$
\begin{aligned}
    \tfrac{\partial g}{\partial u}(u,v)
        & = \tfrac{1}{2} \tfrac{\partial f}{\partial x}(   \tfrac{u+v}{2} , \tfrac{u-v}{2c} )
    + \tfrac{1}{2c} \tfrac{\partial f}{\partial t}(   \tfrac{u+v}{2} , \tfrac{u-v}{2c} ),                     \\
    \tfrac{\partial^2 g}{\partial v \partial u}(u,v)
        & = \tfrac{1}{4} \tfrac{\partial^2 f}{\partial x^2}(   \tfrac{u+v}{2} , \tfrac{u-v}{2c} )
    - \tfrac{1}{4c} \tfrac{\partial^2 f}{\partial x\partial t}(   \tfrac{u+v}{2} , \tfrac{u-v}{2c} )          \\
        & \ \ +  \tfrac{1}{4c} \tfrac{\partial^2 f}{\partial x \partial t}(   \tfrac{u+v}{2} , \tfrac{u-v}{2c} )
    -  \tfrac{1}{4c^2} \tfrac{\partial^2 f}{\partial t^2}(   \tfrac{u+v}{2} , \tfrac{u-v}{2c} ) = 0.
\end{aligned}
$$

Since the second derivative is zero we know that $\tfrac{\partial g}{\partial u}$ is constant in $v$, therefore we can
write $\tfrac{\partial g}{\partial u}(u,v) = \varphi_0(u)$. In turn this means we can write $g(u,v) = \varphi_1(u) + \varphi_2(v)$. I.e., $f(x,t) = \varphi_1(x+ct) + \varphi_2(x-ct)$. Let

$$
F(x) = \varphi_1(x) + \varphi_2(x).
$$

This means that $F'(x) = \varphi_1'(x) + \varphi_2'(x)$ and
$\frac{\partial f}{\partial t}(x,t) = c\varphi_1(x+ct) - c\varphi_2(x-ct)$.
Let

$$
G(x) = \tfrac{\partial f}{\partial t}(x,0) = c\varphi_1(x) - c\varphi_2(x).
$$

Substituting these quantities we show that the required
form is satisfied.

## Extrema (minima / maxima / saddle)

Let $S\subset \bR^n$ be open, $f:S \to \bR$ be a scalar field and
$\aa \in S$.

::: tip Definition
If $f(\aa)\leq f(\xx)$ (resp. $f(\aa)\geq f(\xx)$) for all $\xx \in S$,
then $f(\aa)$ is said to be the _absolute_ minimum (resp. maximum) of
$f$.
:::

::: tip Definition
If $f(\aa)\leq f(\xx)$ (resp. $f(\aa)\geq f(\xx)$) for all
$\xx \in B(\aa,r)$ for some $r>0$, then $f(\aa)$ is said to be a
_relative_ minimum (resp. maximum) of $f$.
:::

Collectively we call the these points the _extrema_ of the scalar field.
In the case of a scalar field defined on $\bR^2$ we can visualize the
scalar field as a 3D plot like the [figure](#fig:bumps).
Here we see the extrema as the "flat" places. We sometimes use _global_
as a synonym of _absolute_ and _local_ as a synonym of _relative_.

![Bumps](../images/svg/bumps.svg "$f(x,y) = x e^{-(x^2y^2)}  + \\frac{1}{4}e^{y^\\frac{3}{10}}$"){#fig:bumps}

To proceed it is convenient to connect the extrema with the behaviour of
the gradient of the scalar field.

::: tip Theorem {#thm:is-stationary}
If $f:S\to\bR$ is differentiable and has a relative minimum or maximum at
$\aa$, then $\nabla f(\aa)=  \mathbf{0}$.
:::

::: info Proof
Suppose $f$ has a relative minimum at $\aa$ (or consider $-f$). For any
unit vector $\vv$ let $g(u) = f(\aa+u\vv)$. We know that $g:\bR \to \bR$
has a relative minimum at $u=0$ so $u'(0)=0$. This means that the
directional derivative $D_{\vv} f(\aa) = 0$ for every $\vv$.
Consequently this means that $\nabla f (\aa)= \mathbf{0}$.
:::

![Graph of an inflection](../images/svg/inflection.svg "$\\nabla f(\\aa) = \\mathbf{0}$ doesn't imply a minimum or maximum at $\\aa$, even in $\\bR$, as seen with the function $f(x)=x^3$. In higher dimensions even more is possible.")

Observe that here and in the subsequent text, we can always consider the case of $f:\bR \to \bR$, i.e., the case of $\bR^n$ where $n=1$. Everything still holds and reduces to the arguments and formulae previously developed for functions of one variable.

If $\nabla f(\aa)=\mathbf{0}$ then $\aa$ is called a _stationary point_.

![Graph of a bowl shaped function](../images/svg/bowl.svg "If $f(x,y)=x^2+y^2$ then $\\nabla f(x,y) = \\left(\\begin{smallmatrix} 2x\\\\2y \\end{smallmatrix}\\right)$ and $\\nabla f(0,0) =\\left(\\begin{smallmatrix}   0\\\\0  \\end{smallmatrix}\\right)$. The point $(0,0)$ is an absolute minimum for $f$.")

As we see in the inflection example, the converse of the [theorem](#thm:is-stationary) fails in the sense that a stationary
point might not be a minimum or a maximum. The motivates the following.

If $\nabla f(\aa)=\mathbf{0}$ and $\aa$ is neither a minimum nor a maximum then $\aa$ is said to be a _saddle point_.

The quintessential saddle has the shape seen in the [graph](#fig:pringle). However it might be similar to
Figure [1.2](#fig:inflection){reference-type="ref"
reference="fig:inflection"} or more complicated using the possibilities
available in higher dimension.

![Graph of a saddle](../images/svg/pringle.svg "If $f(x,y)=x^2-y^2$ then $\\nabla f(x,y) = \\left(\\begin{smallmatrix} 2x  \\\\ -2y \\end{smallmatrix}\\right)$ and $\\nabla f(0,0) = \\mathbf{0}$. The point $(0,0)$ is a saddle point for $f$."){#fig:pringle}

## Hessian matrix

To proceed it is useful to develop the idea of a second order Taylor expansion in this higher dimensional setting. In particular this will allow us to identify the local behaviour close to stationary points. The main object for doing this is the _Hessian matrix_. Let $f:\bR^2 \to\bR$ be twice differentiable and use the notation
$f(x,y)$. The _Hessian matrix_ at $\aa\in \bR^2$ is defined as

$$
\mathbf{H} f (\aa)= \begin{pmatrix}
\frac{\partial^2 f}{\partial x^2} (\aa)
& \frac{\partial^2 f}{\partial x\,\partial y} (\aa)
\\[1.5ex]
\frac{\partial^2 f}{\partial y\,\partial x} (\aa)
& \frac{\partial^2 f}{\partial y^2}(\aa)
\end{pmatrix}.
$$

Observe that the Hessian matrix $\mathbf{H} f (\aa)$ is a symmetric matrix since we know that
$\frac{\partial^2 f}{\partial x\,\partial y} (\aa) = \frac{\partial^2 f}{\partial y\,\partial x} (\aa)$
for twice differentiable functions. The Hessian matrix is defined analogously in any dimensions as follows. Let $f:\bR^n \to\bR$ be twice differentiable. The _Hessian matrix_ at $\aa\in \bR^n$ is defined as

$$
\mathbf{H} f (\aa)= \begin{pmatrix}
\frac{\partial^2 f}{\partial x_1^2} (\aa)
& \frac{\partial^2 f}{\partial x_1\,\partial x_2} (\aa)
& \cdots
& \frac{\partial^2 f}{\partial x_1\,\partial x_n}(\aa) \\[1.5ex]
\frac{\partial^2 f}{\partial x_2\,\partial x_1} (\aa)
& \frac{\partial^2 f}{\partial x_2^2}(\aa)
& \cdots
& \frac{\partial^2 f}{\partial x_2\,\partial x_n}(\aa) \\[1.5ex]
\vdots
& \vdots
& \ddots
& \vdots \\[1.5ex]
\frac{\partial^2 f}{\partial x_n\,\partial x_1} (\aa)
& \frac{\partial^2 f}{\partial x_n\,\partial x_2} (\aa)
& \cdots
& \frac{\partial^2 f}{\partial x_n^2}(\aa)
\end{pmatrix}.
$$

Observe that the Hessian matrix is a real symmetric matrix in any dimension. If $f:\bR \to \bR$ then $\mathbf{H} f (a)$ is a $1\times 1$ matrix and coincides with the second derivative of $f$. In this sense what we know about extrema in $\bR$ is just a special case of everything we do here.

If $\vv= \left( \begin{smallmatrix}
            v_1\\ \vdots \\v_n
        \end{smallmatrix} \right)$ then

$$
\vv^{\mathbf{t}} \ \mathbf{H} f (\aa) \ \vv = \sum_{j,k=0}^{n}
    \partial_{j}\partial_{k}f(\aa)
    v_j v_k \in \bR.
$$

Multiplying the matrices we calculate that

$$
\begin{aligned}
            \vv^{\mathbf{t}} \ \mathbf{H} f (\aa) \ \vv
             & =
            \begin{pmatrix}
                v_1 & \cdots & v_n
            \end{pmatrix}
            \begin{pmatrix}
                \partial_{1}\partial_{1}f(\aa) & \cdots &
                \partial_{1}\partial_{n}f(\aa)                   \\
                \vdots                         & \ddots & \vdots \\
                \partial_{n}\partial_{1}f(\aa) & \cdots &
                \partial_{n}\partial_{n}f(\aa)
            \end{pmatrix}
            \begin{pmatrix}
                v_1 \\ \vdots \\v_n
            \end{pmatrix} \\
             & = \sum_{j,k=0}^{n}
            \partial_{j}\partial_{k}f(\aa)
            v_j v_k
        \end{aligned}
$$

as required.

Let $f(x,y)=x^2-y^2$ ([figure](#fig:pringle)). The gradient and the Hessian are respectively

$$
\begin{aligned}
\nabla f(x,y) & =\begin{pmatrix}
\frac{\partial f}{\partial x} (x,y) \\[2pt]
\frac{\partial f}{\partial y} (x,y)
\end{pmatrix} = \begin{pmatrix}
2x \\-2y
\end{pmatrix}, \\
\mathbf{H} f (x,y) & = \begin{pmatrix}
\frac{\partial^2 f}{\partial x^2} (x,y)
& \frac{\partial^2 f}{\partial x\,\partial y} (x,y)
\\[2pt]
\frac{\partial^2 f}{\partial y\,\partial x} (x,y)
& \frac{\partial^2 f}{\partial y^2}(x,y)
\end{pmatrix}
= \begin{pmatrix}
2
& 0
\\[2.2ex]
0
& -2
\end{pmatrix}.
\end{aligned}
$$

The point $(0,0)$ is a stationary point since
$\nabla f(0,0) =\left(\begin{smallmatrix}
            0\\0
        \end{smallmatrix}\right)$. In this example $\mathbf{H} f$ does
not depend on $(x,y)$ but in general we can expect dependence and so it
gives a different matrix at different points $(x,y)$.

### Second order Taylor formula for scalar fields

First let's recall the first order Taylor approximation from Theorem (#thm:differential). If $f$ is differentiable at $\aa$ then
$f(\xx) \approx f(\aa)  + \nabla f(\aa) \cdot (\xx-\aa)$. If $\aa$ is a stationary point then this only tells us that $f(\xx) \approx f(\aa)$ so a natural next question is to search for slightly more detailed information.

Let $f$ be a scalar field twice differentiable on $B(\aa,r)$. Then, for $\xx$ close to $\aa$,
$$f(\xx) \approx f(\aa) + \nabla f(\aa) \cdot (\xx-\aa) + \frac{1}{2} {(\xx-\aa)}^{\mathbf{T}} \ \mathbf{H} f (\aa) \ (\xx-\aa)$$
in the sense that the error is $\littleO{\norm{(\xx-\aa)}^2}$.

Let $\vv = \xx-\aa$ and let $g(u) = f(\aa + u \vv)$. The Taylor
expansion of $g$ tells us that
$g(1) = g(0) + g'(0) + \frac{1}{2} g''(c)$ for some $c\in (0,1)$. Since
$g(u) = f(a_1 + uv_1, \ldots, a_n + u v_n)$, by the chain rule,

$$
\begin{aligned}
g'(u) & = \sum_{j=1}^{n} \partial_j f( a_1 + uv_1, \ldots, a_n + u v_n ) v_j
=\nabla f( \aa + u \vv) \cdot \vv, \\
g''(u) & = \sum_{j,k=1}^{n} \partial_j\partial_k f( a_1 + uv_1, \ldots, a_n + u v_n ) v_j v_k \\
& \quad \quad \quad
= \vv^{\mathbf{t}} \ \mathbf{H} f (\aa + u \vv) \ \vv.
\end{aligned}
$$

Consequently
$f(\aa+\vv) = f(\aa) + \nabla f(\aa) \cdot \vv + \frac{1}{2} \vv^{\mathbf{t}} \ \mathbf{H} f (\aa + c\vv) \ \vv$.
We define the "error" in the approximation as
$\epsilon(\vv) = \frac{1}{2}  \vv^{\mathbf{t}} (\mathbf{H} f (\aa + c\vv) - \mathbf{H} f (\aa)  ) \vv$
and estimate that

$$
\abs{\epsilon(\vv)} \leq \sum_{j,k=0}^{n}
v*j v_k \left( \partial_{j}\partial_{k}f(\aa+c\vv)-\partial_{j}\partial\_{k}f(\aa) \right).
$$

Since $\abs{ v_j v_k} \leq \norm{\vv}^2$ we observe that
$\frac{\abs{\epsilon(\vv)} }{\norm{\vv}^2} \to 0$ as $\norm{\vv} \to 0$
as required.

## Classifying stationary points

In order to classify the stationary points we will take advantage of the Hessian matrix and therefore we need to first understand the follow fact about real symmetric matrices.

::: tip Theorem
Let $A$ be a real symmetric matrix and let $Q(\vv) =  \vv^{\mathbf{t}} A  \vv$.
Then

$$
\begin{aligned}
\text{\(Q(\vv) > 0\) for all \(\vv \neq \mathbf{0}\)}
& \quad \Longleftrightarrow \quad
\text{all eigenvalues of \(A\) are positive}, \\
\text{\(Q(\vv) < 0\) for all \(\vv \neq \mathbf{0}\)}
& \quad \Longleftrightarrow \quad
\text{all eigenvalues of \(A\) are negative}.
\end{aligned}
$$

:::

Since $A$ is symmetric it can be diagonalised by matrix $B$ which is
orthogonal ($B^{\mathbf{t}}=B^{-1}$) and the diagonal matrix
$D = B^{\mathbf{t}} A B$ has the eigenvalues of $A$ as the diagonal.
This means that
$Q(\vv) = \vv^{\mathbf{t}} B^{\mathbf{t}} B A B^{\mathbf{t}} B \vv = \ww^{\mathbf{t}} D \ww$
where $\ww = B \vv$. Consequently $Q(\vv) =  \sum_{j} \lambda_j w_j^2$.
Observe that, if all $\lambda_j >0$ then $\sum_{j} \lambda_j w_j^2  >0$.

In order to prove the other direction in the "if and only if" statement,
observe that $Q(B \uu_k ) = \lambda_k$. This means that, if $Q(\vv) > 0$
for all $\vv \neq \mathbf{0}$ then $\lambda_k>0$ for all $k$.

::: tip Theorem
Let $f$ be a scalar field twice differentiable on $B(\aa,r)$. Suppose
$\nabla f(\aa) = \mathbf{0}$ and consider the eigenvalues of
$\mathbf{H} f (\aa)$. Then

$$
\begin{aligned}
\text{{All} eigenvalues are positive}
    & \quad \Longrightarrow \quad
\text{relative minimum at \(\aa\)}, \\
\text{{All} eigenvalues are negative}
    & \quad \Longrightarrow \quad
\text{relative maximum at \(\aa\)}, \\
\text{Some positive, some negative}
    & \quad \Longrightarrow \quad
\text{\(\aa\) is a saddle point}.
\end{aligned}
$$

:::

Let $Q(\vv) =  \vv^{\mathbf{t}} \mathbf{H} f (\aa) \vv$, $\ww = B \vv$
and let $\Lambda := \min_j \lambda_j$. Observe that
$\norm{\ww} =  \norm{\vv}$ and that
$Q(\vv)=  \sum_{j} \lambda_j w_j^2  \geq \Lambda \sum_{j} w_j^2 = \Lambda  \norm{\vv}^2$.
We have them 2^nd^-order Taylor

$$
\begin{aligned}
            f(\aa+\vv) - f(\aa)
             & =  \frac{1}{2} \vv^{\mathbf{t}} \ \mathbf{H} f (\aa) \ \vv +  \epsilon(\vv)                \\
             & \geq  \left(\tfrac{\Lambda}{2} - \tfrac{\epsilon(\vv)}{\norm{\vv}^2} \right) \norm{\vv}^2.
        \end{aligned}
$$

Since
$\frac{\abs{\epsilon(\vv)}}{\norm{\vv}^2} \to 0$ as $\norm{\vv}\to 0$,
$\frac{\abs{\epsilon(\vv)}}{\norm{\vv}^2} < \tfrac{\Lambda}{2}$ when
$\norm{\vv}$ is small. The argument is analogous for the second part.
For final part consider $\vv_j$ which is the eigenvector for $\lambda_j$
and apply the argument of the first or second part.

## Attaining extreme values

Here we explore the extreme value theorem for continuous scalar fields. The argument will be in two parts: Firstly we show that continuity implies boundedness; Secondly we show that boundedness implies that the maximum and minimum are attained. We use the following notation for _interval_ / _rectangle_ / _cuboid_ / _tesseract_, etc. If $\aa = (a_1,\ldots,a_n)$ and $\bb = (b_1,\ldots,b_n)$ then we consider the $n$-dimensional closed Cartesian product

$$
[\aa,\bb] = [a_1,b_1] \times \cdots \times [a_n,b_n].
$$

We call this set a _rectangle_ (independent of the dimension). As a first step it is convenient to know that all sequences in our setting have convergent subsequences.

If ${\{\xx_{n}\}}_{n}$ is a sequence in $[\aa,\bb]$ there exists a
convergent subsequence ${\{\xx_{n_j}\}}_{j}$.

In order to prove the theorem we construct the subsequence. Firstly we
divide $[\aa,\bb]$ into sub-rectangles of size half the original. We
then choose a sub-rectangle which contains infinite elements of the
sequence and choose the first of these elements to be part of the
sub-sequence. We repeat this process by again dividing the sub-rectangle
we chose by half and choosing the next element of the subsequence. We
repeat to give the full subsequence.

Suppose that $f$ is a scalar field continuous at every point in the
closed rectangle $[\aa,\bb]$. Then $f$ is bounded on $[\aa,\bb]$ in the
sense that there exists $C>0$ such that $\abs{f(\xx)} \leq C$ for all
$\xx \in [\aa,\bb]$.

Suppose the contrary: for all $n\in\mathbb{N}$ there exists $\xx_n\in [\aa,\bb]$ such that $\abs{f(\xx_n)}>n$. [Bolzano-Weierstrass](https://en.wikipedia.org/wiki/Bolzano%E2%80%93Weierstrass_theorem)
theorem means that there exists a subsequence ${\{\xx_{n_j}\}}_{j}$ converges to $\xx \in [\aa,\bb]$. Continuity of $f$ means that $f(\xx_{n_j})$ converges to $f(\xx)$. This is a contradiction and hence the theorem is proved.

We can now use the above result on the boundedness in order to show that the extreme values are actually obtained. Suppose that $f$ is a scalar field continuous at every point in the closed rectangle $[\aa,\bb]$. There there exist points $\xx, \yy \in [\aa,\bb]$ such that

$$
f(\xx) = \inf f
        \quad \text{and} \quad
        f(\yy)= \sup f.
$$

By the boundedness theorem $\sup f$ is finite and so there exists a sequence ${\{\xx_{n}\}}_{n}$ such that $f(\xx_n)$ converges to $\sup f$.
Bolzano--Weierstrass theorem implies that there exists a subsequence
${\{\xx_{n_j}\}}_{j}$ which converges to $\xx \in [\aa,\bb]$. By
continuity $f(\xx_n) \to f(\xx) = \sup f$.

## Extrema with constraints (Lagrange multipliers)

We now consider a slightly different problem to the one earlier in this chapter. There we wished to find the extrema of a given scalar field. Here the general problem is to minimise or maximise a given scalar field $f(x,y)$ under the constraint $g(x,y) = 0$. Subsequently we will also consider the same problem but in higher dimensions. For this graphic representation we draw the constraint and also various level sets of the function that we want to find the extrema of. The graphical representation suggests to us that at the "touching point" the gradient vectors are parallel. In other words, $\nabla f = \lambda \nabla g$ for some $\lambda \in \bR$. The implementation of this idea is the [method of Lagrange multipliers](https://en.wikipedia.org/wiki/Lagrange_multiplier).

Suppose that a differentiable scalar field $f(x,y)$ has a relative minimum or maximum when it is subject to the constraint $g(x,y) = 0$. Then there exists a scalar $\lambda$ such that, at the extrema point,
$$\nabla f = \lambda \nabla g.$$

![Visualization of Lagrange multiplier method](../images/svg/lagrange.svg "Searching extrema of $f$ under constraint $g=0$"){#fig:lagrange}

In three dimensions a similar result holds. Suppose that a differentiable scalar field $f(x,y,z)$ has a relative minimum or maximum when it is subject to the constraints

$$
g_{1}(x,y,z) = 0,
        \quad
        g_{2}(x,y,z) = 0
$$

and the $\nabla g_k$ are linearly
independent. Then there exist scalars $\lambda_1$, $\lambda_2$ such that, at the extrema point,
$$\nabla f = \lambda_{1} \nabla g_{1} + \lambda_{2} \nabla g_{2}.$$

In higher dimensions and possibly with additional constraints we have
the following general theorem.

::: tip Theorem
Suppose that a differentiable scalar field $f(x_1,\ldots,x_n)$ has an
relative extrema when it is subject to $m$ constraints

$$
g_1(x_1,\ldots,x_n) = 0,
        \dots , g_m(x_1,\ldots,x_n)=0,
$$

where $m<n$, and the
$\nabla g_k$ are all linearly independent. Then there exist $m$ scalars
$\lambda_1,\ldots,\lambda_m$ such that, at each extrema point,

$$

\nabla f = \lambda_1 \nabla g_1 + \cdots + \lambda_m \nabla g_m.


$$

:::

The Lagrange multiplier method is often stated and far less often proved. Since the proof is rather involved we will follow this tradition here. See, for example, Chapter 14 of "A First Course in Real Analysis" (2012) by Protter & Morrey for a complete proof and further discussion.

Let us consider a particular case of the method when $n=3$ and $m=2$. More precisely we consider the following problem: Find the maxima and minima of $f(x,y,z)$ along the curve $C$ defined as

$$
g_1(x,y,z) = 0,
    \quad
    g_2(x,y,z) = 0
$$

where $g_1$, $g_2$ are differentiable functions. In this particular case we will prove the Lagrange multiplier method. Suppose that $\aa$ is some point in the curve. Let $\boldsymbol{\alpha}(t)$ denote a path which lies in the curve $C$ in the sense that $\boldsymbol{\alpha}(t) \in C$ for all $t\in (-1,1)$, $\boldsymbol{\alpha}'(t)\neq \mathbf{0}$ and $\boldsymbol{\alpha}(0)=\aa$. If $\aa$ is a local minimum for $f$ restricted to $C$ it means that $f(\boldsymbol{\alpha}(t))\geq f(\boldsymbol{\alpha}(0))$ for all $t \in (-\delta,\delta)$ for some $\delta>0$. In words, moving away from $\aa$ along the curve $C$ doesn't cause $f(\xx)$ to decrease. Let $h(t) = f(\boldsymbol{\alpha}(t))$ and observe that $h:\bR \to \bR$ so we know how to find the extrema. In particular we know that $h'(0)=0$. By the chain rule $h'(t) = \nabla f(\boldsymbol{\alpha}(t))\cdot \boldsymbol{\alpha}'(t)$ and so

$$
\nabla f(\aa)\cdot \boldsymbol{\alpha}'(0) = 0.
$$

Since we know that $g_1(\boldsymbol{\alpha}(t))=0$ and $g_2(\boldsymbol{\alpha}(t))=0$, again by the chain rule,

$$
\nabla g_1(\aa)\cdot \boldsymbol{\alpha}'(0) = 0,
    \quad
    \nabla g_2(\aa)\cdot \boldsymbol{\alpha}'(0) = 0.
$$

To proceed it is convenient to isolate the following result of linear algebra.

Consider $w, u_1,u_2 \in \bR^3$ and let
$V = \{v : u_k \cdot v = 0, k =1,2\}$. If $w\cdot v =0$ for all
$v \in V$ then $w = \lambda_1 u_1 + \lambda_2 u_2$ for some
$\lambda_1,\lambda_2 \in \bR$.

We can write $w = \lambda_1 u_1 + \lambda_2 u_2 + v_0$ where $v_0 \in V$
because $u_1, u_2$ together with $V$ must span $\bR^3$. Since
$v_0 \in V$ and, by assumption, $w\cdot v_0 = 0$,

$$
0 = w\cdot v_0
        = (\lambda_1 u_1 + \lambda_2 u_2 + v_0)\cdot v_0
        = v_0\cdot v_0
        = \norm{v_0}^2.
$$

This means that $v_0 =0$ and so
$w = \lambda_1 u_1 + \lambda_2 u_2$.

The above lemma also holds in any dimension with any number of vectors with the analogous proof. Applying this lemma to the vectors $\nabla f(\aa)$, $\nabla g_1(\aa)$ and $\nabla g_2(\aa)$ recovers exactly the Lagrange multiplier method in this setting.
