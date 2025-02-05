import { Link, Outlet } from "react-router";

export const h1 = 'text-2xl font-bold pl-8 mt-20'
export const h2 = 'text-xl font-semibold pl-8 mb-3 mt-14'
export const h4 = 'text-md font-semibold pl-8 mb-2'
export const pre = 'whitespace-pre-line pl-8 mb-10 text-base leading-relaxed'

export default function Math() {
  return (
    <>
     <Link to='/math/ml-literature'>to ml literature</Link>
     
      <h1 className={h1}>Machine Learning Basic Math</h1>
      <h2 className={h2}>Vectors</h2>
      <pre className={pre}>
        {`
https://people.math.harvard.edu/~jjchen/math21a/handouts/vector-ops.html#subsection-13

https://www.mathsisfun.com/algebra/vectors.html

https://phys.libretexts.org/Bookshelves/University_Physics/Physics_(Boundles5)/3%3A_Two-Dimensional_Kinematics/3.2%3A_Vectors

https://mathinsight.org/vector_introduction#:~:text-Definition%20of%20a%20vector,its%20tail%20to%20its%20head.

        Refer to numbers as scalars, to emphasize that scalars and vectors are
        different types of mathematical objects. Numbers are called "scalars",
        because they "scale" the vector up or down.

        A vector is a magnitude (a non-negative number) with a direction.
        Something used to describe, for instance, wind properties like velocity
        and direction.

        Wind is southwest at 10km/h → we can't describe simply with one
        number; we need a vector.

        Probably the most confusing thing when you're first learning about
        vectors is that a vector doesn't have a location, so a vector can be
        drawn anywhere you like.

        A vector is defined as a quantity having both magnitude and direction,
        denoted by a boldface character A, an italicized lowercase roman letter
        with an arrow on top. We can represent them in Polar Coordinates (r
        length, θ = angle between the vector and the X axis) and Cartesian
        Coordinates (x part of the vector, y part of the vector):

        x = r * cos(θ)
        y = r * sin(θ)
        r = √(x² + y²)
        θ = tan⁻¹(y/x)

        Ask yourself every time you encounter a picture of a vector: is there a
        particular reason the vector is drawn where it is?

        In R², we can describe a vector by how far it goes in the x and y
        directions.

        v = {2,4} → this means a vector that goes 2 units in x and 4 in y.

        How do we do the calculations?

        The most common way is to first break up vectors into x and y parts.

        ||v|| is the length, or magnitude, of the vector, and we can use the
        Pythagorean Theorem to get it. A vector with magnitude 1 is called a
        Unit Vector.

        In R³ and more dimensions, we get the length using something similar:
        just sum the squares of the components of the vector and then take the
        square root.

        To get the vector between points, just subtract one set of coordinates
        from the other: P₁P₂ = (x₂ - x₁, y₂ - y₁)
      `}
      </pre>
      <h3 className="text-lg font-medium pl-8 mb-6">Operations</h3>
      <h4 className={h4}>Scalar multiplication</h4>
      <pre className={pre}>
        {`Scalar multiplication: Multiply by k; the same or opposite direction
        (k or -k) and k times as long as the original length. From this, we
        know that if a vector is a scalar multiple of the other, then they are
        parallel since you are basically stretching or shrinking it and maybe
        changing its direction (not its angle).`}
      </pre>
      <h4 className={h4}>Vector addition</h4>
      <pre className={pre}>
        {`Vector addition: This operation follows the rules of the parallelogram
            law; the sum of two vectors forms the diagonal of the parallelogram.
            Just add the components:

            v = {1, 2, 3} and w = {4, 5, 6} → v + w = {1 + 4, 2 + 5, 3 + 6} = {5, 7, 9}
      `}
      </pre>
      <h4 className={h4}>Dot product</h4>
      <pre className={pre}>
        {`Dot product: The dot product could be thought of as multiplying the
        aligned vectors, one vector and the projection of the other vector on
        the first one.

        For instance, it's how the resultant force is calculated on an object
        with multiple forces applied to it (e.g., two people pulling a box with
        ropes at different angles) or how much of vector a is pointing in the
        same direction as vector b.

        It’s an operation that can find the angle between vectors. Always picture the tails of the vectors at the same point.

        Imagine that we want to find how much of a goes in b's direction. We can reduce b to a unit vector:u = b / ||b||.

        Using simple triangle geometry, we have that a⋅u (the projection of a in b's direction) is ||a||cos(θ), where θ is the angle between a and b.

        Replacing u in that formula, we have:a⋅b = ||a|| ||b|| cos(θ).

        Another method is to multiply the components:

        v = {1, 2, 3} and w = {4, 5, 6}

        v⋅w = 1×4 + 2×5 + 3×6 = 32.

        The key property of the dot product is the last equation.

        A simple way to test whether two vectors are perpendicular (orthogonal) is to see whether their dot product is 0, since cos(90°) = 0.

        Scalar component: The scalar component of a vector is the length of the vector that goes in a certain direction. 
        The direction is defined by a unit vector (a vector with irrelevant length that only points in the direction we want to assess).

        The symbol for the scalar component is comp. For example:

        comp_a(b) = (b⋅unit vector in the direction of a).

        From this, we know that the length of a is irrelevant.`}
      </pre>
      <h4 className={h4}>Cross product (R³ only)</h4>
      <pre className={pre}>
        {`Cross product (R³ only): The cross product is a vector, so we can describe it by saying what its magnitude and direction are. 
        The result vector is perpendicular to both initial vectors. To determine the direction, use the right-hand rule (thumb, pointing finger, and middle finger).

        If you draw a parallelogram with the initial vectors, the cross product is the area of that parallelogram, which is also the length of the result vector! 
        The cross product reaches its maximum length when vectors a and b are at right angles and is zero in length when vectors a and b point in the same (or opposite) direction.

         Another way of calculating is this:

        cᵧ = a𝓏bₓaₓb𝓏aᵧb𝓏 - a𝓏bᵧaₓbᵧaᵧbₓ

        Components of a and b:
        a = (a₁, a₂, a₃) = a₁ᵢ + a₂ⱼ + a₃k
        b = (b₁, b₂, b₃) = b₁ᵢ + b₂ⱼ + b₃k

        a × b = a₁b₁(𝑖 × 𝑖) + a₁b₂(𝑖 × 𝑗) + a₁b₃(𝑖 × 𝑘)
          + a₂b₁(𝑗 × 𝑖) + a₂b₂(𝑗 × 𝑗) + a₂b₃(𝑗 × 𝑘)
          + a₃b₁(𝑘 × 𝑖) + a₃b₂(𝑘 × 𝑗) + a₃b₃(𝑘 × 𝑘)

        With the unit vector cross product being 1 and using determinants:

        a × b = | i  j  k  |
                | a₁ a₂ a₃ |
                | b₁ b₂ b₃ |

        a × b = ᵢ  *  | a₂ a₃ |
                      | b₂ b₃ | 
              - ⱼ  *  | a₁ a₃ |
                      | b₁ b₃ | 
              + ᵏ  *  | a₁ a₂ |
                      | b₁ b₂ |

        - For the ᵢ component: 
            | a₂ a₃ |
            | b₂ b₃ | = a₂b₃ - a₃b₂

        - For the ⱼ component:
            | a₁ a₃ |
            | b₁ b₃ | = a₁b₃ - a₃b₁

        - For the k component:
            | a₁ a₂ |
            | b₁ b₂ | = a₁b₂ - a₂b₁

        a×b = (a₂b₃ - a₃b₂)ᵢ - (a₁b₃ - a₃b₁)j + (a₁b₂ - a₂b₁)k.

        The determinant gives us the result vector for the cross product.

        Short definition: The determinant of a matrix is defined only for square matrices.
        Consider a square matrix row1 a and b, row2 c and d, 
        we multiply the component a by the determinant of the "submatrix" formed by ignoring a's row and column: 
        ad bc
        
        With more rows is the same process, but with the signs switched.

        So the cross product formula from above can be written as a 3x3 matrix with row1-1,j,k row2-a1, a2, a3 row3-b1,b2,b3`}
      </pre>
      <h4 className={h4}>Scalar triple product</h4> 
      <pre className={pre}>
        {`Scalar triple product: Defined as (a×b) ⋅ c. Its absolute value represents the volume of the parallelepiped formed by the vectors.

        Volume = ||a×b|| ||c|| |cos(φ)| = |(a×b) ⋅ c|, where φ is the angle between c and a×b.

        Using coordinates:

        d₁ = a₂b₃ - a₃b₂

        d₂ = a₃b₁ - a₁b₃

        d₃ = a₁b₂ - a₂b₁

        Which is the same as this: (a₂b₃ - a₃b₂) - (a₁b₃ - a₃b₁) + (a₁b₂ - a₂b₁)

        This is simply the result of a cross product. 
        The triple product formula is: ( a × b ) · c

        And remembering this other way to calculate the dot product: v = {1, 2, 3} and w = {4, 5, 6}
        we have: v · w = (1 × 4) + (2 × 5) + (3 × 6)

        Now, expanding the components of the scalar triple product:

        (a₂b₃ - a₃b₂)c₁ - (a₁b₃ - a₃b₁)c₂ + (a₁b₂ - a₂b₁)c₃,

        which is in the same format as done in the short definition of a determinant with the unit vector, 
        yielding the matrix 3x3 as row1-c1,c2,c3 row2-a1,a2,a3 row3-b1,b2,b3

        The scalar triple product is obviously very useful if you have a lot of parallelepipeds lying around and want to know their volume.
      `}
      </pre>

      <h2 className={h2}>Matrices</h2>
      <pre className={pre}>
        {`Nykamp DQ, "Introduction to matrices." From Math Insight.

http://mathinsight.org/matrix_introduction

The structure of a matrix allows us to define a fundamental operation on matrices: multiplication. This multiplication forms the basis of linear algebra. In particular, this matrix multiplication allows matrices to represent linear transformations (or linear functions) that transform vectors into other vectors. (A simple example of a linear transformation is the rotation of a vector.) Other uses of matrices involve calculating their determinant.

Linear transformations are related to matrix multiplication and what that means. That means we can transform a set of values into another set with different dimensions, also called a linear map because it can map the first set of values into another.

With the multiplication of matrices, we always need to follow the rule for the number of rows and columns, like:
matrix1 (m x p), matrix2 (n x s).

For the multiplication to be possible, the number of columns of matrix1 must match the number of rows of matrix2 (p = n). The resulting matrix will have dimensions (m x s).

Linear transformation is nothing but matrix multiplication. It transforms matrices into a final matrix.

In graphs and drawings, it can be seen as moving squares around or skewing them.

The determinant of matrices relates to area and volume. Determinants can only be calculated for square matrices (m x n, where m = n). For 2x2 matrices, the determinant is the area; for 3x3 matrices, it is the volume.

For instance, if we have two vectors, (x1, y1) and (x2, y2), and we perform a linear transformation by multiplying that matrix by a vector, we will have a final transformed matrix. The determinant of the original matrix will "tell" the magnitude and direction of the final matrix (how much the area grew or shrank).

T(x, y) =
[-2 0] [x]
[ 0 -2] [y]

Final form: (-2x, -2y).

Applying values:

Let x = 1, y = 0:
(-2 * 1 + 0 * 0, 0 * 1 - 2 * 0) = (-2, 0).

Let x = 0, y = 1:
(-2 * 0 + 0 * 1, 0 * 0 - 2 * 1) = (0, -2).

So, the final transformation maps [(1, 0), (0, 1)] to [(-2, 0), (0, -2)].

This can also be represented in matrix form:
[-2 0]
[ 0 -2]

Being a square matrix, we can calculate the determinant:
Determinant = (-2 * -2) - (0 * 0) = 4.

That makes sense since the area of the square grew 4 times.

From [1 x 1] to [-2 x -2 = 4].

The actual geometric shape and rotation of the square's image are not captured by the determinant.
The determinant simply tells us how T changes the area and whether or not it reverses orientation.
        `}
        </pre>

      <h2 className={h2}>Planes</h2>
      <pre className={pre}>
        {`https://testbook.com/maths/unit-vector#:~:text-Unit%20normal%20vector%20is% 20a, vector%20by%20its%20vector%20norm.

https://stackoverflow.com/questions/24432871/what-is-the-difference-between- hyperplane-and-plane-and-why-is-hyperplane-repr

Planes can be thought of as flat surfaces in space. 
In n-dimensions, a plane is an n-1 dimensional subspace, sometimes referred to as a hyperplane in n-dimensional space.

A plane is defined as:
Ax₀ + Bx₁ + C = 0,
where the normal vector (orthogonal to the plane) is n = [A, B], and C is the offset.

Distance of a Point to a Plane
The distance of a point to a plane is given by:

d = |n · x + offset| / ||n||,
where:

n · x is the dot product of the normal vector and the point,
||n|| is the magnitude (length) of the normal vector.
Orthogonal Projection of a Point onto a Plane
The orthogonal projection of a point v onto a plane is a set of points given by:

xᵥ = d * (unit vectors),
where unit vectors are derived from the plane's normal vector.

For example, consider the plane equation: 3x + 2y + 9 = 8.

The normal vector is n = (3, 2).
The unit vectors are calculated as:
(3 / √(3² + 2²), 2 / √(3² + 2²)) = (3 / √13, 2 / √13).
Projection of x onto w (a vector)
Using wᵀx or <w, x>, the projection of x (a vector starting at (0, 0)) onto w is calculated.

The outcome tells us about the relationship between x and w:

A positive number: The angle between x and w is less than 90 degrees.
Zero: They are perpendicular (orthogonal).
A negative number: The angle between x and w is greater than 90 degrees.
If <w, x> = 0, it means x is perpendicular to w, which is also perpendicular to the hyperplane. Thus, x lies in the hyperplane.

Equation of a Hyperplane in Classification
For applications like linear classifiers, the equation of a hyperplane is:
w · x + b = 0,
where:

w is the normal vector,
x is a vector of coordinates,
b is the bias or offset term.
When the dot product w · x + b = 0, it means that x lies exactly on the hyperplane defined by w · x + b = 0.


        `}
      </pre>
    </>
  );
}
