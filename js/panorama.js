  // Panorama Image URL
  const panoramaImageURL = 'img/universeBlack3.jpg';
  const planetImageURL = 'img/earth.png';
  const logo = 'img/KrimwellLogo.png';
  const overlay = document.getElementById('overlay');



  // Create panorama viewer
  const panorama = new PANOLENS.ImagePanorama(panoramaImageURL);
  const modal = document.getElementById('earth');

  function CloseModal(){
    modal.style.display = 'none';
    overlay.style.display = 'none';
  }

  // Add panorama to the container
  const container = document.getElementById('image-container');
  container.append(panorama.container);

  // Viewer setup
  const viewer = new PANOLENS.Viewer({ container: container,
    autoRotate: true,
    autoRotateSpeed: 0.2,
    controlBar: true,
    horizontalView: true,
    cameraFov: 500,
    autoHideInfospot: false,
    output: 'console',
    autoRotateActivationDuration: 10000 //milliseconds
  });

  // Add zoom points (example)
  const point1 = new PANOLENS.Infospot(3000, planetImageURL);
  point1.position.set(5000, 0, -1000);
  point1.addHoverText('Zoom Point 1');


  point1.addEventListener('click', function () {
    // Zoom in on click
    console.log("Zomm 100");
    /*viewer.getCamera().fov = 30;
    viewer.getCamera().updateProjectionMatrix();*/
    modal.style.display = 'block';
    overlay.style.display = 'block';

  });

  const point2 = new PANOLENS.Infospot(3000, './img/mars.png');
  point2.position.set(861.90, 109.97, -4914.51);
  point2.addHoverText('Zoom Point 2');
  panorama.add(point2);

  panorama.add(point1);
  viewer.add(panorama);

  const zoomInBtn = document.getElementById('zoomInBtn');
  const zoomOutBtn = document.getElementById('zoomOutBtn');

  zoomInBtn.addEventListener('click', () => {
    viewer.control.dollyIn(4); // You can adjust the factor (2 in this case) for the zoom in
  });

  zoomOutBtn.addEventListener('click', () => {
    viewer.control.dollyOut(4); // You can adjust the factor (2 in this case) for the zoom out
    viewer.animate()
  });
