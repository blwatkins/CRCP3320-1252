// Confetti sketch

class Particle {
    static DAMPING;
    static FRICTION;

    #position;
    #speed;
    #gravity;
    #size;

    constructor(x, y) {
        Particle.DAMPING = createVector(1.0, 0.9);
        Particle.FRICTION = 0.4;
        this.#gravity = createVector(0.0, 0.02);

        if (typeof x === 'number' && typeof y === "number") {
            this.#position = createVector(x, y);
            console.log('x and y are both numbers');
        } else {
            this.#position = createVector(width / 2.0, height / 2.0);
            console.warn('x and y are not both numbers');
        }

        let speedX = random(-3, 3);
        let speedY = random(-5, -0.01);
        this.#speed = createVector(speedX, speedY);
        this.#size = random(10, 50);
    }

    draw() {
        this.#render();
        this.#move();
        this.#applyForces();
        this.#bounce();
    }

    #render() {
        ellipse(this.#position.x, this.#position.y, this.#size, this.#size);
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

let particle;
let particles = [];
let particleTotal = 100;

function setup() {
    createCanvas(500, 500);
    particle = new Particle(random(100, width - 100), random(100, height - 100));

    for (let i = 0; i < particleTotal; i++) {
        let p = new Particle(random(100, width - 100), random(100, height - 100));
        particles.push(p);
    }

    particles.push(14);
    particles.push(false);
    particles.push("happy");
}

function draw() {
    background(0);
    
    // for (let i = 0; i < particleTotal; i++) {
    //     particles[i].draw();
    // }

    // for (let p of particles) {
    //     p.draw();
    // }

    // particles.forEach(drawParticle);

    particles.forEach((particle) => {
        if (particle instanceof Particle) {
            particle.draw();
        }
    });
}

function drawParticle(particle) {
    particle.draw();
}
