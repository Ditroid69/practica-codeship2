const test = require("node:test"); const assert = require("node:assert/strict"); const { operar, calcular } = require("./calculadora.js");

test("suma", () => assert.equal(operar(2, 3, "sumar"), 5));
test("resta", () => assert.equal(operar(9, 4, "restar"), 5));
test("multiplicación", () => assert.equal(operar(3, 4, "multiplicar"), 12));
test("división", () => assert.equal(operar(10, 2, "dividir"), 5));
test("no divide entre cero", () => {
    assert.throws(() => operar(8, 0, "dividir"), /No se puede dividir entre cero/);
});
test("acepta valores como texto", () => assert.equal(operar("2", "3", "sumar"), 5));
test("calcular usa los elementos del DOM", () => {
    const resultado = { textContent: "" };
    const documentMock = {
        getElementById: (id) => {
            if (id === "numero1") return { value: "7" };
            if (id === "numero2") return { value: "3" };
            if (id === "operacion") return { value: "sumar" };
            if (id === "resultado") return resultado;
            return null;
        }
    };

    global.document = documentMock;
    try {
        assert.equal(calcular(), 10);
        assert.equal(resultado.textContent, "Resultado: 10");
    } finally {
        delete global.document;
    }
});