"use strict";
class Animal {
    constructor(especie) {
        this.Especie = especie;
    }
    sonido() {
        console.log("Ruge");
    }
}
class Leon extends Animal {
}
let animalito = new Leon("felino");
animalito.sonido();
//console.log(animalito);
