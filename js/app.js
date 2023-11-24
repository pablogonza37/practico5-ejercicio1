const botonComenzarJuego = document.querySelector("#btnComenzar");
const botonEnviar = document.querySelector("#btnEnviar");

let numeroAleatorio = 0;

function numeroAlAzar() {
  numeroAleatorio = Math.floor(Math.random() * 10);
  console.log(numeroAleatorio);
}

function enviarNumero() {
    const numeroElegido = document.querySelector('input');
    
    if (numeroAleatorio == numeroElegido.value){
        alert('¡FELICIDADES!, Los numeros son identicos');
    }else if (numeroAleatorio > numeroElegido.value){
        alert('El numero ingresado es menor');
    }else {
        alert('El numero ingresado es mayor');
    }
}

botonComenzarJuego.addEventListener("click", numeroAlAzar);

botonEnviar.addEventListener("click", enviarNumero);

