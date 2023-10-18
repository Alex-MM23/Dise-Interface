let lista_cuadros = [
{"cua_id":"1","cua_nombre":"Las meninas","cua_foto":"tcve0014-velazquez.jpg","cua_precio":"895","cua_pin_id":"1"},
{"cua_id":"2","cua_nombre":"Venus del espejo","cua_foto":"velazquez-venus-espejo_1.jpg","cua_precio":"335","cua_pin_id":"1"},
{"cua_id":"5","cua_nombre":"Cristo crucificado","cua_foto":"velazquez-cristo-crucificado.jpg","cua_precio":"225","cua_pin_id":"1"},
{"cua_id":"6","cua_nombre":"La fábula de Aracne","cua_foto":"velazquez-fabula-aracne-hilanderas.jpg","cua_precio":"895","cua_pin_id":"1"},
{"cua_id":"7","cua_nombre":"La fragua de vulcano","cua_foto":"velazquez-fragua-vulcano.jpg","cua_precio":"335","cua_pin_id":"1"},
{"cua_id":"8","cua_nombre":"Coronación de la Virgen","cua_foto":"velazquez-coronacion-virgen.jpg","cua_precio":"895","cua_pin_id":"1"},
{"cua_id":"9","cua_nombre":"La infanta Margarita en azul","cua_foto":"tcve0014-velazquez.jpg","cua_precio":"225","cua_pin_id":"1"},
{"cua_id":"10","cua_nombre":"Cabeza de venado","cua_foto":"velazquez-cabeza-venado.jpg","cua_precio":"225","cua_pin_id":"1"},
{"cua_id":"13","cua_nombre":"Felipe IV","cua_foto":"velazquez-felipe-iv.jpg","cua_precio":"225","cua_pin_id":"1"},
{"cua_id":"14","cua_nombre":"El triunfo de Baco","cua_foto":"triunfo-baco-borrachos-velazquez_1.jpg","cua_precio":"879","cua_pin_id":"1"},
{"cua_id":"15","cua_nombre":"San Antonio Abad y San Pablo primer ermitaño","cua_foto":"velazquez-san-antonio-abad-san-pablo.jpg","cua_precio":"335","cua_pin_id":"1"},
{"cua_id":"16","cua_nombre":"Adoración de los Magos","cua_foto":"velazquez-adoracion-magos.jpg","cua_precio":"879","cua_pin_id":"1"},
{"cua_id":"17","cua_nombre":"Vieja friendo huevos","cua_foto":"velazquez-vieja-friendo-huevos.jpg","cua_precio":"335","cua_pin_id":"1"},
{"cua_id":"18","cua_nombre":"Cabeza de apóstol","cua_foto":"velazquez-cabeza-apostol.jpg","cua_precio":"225","cua_pin_id":"1"},
{"cua_id":"19","cua_nombre":"Tres músicos","cua_foto":"velazquez-tres-musicos.jpg","cua_precio":"355","cua_pin_id":"1"},
{"cua_id":"20","cua_nombre":"Tres hombres a la mesa","cua_foto":"velazquez-tres-hombres-mesa.jpg","cua_precio":"355","cua_pin_id":"1"},
{"cua_id":"21","cua_nombre":"La rendición de Breda","cua_foto":"velazquez-rendicion-breda.jpg","cua_precio":"879","cua_pin_id":"1"},
{"cua_id":"22","cua_nombre":"El príncipe Baltasar Carlos a caballo","cua_foto":"tcve0015-velazquez.jpg","cua_precio":"355","cua_pin_id":"1"},
{"cua_id":"23","cua_nombre":"Francisco Lezcano, \"el Niño de Vallecas\"","cua_foto":"velazquez-francisco-lezcano-nino-vallecas.jpg","cua_precio":"225","cua_pin_id":"1"},
{"cua_id":"24","cua_nombre":"Cristo en casa de Marta y María","cua_foto":"velazquez-cristo-casa-marta-y-maria.jpg","cua_precio":"335","cua_pin_id":"1"},
{"cua_id":"25","cua_nombre":"El bufón don Sebastián de Morra","cua_foto":"velazquez-bufon-sebastian-morra.jpg","cua_precio":"225","cua_pin_id":"1"},
{"cua_id":"27","cua_nombre":"El entierro del conde Orgaz","cua_foto":"el-greco-entierro-conde-orgaz.jpg","cua_precio":"890","cua_pin_id":"4"},
{"cua_id":"28","cua_nombre":"La dama del armiño","cua_foto":"el-greco-dama-armino.jpg","cua_precio":"225","cua_pin_id":"4"},
{"cua_id":"29","cua_nombre":"El bautismo de Cristo","cua_foto":"el-greco-bautismo-cristo.jpg","cua_precio":"890","cua_pin_id":"4"},
{"cua_id":"30","cua_nombre":"La Trinidad","cua_foto":"el-greco-la-trinidad.jpg","cua_precio":"890","cua_pin_id":"4"},
{"cua_id":"31","cua_nombre":"La Verónica","cua_foto":"el-greco-la-veronica.jpg","cua_precio":"225","cua_pin_id":"4"},
{"cua_id":"32","cua_nombre":"El expolio","cua_foto":"el-greco-expolio (1).jpg","cua_precio":"890","cua_pin_id":"4"},
{"cua_id":"33","cua_nombre":"El caballero de la mano en el pecho","cua_foto":"el-greco-caballero-mano-pecho.jpg","cua_precio":"225","cua_pin_id":"4"},
{"cua_id":"34","cua_nombre":"El Soplón","cua_foto":"el-greco-soplon.jpg","cua_precio":"225","cua_pin_id":"4"},
{"cua_id":"35","cua_nombre":"Laocoonte","cua_foto":"el-greco-lacoonte.jpg","cua_precio":"579","cua_pin_id":"4"},
{"cua_id":"36","cua_nombre":"San Andrés y San Francisco","cua_foto":"el-greco-san-andres-san-francisco.jpg","cua_precio":"335","cua_pin_id":"4"},
{"cua_id":"37","cua_nombre":"Vista de Toledo","cua_foto":"el-greco-vista-toledo.jpg","cua_precio":"225","cua_pin_id":"4"},
{"cua_id":"38","cua_nombre":"Visión del Apocalipsis","cua_foto":"el-greco-vision-apocalipsis.jpg","cua_precio":"895","cua_pin_id":"4"},
{"cua_id":"39","cua_nombre":"Los fusilamientos","cua_foto":"tres-mayo-madrid-fusilamientos-goya.jpg","cua_precio":"560","cua_pin_id":"2"},
{"cua_id":"40","cua_nombre":"El 2 de mayo de 1808 en Madrid","cua_foto":"2-de-mayo-1808-madrid-goya.jpg","cua_precio":"750","cua_pin_id":"2"},
{"cua_id":"41","cua_nombre":"La maja vestida","cua_foto":"maja-vestida-goya.jpg","cua_precio":"670","cua_pin_id":"2"},
{"cua_id":"42","cua_nombre":"La maja desnuda","cua_foto":"maja-desnuda-goya.jpg","cua_precio":"670","cua_pin_id":"2"},
{"cua_id":"43","cua_nombre":"San Gregorio Magno","cua_foto":"san-gregorio-papa-goya.jpg","cua_precio":"550","cua_pin_id":"2"},
{"cua_id":"44","cua_nombre":"El sueño de San José","cua_foto":"sueno-san-jose-goya.jpg","cua_precio":"660","cua_pin_id":"2"},
{"cua_id":"45","cua_nombre":"Saturno devorando a un hijo","cua_foto":"saturno-devorando-hijo-goya.jpg","cua_precio":"670","cua_pin_id":"2"},
{"cua_id":"46","cua_nombre":"Modo de volar","cua_foto":"grabado-hombre-volando-goya.jpg","cua_precio":"750","cua_pin_id":"2"},
{"cua_id":"47","cua_nombre":"El entierro de la sardina","cua_foto":"entierro-sardina-goya.jpg","cua_precio":"990","cua_pin_id":"2"},
{"cua_id":"48","cua_nombre":"Perro semidesnudo","cua_foto":"perro-semidesnudo-goya.jpg","cua_precio":"350","cua_pin_id":"2"},
{"cua_id":"49","cua_nombre":"La familia de Carlos IV","cua_foto":"familia-carlos-iv-goya.jpg","cua_precio":"690","cua_pin_id":"2"},
{"cua_id":"50","cua_nombre":"San Sebastián","cua_foto":"san-sebastian-rubens.jpg","cua_precio":"895","cua_pin_id":"3"},
{"cua_id":"51","cua_nombre":"La fiesta de Aqueloo","cua_foto":"rubens-fiesta-aqueloo-1615.jpg","cua_precio":"895","cua_pin_id":"3"},
{"cua_id":"52","cua_nombre":"La caza del león","cua_foto":"rubens-caza-leon-1621.jpg","cua_precio":"690","cua_pin_id":"3"},
{"cua_id":"53","cua_nombre":"Adán y Eva","cua_foto":"rubens-adan-eva-1629.jpg","cua_precio":"895","cua_pin_id":"3"},
{"cua_id":"54","cua_nombre":"El jardín del amor","cua_foto":"rubens-jardin-amor-el-prado-1635.jpg","cua_precio":"895","cua_pin_id":"3"},
{"cua_id":"55","cua_nombre":"El nacimiento de la Vía Láctea","cua_foto":"rubens-via-lactea-1636.jpg","cua_precio":"895","cua_pin_id":"3"},
{"cua_id":"56","cua_nombre":"Las tres Gracias","cua_foto":"rubens-tres-gracias-prado.jpg","cua_precio":"895","cua_pin_id":"3"},
{"cua_id":"57","cua_nombre":"Sansón y Dalila","cua_foto":"rubens-sanson-dalila-1610.jpg","cua_precio":"895","cua_pin_id":"3"},
{"cua_id":"58","cua_nombre":"Saturno","cua_foto":"rubens-saturno-devorando-hijo-1636.jpg","cua_precio":"895","cua_pin_id":"3"},
{"cua_id":"59","cua_nombre":"La caída de Faetón","cua_foto":"rubens-caida-faeton-b.jpg","cua_precio":"895","cua_pin_id":"3"},
{"cua_id":"60","cua_nombre":"La masacre de los inocentes","cua_foto":"rubens-masacre-inocentes_1.jpg","cua_precio":"895","cua_pin_id":"3"},
{"cua_id":"61","cua_nombre":"El juicio de Paris","cua_foto":"rubens-juicio-paris-1639.jpg","cua_precio":"690","cua_pin_id":"3"},
{"cua_id":"62","cua_nombre":"El descendimiento de la cruz","cua_foto":"rubens-descendimiento-cristo-cruz-1612-1614_1.jpg","cua_precio":"895","cua_pin_id":"3"}
]
let lista_pintores = [
{"pin_id":"1","pin_nombre":"Velázquez"},
{"pin_id":"2","pin_nombre":"Goya"},
{"pin_id":"3","pin_nombre":"Rubens"},
{"pin_id":"4","pin_nombre":"El greco"}
]

function cargar(){
    let html = "<ul>";
    lista_pintores.forEach(item =>{
        html += "<li onclick='cargarCuadros(" + item.pin_id + ")'><a>" + item.pin_nombre + "</a></li>";
    });
    html += "</ul>";

    document.querySelector("nav").innerHTML = html;
}

function cargarCuadros(id){
    let html = "";
     lista_cuadros.forEach(item => {
        if (item.cua_pin_id == id){
            html += "<div><img src='img/" + item.cua_foto + "' alt='" + item.cua_nombre + "'><p>" + item.cua_nombre + "</p></div>";
        }
     });
     document.querySelector("section").innerHTML = html;
}