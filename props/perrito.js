import * as THREE from "../js/three.module.js";

export default function E07(x, y, z) {

    // CARGA DE TEXTURA DE BARRO PARA EL PLATO
    var texturaBarro = new THREE.TextureLoader().load(
        "./textura/barro.jpg"
    );

    texturaBarro.wrapS = THREE.RepeatWrapping;
    texturaBarro.wrapT = THREE.RepeatWrapping;
    texturaBarro.repeat.set(2, 2);

    var matBarro = new THREE.MeshBasicMaterial({
        map: texturaBarro,
        side: THREE.DoubleSide
    });

    // 1. PLATO DE CROQUETAS (CAZUELA DE BARRO)
    var geoPlato = new THREE.CylinderGeometry(1.5, 1.0, 0.6, 20, 20, true);
    var meshPlato = new THREE.Mesh(geoPlato, matBarro);
    meshPlato.position.set(0, 0.3, 0);
    //mascotaGroup.add(meshPlato);

    var geoFondo = new THREE.CircleGeometry(1.0, 20);
    var meshFondo = new THREE.Mesh(geoFondo, matBarro);
    meshFondo.position.set(0, 0.05, 0);
    meshFondo.rotation.x = Math.PI / 2;
    //mascotaGroup.add(meshFondo);

    var geoBorde = new THREE.TorusGeometry(8, 0.7, 6, 20);
    var meshBorde = new THREE.Mesh(geoBorde, matBarro);
    meshBorde.rotation.x = Math.PI / 2;
    meshBorde.position.set(0, 0.6, 0);
    meshBorde.scale.set(0.18, 0.18, 0.18);
    //mascotaGroup.add(meshBorde);


    var matCroqueta = new THREE.MeshBasicMaterial({ color: 0x4A2E12 });
    var geoCroqueta = new THREE.CylinderGeometry(0.15, 0.15, 0.1, 12);
    var c1 = new THREE.Mesh(geoCroqueta, matCroqueta);
    c1.position.set(-0.3, 0.35, 0.2);
    c1.rotation.set(0.2, 0.5, 0.1);
    //mascotaGroup.add(c1);

    var c2 = new THREE.Mesh(geoCroqueta, matCroqueta);
    c2.position.set(0.3, 0.35, -0.2);
    c2.rotation.set(-0.1, 0.2, 0.4);
    //mascotaGroup.add(c2);

    var c3 = new THREE.Mesh(geoCroqueta, matCroqueta);
    c3.position.set(-0.2, 0.35, -0.3);
    c3.rotation.set(0.3, -0.4, 0.2);
    //mascotaGroup.add(c3);

    var c4 = new THREE.Mesh(geoCroqueta, matCroqueta);
    c4.position.set(0.2, 0.35, 0.3);
    c4.rotation.set(-0.2, 0.1, -0.3);
    //mascotaGroup.add(c4);
    
    var c5 = new THREE.Mesh(geoCroqueta, matCroqueta);
    c5.position.set(0, 0.5, 0);
    c5.rotation.set(0.1, 0.3, 0.1);
    //mascotaGroup.add(c5);

    // PELOTA DE JUGUETE 
    var matPelota = new THREE.MeshBasicMaterial({ color: 0x0088CC });
    var geoPelota = new THREE.SphereGeometry(0.7, 16, 16);
    var meshPelota = new THREE.Mesh(geoPelota, matPelota);
    meshPelota.position.set(-2.2, 0.7, 0.5); // A un lado del plato
    //mascotaGroup.add(meshPelota);

    
    const mascotaGroup = new THREE.Group();
    mascotaGroup.add(
        meshPlato, 
        meshFondo, 
        meshBorde, 
        c1, c2, c3, c4, c5, 
        meshPelota
    );
    mascotaGroup.position.set(x, y, z);
    return mascotaGroup;
}