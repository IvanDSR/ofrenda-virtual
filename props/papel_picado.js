import * as THREE from "../js/three.module.js";

export default function E02(x, y, z) {

    // 1. TEXTURA Y MATERIAL DEL PAPEL
    var textureLoader = new THREE.TextureLoader();
    var texturaPapel = textureLoader.load('textura/papel.jpg');

    var matPapelAmarillo = new THREE.MeshBasicMaterial({
        map: texturaPapel,
        transparent: true,
        alphaTest: 0.5,
        side: THREE.DoubleSide
    });

    // 2. GEOMETRÍA Y MESH
    var geometriaPapel = new THREE.PlaneGeometry(30, 25);
    var meshPapel = new THREE.Mesh(geometriaPapel, matPapelAmarillo);
    meshPapel.position.set(0, 12.5, 0); 

    // 3. GRUPO Y RETORNO
    const papelGroup = new THREE.Group();
    papelGroup.add(meshPapel);
    papelGroup.position.set(x, y, z);

    return papelGroup;
}