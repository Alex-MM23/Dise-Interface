let intervalo = null;
let dirX = 1;
let cochesCantidad = 0;

function fColocar(){

    const inicio = document.querySelector("#inicio");
    cochesCantidad = parseInt(document.getElementById("coches").value);
    
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
        const nRandom = Math.floor(Math.random() * 10) + 1;
        intervalo = setInterval(fMover, nRandom);
    }else{
        clearInterval(intervalo);
        intervalo = null;
    }
}   

function fMover(){
    
    const coche = document.querySelector("#coche1");

        let coche_left = parseInt(coche.style.left) || 0;
        let coche_ancho = coche.clientWidth;
        let carrera_ancho = document.querySelector(".carrera").clientWidth;
        let meta_ancho = document.querySelector(".meta").clientWidth;
        let campo_ancho = (carrera_ancho - meta_ancho) * 1.334;

        if ((coche_left + coche_ancho) > campo_ancho || coche_left < 0){
            campo_ancho = campo_ancho + "px";
            clearInterval(intervalo);
        }else{
            coche.style.left = (coche_left + dirX) + "px";
        }
}