import { pre } from "./math";

export default function MitEdx() {
  return (
    <>
      <h1 className="text-2xl font-bold pl-8 mb-10 mt-20">MIT EdX course Machine Learning with Python-From Linear Models to Deep Learning</h1>
      <pre className={pre}>
        {`This is the content for the math review for the MIT EdX course Machine Learning with Python-From Linear Models to Deep Learning audited more or less in 04/24 - 09/24

Had to skip from probabilty density onwards due time contraints

Content: 
 Points and Vectors - 

 Probability Density Functions - 

 Univariate Gaussians -  PDF of Gaussian distribution,  Argmax, Maximum of pdf,Quantiles

 1D Optimization via Calculus -  critical points of a function, second derivative test, local minimum, local maximum

 Gradients and Optimization - Multivariable Calculus Review: Gradient, Geometric Picture of the Function

 Matrices and Vectors - Recognize the dimensions of the product of two or more matrices, Understand the concept of rank of a matrix, and how it relates to the invertibility of an n x n matrix, (Optional) Understand the concept of eigenvalues and eigenvectors of an n x n  matrix

 Matrix Multiplication - 
  Linear Independence, Subspaces and Dimension (Optional) - Row and Column Rank (Optional) We will be using these ideas when studying Linear Regression, Rank of a matrix (Optional), Invertibility of a matrix (Optional)
 Determinant - Recall that the determinant  of a square matrix  indicates whether it is invertible. 

 Interlude: Polynomials and Geometric - Quadratic Polynomials (polynomial is linear combination of monomials and monomials are unordered words using x1, x2...., monomial example: x1x2x3x3 = x1x2x^23)

 Eigenvalues, Eigenvectors and Determinants (Optional) - Eigenvalues and Eigenvectors of a matrix (Optional), Geometric Interpretation of Eigenvalues and Eigenvectors (Optional), Determinant and Eigenvalues (Optional), Trace and Eigenvalues (Optional), Nullspace (Optional)
 `}
 </pre>
    </>
  );
}



