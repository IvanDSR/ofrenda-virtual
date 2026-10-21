import * as THREE from "../js/three.module.js";
export default function E08(x, y, z) {

    var textureLoader = new THREE.TextureLoader();
    var texturafondo = textureLoader.load('textura/fondo.jpg');

    var matfondoca = new THREE.MeshBasicMaterial({
        map: texturafondo,
        transparent: true,
        alphaTest: 0.5,
        side: THREE.DoubleSide
    });

    var geometriafondo = new THREE.PlaneGeometry(30, 25);
    var meshfondo = new THREE.Mesh(geometriafondo, matfondoca);
    meshfondo.position.set(0, 12.5, 0); 
    //fondoGroup.add(meshfondo);

    const fondoGroup = new THREE.Group();
    fondoGroup.add(meshfondo);
    fondoGroup.position.set(x, y, z);

    return fondoGroup;
}
