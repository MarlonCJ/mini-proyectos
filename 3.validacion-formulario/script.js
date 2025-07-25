
const nombre = document.querySelector('#name');
const apellido = document.querySelector('#lastname');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje')
const btn = document.querySelector('#btnEnviar');

// btn.addEventListener('click',function(e){
//     e.preventDefault();
//     console.log('todo bine');
// })

btnEnviar.addEventListener('click',function(e){

    e.preventDefault();

    const campos = [nombre,apellido,email];
    const vacios = campos.some(campo => campo.value.trim() === "");

   if (vacios) {
        mensaje.style.color = "red";
        mensaje.textContent = "Todos los campos son obligatorios";
    } else {
        mensaje.style.color = "green";
        mensaje.textContent = "Se envió correctamente";
    }

})