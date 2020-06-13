const welcome = 'Welcome, enter my brain...';
const ts = 36;
const fr = 60;
const tf = 'Impact';

let particles = [];
let stars = [];
let slicer = 0;
let imageSize;
let imageClicked = false;
let divisionFactor = 7;
let zoom = true;
let rotationAngle = 0;


function preload() {
  img = loadImage('frame-1.gif');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  createParticles();
  createStars();
  styleCanvas();
}

function createParticles() {
  for (let i = 0; i < horizontallyOrVertically() / random(4, 10); i++) {
    particles.push(new Particle());
  }
}

function createStars() {
  stars = [];
  for (let i = 0; i < horizontallyOrVertically(); i++) {
    stars.push(new Star());
  }
}

function styleCanvas() {
  textFont(tf);
  textAlign(CENTER, CENTER);
  textSize(ts);
  frameRate(fr);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  createStars();
}

function mouseClicked() {
  var d = dist(mouseX, mouseY,windowWidth/2, windowHeight/2);
  if (d < imageSize) {
    imageClicked = true
  }
}

function draw() {
  background(0);
  particles.forEach(p => p.createParticle(particles.slice(particles.indexOf(p))))
  stars.forEach(s => s.createStar())
  setupAvatarAnimation();
  if (imageClicked) {
    onImageClick();    
  }
  imageSize = horizontallyOrVertically()/divisionFactor;
  image(img, 0, 0, imageSize, imageSize);
  if (!imageClicked) {
    text(welcome.slice(0, slicer), 0, -imageSize/2-imageSize*.3);
  }
  if (frameCount % 5 === 0 && slicer <= welcome.length) {
    slicer++;
  }
}

function setupAvatarAnimation() {
  fill(255, 255, 255);
  translate(windowWidth / 2, windowHeight / 2);
  imageMode(CENTER);
}

function onImageClick() {
  if (divisionFactor - .2 < .1) {
    zoom = false;
  }
  else if (divisionFactor + .2 > 7 && !zoom) {
    rotationAngle = 0;
    divisionFactor = 7;
    zoom = true;
    imageClicked = false;
    return;
  }
  resizeImage();
  // Rotation with frameCount not optimal
  rotate(rotationAngle);
}

function resizeImage() {
  zoom ? zoomIn() : zoomOut()
}

function zoomIn() {
  rotationAngle++;
  divisionFactor -= .2;
}

function zoomOut() {
  rotationAngle--;
  divisionFactor += .2
}

function horizontallyOrVertically() {
  return windowWidth < windowHeight ? windowHeight : windowWidth;
}
