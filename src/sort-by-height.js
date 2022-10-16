const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight( arr ) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
    let b = arr.slice();
    let index = [];
    let i = -1;
    while((i = b.indexOf(-1, i+1)) > -1 ){
        index.push(i);
    }
    let pos = index.slice();
    while(pos.length){
        b.splice(pos.pop(),1);
    }
    b.sort((a,b)=> a-b);
    while(index.length){
        b.splice(index.shift(),0 , -1);
    }
    return b;
}

module.exports = {
  sortByHeight
};
