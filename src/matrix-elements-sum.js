const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum( matrix ) {

  let n = matrix[0].length - 1;
  let sum = 0;

  for(let i = 0; i <= n; i++) {
    for(let j = 0; j <= matrix.length - 1; j++) {
      if (matrix[j][i] == 0) {
        break;
      }
      sum += matrix[j][i];
    }
  }
  return sum;
}

module.exports = {
  getMatrixElementsSum
};
