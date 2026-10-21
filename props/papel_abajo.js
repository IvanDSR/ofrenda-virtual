import * as THREE from "../js/three.module.js";

export default function grupo(x, y, z) {
    const textureLoader = new THREE.TextureLoader();
    const texturaPapel = textureLoader.load('./textura/papel_picado.jpg');

    const materialPapel = new THREE.MeshBasicMaterial({
        map: texturaPapel,
        transparent: true,
        alphaTest: 0.5,
        side: THREE.DoubleSide
    });

    // 25 de ancho por 8 de alto mantiene la proporción original sin estirar la calavera
    const geometriaPapel = new THREE.PlaneGeometry(20, 8);
    const meshPapel = new THREE.Mesh(geometriaPapel, materialPapel);

    const papelAbajoGroup = new THREE.Group();
    papelAbajoGroup.add(meshPapel);
    papelAbajoGroup.position.set(x, y, z);

    return papelAbajoGroup;
}