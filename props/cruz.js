import * as THREE from "../js/three.module.js";

export default function cruzGroup(x, y, z) {

    // MATERIAL DE MADERA
    var matMadera = new THREE.MeshBasicMaterial({
        color: 0x4A2E12, // Tono café madera oscura
        side: THREE.DoubleSide
    });

    // 1. PALO VERTICAL PRINCIPAL
    var geoVertical = new THREE.BoxGeometry(0.8, 6.0, 0.6);
    var meshVertical = new THREE.Mesh(geoVertical, matMadera);
    meshVertical.position.set(0, 3.0, 0);
    grupoCruz.add(meshVertical);

    //  PALO HORIZONTAL (BRAZOS)
    var geoHorizontal = new THREE.BoxGeometry(4.0, 0.8, 0.6);
    var meshHorizontal = new THREE.Mesh(geoHorizontal, matMadera);
    meshHorizontal.position.set(0, 4.2, 0);
    grupoCruz.add(meshHorizontal);

    // DETALLE DE UNIÓN AL CENTRO
    var geoUnion = new THREE.BoxGeometry(1.0, 1.0, 0.7);
    var meshUnion = new THREE.Mesh(geoUnion, matMadera);
    meshUnion.position.set(0, 4.2, 0);
    grupoCruz.add(meshUnion);

    // GRUPO FINAL
    const grupoCruz = new THREE.Group();
    grupoCruz.add(meshVertical, meshHorizontal, meshUnion);
    grupoCruz.position.set(x, y, z);
    return grupoCruz;
}