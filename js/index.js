const usuario = document.getElementById('user');
const password = document.getElementById('pass');
const formulario = document.getElementById('formLogin');

formulario.addEventListener('submit', login);

function login(){
    e.preventDefault();

    let usuarioVal = usuario.value;
    let passwordVal = password.value;

if(usuarioVal == '' || passwordVal == ''){
    return;
}

    console.log('el valor para user es:' + usuarioVal);
    console.log('el valor para pass es: ' + passwordVal);

}