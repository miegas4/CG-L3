'use strict';

class Butter extends MovableObject {

  constructor(size, x, y, z) {

    var butter = new THREE.Object3D();

    var phongMaterial = new THREE.MeshPhongMaterial({shininess : 0});
    var lambertMaterial = new THREE.MeshLambertMaterial();

    super(0, 0, 0, 0, 0, 0, size, butter, size * 1.25, phongMaterial, lambertMaterial);

  	this.addBase(butter, size, x, y, z);
    this.addButter(butter, size, x, y, z);

    butter.castShadow = true;
    butter.receiveShadow = false;

    butter.position.set(x,y,z);
  }

  movementWithCollision() {}
  movementWithNoCollision() {}

  addBase(obj, size, x, y, z) {
    var geometry = new THREE.BoxGeometry(size, size / 4, 2 * size);
    var material = new THREE.MeshPhongMaterial({color: 0x6d4e04, wireframe: false});
    var mesh = new THREE.Mesh(geometry, material);

    mesh.position.set(0, size / 8, 0);

    obj.add(mesh);

  }

  addButter(obj, size, x, y, z) {
    var geometry = new THREE.BoxGeometry(0.8 * size, 0.4 * size, 1.25 * size);
    var material = new THREE.MeshPhongMaterial( {color: 0xefea83, wireframe: false});
    var mesh = new THREE.Mesh(geometry, material);

    mesh.position.set(0, size / 4 + 0.2 * size , 0.3 * size);

    obj.add(mesh);

  }
}
