class Peliculas {
    titulo: string;
    calificacion: number;
    verAhora = () => {
        console.log("play");
    };

    constructor(titulo: string, calificacion: number) {
        this.titulo = titulo;
        this.calificacion = calificacion;
    }

}

class Actores {
    nombre: string;
    edad: number;
    constructor(nombre: string, edad: number) {
        this.nombre = nombre;
        this.edad = edad;
    }

}

class NoticiasImportantes {
    titulo: string;
    fecha: number;
    fuente: string;
    constructor(titulo: string, fecha: number, fuente: string) {
        this.titulo = titulo;
        this.fecha = fecha;
        this.fuente = fuente;

    }
}

class PeliculasOriginales {
    titulo: string;
    categoria: string;
    contenido: string;
    constructor(titulo: string, categoria: string, contenido: string) {
        this.titulo = titulo;
        this.categoria = categoria;
        this.contenido = contenido;

    }
}