const assert = require("assert");
const Math = require("../src/math.js");

let value = 0;

describe("Math class", function () {
  //hooks
  beforeEach(function () {
    // Executado antes de cada IT
    value = 0;
  });

  // sincrono
  it("Sum two numbers", function () {
    const math = new Math();

    assert.equal(math.sum(5, 5), 10);
  });

  // assincrono
  it("Sum two numbers async", function (done) {
    const math = new Math();
    this.timeout(3000);

    math.sumAsync(5, 5, value => {
      assert.equal(value, 10);
      done();
    });
  });

  // it.only("..."); // Executa apenas esse teste
  it("Pending test");

  it("Mutiply two numbers", function () {
    const math = new Math();

    assert(math.mutiply(5, 5), 24);
  });
});
