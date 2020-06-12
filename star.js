// this class describes the properties of a single particle.
class Star {
    // setting the co-ordinates, radius and the
    // speed of a particle in both the co-ordinates axes.
    constructor() {
        this.x = random(0, windowWidth);
        this.y = random(0, windowHeight);
        this.r = random(1, 3);
        this.c = random();
    }

    // creation of a particle.
    createStar() {
        if (frameCount % round(random(5, 10)) === 0) {
            this.c = random()
        }
        noStroke();
        var color = 'rgba(255, 255, 255,' + this.c + ')';
        fill(color);
        circle(this.x, this.y, this.r);
    }
}