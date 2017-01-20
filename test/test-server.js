'use strict';
process.env.NODE_ENV = 'test';

const chai = require('chai');
const supertest = require('supertest');
const app = require('../server').app;

const expect = chai.expect;

let api = null;

describe('Test server', function() {

  it('should create api', (done) => {
    this.timeout(5000); //warms up.
    api = supertest.agent(app);
    done();
  });

  it('Root should be accessible: / GET', (done) => {
    api
      .get('/')
      .expect(200)
      .end(function(err, res) {
        if (err) return done(err);
        done();
      });
  });

});
