import * as THREE from "../js/three.module.js";
export default function E03(x, y, z) {

    // VELA BLANCA
    var geometry01 = new THREE.CylinderGeometry(1.5, 1.5, 7, 30);
    var material01 = new THREE.MeshBasicMaterial({color: 0xffffff});
    var mesh01 = new THREE.Mesh(geometry01, material01);
    mesh01.position.set(0, 3.5, 0);
    //vasoGroup.add(mesh01);

    // VASO DE VIDRIO
    var geometry02 = new THREE.CylinderGeometry(2.2, 2.2, 9, 32, 1, true);
    var material02 = new THREE.MeshBasicMaterial({
        color: 0xD9F3FF,
        transparent: true,
        opacity: 0.3,
        side: THREE.DoubleSide,
        depthWrite: false
    });
    var mesh02 = new THREE.Mesh(geometry02, material02);
    mesh02.position.set(0, 4.5, 0);
    //vasoGroup.add(mesh02);

    // BORDE SUPERIOR DEL VASO
    var geometry03 = new THREE.TorusGeometry( 2.2, 0.15, 8, 32 );
    var material03 = new THREE.MeshBasicMaterial({color: 0xD9F3FF});
    var mesh03 = new THREE.Mesh(geometry03, material03);
    mesh03.rotation.x = Math.PI / 2;
    mesh03.position.set(0, 9, 0);
    //vasoGroup.add(mesh03);

    // FUEGO
    var geometry04 = new THREE.ConeGeometry(0.7, 2, 20);
    var material04 = new THREE.MeshBasicMaterial({color: 0xffaa00 });
    var mesh04 = new THREE.Mesh(geometry04, material04);
    mesh04.position.set(0, 8, 0);
    //vasoGroup.add(mesh04);
    
    // TEXTURA DEL STICKER 
    var texturaSticker = new THREE.TextureLoader().load("./textura/vela.png");
    var geometriaSticker = new THREE.CircleGeometry(1.25, 32);
    var materialSticker = new THREE.MeshBasicMaterial({
        map: texturaSticker,
        transparent: true,
        side: THREE.DoubleSide,
        depthWrite: false
    });
    var meshSticker = new THREE.Mesh(geometriaSticker,materialSticker);
    meshSticker.position.set(0, 4.5, 2.23);
    //vasoGroup.add(meshSticker);


    const vasoGroup = new THREE.Group();
    vasoGroup.add(mesh01, mesh02, mesh03, mesh04, meshSticker);
    vasoGroup.position.set(x, y, z);
    return vasoGroup;

}
