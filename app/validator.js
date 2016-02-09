'use strict';

// var Validator = require('pi-validator');
var _ = require('lodash');

class DummyValidator {
  constructor(value) {
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