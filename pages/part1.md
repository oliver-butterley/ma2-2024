# Mathematical reasoning

In this part of the course we work on the following skills:

- Understand the precise meanings of mathematical statements and form our own precise statements.
- Manipulate such statements, such as finding contrapositives, inconsistencies, special cases or generalizations.
- Hold several ideas in our heads simultaneously, while keeping track of their truth-values and relationships between each other (which statements are justified by which others? Do any contradict each other?). (particularly in statements with many instances of "for all" and "there exist").
- Understand and form long chains of logical manipulations while quickly identifying and fixing mistakes.
- Justify or find counterexamples to our own guesses.

## Models, definitions, logical consequences, doing science, doing mathematics

(Coming soon... 🏃)

## Mathematical statements

Mathematical reasoning proceeds as a sequence of mathematical statements.
Statements are true or false.
E.g., $2+2=4$ is a true statement and $2+2=5$ is a false statement.

Not all combination of words or mathematical symbols is a statement.
E.g.,
$$ =4+\times 4 = - = 3$$
is not a statement, this combination of symbols fails to have meaning.
Similarly 
$$\frac{0}{0} = 1$$
is not a statement since division by zero is not defined.
We say such are _ill-formed_ or _ill-defined_.

Statements may also contain words.
E.g.,
$$\text{There are infinitely many prime numbers}.$$

is a well-formed mathematical statement.

Some statements, e.g.,
$$7=7, \quad 5\leq5$$
are true but are unlikely to be useful.
On the other hand the statement
$$\pi=\frac{22}{7}$$
is false but could be useful.
We could make this a precise statement describing how this is a true approximation.

We say that a combination of symbols such as,
$$2+2$$
is an _expression_, not a statement.
This expression produces a value, it is not something that is true or false.
As with expression, we must work with _well-defined_ or _well-formed_ expressions.
In order to be mathematically rigorous, we must avoid _ill-defined_ or _ill-formed_ expressions, e.g.,
$$1+{2}/{0}, \quad \sin^{-1}(2).$$
We often make statements out of expressions by using relations (e.g., $=$, $<$, $\in$, $\subset$) or by using properties (e.g., "is prime", "is invertible").

_Compound statements_ can be formed from other statements by using logical connectives (e.g., and, or, not, if, "if and only if",...).
We will often do this.

The statement
$$2+2=5 \quad \text{if and only if} \quad 4+4=10$$
is well-formed and true.
Again not very useful.

<!-- ## Implication -->

## Structure of proofs

Be they calculations or logical steps expressed in words, proofs must be a chain of rigorous steps.
The correct conclusion without solid logic is not a proof 😆, e.g.,

$$
\frac{16}{64} = \frac{1\not{6}}{\not{6}4} = \frac{1}{4},
$$

and

$$
\frac{d}{dx} \frac{1}{x} = \frac{d}{d} \frac{1}{x^2} = \frac{\not{d}}{\not{d}} \frac{1}{x^2} = - \frac{1}{x^2}.
$$

### Calculation proofs

::: tip ~~Theorem~~
$5=4$
:::

::: info ~~Proof~~
Since $-20=-20$ we know that
$$25 - 45 = 16 -36,$$
which we can rewrite as
$$5^2 - 5 \times 9 = 4^2 - 4 \times 9.$$
We add $\frac{81}{4}$ on both sides,
$$5^2 - 5 \times 9 + \frac{81}{4} = 4^2 - 4 \times 9 + \frac{81}{4}.$$
These are both perfect squares and so we know that
$$\left(5-\frac{9}{2}\right)^2 = \left(4-\frac{9}{2}\right)^2.$$
Taking the square root of both sides we obtain,
$$5-\frac{9}{2} = 4-\frac{9}{2}$$
which implies that $5=4$.
:::

::: tip ~~Theorem~~
Every triangle is isosceles.
:::

::: info ~~Proof~~
Start from a triangle $ABC$.

- Draw the perpendicular bisector of $BC$, and the angle bisector from $A$.
- Let $I$ be their intersection (if it is not unique, you are done).
- Let $J$ be the projection of $I$ over $AB$, $K$ that over $AC$.
- Considering the right angle triangles $AIJ$ and $AIK$, we see that (lengths) $AJ=AK$, and that $IJ=IK$.
- Then looking at right triangles $BIJ$ and $CIK$, we obtain that $BJ=CK$.
- We conclude that $AB = AJ+JB = AK+KC = AC$.

(Sketch the triangle and the lines of the proof.)
:::

### Proof by cases

::: tip Theorem
Suppose that $n$ is an integer. Then $n(n+1)$ is an even integer.
:::

::: info Proof
If $n$ is even, then $n(n+1)$ is also even since the multiple of an even number is even.
If $n$ is odd, then $n+1$ is even and so $n(n+1)$ is even, again because the multiple of an even number is even.
Since $n$ is an integer, $n$ is either even or odd so one of these two cases holds.
:::

### Proof by contradiction

### Proof by induction

::: tip Problem
Show that $2^n \geq n+1$ for all natural numbers $n$.
:::

::: tip ~~Theorem~~
All sheep are the same colour.
:::

::: info ~~Proof~~
We prove by induction that a group of $N$ sheep are all the same colour.

- The case $N=1$ is immediate because a single sheep is the same colour as itself.

We will now assume that a group of $N$ sheep are all the same colour and consider a group of $N+1$ sheep.

- Removing a single sheep gives a group of $N$ sheep. Removing a different one gives another group of $N$ sheep.
- Within each group all the sheep are the same colour.
- The two groups have $N-1$ sheep in common so both groups are sheep of the same colour as each other and so all of them are the same colour.

:::

## Variables and quantifiers

(coming soon... 🏃)

What does each of the following statements mean, and which of them are true?

1. For every positive number $x$, and every positive number $y$, we have $y^2=x$.
2. There exists a positive number $x$ such that for every positive number $y$, we have $y^2=x$.
3. There exists a positive number $x$, and there exists a positive number $y$, such that $y^2=x$.
4. For every positive number $y$, there exists a positive number $x$ such that $y^2=x$.
5. There exists a positive number $y$ such that for every positive number $x$, we have $y^2=x$.

## Further reading

- [The mechanics of proof](https://hrmacbeth.github.io/math2001/) by _Heather Macbeth_
- Analysis I: Third Edition (Texts and Readings in Mathematics) (2016) by _Terence Tao_ (particularly Appendix A)
- How to Think Like a Mathematician: A Companion to Undergraduate Mathematics (2009) by _Kevin Houston_
