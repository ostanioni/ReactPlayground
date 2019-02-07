import * as React from "react";
import * as ReactDOM from "react-dom";
// import "./css/main.css";
import SearchPanel from './components/SearchPanel';
import * as THREE from 'three';

import {run} from "./lo.js";

import {f} from './components/preloader';
import styled from 'styled-components';
f();
export interface HelloProps { compiler: string; framework: string; }

export const Hello = (props: HelloProps, el:any) => (
<>
	{ SearchPanel }
	<h1>Hello from {props.compiler} and {props.framework}!</h1>
</>
)
;

ReactDOM.render(
  <Hello compiler="TypeScript" framework="React" />,
  document.getElementById("example")
);

console.log( run([1,2,3,4,5,6,7]) );
function randomInteger(min: number, max: number): number {
  var rand = min - 0.5 + Math.random() * (max - min + 1)
  rand = Math.round(rand);
  return rand;
}
let language: string;
switch ( randomInteger(0, 5) ) {
  case 0: language = 'C'; break;
  case 1: language = 'C++'; break;
  case 2: language = 'PHP'; break;
  case 3: language = 'Python'; break;
  case 4: language = 'JS'; break;
  case 5: language = 'Java'; break;
}
alert( language );
var scene = new THREE.Scene();
			var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );

			var renderer = new THREE.WebGLRenderer();
			renderer.setSize( window.innerWidth, window.innerHeight );
			document.body.appendChild( renderer.domElement );

			var geometry = new THREE.BoxGeometry( 1, 1, 1 );
			var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
			var cube = new THREE.Mesh( geometry, material );
			scene.add( cube );

			camera.position.z = 5;

			var animate = function () {
				requestAnimationFrame( animate );

				cube.rotation.x += 0.01;
				cube.rotation.y += 0.01;

				renderer.render( scene, camera );
			};

			animate();
			console.table({
				adasdA: "fgdfg",
				5: "fghfghf",
				7: "thrfythry"
			})