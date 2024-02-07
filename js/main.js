import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

let scene, camera, renderer, hlight, directionalLight, light, light2, light3, light4;

scene = new THREE.Scene();
let logoCont = document.getElementById("logo");

camera = new THREE.PerspectiveCamera(30, window.innerWidth/window.innerHeight,1000,10000);
camera.rotation.y = 45/180*Math.PI;
camera.position.x = 800;
camera.position.y = 100;
camera.position.z = 1000;

light = new THREE.PointLight(0xc4c4c4,5);
light.position.set(0,300,500);
scene.add(light);

light2 = new THREE.PointLight(0xc4c4c4,5);
light2.position.set(500,100,0);
scene.add(light2);

light3 = new THREE.PointLight(0xc4c4c4,5);
light3.position.set(0,100,-500);
scene.add(light3);

light4 = new THREE.PointLight(0xc4c4c4,5);
light4.position.set(-500,300,0);
scene.add(light4);

renderer = new THREE.WebGLRenderer({alpha:true});

renderer.setSize(window.innerWidth/3.5, window.innerHeight/3.5);
const controls = new OrbitControls( camera, renderer.domElement );
controls.addEventListener('change', renderer);


logoCont.appendChild(renderer.domElement);
let logo;
let loader = new THREE.GLTFLoader();
loader.load('./img/KrimwellLogo3d.gltf', function (gltf){
    logo = gltf.scene.children[0];
    logo.scale.set(0.9,0.9,0.9);
    scene.add(gltf.scene);
    animate();
});


function animate(){
    renderer.render(scene,camera);
    requestAnimationFrame(animate);
}



