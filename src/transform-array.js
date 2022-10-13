const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform( arr ) {

  if (!Array.isArray(arr)) {
    throw Error ("\'arr\' parameter must be an instance of the Array!")
  }

  let mass = [...arr];
  for(let i = 0; i < mass.length; i++) {
    if(mass[i] == '--double-next') {
      if(mass.indexOf(i + 1) <= mass.length & mass.indexOf(i + 1) >= 0){
          console.log(mass.indexOf(i + 1) <= mass.length & mass.indexOf(i + 1) >= 0)
          console.log('length',mass.length)
        mass.splice(i, 1, mass[i + 1])
          i = 0
      } else {
          mass.splice(i, 1)
          i = 0
      }

    } else if (mass[i] == '--discard-prev') {
      if(mass.indexOf(i - 1) >= 0) {
        mass.splice(i - 1, 2, ' ')
          i = 0
      } else {
          mass.splice(i, 1)
          i = 0
      }

    } else if (mass[i] == '--discard-next') {
      if(mass.indexOf(i + 1) <= mass.length) {
        mass.splice(i, 2, ' ')
          i = 0
      } else {
          mass.splice(i)
          i = 0
      }

    } else if (mass[i] == '--double-prev') {
      if(mass.indexOf(i - 1) >= 0) {
        mass.splice(i, 1, mass[i -1])
          i = 0
      } else {
          mass.splice(i, 1)
          i = 0
      }
    }

  }

   return mass.filter(item => item !== ' ')
}

module.exports = {
  transform
};
