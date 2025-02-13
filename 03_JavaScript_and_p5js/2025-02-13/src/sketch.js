// Confetti sketch

// class definitions

class Particle {
    static GRAVITY = 0.1;
    
    #x;
    #y;
    #speedX;
    #speedY;
    #size;

    constructor(x, y) {
        if (typeof x === 'number' && typeof y === "number") {
            this.#x = x;
            this.#y = y;
            console.log('x and y are both numbers');
        } else {
            this.#x = width / 2.0;
            this.#y = height / 2.0;
            console.warn('x and y are not both numbers');
        }

        this.name = 'particle';
        this.#speedX = random(-3, 3);
        this.#speedY = -4;
        this.#size = random(10, 50);
    }
}

// variable in JavaScript
// var, let, const
// var & let -> variables
// const -> constants

let x;
let y;

let dx;
let dy;

let s;

let g;
let damping = 0.9;
let friction = 0.9;

let particle;

function setup() {
    createCanvas(500, 500);
    x = width / 2.0;
    y = height / 2.0;
    s = random(10, 50);
    dx = random(-5, 5);
    dy = random(-5, 5);
    g = 0.1;

    particle = new Particle('star', random(100, height - 100));
}

function draw() {
    background(0);
    ellipse(x, y, s, s);

    x += dx;
    y += dy;

    dy += g;

    let r = s / 2.0;
    if (x >= (width - r)) {
        dx = -dx;
        // dx = (-friction) * dx;
    } else if (x <= r) {
        dx = -dx;
        // dx = (-friction) * dx;
    }

    if (y >= (height - r)) {
        dy = (-0.9) * dy;
        dx = friction * dx;
    } else if (y <= r) {
        dy = -dy;
    }

    x = constrain(x, 0, width);
    y = constrain(y, 0, height);
}
