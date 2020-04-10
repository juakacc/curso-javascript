const assert = require("assert");
const Math = require("../src/math.js");
const expect = require("chai").expect;
const sinon = require("sinon");

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

    expect(math.sum(5, 5)).to.equal(10);
    // assert.equal(math.sum(5, 5), 10);
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

    expect(math.mutiply(5, 5)).to.equal(25);
    // assert(math.mutiply(5, 5), 24);
  });

  it("Comparando objetos", function () {
    const obj = {
      name: "João da Silva",
    };
    expect(obj).to.have.property("name");

    const obj2 = {
      name: "João da Silva",
    };

    expect(obj).to.deep.equal(obj2); // Compara o valor dos atributos
  });

  it.only("Calls res with sum and index values", function () {
    const req = {};
    const res = {
      load: sinon.spy(),
    };
    const math = new Math();

    // sinon.stub(res, 'load').returns('xpto') substitui o método original

    math.printSum(req, res, 5, 5);

    expect(res.load.calledOnce).to.be.true;
    expect(res.load.args[0][0]).to.equal("index");
    expect(res.load.args[0][1]).to.equal(10);
  });
});
