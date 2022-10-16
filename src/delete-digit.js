const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
 function deleteDigit( n ) {
  let num = n.toString().split('');
  return Math.max(...num.map((el,i)=> {

      let max = num.slice();
      max.splice(i,1);

      return Number(max.join(''))}))
  }

module.exports = {
  deleteDigit
};
