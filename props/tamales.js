import * as THREE from "../js/three.module.js";

export default function E05(x, y, z) {

    // CARGA DE TEXTURA DE BARRO
    var texturaBarro = new THREE.TextureLoader().load(
        "./textura/barro.jpg"
    );

    // REPETICION DE LA TEXTURA
    texturaBarro.wrapS = THREE.RepeatWrapping;
    texturaBarro.wrapT = THREE.RepeatWrapping;
    texturaBarro.repeat.set(2, 2);

    // MATERIAL DE BARRO CON TEXTURA
    var matBarro = new THREE.MeshBasicMaterial({
        map: texturaBarro,
        side: THREE.DoubleSide
    });

    // CAZUELA / PLATO DE BARRO
    var geoPlato = new THREE.CylinderGeometry(1.8, 1.2, 0.6, 20, 20, true);
    var meshPlato = new THREE.Mesh(geoPlato, matBarro);
    meshPlato.position.set(0, 0.3, 0);

    var geoFondo = new THREE.CircleGeometry(1.2, 20);
    var meshFondo = new THREE.Mesh(geoFondo, matBarro);
    meshFondo.position.set(0, 0.05, 0);
    meshFondo.rotation.x = Math.PI / 2;

    var geoBorde = new THREE.TorusGeometry(8, 0.7, 6, 20);
    var meshBorde = new THREE.Mesh(geoBorde, matBarro);
    meshBorde.rotation.x = Math.PI / 2;
    meshBorde.position.set(0, 0.6, 0);
    meshBorde.scale.set(0.22, 0.22, 0.22);


    // MATERIALES DE TAMAL OAXAQUEÑO (HOJA DE PLÁTANO VERDE OSCURO)
    var matHojaPlatano = new THREE.MeshBasicMaterial({ color: 0x3A5311 });
    var matCintaPlatano = new THREE.MeshBasicMaterial({ color: 0x2A3E0B });

    // TAMAL OAXAQUEÑO 1 (BASE)
    var geoTamal1 = new THREE.BoxGeometry(1.4, 0.3, 2.0);
    var meshTamal1 = new THREE.Mesh(geoTamal1, matHojaPlatano);
    var geoCinta1 = new THREE.BoxGeometry(1.45, 0.32, 0.25);
    var meshCinta1 = new THREE.Mesh(geoCinta1, matCintaPlatano);
    
    var tamal1 = new THREE.Group();
    tamal1.add(meshTamal1, meshCinta1);
    tamal1.position.set(-0.2, 0.4, 0.1);
    tamal1.rotation.set(0.1, Math.PI / 6, 0);

    // TAMAL OAXAQUEÑO 2 (INTERMEDIO)
    var geoTamal2 = new THREE.BoxGeometry(1.4, 0.3, 2.0);
    var meshTamal2 = new THREE.Mesh(geoTamal2, matHojaPlatano);
    var geoCinta2 = new THREE.BoxGeometry(1.45, 0.32, 0.25);
    var meshCinta2 = new THREE.Mesh(geoCinta2, matCintaPlatano);

    var tamal2 = new THREE.Group();
    tamal2.add(meshTamal2, meshCinta2);
    tamal2.position.set(0.2, 0.6, -0.1);
    tamal2.rotation.set(-0.1, -Math.PI / 4, 0.1);

    // TAMAL OAXAQUEÑO 3 (SUPERIOR)
    var geoTamal3 = new THREE.BoxGeometry(1.4, 0.3, 2.0);
    var meshTamal3 = new THREE.Mesh(geoTamal3, matHojaPlatano);
    var geoCinta3 = new THREE.BoxGeometry(1.45, 0.32, 0.25);
    var meshCinta3 = new THREE.Mesh(geoCinta3, matCintaPlatano);

    var tamal3 = new THREE.Group();
    tamal3.add(meshTamal3, meshCinta3);
    tamal3.position.set(0, 0.85, 0);
    tamal3.rotation.set(0.05, Math.PI / 12, -0.05);


    // GRUPO FINAL
    const tamalesGroup = new THREE.Group();
    tamalesGroup.add(meshPlato, meshFondo, meshBorde, tamal1, tamal2, tamal3);
    tamalesGroup.position.set(x, y, z);
    return tamalesGroup;
}