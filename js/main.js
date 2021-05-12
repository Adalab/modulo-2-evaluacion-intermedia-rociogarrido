"use strict";

// Voy a crear variables para acceder a los elementos del HTML.
const inputNumber = document.querySelector(".js-number");
const button = document.querySelector(".js-button");
const clue = document.querySelector(".js-clue");
const attempts = document.querySelector(".js-counter");

// 2. Generar un número aleatorio con la ayuda de Math.random y Math.ceil. Podéis usar este código. Para ello, copiad estas 3 líneas de código en vuestro JS y no las modifiquéis:
function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
}

let randomNumber = getRandomNumber(100); // variable para asignarle el parámetro 100 a la función anterior.

// 3. Mostrar en consola el número aleatorio para saber qué número se ha generado.
console.log('Mi número aleatorio es ' + randomNumber);