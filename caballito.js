import * as THREE from "../js/three.module.js";
export default function shotGroup(x, y, z) {

    var materialCristal = new THREE.MeshBasicMaterial({
         color: 0xD9F3FF, 
        transparent: true, 
        opacity: 0.4 
    });


    var geoVaso = new THREE.CylinderGeometry(0.8, 0.65, 2.5, 32, 1, true);    
    var meshVaso = new THREE.Mesh(geoVaso, materialCristal);
    meshVaso.position.set(0, 1.25, 0);
    //grupoShot.add (meshVaso);

    var geoBase = new THREE.CylinderGeometry(0.65, 0.6, 0.4, 32);
    var meshBase = new THREE.Mesh(geoBase, materialCristal);
    meshBase.position.set(0, 0.2, 0);
    //grupoShot.add (meshBase);


    var materialLiquido = new THREE.MeshBasicMaterial({
        color: 0xe6a100,  
        transparent: true,
        opacity: 0.4
    });
    var geoLiquido = new THREE.CylinderGeometry(0.72, 0.62, 1.6, 32);
    var meshLiquido = new THREE.Mesh(geoLiquido, materialLiquido);
    meshLiquido.position.set(0, 1.1, 0); 
    //grupoShot.add (meshLiquido);

    var grupoShot = new THREE.Group();
    grupoShot.add(meshVaso, meshBase, meshLiquido);
    grupoShot.position.set(x, y, z);

    return grupoShot;
}