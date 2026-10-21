import * as THREE from "../js/three.module.js";

export default function E06(x, y, z) {

    // CARGA DE TEXTURA DE LA ETIQUETA
    var texturaEtiqueta = new THREE.TextureLoader().load(
        "./textura/etiqueta2.jpg"
    );

    // MATERIALES DE LA LATA
    var matEtiqueta = new THREE.MeshBasicMaterial({
        map: texturaEtiqueta
    });

    // Material metálico para la tapa y base de la lata
    var matMetal = new THREE.MeshBasicMaterial({
        color: 0xD0D0D0
    });

    // CUERPO PRINCIPAL DE LA LATA (CILINDRO CON ETIQUETA)
    var geoCuerpo = new THREE.CylinderGeometry(2, 2, 7, 32, 1, true);
    var meshCuerpo = new THREE.Mesh(geoCuerpo, matEtiqueta);
    meshCuerpo.position.set(0, 4.5, 0);
    //cervezaGroup.add(meshCuerpo);


    // TAPA SUPERIOR (METÁLICA)
    var geoTapa = new THREE.CylinderGeometry(1.8, 2, 0.5, 32);
    var meshTapa = new THREE.Mesh(geoTapa, matMetal);
    meshTapa.position.set(0, 8.25, 0);
    //cervezaGroup.add(meshTapa);

    // ANILLO DE LA TAPA
    var geoBordeTapa = new THREE.TorusGeometry(1.8, 0.15, 12, 32);
    var meshBordeTapa = new THREE.Mesh(geoBordeTapa, matMetal);
    meshBordeTapa.rotation.x = Math.PI / 2;
    meshBordeTapa.position.set(0, 8.5, 0);
    //cervezaGroup.add(meshBordeTapa);

    // BASE INFERIOR (METÁLICA)
    var geoBase = new THREE.CylinderGeometry(2, 1.7, 0.5, 32);
    var meshBase = new THREE.Mesh(geoBase, matMetal);
    meshBase.position.set(0, 0.75, 0);
    //cervezaGroup.add(meshBase);

    // DESTAPADOR / ANILLO DE APERTURA (CLIPS DE LA LATA)
    var geoAnillo = new THREE.TorusGeometry(0.4, 0.08, 8, 16);
    var meshAnillo = new THREE.Mesh(geoAnillo, matMetal);
    meshAnillo.rotation.x = Math.PI / 2;
    meshAnillo.position.set(0, 8.55, 0.4);
    //cervezaGroup.add(meshAnillo);

    // GRUPO FINAL
    const cervezaGroup = new THREE.Group();
    cervezaGroup.add(meshCuerpo, meshTapa, meshBordeTapa, meshBase, meshAnillo);
    cervezaGroup.position.set(x, y, z);
    return cervezaGroup;
}