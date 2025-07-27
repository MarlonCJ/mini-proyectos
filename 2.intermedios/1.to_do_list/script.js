
// TO DO LIST

let arrTarea = [];
const guardado = localStorage.getItem('datos');
if(guardado){
    arrTarea = JSON.parse(guardado);
}
let idTarea= arrTarea.length > 0 ? arrTarea[arrTarea.length - 1].id + 1 : 1;
const formulario = document.querySelector('#formulario');
const tarea = document.querySelector('#tarea');
const lista = document.querySelector('#lista');

function mostrarDatos() {
  lista.innerHTML = '';
  arrTarea.forEach(function(elementos) {
    const li = document.createElement('li');
    // Arma el texto con estado:
    li.textContent = elementos.tarea + (elementos.completado ? ' (completada)' : '');
    li.dataset.id = elementos.id;

    // Botón completar
    const btnCompletar = document.createElement('button');
    btnCompletar.textContent = 'Tarea completada';
    btnCompletar.classList.add('btn-completada');
    btnCompletar.dataset.id = elementos.id;
    btnCompletar.disabled = elementos.completado; // Opcional: deshabilita si ya está completada

    // Botón Modificar (opcional)
    const btnModificar = document.createElement('button');
    btnModificar.textContent = 'Modificar';
    btnModificar.classList.add('btn-modificar');
    btnModificar.dataset.id = elementos.id;

    // Botón Eliminar (opcional)
    const btnEliminar = document.createElement('button');
    btnEliminar.textContent = 'Eliminar';
    btnEliminar.classList.add('btn-eliminar');
    btnEliminar.dataset.id = elementos.id;

    li.appendChild(btnCompletar);
    li.appendChild(btnModificar);
    li.appendChild(btnEliminar);

    lista.appendChild(li);
  });
}



mostrarDatos();


formulario.addEventListener('submit',function(e){

    e.preventDefault();
    
    const tareas = {
        id : idTarea++,
        tarea : tarea.value.trim(),
        completado : false
    }

    arrTarea.push(tareas);
    localStorage.setItem('datos',JSON.stringify(arrTarea));    
    mostrarDatos();
    formulario.reset();

})

lista.addEventListener('click', function(event) {
  const id = event.target.dataset.id;
  if (!id) return; // Si no tiene data-id, ignora

  // Completar tarea
  if (event.target.classList.contains('btn-completada')) {
    const tarea = arrTarea.find(t => t.id == id);
    if (tarea && !tarea.completado) {
      tarea.completado = true;
      localStorage.setItem('datos', JSON.stringify(arrTarea));
      mostrarDatos();
    }
  }

  if (event.target.classList.contains('btn-eliminar')) {
    // Eliminar tarea
    arrTarea = arrTarea.filter(t => t.id != id);
    localStorage.setItem('datos', JSON.stringify(arrTarea));
    mostrarDatos();
  }

  if (event.target.classList.contains('btn-modificar')) {
    // Modificar tarea (flujo simple: prompt)
    const tareaActual = arrTarea.find(t => t.id == id);
    const nuevaTarea = prompt('Modificar tarea:', tareaActual.tarea);
    if (nuevaTarea !== null && nuevaTarea.trim() !== '') {
      tareaActual.tarea = nuevaTarea.trim();
      localStorage.setItem('datos', JSON.stringify(arrTarea));
      mostrarDatos();
    }
  }
});
