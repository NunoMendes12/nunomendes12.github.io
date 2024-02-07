var ROTATION_POSITION = 0.2;
var ROTATION_SPEED = 150;
const arrowButtonId = document.getElementById('arrowButton');
const arrowButtonId2 = document.getElementById('arrowButton2');


function rotateScene(targetRotation) {
  var currentRotation = panorama.rotation.y;

  // Create a Tween for smooth animation
  new TWEEN.Tween({ rotation: currentRotation })
    .to({ rotation: targetRotation }, 2000) // Adjust the duration as needed
    .onUpdate(function (obj) {
      panorama.rotation.y = obj.rotation;
    })
    .easing(TWEEN.Easing.Quadratic.Out) // You can try different easing functions
    .start();

    animate();
}

// Animate the scene
function animate() {
  requestAnimationFrame(animate);
  TWEEN.update(); // Update the Tween library
}



function RotateLeftRigth(param) /* 0 - right, 1 - left */{
    let go = ROTATION_POSITION;
    let back = - ROTATION_POSITION;
    let pos  = param < 1 ? go : back;
    let easing = {val : pos};
    let tween = new TWEEN.Tween(easing) 
        .to({val: 0}, ROTATION_SPEED) 
        .easing(TWEEN.Easing.Quadratic.InOut) 
        .onUpdate(function() { 
            viewer.OrbitControls.rotateLeft(easing.val)
    }).start();
}

arrowButtonId.addEventListener('click', function(){
  rotateScene(-Math.PI / 4); // Rotate right by 45 degrees
});


arrowButtonId2.addEventListener('click', function(){
  rotateScene(Math.PI / 4); // Rotate right by 45 degrees
})



  
  // Panorama Image URL
  const panoramaImageURL = 'img/universeBlack3.jpg';

  const planetImageURL = 'img/earth.png';
  const logo = 'img/KrimwellLogo.png';
  const overlay = document.getElementById('overlay');
  const panorama2 = new PANOLENS.ImagePanorama( 'img/displayCase.jpg' );




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
  point1.addHoverText('Click to see our perfumes');


  point1.addEventListener('click', function () {
    // Zoom in on click
    console.log("Zomm 100");
    //viewer.getCamera().fov = 30;
  //viewer.getCamera().updateProjectionMatrix();
    viewer.tweenControlCenter(new THREE.Vector3(0, 0, 3000), 2000);
      const url = "/environment.html";
        window.location = url;
    //modal.style.display = 'block';
    //overlay.style.display = 'block';

  });

  const point2 = new PANOLENS.Infospot(3000, './img/mars.png');
  point2.position.set(861.90, 109.97, -4914.51);
  point2.addHoverText('Zoom Point 2');
  panorama.add(point2);

  panorama.add(point1);
  viewer.add(panorama);
  viewer.add(panorama2);

  /*const zoomInBtn = document.getElementById('zoomInBtn');
  const zoomOutBtn = document.getElementById('zoomOutBtn');

  zoomInBtn.addEventListener('click', () => {
    viewer.control.dollyIn(4); // You can adjust the factor (2 in this case) for the zoom in
  });

  zoomOutBtn.addEventListener('click', () => {
    viewer.control.dollyOut(4); // You can adjust the factor (2 in this case) for the zoom out
    viewer.animate()
  });*/

  panorama.link( panorama2, new THREE.Vector3( 4092.23, -275.84, 2846.46 ), 1000 );
  panorama2.link( panorama, new THREE.Vector3( -3429.01, 1205.85, -3421.88 ) );


  
/*
  var panorama1, panorama2, viewer;

  panorama1 = new PANOLENS.GoogleStreetviewPanorama( 'y0rbkep4RBcAAAQqZe0GiQ' );

  panorama2 = new PANOLENS.ImagePanorama( 'asset/textures/equirectangular/field.jpg' );

  panorama3 = new PANOLENS.VideoPanorama( 'asset/textures/video/1941-battle-low.mp4' );

  viewer = new PANOLENS.Viewer();
  viewer.add( panorama1 );
  viewer.add( panorama2 );
  viewer.add( panorama3 );

  // Linking between panoramas
  
  // Pair
  panorama1.link( panorama2, new THREE.Vector3( -3145.23, -3704.40, 1149.48 ) );
  panorama2.link( panorama1, new THREE.Vector3( -3429.01, 1205.85, -3421.88 ) );

  // Pair with custom scale and image
  panorama1.link( panorama3, new THREE.Vector3( -1106.42, -4277.19, -5000.00 ), 400, 'asset/textures/1941-battle-thumb.png' );
  panorama3.link( panorama2, new THREE.Vector3( 2092.2, -159.02, -4530.91 ) );
*/




