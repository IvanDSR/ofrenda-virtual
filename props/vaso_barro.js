import * as THREE from "../js/three.module.js";
export default function E05(x, y, z) {

     var texturaBarro = new THREE.TextureLoader().load(
        "./textura/barro.jpg"
    );

    // REPETICION DE LA TEXTURA
    texturaBarro.wrapS = THREE.RepeatWrapping;
    texturaBarro.wrapT = THREE.RepeatWrapping;
    texturaBarro.repeat.set(2, 2);

    // MATERIAL DE BARRO CON TEXTURA
    var matBarro = new THREE.MeshBasicMaterial({
        map: texturaBarro
    });

     // VASO DE BARRO
    var vasoBarro = new THREE.CylinderGeometry( 8, 10, 16, 32);
    var meshVasoBarro = new THREE.Mesh(vasoBarro, matBarro);
    meshVasoBarro.position.set(0, 8, 0);

    // BORDE DEL VASO
    var bordeBarro = new THREE.TorusGeometry(8, 1, 12, 24);
    var meshBordeBarro = new THREE.Mesh(bordeBarro, matBarro);
    meshBordeBarro.rotation.x = Math.PI / 2;
    meshBordeBarro.position.set(0, 16, 0);

    const barroGroup = new THREE.Group();
    barroGroup.add(meshVasoBarro,meshBordeBarro);
    barroGroup.position.set(x, y, z);
    return barroGroup;
}