"use strict";
class Calculadora {
    setSumaB(value) {
        this.suma = value;
    }
    getSumaB() {
        return this.suma;
    }
    setResta(value) {
        this.resta = value;
    }
    getResta() {
        return this.resta;
    }
    setMulti(value) {
        this.multi = value;
    }
    getMulti() {
        return this.multi;
    }
    setDivision(value) {
        this.division = value;
    }
    getDivision() {
        return this.division;
    }
}
var calculadoraB = new Calculadora();
calculadora.setSumaB(2);
var nombre;
process.stdout.write("Escribe ");
process.stdin.on('data', function (data) {
    nombre = data.toString();
    process.stdout.write(`${nombre}\n`);
    process.exit();
});
