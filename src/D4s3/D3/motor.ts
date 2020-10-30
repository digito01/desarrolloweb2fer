// Motor
// -> encender
// CombustionInterna 
// cilindros
// combustible
// Electrico
// Amperaje
//

class Motor {
    encender = () => {
        console.log("encender");
    };
}
class CombustionInterna extends Motor {
    cilindros: string;
    combustible: string
}
class Electrico {
    Amperaje: string;
}
