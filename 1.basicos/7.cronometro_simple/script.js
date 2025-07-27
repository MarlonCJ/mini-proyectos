
// tiempo
let segundos = document.querySelector('#s');
let minutos = document.querySelector('#m');
let horas = document.querySelector('#h');

// acciones
let inicio = document.querySelector('#iniciar');
let resetear = document.querySelector('#reiniciar');

let s = 0;
let m = 0;
let h = 0;
let intervalo;


inicio.addEventListener('click',iniciar);
resetear.addEventListener('click',reiniciar);


function iniciar(){
  
    if(inicio.textContent.toLowerCase() === "iniciar"){
        
        inicio.textContent = "pausar";

        intervalo = setInterval(function(){
            s++;
            console.log(s);
            segundos.textContent = String(s).padStart(2,'0');
            if(s > 59){
                s = 0;
                m += 1;
                console.log(m)
                minutos.textContent = String(m).padStart(2,'0');
                if(m > 59){
                    m=0;
                    h += 1;
                    console.log(h);
                    horas.textContent = String(h).padStart(2,'0');
                    if(h > 23){
                        console.log("Se completo un dia");
                        clearInterval(intervalo);
                    }
                }
            }
        },1000);

    }else{
        inicio.textContent = "iniciar"
        clearInterval(intervalo);
    }
 
      
}

function reiniciar(){
    s = 0;
    m = 0;
    h = 0;
    segundos.textContent = '00';
    minutos.textContent = '00';
    horas.textContent = '00';
    inicio.textContent = "iniciar";
    clearInterval(intervalo);
}