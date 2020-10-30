class Animal {
    Especie: string;
    constructor(especie:string){
        this.Especie = especie;
    }
    sonido(){
        console.log("Ruge");
    }
}
class Leon extends Animal {
}
let animalito = new Leon ("felino");
animalito.sonido();
//console.log(animalito);