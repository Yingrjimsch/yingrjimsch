//Yingrjimsch

class Sprite {
    constructor(animation) {
      this.animation = animation;
      this.numberOfSprites = this.animation.length;
      this.size = round(random(windowWidth*windowHeight/20000,windowWidth*windowHeight/5000));
      this.animationWidth = animation[0].width / (animation[0].width / this.size);
      this.animationHeight = animation[0].height / (animation[0].height / this.size); 
      this.speed = this.size / windowWidth;
      this.spriteIndex = 0;
      this.xPosition = 0;
      this.yPosition = round(random(0, windowHeight - this.size));
      this.rotationAngle = 0;
      this.rotationComplete = true;
    }
    show() {
      let spriteIndex = floor(this.spriteIndex) % this.numberOfSprites;
      let i = this.animation[spriteIndex];
      image(i, 0, 0, this.animationWidth, this.animationHeight);
    }
  
    animate(removeSprite) {
      this.spriteIndex += this.speed;
      this.xPosition += this.speed * 15;
      if (floor(this.spriteIndex) % this.numberOfSprites < this.numberOfSprites/2) {
        this.yPosition += this.speed * 20;
      }
      else {
        this.yPosition -= this.speed * 20;
      }
      if (this.xPosition > windowWidth) {
        removeSprite(this);
      }
      translate(this.xPosition, this.yPosition)
    }

    rotateSprite() {
      translate(this.xPosition , this.yPosition);
      rotate(this.rotationAngle);
      this.rotationAngle += 5;
      this.checkRotationStatus();
    }

    checkRotationStatus() {
      this.rotationComplete = this.rotationAngle == 360;
    }
  }
  