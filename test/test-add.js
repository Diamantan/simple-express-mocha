'use strict';
process.env.NODE_ENV = 'test';

const chai = require('chai');
const utils = require('../server').utils;

const expect = chai.expect;

function mySum(a, b) {
  return a+b;
}

describe('Simplest test', function() {

  it('should return correct my sum', function(done) {
    expect(mySum(2,5)).to.equal(7);
    done();
  });

  it('should return correct his sum', function(done) {
    expect(utils.hisSum(2,5)).to.equal(5);
    done();
  });

});
