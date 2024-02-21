const chaiHttp = require('chai-http');
const chai = require('chai');
const assert = chai.assert;
const server = require('../server');

chai.use(chaiHttp);

suite('Functional Tests', function() {
  test("Get /api/stock-prices/", function (done){
    chai
      .request(server)
      .keepOpen()
      .get('/api/stock-prices/?stock=GOOG')
      .end(function(res, err){
        assert.equal(res.status, 200);
       done();
      })
  })

  test('Get /api/stock-prices/ and like it', function(done){
    chai
      .request(server)
      .keepOpen()
      .get('/api/stock-prices?stock=GOOG&like=true')
      .end(function(res, err){
        assert.equal(res.status, 200);
      })
  })
});
