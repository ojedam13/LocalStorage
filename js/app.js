//Variables
const formulario = document.querySelector('#formulario');
const listaTweets = document.querySelector('#lista-tweets');
let tweets = [];

//Event Listeners
eventListeners();

function eventListeners() {
    //cuando el usuario agrega un nuevo tweet
    formulario.addEventListener('submit', agregarTweet);

    //cuando el documento este listo
    document.addEventListener('DOMContentLoaded', () => {
        tweets = JSON.parse(localStorage.getItem('tweets')) || [];
    });

    crearHtml();
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
    const tweetObj = {
        id: Date.now(),
        tweet

    }
    //añadir arreglos de tweets
    tweets = [...tweets, tweetObj];
    //una vez agregado
    crearHtml();

    //reiniciar form
    formulario.reset();
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

//muestra un listado de los tweets
function crearHtml() {

    limpiarHtml();

    if (tweets.length > 0) {
        tweets.forEach(tweet => {
            //crear html
            const li = document.createElement('li');
            //añadir texto
            li.innerText = tweet.tweet;

            //insertar en el html
            listaTweets.appendChild(li);
        });
    }

    sincronizarStorage();
}

//agrega los tweets actuales a localstorage
function sincronizarStorage() {
    localStorage.setItem('tweets', JSON.stringify(tweets));
}


//limpiar html
function limpiarHtml() {
    while (listaTweets.firstChild) {
        listaTweets.removeChild(listaTweets.firstChild);
    }
}