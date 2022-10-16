const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  result : [],
  getLength() {
    return this.result.length;
  },
  addLink( value ) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    this.result.push(`( ${value} )`)
    return this;
  },
  removeLink( position ) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if(this.checkPosition(position)) {
      if(position < 1 || position > this.getLength()) {
        this.deleteResult();
        throw new Error("You can't remove incorrect link!");
      }
      this.result.splice(position - 1, 1);
      return this;
    }
    this.deleteResult();
    // throw new Error("Position is no integer number");
    throw new Error("You can't remove incorrect link!");

  },
  reverseChain() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    this.result.reverse();
    return this;
  },
  finishChain() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    const showResult = this.getResult();
    this.deleteResult();
    return showResult;
  },

  deleteResult () {
    this.result.length = 0;
  },

  checkPosition(num) {
    return typeof num === 'number' && Number.isInteger(num);
  },

  getResult() {
    return this.result.join('~~');
  }
};

module.exports = {
  chainMaker
};
