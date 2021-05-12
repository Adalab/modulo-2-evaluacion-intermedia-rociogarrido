"use strict";
// Variables para acceder a los elementos del HTML.
const inputNumber = document.querySelector(".js-number");
const button = document.querySelector(".js-button");
const clue = document.querySelector(".js-clue");
const attempts = document.querySelector(".js-counter");

// 2. Generar un número aleatorio con la ayuda de Math.random y Math.ceil. Para ello, copiad estas 3 líneas de código en vuestro JS y no las modifiquéis:
function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
}

let randomNumber = getRandomNumber(100); // variable para asignarle el parámetro máximo 100 a la función anterior.

// 3. Mostrar en consola el número aleatorio para saber qué número se ha generado.
console.log('Mi número aleatorio es ' + randomNumber);

// 5. Comparar el número que la jugadora ha escrito en el input con el número aleatorio 
function checkNumber () {
    const userGuess = inputNumber.value;
  // y pintar las pistas correspondientes en la pantalla.
    if (userGuess === '') {  
        clue.innerHTML = "El número debe estar entre 1 y 100."; 
    } else if (userGuess < 1 || userGuess > 100) {
        clue.innerHTML = "El número debe estar entre 1 y 100.";
    } else if (userGuess > randomNumber) {
        clue.innerHTML = "Demasiado alto.";
    } else if (userGuess < randomNumber) {
        clue.innerHTML = "Demasiado bajo.";
    } else if (userGuess === randomNumber) {
        clue.innerHTML = "¡¡¡Enhorabuena, campeona!!!";
    }
}

// 6. Actualizar el contador de intentos cada vez que la jugadora pruebe.
let guessCount = 0; // Para poner el contador a cero.
function updateAttempts() {
  guessCount = guessCount + 1;
  attempts.innerHTML = "Número de intentos: " + guessCount;
}

// Función para que se ejecuten a la vez las dos funciones anteriores.
function handleGuessNumber(ev) {
    ev.preventDefault(); // para que la página no se actualice con cada click
    checkNumber();
    updateAttempts();   
  }

button.addEventListener('click', handleGuessNumber); // evento