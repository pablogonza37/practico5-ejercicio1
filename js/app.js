const botonComenzarJuego = document.querySelector("#btnComenzar");
const botonEnviar = document.querySelector("#btnEnviar");

let numeroAleatorio = 0;

function numeroAlAzar() {
  numeroAleatorio = Math.floor(Math.random() * 11); // 
  console.log(numeroAleatorio);
}

function enviarNumero() {
    const numeroElegido = document.querySelector('input');
    
    if (numeroAleatorio == numeroElegido.value){
        alert('¡FELICIDADES!, has adivinado el numero magico');
    }else if (numeroAleatorio > numeroElegido.value){
        alert('El numero ingresado es menor al numero magico');
    }else {
        alert('El numero ingresado es mayor al numero magico' );
    }
}

botonComenzarJuego.addEventListener("click", numeroAlAzar);

botonEnviar.addEventListener("click", enviarNumero);

