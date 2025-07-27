

const color = document.querySelector('#cambiarColor');
const codigoColor = document.querySelector('#codigoColor');

color.addEventListener('click',function(){
    
    let num1 = Math.floor(Math.random()*256);
    let num2 = Math.floor(Math.random()*256);
    let num3 = Math.floor(Math.random()*256);
    codigoColor.textContent = `${num1},${num2},${num3}`;


    console.log(`rgb(${num1},${num2},${num3})`)
    document.body.style.backgroundColor = `rgb(${num1},${num2},${num3})`;
})
