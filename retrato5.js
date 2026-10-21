import * as THREE from "../js/three.module.js";

export default function re5(x, y, z) {

    // CARGA DE TEXTURA DE LA FOTO
    var texturaFoto = new THREE.TextureLoader().load(
        "./textura/retrato5.jpeg"
    );

    // MATERIALES
    var matMarco = new THREE.MeshBasicMaterial({ color: 0x7D5F0A });
    var matFoto = new THREE.MeshBasicMaterial({ 
        map: texturaFoto, 
        side: THREE.DoubleSide 
    });

    // MARCO DE MADERA
    var geoMarcoIzq = new THREE.BoxGeometry(0.3, 2, 0.3);
    var meshMarcoIzq = new THREE.Mesh(geoMarcoIzq, matMarco);
    meshMarcoIzq.position.set(-0.8, 1.13, 0);
    //marco5Group.add(meshMarcoIzq);

    var geoMarcoDer = new THREE.BoxGeometry(0.3, 2, 0.3);
    var meshMarcoDer = new THREE.Mesh(geoMarcoDer, matMarco);
    meshMarcoDer.position.set(0.8, 1.13, 0);
    //marco5Group.add(meshMarcoDer);

    var geoMarcoInf = new THREE.BoxGeometry(1.9, 0.3, 0.3);
    var meshMarcoInf = new THREE.Mesh(geoMarcoInf, matMarco);
    meshMarcoInf.position.set(0, 0.13, 0);
    //marco5Group.add(meshMarcoInf);

    var geoMarcoSup = new THREE.BoxGeometry(1.9, 0.3, 0.3);
    var meshMarcoSup = new THREE.Mesh(geoMarcoSup, matMarco);
    meshMarcoSup.position.set(0, 2.13, 0);
    //marco5Group.add(meshMarcoSup);

    // PLANO DE LA FOTO 
    var geoFoto = new THREE.PlaneGeometry(1.3, 1.7);
    var meshFoto = new THREE.Mesh(geoFoto, matFoto);
    meshFoto.position.set(0, 1.13, 0);
    //marco5Group.add(meshFoto);

    // PATITA TRASERA DE SOPORTE
    var geoPatita = new THREE.BoxGeometry(0.2, 1.6, 0.1);
    var meshPatita = new THREE.Mesh(geoPatita, matMarco);
    meshPatita.position.set(0, 0.8, -0.4);
    meshPatita.rotation.x = Math.PI / 7;
    //marco5Group.add(meshPatita);

    // GRUPO FINAL
    const marco5Group = new THREE.Group();
    marco5Group.add(
        meshMarcoIzq, 
        meshMarcoDer, 
        meshMarcoInf, 
        meshMarcoSup, 
        meshFoto, 
        meshPatita
    );
    marco5Group.position.set(x, y, z);
    return marco5Group;
}