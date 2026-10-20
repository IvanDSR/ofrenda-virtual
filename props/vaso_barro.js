import * as THREE from "../js/threemodules.js";
export default function crearVasoBarro(x, y, z) {

    // Material de barro compartido
    var matBarro = new THREE.MeshBasicMaterial({
        color: 0x8B4513
    });

    // VASO DE BARRO
    var vasoBarro = new THREE.CylinderGeometry(8, 10, 16, 32);
    var meshVasoBarro = new THREE.Mesh(vasoBarro, matBarro);
    meshVasoBarro.position.set(0, 8, 0); // Ajustado relativo al grupo
    vasoGroup.add(meshVasoBarro);

    // Borde del vaso
    var bordeBarro = new THREE.TorusGeometry(8, 1, 12, 24);
    var meshBordeBarro = new THREE.Mesh(bordeBarro, matBarro);
    meshBordeBarro.rotation.x = Math.PI / 2; // Acostado para que encaje como borde de cilindro
    meshBordeBarro.position.set(0, 16, 0); // Ajustado relativo al grupo
    vasoGroup.add(meshBordeBarro);

    const vasoGroup = new THREE.Group();
    vasoGroup.add(meshVasoBarro,meshBordeBarro);
    vasoGroup.position.set(x, y, z);
    return vasoGroup;
}