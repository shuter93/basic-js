const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
 function getEmailDomain( email ) {
  let arr = email.split('');
  let n = arr.lastIndexOf('@')
    arr.splice(0, n + 1)
    return arr.join('');

}

module.exports = {
  getEmailDomain
};
