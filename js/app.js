//Variables
const formulario = document.querySelector('#formulario');
const listaTweets = document.querySelector('#lista-tweets');
let tweets = [];

//Event Listeners
eventListeners();

function eventListeners() {
    formulario.addEventListener('submit', agregarTweet);
}


//Funciones
function agregarTweet(e) {
    e.preventDefault();

    //textarea donde el usuario escribe 
    const tweet = document.querySelector('#tweet').value;

    //validación..
    if (tweet === '') {
        mostrarError('Un mensaje no puede ir vacio')

        return; //evita q se ejecuten más lineas de codigo
    }
}

//mostrar msj de error
function mostrarError(error) {
    const mensajeError = document.createElement('p');
    mensajeError.textContent = error;
    mensajeError.classList.add('error');

    //insertarlo en el contenido
    const contenido = document.querySelector('#contenido');
    contenido.appendChild(mensajeError);
    //elimina la alerta desp de 3s
    setTimeout(() => {
        mensajeError.remove();
    }, 3000);
}
