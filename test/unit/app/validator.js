'use strict';

require('chai').should();

var pwd       = process.env.PWD,
    path      = require('path'),
    Validator = require(path.join(pwd, 'app/validator'));

describe('Validator', function() {
  describe('Validator instanciation', function() {
    it('should not throw on empty instanciation', function() {
      (function() {
        new Validator();
      }).should.not.throw(Error);
    });

    it('should not throw on true instanciation', function() {
      (function() {
        new Validator(true);
      }).should.not.throw(Error);
    });

    it('should not throw on false instanciation', function() {
      (function() {
        new Validator(false);
      }).should.not.throw(Error);
    });
  });

  describe('Validator methods - empty instanciation', function() {
    var validator;

    before(function() {
      validator = new Validator();
    });

    it('should not throw on validate call', function() {
      (function() {
        validator.validate({});
      }).should.not.throw(Error);
    });

    it('should be valid', function() {
      let validation = validator.validate({});
      validation.isValid(true).should.equal(true);

      validation = validator.validate({
        'fuu': 'bar'
      });
      validation.isValid(true).should.equal(true);
    });
  });

  describe('Validator methods - true instanciation', function() {
    var validator;

    before(function() {
      validator = new Validator(true);
    });

    it('should not throw on validate call', function() {
      (function() {
        validator.validate({});
      }).should.not.throw(Error);
    });

    it('should be valid', function() {
      let validation = validator.validate({});
      validation.isValid(true).should.equal(true);

      validation = validator.validate({
        'fuu': 'bar'
      });
      validation.isValid(true).should.equal(true);
    });
  });

  describe('Validator methods - false instanciation', function() {
    var validator;

    before(function() {
      validator = new Validator(false);
    });

    it('should not throw on validate call', function() {
      (function() {
        validator.validate({});
      }).should.not.throw(Error);
    });

    it('should be valid', function() {
      let validation = validator.validate({});
      validation.isValid(false).should.equal(false);

      validation = validator.validate({
        'fuu': 'bar'
      });
      validation.isValid(false).should.equal(false);
    });
  });
});