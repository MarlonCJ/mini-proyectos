

// Agregar Tarea

const input = document.querySelector('#tarea');
const button = document.querySelector('#btn');
const lista = document.querySelector('#lista');


button.addEventListener("click",agregar);

function agregar(e){
    e.preventDefault();
    if(input.value.trim() === "") return;
    const tarea = document.createElement('li');
    tarea.textContent= input.value;
    lista.appendChild(tarea);
    input.value= "";
}