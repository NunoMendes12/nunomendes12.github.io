const panoramaImage = new PANOLENS.ImagePanorama("img/the-universe.jpg");



const viewer = new PANOLENS.Viewer({
    container: imageContainer,
    autoRotate: true,
    autoRotateSpeed: 0.5,
    controlBar: false,
    horizontalView: true,
    cameraFov: 80,
    autoHideInfospot: false,
    output: 'console',
    autoRotateActivationDuration: 10000 //milliseconds
});

viewer.OrbitControls.noZoom = true;
viewer.OrbitControls.noPan = true;
viewer.OrbitControls.noRotate = false;
viewer.DeviceOrientationControls.disconnect();

//viewer.OrbitControls.minFov= 55;
//viewer.OrbitControls.maxFov= 80;


