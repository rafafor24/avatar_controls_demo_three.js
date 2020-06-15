var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

window.addEventListener('resize', function () {
    var width = window.innerWidth;
    var height = window.innerHeight;
    renderer.setSize(width, height);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
});

var geometry = new THREE.BoxGeometry(1, 1, 1);
var material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });
var cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 5;
//logic
var update = function () {
    cube.rotation.x += 0.01;
    cube.rotation.z += 0.01;

}
//draw
var render = function () {
    renderer.render(scene, camera);
};
//loop
var GameLoop = function () {
    requestAnimationFrame(GameLoop);
    update();
    render();
}

GameLoop();