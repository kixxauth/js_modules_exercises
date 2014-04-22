require('should');

describe("CommonJS modules in Node.js", function () {
  it("should not be smoking", function (done) {
    true.should.eql(true);
    return done();
  });
});
