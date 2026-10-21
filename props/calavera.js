import * as THREE from "../js/three.module.js";

export default function E09(x, y, z) {

    // CARGA DE TEXTURA DE BARRO
    var texturaBarro = new THREE.TextureLoader().load(
        "./textura/barro.jpg"
    );

    texturaBarro.wrapS = THREE.RepeatWrapping;
    texturaBarro.wrapT = THREE.RepeatWrapping;
    texturaBarro.repeat.set(2, 2);

    // MATERIAL DE BARRO NEGRO / OSCURO PARA EL COPALERO
    var matCopalero = new THREE.MeshBasicMaterial({
        map: texturaBarro,
        color: 0x2A2A2A, // Tono barro negro/ahumado ceremonial
        side: THREE.DoubleSide
    });

    // MATERIAL DE CARBON Y RESINA DE COPAL
    var matCarbon = new THREE.MeshBasicMaterial({ color: 0x1A1A1A });
    var matCopalResina = new THREE.MeshBasicMaterial({ color: 0xEADDA0 }); // Tono resina/incienso
    var matHumo = new THREE.MeshBasicMaterial({ color: 0xEEEEEE, transparent: true, opacity: 0.6 });
    
    // BASE DEL COPALERO 
    var geoBase = new THREE.CylinderGeometry(0.8, 1.2, 1.2, 20);
    var meshBase = new THREE.Mesh(geoBase, matCopalero);
    meshBase.position.set(0, 0.6, 0);
    //copalGroup.add(meshBase);

    // CUELLO 
    var geoCuello = new THREE.CylinderGeometry(0.5, 0.5, 0.8, 20);
    var meshCuello = new THREE.Mesh(geoCuello, matCopalero);
    meshCuello.position.set(0, 1.6, 0);
    //copalGroup.add(meshCuello);

    //  COPA 
    var geoCopa = new THREE.CylinderGeometry(1.5, 0.6, 1.2, 20, 1, true);
    var meshCopa = new THREE.Mesh(geoCopa, matCopalero);
    meshCopa.position.set(0, 2.6, 0);
    //copalGroup.add(meshCopa);

    // BORDE REDONDEADO DE LA COPA
    var geoBorde = new THREE.TorusGeometry(1.5, 0.12, 12, 24);
    var meshBorde = new THREE.Mesh(geoBorde, matCopalero);
    meshBorde.rotation.x = Math.PI / 2;
    meshBorde.position.set(0, 3.2, 0);
    //copalGroup.add(meshBorde);

    // CARBÓN Y RESINA DE COPAL DENTRO DE LA COPA
    var geoInterior = new THREE.CircleGeometry(1.4, 20);
    var meshInterior = new THREE.Mesh(geoInterior, matCarbon);
    meshInterior.rotation.x = -Math.PI / 2;
    meshInterior.position.set(0, 2.9, 0);
    //copalGroup.add(meshInterior);

    // Piedras
    var geoResina1 = new THREE.DodecahedronGeometry(0.3);
    var meshResina1 = new THREE.Mesh(geoResina1, matCopalResina);
    meshResina1.position.set(-0.3, 3.1, 0.2);
    //copalGroup.add(meshResina1);

    var geoResina2 = new THREE.DodecahedronGeometry(0.25);
    var meshResina2 = new THREE.Mesh(geoResina2, matCopalResina);
    meshResina2.position.set(0.3, 3.15, -0.1);
    //copalGroup.add(meshResina2);

    var geoResina3 = new THREE.DodecahedronGeometry(0.35);
    var meshResina3 = new THREE.Mesh(geoResina3, matCopalResina);
    meshResina3.position.set(0, 3.25, 0.1);
    //copalGroup.add(meshResina3);

    // 5. HUMO SUTIL DE COPAL (ESFERAS TRANSLÚCIDAS)
    var geoHumo1 = new THREE.SphereGeometry(0.4, 12, 12);
    var meshHumo1 = new THREE.Mesh(geoHumo1, matHumo);
    meshHumo1.position.set(0, 3.8, 0);
    //copalGroup.add(meshHumo1);

    var geoHumo2 = new THREE.SphereGeometry(0.55, 12, 12);
    var meshHumo2 = new THREE.Mesh(geoHumo2, matHumo);
    meshHumo2.position.set(0.2, 4.4, 0.1);
    //copalGroup.add(meshHumo2);   
    
    const copalGroup = new THREE.Group();
    copalGroup.add(
        meshBase, 
        meshCuello, 
        meshCopa, 
        meshBorde, 
        meshInterior, 
        meshResina1, 
        meshResina2, 
        meshResina3,
        meshHumo1,
        meshHumo2
    );

    copalGroup.position.set(x, y, z);
    return copalGroup;
}