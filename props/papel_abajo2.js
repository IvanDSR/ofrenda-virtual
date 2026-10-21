import * as THREE from "../js/three.module.js";

export default function grupo(x, y, z) {
    const textureLoader = new THREE.TextureLoader();
    const texturaPapel2 = textureLoader.load('./textura/papel_picado2.jpg');

    const materialPapel2 = new THREE.MeshBasicMaterial({
        map: texturaPapel2,
    });

    const geometriaPapel2 = new THREE.PlaneGeometry(20, 8);
    const meshPapel2 = new THREE.Mesh(geometriaPapel2, materialPapel2);

    const papelAbajo2Group = new THREE.Group();
    papelAbajo2Group.add(meshPapel2);
    papelAbajo2Group.position.set(x, y, z);

    return papelAbajo2Group;
}