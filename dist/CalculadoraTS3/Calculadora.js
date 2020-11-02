"use strict";
class calculadoraMatematica {
    setSuma(value, value2) {
        this.suma = value + value2;
    }
    get getSuma() {
        return this.suma > 0 ? this.suma : "";
    }
    setresta(value, value2) {
        this.resta = value - value2;
    }
    get getresta() {
        return this.resta > 0 ? this.resta : "";
    }
    setmultiplicacion(value, value2) {
        this.multiplicacion = value * value2;
    }
    get getmultiplicacion() {
        return this.multiplicacion > 0 ? this.multiplicacion : "";
    }
    setdividir(value, value2) {
        this.division = value / value2;
    }
    get getdividir() {
        return this.division > 0 ? this.division : "";
    }
}
var Numero1;
//var Numero2: string;
process.stdout.write("Escriba la operación ");
process.stdin.on('data', function (data) {
    Numero1 = data.toString();
    process.stdout.write(`${Numero1}\n`);
    if (Numero1.indexOf("/") || Numero1.indexOf("*") || Numero1.indexOf("+") || Numero1.indexOf("-")) {
        let Array = Numero1.split("/");
        let calculadora = new calculadoraMatematica();
        calculadora.setdividir(parseFloat(Array[0]), parseFloat(Array[1]));
        console.log(calculadora.getdividir);
    }
    if (Numero1.indexOf("*")) {
        let Array = Numero1.split("*");
        let calculadora = new calculadoraMatematica();
        calculadora.setmultiplicacion(parseFloat(Array[0]), parseFloat(Array[1]));
        console.log(calculadora.getmultiplicacion);
    }
    if (Numero1.indexOf("+")) {
        let Array = Numero1.split("+");
        let calculadora = new calculadoraMatematica();
        calculadora.setSuma(parseFloat(Array[0]), parseFloat(Array[1]));
        console.log(calculadora.getSuma);
    }
    if (Numero1.indexOf("-")) {
        let Array = Numero1.split("-");
        let calculadora = new calculadoraMatematica();
        calculadora.setresta(parseFloat(Array[0]), parseFloat(Array[1]));
        console.log(calculadora.getresta);
    }
    process.exit();
});
