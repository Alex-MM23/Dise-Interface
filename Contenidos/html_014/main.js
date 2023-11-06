let intervalo = null;
let dirX = 5;
let dirY = 5;

function fInicio(){

}

function fArrancar(){

    document.querySelector("#ball").style.top = "30px";
    document.querySelector("#ball").style.left = "50px";

    if (intervalo == null){
    intervalo = setInterval(fMover, 20);
    }else{
        clearInterval(intervalo);
        intervalo = null;
    }
}

function fMover(){
    let obj_pelota = document.querySelector("#ball");
    let obj_campo = document.querySelector("#campo");

    let pelota_ancho = obj_pelota.clientWidth;
    let pelota_alto = obj_pelota.clientHeight;
    let pelota_left = parseInt(obj_pelota.style.left);
    let pelota_top = parseInt(obj_pelota.style.top);
    let campo_ancho = obj_campo.clientWidth;
    let campo_alto = obj_campo.clientHeight;

    if((pelota_left + pelota_ancho) > campo_ancho || pelota_left < 0){
        dirX = dirX * -1;
    }
    obj_pelota.style.left = (pelota_left + dirX) + "px";
    if((pelota_top + pelota_alto) > campo_alto || pelota_top < 0){
        dirY = dirY * -1;
    }
    obj_pelota.style.top = (pelota_top + dirY) + "px";
}