let intervalo = null;
// let dirX = (Math.random() * 5);;
let cochesCantidad = 0;

function fColocar(){

    const inicio = document.querySelector("#inicio");
    const cochesCantidad = parseInt(document.getElementById("coches").value);
    
    let html = "";
    const margen = 10;
    const alto = 45;

    for (let i = 1; i <= cochesCantidad; i++){
        const top = (i - 1) * (margen + alto);
        html += `<div class='coches' style='top: ${top}px;'><img src="e0ea41bf5ace04915641ff881d587850-vehiculo-coche-pixel-verde.png" class='cochess' id='coche${i}' ></div>`;
    }
    inicio.innerHTML = html;
}

function fArrancar(){
    if (intervalo == null){
        // const nRandom = (Math.random() * 10);
        intervalo = setInterval(fMover, 100);
    }else{
        clearInterval(intervalo);
        intervalo = null;
    }
}   

function fMover(){
    
    const coches = document.querySelectorAll(".cochess");

    coches.forEach((coche) => {

        let coche_left = parseInt(coche.style.left) || 0;
        let coche_ancho = coche.clientWidth;
        let carrera_ancho = document.querySelector(".carrera").clientWidth;
        let meta_ancho = document.querySelector(".meta").clientWidth;
        let campo_ancho = (carrera_ancho - meta_ancho) * 1.34;

        if ((coche_left + coche_ancho) > campo_ancho || coche_left < 0){
            mostrarImagen()
            clearInterval(intervalo);
        }else{
            coche.style.left = (coche_left + Math.random() * 12) + "px";
            
        }
    });
}

function mostrarImagen(){
    let copa = document.querySelector(".copa");
    copa.style.display = "block";
}