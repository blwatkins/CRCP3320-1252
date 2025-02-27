// Confetti sketch

let generators = [];

function setup() {
    const c = createCanvas(500, 500);
    
    try {
        c.parent('main-content');
    } catch (error) {
        console.warn(error);
    }
    
    let x = 250;
    let y = 100;
    let pointTotal = 20;
    let energy = 5;
    let maxSize = 20;
}

function draw() {
    background(0);

    for (let g of generators) {
        g.draw();
    }
}

function mousePressed() {
    let pointTotal = Math.floor(random(5, 50));
    let energy = random(1, 10);
    let maxSize = random(10, 25);
    let type;
    if (mouseX < (width / 2.0)) {
        type = 'particle';
    } else {
        type = 'polygon';
    }

    let generator = new ParticleGenerator(
        mouseX,
        mouseY,
        pointTotal,
        energy,
        maxSize,
        getRandomColor(),
        type
    );
    generators.push(generator);
}

function drawParticle(particle) {
    particle.draw();
}

function getRandomColor() {
    let r = Math.floor(random(255));
    let g = Math.floor(random(255));
    let b = Math.floor(random(255));
    return color(r, g, b);
}
