// Dado un set desordenado de pares
// escribir una algoritmo que agrupe por brand
// y agregue un contador de por cada elemento repetido
// Ejemplo
intput = [
    {
        id: 1,
        brand: "BMW",
        model: "116i",
    },
    {
        id: 2,
        brand: "BMW",
        model: "X5",
    },

    {
        id: 3,
        brand: "Toyota",
        model: "Corolla",
    },
    {
        id: 3,
        brand: "Nissan",
        model: "Navara",
    },
    {
        id: 3,
        brand: "Nissan",
        model: "Navara",
    }
];
output = []
for (let i = 0; i < intput.length; i++) {
    let contador = 0
    const objeto1 = intput[i];
    for (let x = 0; x < intput.length; x++) {
        const element = intput[x];
        if (objeto1.brand === element.brand) {
            contador += 1;
        }
    }
    output.push({
        brand: objeto1.brand,
        count: contador
    })
}
let objetos = {};
output = output.filter(function (actual) {
    let existe = !objetos[actual.brand];
    objetos[actual.brand] = true;
    return existe;
});
console.log(output);


