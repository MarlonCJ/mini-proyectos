
const btn = document.querySelector('#btn');
const texto = document.querySelector('#texto');

btn.addEventListener('click',function(){
    texto.classList.toggle('ocultar');

    // btn.textContent = btn.textContent === "ocultar" ? "mostrar" : "ocultar"; 

    btn.textContent = texto.classList.contains('ocultar') ? "mostrar" : "ocultar";

})