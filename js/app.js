const botonComenzarJuego = document.querySelector("#btnComenzar");
const botonEnviar = document.querySelector("#btnEnviar");
const numeroIntentos = document.querySelector("#intentos");

let numeroAleatorio = "";
let intentos = 3;

function numeroAlAzar() {
  numeroAleatorio = Math.floor(Math.random() * 11); // decidi limitar los numeros del 1 al 10 para hacer mas facil la prueba
  botonComenzarJuego.disabled = true;
  //console.log(numeroAleatorio);
}

function enviarNumero() {
  const numeroElegido = document.querySelector("input");
  if (numeroElegido.value < 0) {
    alert("Ingrese un numero positivo");
  } else {
    if (numeroAleatorio == numeroElegido.value) {
      alert("¡FELICIDADES!, has adivinado el numero magico");
      location.reload();
    } else if (numeroAleatorio > numeroElegido.value) {
      alert("El numero ingresado es menor al numero magico");
      intentos -= 1;
      numeroIntentos.innerHTML = `Numero de intentos: ${intentos}`;
      

    } else {
      alert("El numero ingresado es mayor al numero magico");
      intentos -= 1;
      numeroIntentos.innerHTML = `Numero de intentos: ${intentos}`;
      
    }

    if (intentos === 0){
        alert('Game over, Has acabado tus intentos');
        location.reload();
    }
  }

}

botonComenzarJuego.addEventListener("click", numeroAlAzar);

