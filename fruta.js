import * as THREE from "../js/three.module.js";

export default function E011(x, y, z) {
    const frutasGroup = new THREE.Group();

    // 1. CARGA Y CONFIGURACIÓN DE LA TEXTURA DE BARRO
    var texturaplatoBarro = new THREE.TextureLoader().load("./textura/barro.jpg");
    texturaplatoBarro.wrapS = THREE.RepeatWrapping;
    texturaplatoBarro.wrapT = THREE.RepeatWrapping;
    texturaplatoBarro.repeat.set(2, 2);

    var matplatoBarro = new THREE.MeshBasicMaterial({
        map: texturaplatoBarro,
        side: THREE.DoubleSide
    });

    // 2. BASE DEL PLATO / CAZO CON TEXTURA DE BARRO
    var geometry11 = new THREE.CylinderGeometry(1.3, 1, 1, 20, 20, true);
    var mesh11 = new THREE.Mesh(geometry11, matplatoBarro); // Aplicada la textura
    mesh11.position.set(0, 0.5, 0);
    frutasGroup.add(mesh11);

    // Fondo interno del plato
    var geometry07 = new THREE.CircleGeometry(1, 20);
    var mesh07 = new THREE.Mesh(geometry07, matplatoBarro);
    mesh07.position.set(0, 0.05, 0);
    mesh07.rotation.set(Math.PI / 2, 0, 0);
    frutasGroup.add(mesh07);

    // Borde redondeado del plato
    var geometry12 = new THREE.TorusGeometry(8, 0.8, 5, 20);
    var mesh12 = new THREE.Mesh(geometry12, matplatoBarro);
    mesh12.rotation.set(Math.PI / 2, 0, 0);
    mesh12.position.set(0, 1, 0);
    mesh12.scale.set(0.16, 0.16, 0.16);
    frutasGroup.add(mesh12);

    // 3. FRUTAS DENTRO DEL PLATO

    // Manzana 1 + Tallo
    var geometryManzana = new THREE.SphereGeometry(0.5, 16, 16);
    var materialManzana = new THREE.MeshBasicMaterial({ color: 0xE63946 });
    var manzana = new THREE.Mesh(geometryManzana, materialManzana);
    manzana.position.set(-0.4, 0.8, 0.2);
    frutasGroup.add(manzana);

    var geometryTallo = new THREE.CylinderGeometry(0.02, 0.02, 0.2, 8);
    var materialTallo = new THREE.MeshBasicMaterial({ color: 0x4A2E12 });
    var tallo = new THREE.Mesh(geometryTallo, materialTallo);
    tallo.position.set(-0.4, 1.3, 0.2);
    frutasGroup.add(tallo);

    // Manzana 2 + Tallo
    var manzana2 = new THREE.Mesh(geometryManzana, materialManzana);
    manzana2.position.set(-0.3, 1.2, -0.3);
    manzana2.scale.set(0.9, 0.9, 0.9);
    frutasGroup.add(manzana2);

    var tallo2 = new THREE.Mesh(geometryTallo, materialTallo);
    tallo2.position.set(-0.3, 1.6, -0.3);
    frutasGroup.add(tallo2);

    // Naranja
    var geometryNaranja = new THREE.SphereGeometry(0.52, 16, 16);
    var materialNaranja = new THREE.MeshBasicMaterial({ color: 0xFF7B00 });
    var naranja = new THREE.Mesh(geometryNaranja, materialNaranja);
    naranja.position.set(0.4, 0.9, -0.2);
    frutasGroup.add(naranja);

    // Guayaba (Ajustada la coordenada Z para que no se salga del plato)
    var geometryGuayaba = new THREE.SphereGeometry(0.45, 16, 16);
    geometryGuayaba.scale(1, 1.25, 1);
    var materialGuayaba = new THREE.MeshBasicMaterial({ color: 0xD4E157 });
    var guayaba = new THREE.Mesh(geometryGuayaba, materialGuayaba);
    guayaba.position.set(0.3, 0.7, 0.4);
    guayaba.rotation.z = -Math.PI / 6;
    frutasGroup.add(guayaba);

    // Jícama (Ajustada la coordenada Z para que no se salga del plato)
    var geometryJicama = new THREE.SphereGeometry(0.5, 16, 16);
    geometryJicama.scale(1.2, 0.8, 1.2);
    var materialJicama = new THREE.MeshBasicMaterial({ color: 0xC2A675 });
    var jicama = new THREE.Mesh(geometryJicama, materialJicama);
    jicama.position.set(0.1, 1.3, 0.1);
    frutasGroup.add(jicama);

    // Posicionamiento final del grupo completo
    frutasGroup.position.set(x, y, z);
    return frutasGroup;
}