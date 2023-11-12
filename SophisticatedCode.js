// Filename: SophisticatedCode.js
// Content: Complex Matrix Operations

// Define a Matrix class
class Matrix {
  constructor(rows, columns) {
    this.rows = rows;
    this.columns = columns;
    this.data = Array(this.rows)
      .fill()
      .map(() => Array(this.columns).fill(0));
  }

  static randomRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  static multiply(m1, m2) {
    if (m1.columns !== m2.rows) {
      throw new Error("Incompatible matrix dimensions for multiplication.");
    }

    const result = new Matrix(m1.rows, m2.columns);

    for (let i = 0; i < result.rows; i++) {
      for (let j = 0; j < result.columns; j++) {
        let sum = 0;
        for (let k = 0; k < m1.columns; k++) {
          sum += m1.data[i][k] * m2.data[k][j];
        }
        result.data[i][j] = sum;
      }
    }

    return result;
  }

  static transpose(matrix) {
    const result = new Matrix(matrix.columns, matrix.rows);

    for (let i = 0; i < result.rows; i++) {
      for (let j = 0; j < result.columns; j++) {
        result.data[i][j] = matrix.data[j][i];
      }
    }

    return result;
  }

  randomize() {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.columns; j++) {
        this.data[i][j] = Matrix.randomRange(-10, 10);
      }
    }
  }

  print() {
    console.table(this.data);
  }
}

// Usage Example
const matrix1 = new Matrix(3, 2);
matrix1.randomize();
console.log("Matrix 1:");
matrix1.print();

const matrix2 = new Matrix(2, 4);
matrix2.randomize();
console.log("Matrix 2:");
matrix2.print();

const result = Matrix.multiply(matrix1, matrix2);
console.log("Result:");
result.print();