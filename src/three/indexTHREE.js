
import 'css/abc.css'
import * as THREE from 'three'
import WEBGL from 'webgl/utils/Detector'

////////////////////////////////////////

var scene = new THREE.Scene();
var aspect = window.innerWidth / window.innerHeight;
var camera = new THREE.PerspectiveCamera( 75, aspect, 0.1, 1000 );
var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

var sphere = new THREE.SphereGeometry( 15, 10, 100 );
var box = new THREE.BoxGeometry( 15, 15, 15 );

var material = new THREE.MeshNormalMaterial();

var cube = new THREE.Mesh( box, material );
var geo = new THREE.Mesh( sphere, material );

scene.add( cube );
scene.add( geo );
camera.position.z = 80;

var materialLine = new THREE.LineBasicMaterial({ color: 0x0000ff });
var geometryLine = new THREE.Geometry();
geometryLine.vertices.push(new THREE.Vector3(-10, 0, 0));
geometryLine.vertices.push(new THREE.Vector3(0, 10, 0));
geometryLine.vertices.push(new THREE.Vector3(10, 0, 0));
var line = new THREE.Line(geometryLine, materialLine);
scene.add(line);

var render = function () {
  requestAnimationFrame( render );
  cube.rotation.x += 0.1;
  cube.rotation.y += 0.1;
  
  geo.position.x += 2*Math.cos(0.01);
 
  renderer.render( scene, camera );
};

render();
if ( WEBGL.isWebGL2Available() === false ) {

  console.log('WEBGL2 AVAILABLE')
  document.body.appendChild( WEBGL.getWebGL2ErrorMessage() );
  // Initiate function or other initializations here
	//animate();

}

if ( WEBGL.isWebGLAvailable() ) {

  console.log('WEBGL AVAILABLE')
  // Initiate function or other initializations here
	//animate();

} else {
  console.warning('WEBGL NOT AVAILABLE')
	var warning = WEBGL.getWebGLErrorMessage();
	document.getElementById( 'container' ).appendChild( warning );

}
///////////////////////////////////////
console.clear()
const worker = new Worker('./workers/sortQuick.js');

worker.postMessage('Hello from index.js')
console.log('Hello from index.js');

worker.onmessage = function (e) {
  console.log( 'FROM WORKER: ', e.data )
};
function getMsg(){
  let result = window.prompt('Приветствую тебя. Что ты хотел сказать?')
  worker.postMessage(result)
}
const  app = document.getElementById('edf720cb-b61fe')
const Button = document.createElement('button')
Button.onclick = getMsg
Button.textContent = 'Жми'
app.appendChild(Button)
// worker.addEventListener("message", function (event) {});


// Возвращает случайное число между 0 (включительно) и 1 (не включая 1)
function getRandom() {
  return Math.random();
}
// Возвращает случайное число между min (включительно) и max (не включая max)
function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}
// Возвращает случайное целое число между min (включительно) и max (не включая max)
// Использование метода Math.round() даст вам неравномерное распределение!
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}


WEBGL.isWebGLAvailable() 