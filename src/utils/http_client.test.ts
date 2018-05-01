import { assert, expect, should } from 'chai';

import HttpClient from './http_client';

should();

describe('HttpClient', () => {
  describe('receives a response when', () => {
    it('GETs 200', (done) => {
      HttpClient.get('https://httpbin.org/status/200')
        .then((response) => {
          assert.equal(response.status, 200);
          expect(response.status).to.equal(200);
          response.status.should.equal(200);
          done();
        })
        .catch(done);
    });
  });
});
