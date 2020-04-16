describe("Elevador", function () {
  const Elevador = require("../app");

  it("Elevador deve está no andar 0", function () {
    expect(Elevador.andar).toBe(0);
  });

  it("Deve ir ao andar 1", function () {
    Elevador.subir();
    expect(Elevador.andar).toBe(1);
  });

  it("Deve voltar ao andar 0", function () {
    Elevador.descer();
    expect(Elevador.andar).toBe(0);
  });
});
