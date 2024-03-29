const botonComenzarJuego = document.querySelector("#btnComenzar");
const botonEnviar = document.querySelector("#btnEnviar");
const numeroIntentos = document.querySelector("#intentos");
const adivinar = document.querySelector("#adininar");
const numeroElegido = document.querySelector("#numero");

let numeroAleatorio = "";
let intentos = 3;

function numeroAlAzar() {
  numeroAleatorio = Math.floor(Math.random() * 10) + 1;
  console.log(numeroAleatorio);
  botonComenzarJuego.disabled = true;
  adivinar.innerHTML = "Adivinar el número";
  numeroElegido.disabled = false;
  numeroIntentos.innerHTML = "Numero de intentos: 3";
  botonEnviar.disabled = false;
}

function enviarNumero(event) {
  event.preventDefault();
  parseInt(numeroElegido.value);

  if (
    isNaN(numeroElegido.value) ||
    numeroElegido.value < 1 ||
    numeroElegido.value > 10
  ) {
    alert("Por favor, ingrese un número entre 1 y 10.");
  }else if (numeroElegido.value < 0) {
    alert("Ingrese un numero positivo");
  } else {
    if (numeroAleatorio == numeroElegido.value) {
      alert("¡FELICIDADES!, has adivinado el numero magico");

      reiniciarJuego();
    } else if (numeroAleatorio > numeroElegido.value) {
      alert("El numero ingresado es menor al numero magico");
      intentos -= 1;
      numeroIntentos.innerHTML = `Numero de intentos: ${intentos}`;
      numeroElegido.value = "";
    } else {
      alert("El numero ingresado es mayor al numero magico");
      intentos -= 1;
      numeroIntentos.innerHTML = `Numero de intentos: ${intentos}`;
      numeroElegido.value = "";
    }

    if (intentos === 0) {
      alert("Game over, Has acabado tus intentos");
      reiniciarJuego();
    }
  }
}

function reiniciarJuego() {
  botonComenzarJuego.disabled = false;
  adivinar.innerHTML = "¡Comenzar Juego!";
  numeroElegido.disabled = true;
  numeroIntentos.innerHTML = "";
  botonEnviar.disabled = true;
  location.reload();
}

botonComenzarJuego.addEventListener("click", numeroAlAzar);
