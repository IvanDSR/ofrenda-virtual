import * as THREE from "../js/three.module.js";
export default function pan01(x, y, z) {

 var geometry01 = new THREE.TorusGeometry(4,3,40,40);
var material01 = new THREE.MeshPhongMaterial({color:0xC79085});
var mesh01= new THREE.Mesh(geometry01,material01);
//scene.add(mesh01);
mesh01.position.set(0,3,0);
mesh01.rotation.set(Math.PI/2,0,0);

var geometry02 = new THREE.SphereGeometry(2);
var material02 = new THREE.MeshLambertMaterial({color:0xA3635A, side: THREE.DoubleSide});
var mesh02= new THREE.Mesh(geometry02,material02);
//scene.add(mesh02);
mesh02.position.set(0,5,0);

var geometry03 = new THREE.TorusGeometry(2,1,40,40);
var material03 = new THREE.MeshLambertMaterial({color:0xA3635A});
var mesh03= new THREE.Mesh(geometry03,material03);
//scene.add(mesh03);
mesh03.position.set(4,4,0);

var geometry04 = new THREE.TorusGeometry(2,1,40,40);
var material04 = new THREE.MeshLambertMaterial({color:0xA3635A});
var mesh04= new THREE.Mesh(geometry04,material04);
//scene.add(mesh04);
mesh04.position.set(-4,4,0);

var geometry05 = new THREE.TorusGeometry(2,1,40,40);
var material05 = new THREE.MeshLambertMaterial({color:0xA3635A});
var mesh05= new THREE.Mesh(geometry05,material05);
//scene.add(mesh05);
mesh05.position.set(1,4,4);
mesh05.rotation.set(-6,8,0);

var geometry06 = new THREE.TorusGeometry(2,1,40,40);
var material06 = new THREE.MeshLambertMaterial({color:0xA3635A});
var mesh06= new THREE.Mesh(geometry06,material06);
//scene.add(mesh06);
mesh06.position.set(-0.5,4,-4);
mesh06.rotation.set(6,8,Math.PI/1);

    var panGroup = new THREE.Group();
    panGroup.add(mesh01,mesh02,mesh03,mesh04,mesh05,mesh06);
    panGroup.position.set(x, y, z);

    return panGroup;
}