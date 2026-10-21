import * as THREE from "../js/three.module.js";

export default function E06(x, y, z) {
    // FLOR 1 (Naranja Principal)
    var geometry01 = new THREE.TorusGeometry(1.2, 0.5, 16, 50);
    var material01 = new THREE.MeshBasicMaterial({ color: 0xff8c00 });
    var mesh01 = new THREE.Mesh(geometry01, material01);
    mesh01.position.set(0, 10, 0);
    mesh01.rotation.x = Math.PI / 2;
    //tiraGroup.add(mesh01);


    var geometry02 = new THREE.TorusGeometry(1.2, 0.5, 16, 50);
    var material02 = new THREE.MeshBasicMaterial({ color: 0xff8c00 });
    var mesh02 = new THREE.Mesh(geometry02, material02);
    mesh02.position.set(0, 10, 0);
    mesh02.rotation.x = Math.PI / 4;
    //tiraGroup.add(mesh02);

    var geometry03 = new THREE.TorusGeometry(0.7, 0.3, 12, 30);
    var material03 = new THREE.MeshBasicMaterial({ color: 0xe65100 });
    var mesh03 = new THREE.Mesh(geometry03, material03);
    mesh03.position.set(0, 10, 0);
    //tiraGroup.add(mesh03);

    // FLOR 2 (Dorada / Amarillo Cempasúchil)
    var geometry04 = new THREE.TorusGeometry(1.2, 0.5, 16, 50);
    var material04 = new THREE.MeshBasicMaterial({ color: 0xffb703 });
    var mesh04 = new THREE.Mesh(geometry04, material04);
    mesh04.position.set(0.2, 7.5, 0);
    mesh04.rotation.x = Math.PI / 2;
    //tiraGroup.add(mesh04);

    var geometry05 = new THREE.TorusGeometry(1.2, 0.5, 16, 50);
    var material05 = new THREE.MeshBasicMaterial({ color: 0xffb703 });
    var mesh05 = new THREE.Mesh(geometry05, material05);
    mesh05.position.set(0.2, 7.5, 0);
    mesh05.rotation.y = Math.PI / 3;
    //tiraGroup.add(mesh05);

    var geometry06 = new THREE.TorusGeometry(0.7, 0.3, 12, 30);
    var material06 = new THREE.MeshBasicMaterial({ color: 0xd97706 });
    var mesh06 = new THREE.Mesh(geometry06, material06);
    mesh06.position.set(0.2, 7.5, 0);
    //tiraGroup.add(mesh06);

    // FLOR 3 (Naranja Intenso)
    var geometry07 = new THREE.TorusGeometry(1.2, 0.5, 16, 50);
    var material07 = new THREE.MeshBasicMaterial({ color: 0xff5722 });
    var mesh07 = new THREE.Mesh(geometry07, material07);
    mesh07.position.set(-0.2, 5, 0);
    mesh07.rotation.x = Math.PI / 2;
    //tiraGroup.add(mesh07);

    var geometry08 = new THREE.TorusGeometry(1.2, 0.5, 16, 50);
    var material08 = new THREE.MeshBasicMaterial({ color: 0xff5722 });
    var mesh08 = new THREE.Mesh(geometry08, material08);
    mesh08.position.set(-0.2, 5, 0);
    mesh08.rotation.x = -Math.PI / 4;
    //tiraGroup.add(mesh08);

    var geometry09 = new THREE.TorusGeometry(0.7, 0.3, 12, 30);
    var material09 = new THREE.MeshBasicMaterial({ color: 0xb22222 });
    var mesh09 = new THREE.Mesh(geometry09, material09);
    mesh09.position.set(-0.2, 5, 0);
    //tiraGroup.add(mesh09);

    // FLOR 4 (Amarillo Cálido)
    var geometry10 = new THREE.TorusGeometry(1.2, 0.5, 16, 50);
    var material10 = new THREE.MeshBasicMaterial({ color: 0xffc107 });
    var mesh10 = new THREE.Mesh(geometry10, material10);
    mesh10.position.set(0, 2.5, 0);
    mesh10.rotation.x = Math.PI / 2;
    //tiraGroup.add(mesh10);

    var geometry11 = new THREE.TorusGeometry(1.2, 0.5, 16, 50);
    var material11 = new THREE.MeshBasicMaterial({ color: 0xffc107 });
    var mesh11 = new THREE.Mesh(geometry11, material11);
    mesh11.position.set(0, 2.5, 0);
    mesh11.rotation.y = Math.PI / 4;
    //tiraGroup.add(mesh11);

    var geometry12 = new THREE.TorusGeometry(0.7, 0.3, 12, 30);
    var material12 = new THREE.MeshBasicMaterial({ color: 0xe65100 });
    var mesh12 = new THREE.Mesh(geometry12, material12);
    mesh12.position.set(0, 2.5, 0);
    //tiraGroup.add(mesh12);

    // FLOR 5 (Naranja Tradicional Base)
    var geometry13 = new THREE.TorusGeometry(1.2, 0.5, 16, 50);
    var material13 = new THREE.MeshBasicMaterial({ color: 0xff8c00 });
    var mesh13 = new THREE.Mesh(geometry13, material13);
    mesh13.position.set(0.1, 0, 0);
    mesh13.rotation.x = Math.PI / 2;
    //tiraGroup.add(mesh13);

    var geometry14 = new THREE.TorusGeometry(1.2, 0.5, 16, 50);
    var material14 = new THREE.MeshBasicMaterial({ color: 0xff8c00 });
    var mesh14 = new THREE.Mesh(geometry14, material14);
    mesh14.position.set(0.1, 0, 0);
    mesh14.rotation.x = Math.PI / 3;
    //tiraGroup.add(mesh14);

    var geometry15 = new THREE.TorusGeometry(0.7, 0.3, 12, 30);
    var material15 = new THREE.MeshBasicMaterial({ color: 0xb22222 });
    var mesh15 = new THREE.Mesh(geometry15, material15);
    mesh15.position.set(0.1, 0, 0);
    //tiraGroup.add(mesh15);

    var tiraGroup = new THREE.Group();
    tiraGroup.add(mesh01, mesh02, mesh03,mesh04, mesh05, mesh06,mesh07, mesh08, mesh09,mesh10, mesh11, mesh12,mesh13, mesh14, mesh15);
    tiraGroup.position.set(x, y, z);

    return tiraGroup;
}