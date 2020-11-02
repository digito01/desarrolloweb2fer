"use strict";
function sumar(a, b) {
    return a + b;
}
function restar(a, b) {
    return a - b;
}
function multi(a, b) {
    return a * b;
}
function dividir(a, b) {
    if (a == 0) {
        console.log("No se puede dividir por 0");
    }
    else {
        return a / b;
    }
}
exports.sumar = sumar;
exports.sumar = restar;
exports.sumar = multi;
exports.sumar = dividir;
