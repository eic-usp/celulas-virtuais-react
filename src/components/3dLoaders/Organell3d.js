import React from "react";
import * as THREE from "three";
import * as OBJLoader from "three-obj-loader";
const OrbitControls = require("three-orbit-controls")(THREE);
OBJLoader(THREE);

export default class Organell3d extends React.Component {
  componentDidMount() {
    this.THREE = THREE;
    var objLoader = new this.THREE.OBJLoader()
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    scene.background = 0xffffff
    var renderer = new THREE.WebGLRenderer();
    renderer.setSize(500, 500);
    // document.body.appendChild( renderer.domElement );
    // use ref as a mount point of the Three.js scene instead of the document.body
    this.mount.appendChild(renderer.domElement);

    camera.position.z = 200;
    var controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.campingFactor = 0.25;
    controls.enableZoom = true;
    var keyLight = new THREE.DirectionalLight(
      new THREE.Color("hsl(30, 100%, 75%)"),
      1.0
    );
    keyLight.position.set(-100, 0, 100);

    var fillLight = new THREE.DirectionalLight(
      new THREE.Color("hsl(240, 100%, 75%)"),
      0.75
    );
    fillLight.position.set(100, 0, 100);

    var backLight = new THREE.DirectionalLight(0xffffff, 1.0);
    backLight.position.set(100, 0, -100);

    scene.add(keyLight);
    scene.add(fillLight);
    scene.add(backLight);

    objLoader.setPath("./src/lib/model/");
    objLoader.load("Complexo de Golgi.obj", object => {
      object.position.y = -60;
      scene.add(object);
    });
    var animate = () => {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };
  }
  render() {
    return <div ref={ref => (this.mount = ref)} />;
  }
}
