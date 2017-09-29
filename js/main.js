var camera, scene, renderer;
var scene_size = 600
var window_ratio = window.innerWidth / window.innerHeight;





function render(){
	'use strict';
	renderer.render(scene, camera);
}

function onResize() {
	'use strict';

	renderer.setSize(window.innerWidth, window.innerHeight);

	if (window.innerHeight > 0 && window.innerWidth > 0) { // dividing by zero error preventer

		window_ratio = renderer.getSize().width / renderer.getSize().height; //updating window ratio

		camera.left = - scene_size * window_ratio; //left
		camera.right = scene_size * window_ratio; //right
		camera.top = scene_size; //top
		camera.bottom = - scene_size; //bottom

		camera.updateProjectionMatrix(); //update camera
	}
}

function createScene() {
	'use strict';

	scene = new THREE.Scene();

	scene.add(new THREE.AxisHelper(10));
	scene.add(createCarRound(0,0,0, 10));
	scene.add(create_table(0, -9.5, 0, 1000));
	createCar(30, 0, 30);
	addSpotLight(-100, 100, 0);
}

function createCamera() {
	'use strict';

	camera = new THREE.OrthographicCamera(-scene_size * window_ratio, //left
										   scene_size * window_ratio, //right
										   scene_size, //top
										  -scene_size, //bottom
										   0.01, 2000);

	camera.position.set(0, 500, 0);

	camera.lookAt(scene.position);
}

function animate() {
	
	//update();
	render();

	requestAnimationFrame(animate);
}


function init() {
	'use strict';


	renderer = new THREE.WebGLRenderer({antialias: true});

	renderer.setSize(window.innerWidth, window.innerHeight);

	document.body.appendChild(renderer.domElement);

	createScene();
	createCamera();
	
	render();	

	window.addEventListener("resize", onResize);

	var controls = new THREE.OrbitControls(camera);
	controls.addEventListener( 'change', render );
}
