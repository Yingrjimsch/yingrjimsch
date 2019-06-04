//Yingrjimsch

//Sprites from
//https://opengameart.org/users/bevouliincom

let allAnimations = [];
let animatedImages = [];

function preload() {
	let animation = [];
	
	animation.push(loadImage('assets/js/birdyjs/1/frame-1.png'));
	animation.push(loadImage('assets/js/birdyjs/1/frame-2.png'));

	allAnimations.push(animation);
	animation = [];

	animation.push(loadImage('assets/js/birdyjs/2/frame-1.png'));
	animation.push(loadImage('assets/js/birdyjs/2/frame-2.png'));
	animation.push(loadImage('assets/js/birdyjs/2/frame-3.png'));
	animation.push(loadImage('assets/js/birdyjs/2/frame-4.png'));

	allAnimations.push(animation);
	animation = [];

	animation.push(loadImage('assets/js/birdyjs/3/frame-1.png'));
	animation.push(loadImage('assets/js/birdyjs/3/frame-2.png'));
	animation.push(loadImage('assets/js/birdyjs/3/frame-3.png'));
	animation.push(loadImage('assets/js/birdyjs/3/frame-4.png'));

	allAnimations.push(animation);
	animation = [];

	animation.push(loadImage('assets/js/birdyjs/4/frame-1.png'));
	animation.push(loadImage('assets/js/birdyjs/4/frame-2.png'));
	animation.push(loadImage('assets/js/birdyjs/4/frame-3.png'));
	animation.push(loadImage('assets/js/birdyjs/4/frame-4.png'));
	animation.push(loadImage('assets/js/birdyjs/4/frame-5.png'));
	animation.push(loadImage('assets/js/birdyjs/4/frame-6.png'));

	allAnimations.push(animation);
	animation = [];

	animation.push(loadImage('assets/js/birdyjs/5/frame-1.png'));
	animation.push(loadImage('assets/js/birdyjs/5/frame-2.png'));

	allAnimations.push(animation);
	animation = [];

	animation.push(loadImage('assets/js/birdyjs/6/frame-1.png'));
	animation.push(loadImage('assets/js/birdyjs/6/frame-2.png'));

	allAnimations.push(animation);
	animation = [];

	animation.push(loadImage('assets/js/birdyjs/7/frame-1.png'));
	animation.push(loadImage('assets/js/birdyjs/7/frame-2.png'));
	animation.push(loadImage('assets/js/birdyjs/7/frame-3.png'));
	animation.push(loadImage('assets/js/birdyjs/7/frame-4.png'));
	animation.push(loadImage('assets/js/birdyjs/7/frame-5.png'));
	animation.push(loadImage('assets/js/birdyjs/7/frame-6.png'));
	animation.push(loadImage('assets/js/birdyjs/7/frame-7.png'));
	animation.push(loadImage('assets/js/birdyjs/7/frame-8.png'));

	allAnimations.push(animation);
	animation = [];

	animation.push(loadImage('assets/js/birdyjs/8/frame-1.png'));
	animation.push(loadImage('assets/js/birdyjs/8/frame-2.png'));
	animation.push(loadImage('assets/js/birdyjs/8/frame-3.png'));
	animation.push(loadImage('assets/js/birdyjs/8/frame-4.png'));
	animation.push(loadImage('assets/js/birdyjs/8/frame-5.png'));
	animation.push(loadImage('assets/js/birdyjs/8/frame-6.png'));
	animation.push(loadImage('assets/js/birdyjs/8/frame-7.png'));
	animation.push(loadImage('assets/js/birdyjs/8/frame-8.png'));

	allAnimations.push(animation);
	animation = [];

	animation.push(loadImage('assets/js/birdyjs/9/frame-1.png'));
	animation.push(loadImage('assets/js/birdyjs/9/frame-2.png'));
	
	allAnimations.push(animation);
}

function windowResized(){
	resizeCanvas(windowWidth, windowHeight);
}

function setup() {
	angleMode(DEGREES);
	imageMode(CENTER);
}

function keyPressed() {
	if (keyCode === ENTER) {
		for (let animatedImage of animatedImages){
			animatedImage.checkRotationStatus();
		}
	}
}

function draw() {
	canvas = createCanvas(windowWidth, windowHeight);
	canvas.position(0,0);
	while(animatedImages.length < 25) {
		const animation = allAnimations[round(random(0, allAnimations.length -1))];
		animatedImages.push(new Sprite(animation));
	}

	for (let animatedImage of animatedImages) {
		push();
		if (animatedImage.rotationComplete) {
			animatedImage.rotationAngle = 0;
			animatedImage.animate(removeSprite);
		}
		else {
			animatedImage.rotateSprite();
		}
		animatedImage.show();
		pop();
	}
	function removeSprite(sprite) {
		animatedImages.splice(animatedImages.indexOf(sprite),1);
	}
}

