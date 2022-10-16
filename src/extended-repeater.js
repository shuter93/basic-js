const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater( str, options ) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

  if(!options['repeatTimes']) {
    options['repeatTimes'] = 1; //
  };
  if(!options['separator']) {
    options['separator'] = '+';
  };
  if(options['addition'] === undefined) {
    options['addition'] = '';  // первое
  }

  if(!options['additionRepeatTimes']) {
    options['additionRepeatTimes'] = 1;  //
  };
  if(!options['additionSeparator']) {
    options['additionSeparator'] = '|';  //
  };
  if(typeof options['additionRepeatTimes'] !== 'number' || !options['additionRepeatTimes']) {
    options['additionRepeatTimes'] = 1;
  };

    let newStr = '';

    let strEdition = '';

    for(let i = 0; i < options['additionRepeatTimes']; i++ ) {
        strEdition += options['addition'] + options['additionSeparator'];
    }
    strEdition = strEdition.substring(0, strEdition.length - options['additionSeparator'].length);

  for(let i = 0; i < options['repeatTimes']; i++ ){
    newStr += str + strEdition + options['separator'];
  }

  return newStr.substring(0, newStr.length - options['separator'].length);
}

module.exports = {
  repeater
};
