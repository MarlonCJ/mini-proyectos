

const suma = document.querySelector('#sumar');
const resta = document.querySelector('#resta');
let numeros = document.querySelectorAll('input');
let mostrar = document.querySelector('#mostrar');

suma.addEventListener('click',sumar);
resta.addEventListener('click',restar);

function sumar(){
    let resultado = 0;

    numeros.forEach(function(numero){
        let valor = parseFloat(numero.value);
        
        if(!isNaN(valor)){
            resultado += valor;
        }
    })    
    console.log(resultado);
    // mostrarResultado(resultado);
}


function restar(){
    let resultado;
    // numeros.forEach(function(numero,index){
    //     const valor = parseFloat(numero.value);

    //     if(isNaN(valor)) return;

    //     if(index === 0){
    //         resultado = valor;
    //     }else{
    //         resultado -= valor;
    //     }
        
    // })    

    numeros.forEach(function(numero){
        const valor = parseFloat(numero.value);

        if(isNaN(valor)) return;

        if(resultado === undefined){
            resultado = valor;
        }else{
            resultado -= valor;
        }
    })

    mostrarResultado(resultado);
}


function mostrarResultado(num){
    mostrar.textContent= num;
}

