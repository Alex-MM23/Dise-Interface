function fAbrirModal(){
    document.querySelector("#div_modal").style.display = "flex"
    document.querySelector("#div_formulario").style.display = "none"
}

function fCerrarModal(){
    document.querySelector("#div_modal").style.display = "none"

}

function fAbrirFormulario(){
    document.querySelector("#div_modal").style.display = "flex"
    document.querySelector("#div_contenido").style.display = "none"
    document.querySelector("#div_formulario").style.display = "block"
}