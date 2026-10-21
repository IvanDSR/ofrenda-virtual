import * as THREE from "../js/three.module.js";
export default function     E01(x, y, z) {

    // VASO DE VIDRIO
    var vaso = new THREE.CylinderGeometry(6, 5, 15, 32);
    var materialVaso = new THREE.MeshBasicMaterial({ 
        color: 0xD9F3FF, 
        transparent: true, 
        opacity: 0.4 
    }); 
    var meshVaso = new THREE.Mesh(vaso, materialVaso); 
    meshVaso.position.set(0, 7.5, 0); 
    //vasoAguaGroup.add(meshVaso);

    // AGUA INTERIOR
    var agua = new THREE.CylinderGeometry(5, 4.2, 10, 32);
    var materialAgua = new THREE.MeshBasicMaterial({ 
        color: 0x4DA6FF, 
        transparent: true, 
        opacity: 0.7 
    }); 
    var meshAgua = new THREE.Mesh(agua, materialAgua);
    meshAgua.position.set(0, 5, 0); // Ajustado relativo al grupo
    //vasoAguaGroup.add(meshAgua);

    const vasoAguaGroup = new THREE.Group();
    vasoAguaGroup.add(meshAgua,meshVaso);
    vasoAguaGroup.position.set(x, y, z);
    return vasoAguaGroup;
}