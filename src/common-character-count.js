const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount( s1, s2 ) {
  let n = 0;

    let str1 = s1.split('').sort();
    let str2 = s2.split('').sort();

        str1 = str1.filter((item) => str2.includes(item));
        str2 = str2.filter((item) => str1.includes(item));

    let obj1 = str1.reduce((res, item)=>{
        res[item] = (res[item] || 0 ) + 1
        return res
    },{})
    let obj2 = str2.reduce((res, item)=>{
        res[item] = (res[item] || 0 ) + 1
        return res
    },{})

    let length = Object.keys(obj1).length > Object.keys(obj2).length ? Object.keys(obj1).length : Object.keys(obj2).length;
    for(let i = 0; i < length; i++) {
         n += obj1[Object.keys(obj1)[i]] < obj2[Object.keys(obj2)[i]] ? obj1[Object.keys(obj1)[i]] : obj2[Object.keys(obj2)[i]];
    }


    return n
}

module.exports = {
  getCommonCharacterCount
};
