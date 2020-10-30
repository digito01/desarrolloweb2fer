"use strict";
class Peliculas {
    constructor(titulo, calificacion) {
        this.verAhora = () => {
            console.log("play");
        };
        this.titulo = titulo;
        this.calificacion = calificacion;
    }
}
class Actores {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
}
class NoticiasImportantes {
    constructor(titulo, fecha, fuente) {
        this.titulo = titulo;
        this.fecha = fecha;
        this.fuente = fuente;
    }
}
class PeliculasOriginales {
    constructor(titulo, categoria, contenido) {
        this.titulo = titulo;
        this.categoria = categoria;
        this.contenido = contenido;
    }
}
