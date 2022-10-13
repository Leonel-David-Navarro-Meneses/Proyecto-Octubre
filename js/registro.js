const nombre = document.getElementById('name');
const email = document.getElementById('email');
const user = document.getElementById('user');
const pass = document.getElementById('pass');
const formulario = document.getElementById('formRegistro');

formulario.addEventListener('submit' , registro);

function registro(e){
    e.preventDefault();
    console.log('entra a funcion ');
}