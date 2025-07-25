

const numero = document.querySelector('#numero');
const sumar = document.querySelector('#sumar');
const restar = document.querySelector('#restar');
const reiniciar = document.querySelector('#reiniciar');
const guardado = localStorage.getItem('contador');

if(guardado !== null){
    numero.textContent = guardado;
}

sumar.addEventListener('click',adicionar);
restar.addEventListener('click',sustraer);
reiniciar.addEventListener('click',()=>{
    numero.textContent= 0;
    localStorage.setItem('contador',numero.textContent);
})

function adicionar(){
    const num = parseInt(numero.textContent) || 0;
    numero.textContent = num + 1;
    localStorage.setItem('contador',numero.textContent);
}

function sustraer(){
    const num = parseInt(numero.textContent) || 0;
    if(num>0){ 
        numero.textContent = num - 1
    };
    localStorage.setItem('contador',numero.textContent);
    
}

