// this class describes the properties of a single particle.
class Particle {
    // setting the co-ordinates, radius and the
    // speed of a particle in both the co-ordinates axes.
    constructor() {
        this.joins = 0;
        this.x = random(0, windowWidth);
        this.y = random(0, windowHeight);
        this.r = random(1, 8);
        this.xSpeed = random(-2, 2);
        this.ySpeed = random(-1, 1.5);
    }

    // creation of a particle.
    createParticle(particles) {
        this.joinParticles();
        this.moveParticle();
        noStroke();
        this.joins = this.joins * 25 >= 100 ? 1 : this.joins * 25 / 100;
        //console.log(this.joins);
        var color = 'rgba(173, 199, 252,' + this.joins + ')';
        fill(color);
        circle(this.x, this.y, this.r);
    }

    // setting the particle in motion.
    moveParticle() {
        if (this.x < 0 || this.x > width)
            this.xSpeed *= -1;
        if (this.y < 0 || this.y > height)
            this.ySpeed *= -1;
        this.x += this.xSpeed;
        this.y += this.ySpeed;
    }

    // this function creates the connections(lines)
    // between particles which are less than a certain distance apart
    joinParticles() {
        this.joins = 0;
        particles.forEach(element => {
            let dis = dist(this.x, this.y, element.x, element.y);
            if (dis < 85) {
                this.joins++;
                stroke('rgba(255,255,255,0.1)');
                line(this.x, this.y, element.x, element.y);
            }
        });
    }

    intersects(otherObject) {
        if(this.r + otherObject.r < dist(this.x, this.y, otherObject.x, otherObject.y)) {
            return false;
        }
        return true;
    }
}