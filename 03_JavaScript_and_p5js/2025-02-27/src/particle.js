class Particle {
    static DAMPING;
    static FRICTION;

    #position;
    #speed;
    #gravity;
    #size;
    #color;

    constructor(x, y, energy, maxSize, c) {
        Particle.DAMPING = createVector(1.0, 0.9);
        Particle.FRICTION = 0.4;
        this.#gravity = createVector(0.0, 0.02);

        if (typeof x === 'number' && typeof y === "number") {
            this.#position = createVector(x, y);
        } else {
            this.#position = createVector(width / 2.0, height / 2.0);
        }

        if (c) {
            if (c instanceof p5.Color) {
                this.#color = c;
            } else {
                this.#color = color(255, 255, 0);
            }
        } else {
            this.#color = color(255, 255, 255);
        }

        if (!(typeof energy === 'number' && energy > 0)) {
            energy = 3;
            console.log('here');
        }

        let speedX = random(-energy, energy);
        let speedY = random(-energy, -0.01);
        this.#speed = createVector(speedX, speedY);
        this.#size = random(1, maxSize);
    }

    get color() {
        return this.#color;
    }

    get size() {
        return this.#size;
    }

    get radius() {
        return this.#size / 2.0;
    }

    get x() {
        return this.#position.x;
    }

    get y() {
        return this.#position.y;
    }

    draw() {
        this.render();
        this.#move();
        this.#applyForces();
        this.#bounce();
    }

    render() {
        fill(this.color);
        ellipse(this.x, this.y, this.size, this.size);
    }

    #move() {
        this.#position.add(this.#speed);
    }

    #applyForces() {
        this.#speed.add(this.#gravity);
    }

    #bounce() {
        let r = this.#size / 2.0;

        if (this.#position.x > (width - r) || (this.#position.x < r)) {
            this.#speed.x = -this.#speed.x;
            this.#speed.x *= Particle.FRICTION;
            this.#speed.y *= Particle.FRICTION;
        }

        if (this.#position.y > (height - r)) {
            this.#speed.y = -this.#speed.y;
            this.#speed.mult(Particle.DAMPING);
            this.#speed.y *= Particle.FRICTION;
            this.#speed.x *= Particle.FRICTION;
        } else if (this.#position.y < r) {
            this.#speed.y = -this.#speed.y;
        }

        this.#position.x = constrain(this.#position.x, r, (width - r));
        this.#position.y = constrain(this.#position.y, r, (height - r));
    }
}
