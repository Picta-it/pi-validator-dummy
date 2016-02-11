'use strict';

var Validator = require('pi-validator'),
    _ = require('lodash');

class DummyValidator extends Validator {
  constructor(value) {
    super(value);

    if(! _.isUndefined(value)) {
      this.value = value;
    }
    else {
      this.value = true;
    }
  }

  validate() {
    return {
      isValid:     this.value,
      validations: []
    };
  }
}

module.exports = DummyValidator;