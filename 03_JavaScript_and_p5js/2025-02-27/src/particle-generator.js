class ParticleGenerator {
    #particles = [];

    constructor(x, y, particleTotal, energy, maxSize, color, type) {
        this.#buildParticles(x, y, particleTotal, energy, maxSize, color, type);
    }

    draw() {
        for (let p of this.#particles) {
            p.draw();
        }
    }

    #buildParticles(x, y, particleTotal, energy, maxSize, color, type) {
        if (type === 'polygon') {
            for (let i = 0; i < particleTotal; i++) {
                let p = new PolygonParticle(x, y, energy, maxSize, color);
                this.#particles.push(p);
            }
        } else {
            for (let i = 0; i < particleTotal; i++) {
                let p = new Particle(x, y, energy, maxSize, color);
                this.#particles.push(p);
            }
        }
    }
}
