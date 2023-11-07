let intervalo = null;
let dirX = Math.floor(Math.random() * 5);
let nRandom = Math.floor(Math.random() * 20);
let cochesCantidad = 0;

function fColocar(){

    const inicio = document.querySelector("#inicio");
    const cochesCantidad = parseInt(document.getElementById("coches").value);
    
    let html = "";
    const margen = 10;
    const alto = 50;

    for (let i = 1; i <= cochesCantidad; i++){
        const top = (i - 1) * (margen + alto);
        html += `<div class='coches' id='coche${i}' style='top: ${top}px;'>${i}</div>`;
    }
    inicio.innerHTML = html;
}

function fArrancar(){
    if (intervalo == null){
        intervalo = setInterval(fMover, nRandom);
    }else{
        clearInterval(intervalo);
        intervalo = null;
    }
}   

function fMover(){

    let coche1 = document.getElementById(`coche1`);

    let coche_left1 = parseInt(coche1.style.left) || 0;
    let coche_ancho1 = coche1.clientWidth;
    let campo_ancho1 = coche1.parentElement.clientWidth;

    if((coche_left1 + coche_ancho1) > campo_ancho1 || coche_left1 < 0){
        dirX = -dirX;
    }
    coche1.style.left = (coche_left1 + dirX) + "px";

    let coche2 = document.getElementById(`coche2`);

    let coche_left2 = parseInt(coche2.style.left) || 0;
    let coche_ancho2 = coche2.clientWidth;
    let campo_ancho2 = coche2.parentElement.clientWidth;

    if((coche_left2 + coche_ancho2) > campo_ancho2 || coche_left2 < 0){
        dirX = -dirX;
    }
    coche2.style.left = (coche_left2 + dirX) + "px";
    
}