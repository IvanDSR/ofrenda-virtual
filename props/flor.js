import * as THREE from "../js/three.module.js";

export default function crearTiraFlores(x, y, z) {
    const flores = new THREE.Group();

    // TIRA DE FLORES DE CEMPASÚCHIL
    for (let i = 0; i < 9; i++) {
        const geometriaFlor = new THREE.TorusKnotGeometry(2, 1, 50, 6, 2, 3);
        const materialFlor = new THREE.MeshLambertMaterial({ color: 0xFF7B08 });
        const meshFlor = new THREE.Mesh(geometriaFlor, materialFlor);

        meshFlor.position.set(-20 + i * 5, 0, 0);
        meshFlor.rotation.set(Math.PI / 2, 0, 0);
        flores.add(meshFlor);
    }

    flores.position.set(x, y, z);
    return flores;
}
