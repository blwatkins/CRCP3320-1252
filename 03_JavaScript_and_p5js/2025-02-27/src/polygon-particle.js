class PolygonParticle extends Particle {
    #sides = 3;
    #initialTheta;

    constructor(x, y, energy, maxSize, c) {
        super(x, y, energy, maxSize, c);
        this.#sides = Math.floor(random(3, 15));
        this.#initialTheta = random(0, TWO_PI);
    }

    render() {
        fill(this.color);
        let theta = this.#initialTheta;

        push();
        translate(this.x, this.y);
        beginShape();
        for (let i = 0; i < this.#sides; i++) {
            let vx = this.radius * cos(theta);
            let vy = this.radius * sin(theta);
            vertex(vx, vy);
            theta += (TWO_PI / this.#sides)
        }

        endShape(CLOSE);
        pop();
    }
}
