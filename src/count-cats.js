const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  let newMatrix = [].concat(...matrix);
  let count = newMatrix.reduce((res, item) => {
    if(item == '^^') {
      res++
    }
    return res
  }, 0)
  return count;
}

module.exports = {
  countCats
};
