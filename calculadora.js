function transformarNumero(valor) {
    const numero = Number(valor);
    if (Number.isNaN(numero)) {
        throw new Error("Los valores deben ser numéricos");
    }
    return numero;
}

function operar(a, b, operacion) {
    const numeroA = transformarNumero(a);
    const numeroB = transformarNumero(b);
    const operacionNormalizada = String(operacion).trim().toLowerCase();

    if (operacionNormalizada === "sumar") return numeroA + numeroB;
    if (operacionNormalizada === "restar") return numeroA - numeroB;
    if (operacionNormalizada === "multiplicar") return numeroA * numeroB;
    if (operacionNormalizada === "dividir") {
        if (numeroB === 0) throw new Error("No se puede dividir entre cero");
        return numeroA / numeroB;
    }
    throw new Error("Operación no válida");
}

function calcular() {
    const elementoDocumento = typeof document !== "undefined" ? document : null;
    const numero1 = elementoDocumento ? elementoDocumento.getElementById("numero1") : null;
    const numero2 = elementoDocumento ? elementoDocumento.getElementById("numero2") : null;
    const operacion = elementoDocumento ? elementoDocumento.getElementById("operacion") : null;
    const salida = elementoDocumento ? elementoDocumento.getElementById("resultado") : null;

    try {
        const valorA = numero1 ? numero1.value : 0;
        const valorB = numero2 ? numero2.value : 0;
        const tipoOperacion = operacion ? operacion.value : "sumar";

        const resultado = operar(valorA, valorB, tipoOperacion);
        if (salida) salida.textContent = "Resultado: " + resultado;
        return resultado;
    } catch (error) {
        if (salida) salida.textContent = "Error: " + error.message;
        return undefined;
    }
}

if (typeof module !== "undefined") module.exports = { operar, calcular }; 