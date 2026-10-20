import * as THREE from "../js/three.module.js";
export default function E04(x, y, z) {
    
    // LIQUIDO COLOR AMBAR
    var liquido = new THREE.CylinderGeometry(5.9, 6, 13, 48);
    var materialLiquido = new THREE.MeshPhongMaterial({
        color: 0xC68A32,
        transparent: true,
        opacity: 0.9,
        shininess: 80
    });
    var meshLiquido = new THREE.Mesh(liquido, materialLiquido);
    meshLiquido.position.set(0, 9, 0);
    //botellaGroup.add(meshLiquido);

    // CUERPO DE VIDRIO
    var botella = new THREE.CylinderGeometry(7, 7, 20, 48);
    var materialBotella = new THREE.MeshPhongMaterial({
        color: 0xDDE8E6,
        transparent: true,
        opacity: 0.22,
        shininess: 100,
        side: THREE.DoubleSide,
        depthWrite: false
    });
    var meshBotella = new THREE.Mesh(botella, materialBotella);
    meshBotella.position.set(0, 12, 0);
    //botellaGroup.add(meshBotella);

    // HOMBROS DE LA BOTELLA
    var hombros = new THREE.CylinderGeometry(3.5, 7, 4, 48);
    var meshHombros = new THREE.Mesh(hombros, materialBotella);
    meshHombros.position.set(0, 23, 0);
    //botellaGroup.add(meshHombros);

    // CUELLO
    var cuelloBotella = new THREE.CylinderGeometry(3.5, 3.5, 5, 48);
    var meshCuelloBotella = new THREE.Mesh(cuelloBotella, materialBotella);
    meshCuelloBotella.position.set(0, 27.5, 0);
    //botellaGroup.add(meshCuelloBotella);

    // ANILLO DEL CUELLO
    var anillo = new THREE.CylinderGeometry(3.8, 3.8, 0.8, 48);
    var materialAnillo = new THREE.MeshPhongMaterial({
        color: 0xC9D0CE,
        shininess: 100
    });
    var meshAnillo = new THREE.Mesh(anillo, materialAnillo);
    meshAnillo.position.set(0, 25.2, 0);
    //botellaGroup.add(meshAnillo);

    // TAPON NEGRO
    var tapon = new THREE.CylinderGeometry(3.2, 3.2, 3, 48);
    var materialTapon = new THREE.MeshPhongMaterial({
        color: 0x171717,
        shininess: 70
    });
    var meshTapon = new THREE.Mesh(tapon, materialTapon);
    meshTapon.position.set(0, 31.5, 0);
    //botellaGroup.add(meshTapon);

    // BORDE SUPERIOR DEL TAPON
    var bordeTapon = new THREE.CylinderGeometry(3.25, 3.25, 0.35, 48);
    var meshBordeTapon = new THREE.Mesh(bordeTapon, materialTapon);
    meshBordeTapon.position.set(0, 33.1, 0);
    //botellaGroup.add(meshBordeTapon);

    // ETIQUETA COMPLETA ALREDEDOR DEL CILINDRO
    var etiqueta = new THREE.CylinderGeometry(7.08, 7.08, 9, 64, 1, true);
    var texturaEtiqueta = new THREE.TextureLoader().load("./textura/etiqueta.jpg");
    texturaEtiqueta.colorSpace = THREE.SRGBColorSpace;
    texturaEtiqueta.wrapS = THREE.RepeatWrapping;
    texturaEtiqueta.wrapT = THREE.ClampToEdgeWrapping;
    texturaEtiqueta.repeat.set(1, 1);

    var materialEtiqueta = new THREE.MeshBasicMaterial({
        map: texturaEtiqueta,
        side: THREE.DoubleSide
    });
    var meshEtiqueta = new THREE.Mesh(etiqueta, materialEtiqueta);
    meshEtiqueta.position.set(0, 12, 0);
    //botellaGroup.add(meshEtiqueta);

    // BASE DE VIDRIO
    var base = new THREE.CylinderGeometry(6.8, 6.8, 0.6, 48);
    var meshBase = new THREE.Mesh(base, materialBotella);
    meshBase.position.set(0, 2.3, 0);
    //botellaGroup.add(meshBase);

    const botellaGroup = new THREE.Group();
    botellaGroup.add(meshBordeTapon,meshEtiqueta,meshTapon,meshAnillo,meshLiquido,meshCuelloBotella,meshHombros,meshBase,meshBotella);
    botellaGroup.position.set(x, y, z);
    return botellaGroup;
}