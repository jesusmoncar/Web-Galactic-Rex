"use strict"

let edad= prompt('Introduzca su edad: ');

if (edad >= 18){
    alert('¡Bienvenido a nuestra web!');
}else {
    if (edad >= 0 && edad <= 3) {
        window.location.href = "https://www.dodot.es/";
    } else if (edad >= 4 && edad <= 6) {
        window.location.href = "https://www.pocoyo.com/";
    } else if (edad >= 7 && edad <= 12) {
        window.location.href = "https://www.harrypotterplatform934.com/";
    } else if (edad >= 13 && edad <= 17) {
        window.location.href = "https://www.lego.com/";
    } else {
        alert("Lo siento, la edad ingresada no es válida.");
    }
}
