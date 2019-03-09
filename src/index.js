/*
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from "react-router-dom"

import { Provider } from "mobx-react"

import settingsStore from 'stores/settingsStore'
import   themesStore from 'stores/themesStore'
import     langStore from 'stores/langStore'

import Layout from 'layouts/Layout'
*/

/*
class App extends React.Component {
  render() {
    return (
      <Provider settingsStore={settingsStore} langStore={langStore} themesStore={themesStore} >
          <Router>
            <Layout/>
          </Router>
      </Provider>
    )
  }
}

ReactDOM.render( <App/>, document.getElementById('edf720cb-b61fe') )
*/
import 'css/abc.css'
import * as THREE from 'three'

////////////////////////////////////////

var scene = new THREE.Scene();
var aspect = window.innerWidth / window.innerHeight;
var camera = new THREE.PerspectiveCamera( 75, aspect, 0.1, 1000 );
var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

var geometry = new THREE.BoxGeometry( 1, 1, 1 );
var material = new THREE.MeshNormalMaterial();
var cube = new THREE.Mesh( geometry, material );
scene.add( cube );
camera.position.z = 5;

var render = function () {
  requestAnimationFrame( render );
  cube.rotation.x += 0.1;
  cube.rotation.y += 0.1;
  renderer.render( scene, camera );
};

render();


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
