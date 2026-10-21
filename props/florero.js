import * as THREE from "../js/three.module.js";

export default function E06(x, y, z) {



// FLORERO
    var geometryFlorero = new THREE.CylinderGeometry(0.3, 0.7, 2, 32);
    var materialFlorero = new THREE.MeshBasicMaterial({
        color: 0x121111,
        side: THREE.DoubleSide
    });
    var meshFlorero = new THREE.Mesh(geometryFlorero, materialFlorero);
    meshFlorero.position.set(0, 1, 0);
    //floreroGroup.add(meshFlorero);

    // BOCA DEL FLORERO
    var geoBoca = new THREE.CylinderGeometry(0.45, 0.25, 0.5, 32);
    var meshBoca = new THREE.Mesh(geoBoca, materialFlorero);
    meshBoca.position.set(0, 2.05, 0);
    //floreroGroup.add(meshBoca);

    // TALLO
    var geoflor = new THREE.CylinderGeometry(0.05, 0.05, 2.5, 20);
    var materialflor = new THREE.MeshBasicMaterial({
        color: 0x194520
    });
    var meshflor = new THREE.Mesh(geoflor, materialflor);
    meshflor.position.set(0, 3, 0);
    //floreroGroup.add(meshflor);

    // CENTRO DE LA FLOR
    var geometryflor2 = new THREE.SphereGeometry(0.25, 20, 20);
    var materialflor2 = new THREE.MeshBasicMaterial({
        color: 0xF7C8A6
    });
    var meshflor2 = new THREE.Mesh(geometryflor2, materialflor2);
    meshflor2.position.set(0, 4.3, 0);
    //floreroGroup.add(meshflor2);

    // PÉTALOS
    var geometryPetalos = new THREE.TorusGeometry(0.35, 0.15, 16, 100);
    var materialflor3 = new THREE.MeshBasicMaterial({
        color: 0xD97225,
        side: THREE.DoubleSide
    });
    var meshPetalos = new THREE.Mesh(geometryPetalos, materialflor3);
    meshPetalos.position.set(0, 4.3, 0);
    meshPetalos.rotation.x = Math.PI / 2;
    //floreroGroup.add(meshPetalos);


    const floreroGroup = new THREE.Group();
    floreroGroup.add (meshflor2,meshflor,meshPetalos,meshFlorero,meshBoca);
    floreroGroup.position.set(x, y, z);
    return floreroGroup;

} 