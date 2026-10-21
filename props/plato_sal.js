import * as THREE from "../js/three.module.js";
export default function E011(x, y, z) {

     var texturaplatoBarro = new THREE.TextureLoader().load(
        "./textura/barro.jpg"
    );

    // REPETICION DE LA TEXTURA
    texturaplatoBarro.wrapS = THREE.RepeatWrapping;
    texturaplatoBarro.wrapT = THREE.RepeatWrapping;
    texturaplatoBarro.repeat.set(2, 2);

    // MATERIAL DE BARRO CON TEXTURA
    var matplatoBarro = new THREE.MeshBasicMaterial({
        map: texturaplatoBarro
    });

// PLATO
var plato = new THREE.CylinderGeometry(12, 8, 3, 32); 
var meshPlato = new THREE.Mesh(plato, matplatoBarro); 
meshPlato.position.set(70, 1.5, 0); 
//scene.add(meshPlato);
// SAL
var sal = new THREE.CylinderGeometry(8, 8, 1, 32); 
var materialSal = new THREE.MeshBasicMaterial({ color: 0xF5F5F5 }); 
var meshSal = new THREE.Mesh(sal, materialSal); 
meshSal.position.set(70, 3.5, 0); 
//scene.add(meshSal);

    const salGroup = new THREE.Group();
    salGroup.add(meshPlato,meshSal);
    salGroup.position.set(x, y, z);
    return salGroup;
}