let variable_intervalo = 0;

function fIntervalo(){
    console.log("left", document.querySelector("#caja_interval").style.left)
    document.querySelector("#caja_interval").style.left = "0px";
    document.querySelector("#caja_interval").style.top = "0px";
    variable_intervalo = setInterval (fMoverIntervalo, 10);
}

function fMoverIntervalo(){
    document.querySelector("#caja_interval").style.left =
    (parseInt (document.querySelector("#caja_interval").style.left) + 1) + "px";
    document.querySelector("#caja_interval").style.top =
    (parseInt (document.querySelector("#caja_interval").style.top) + 1) + "px";
}

function fPararIntervalo(){
    clearInterval (variable_intervalo);
}

function fLanzarTimeout(){
    setTimeout (fNombre, 5000);
}

function fNombre(){
    document.querySelector("#caja_timeout").innerHTML = "Alex"
}
 