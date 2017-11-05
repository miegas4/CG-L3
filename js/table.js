'use strict';

class Table {

  constructor(size) {
    this._size = size;
  }

  create_table() {
    var size = this._size;
    var height = size / 10;

  	var geometry = new THREE.BoxGeometry(size, height, size, size/50, height/50, size/50);
  	var material = new THREE.MeshStandardMaterial({color: 0x000991});
  	var table = new THREE.Mesh(geometry, material);
  	
  	table.position.set(0, -height / 2, 0);

    this.addLeg(table, size / 4, size / 4);
    this.addLeg(table, size / 4, -size / 4);
    this.addLeg(table, -size / 4, size / 4);
    this.addLeg(table, -size / 4, -size / 4);

    table.castShadow = true;

  	return table;
  }

  addLeg(table, x, z) {
    var height = this._size / 10;
    
    var geometry = new THREE.BoxGeometry(height, 2 * height, height, height/50, height/25, height/50);
    var material = new THREE.MeshLambertMaterial({color: 0x000991});
    var leg = new THREE.Mesh(geometry, material);

    leg.position.set(x, -(3 * height) / 2, z);

    table.add(leg);
  }
}