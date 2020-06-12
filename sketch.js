// an array to add multiple particles
let particles = [];
let stars = [];
let fc;
const welcome = 'Welcome, enter my brain...';
let slicer = 0;
let imageSize;
let imageClicked = false;
let divisionFactor = 7;
let zoom = true;

function preload() {
  img = loadImage('frame-1.gif');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  createParticles();
  createStars();
  styleCanvas();
}

function styleCanvas() {
  textFont('Impact');
  textAlign(CENTER, CENTER);
  textSize(34);
  frameRate(60);
}

function createParticles() {
  for (let i = 0; i < horizontallyOrVertically() / random(4, 10); i++) {
    particles.push(new Particle());
  }
}

function createStars() {
  for (let i = 0; i < horizontallyOrVertically(); i++) {
    stars.push(new Star());
  }
}

function windowResized() {
  stars = [];
  createStars();
  resizeCanvas(windowWidth, windowHeight);
}

function mouseClicked() {
  var d = dist(mouseX, mouseY,windowWidth/2, windowHeight/2);
  if (d < imageSize) {
    imageClicked = true
  }
}

function keyPressed() {
  if (key === 'F12') {
    //window.location.href = 'https://www.google.ch'
  }
}

function draw() {
  setupShowParticles();
  showParticles();
  stars.forEach(s => s.createStar())
  setupAvatarAnimation();
  if (imageClicked) {
    onImageClick();    
  }
  imageSize = horizontallyOrVertically()/divisionFactor;
  image(img, 0, 0, imageSize, imageSize);
  if (!imageClicked) {
    text(welcome.slice(0, slicer), 0, -imageSize/2-imageSize*.1);
  }
  if (frameCount % 5 === 0 && slicer <= welcome.length) {
    slicer++;
  }
}

function onImageClick() {
  if (divisionFactor - .2 < .1) {
    zoom = false;
  }
  else if (divisionFactor + .2 > 7 && !zoom) {
    rotate(0);
    divisionFactor = 7;
    zoom = true;
    imageClicked = false;
  }
  resizeImage();
  rotate(frameCount);
}

function resizeImage() {
  zoom ? divisionFactor -=.2 : divisionFactor += .2
}

function setupAvatarAnimation() {
  fill(255, 255, 255);
  translate(windowWidth / 2, windowHeight / 2);
  imageMode(CENTER);
}

function setupShowParticles() {
  imageMode(CORNER);
  background(0);
}

function showParticles() {
  for (let i = 0; i < particles.length; i++) {
    particles[i].joinParticles(particles.slice(i));
    particles[i].moveParticle();
    particles[i].createParticle();
  }
}

function horizontallyOrVertically() {
  return windowWidth < windowHeight ? windowHeight : windowWidth;
}
