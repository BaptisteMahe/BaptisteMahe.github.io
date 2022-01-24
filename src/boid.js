class Boid {

    static MAX_SPEED = 4;
    static MAX_ACC = 0.2;

    constructor() {
        this.position =  createVector(random(width), random(height));
        this.velocity = p5.Vector.random2D();
        this.velocity.setMag(random(2, 4));
        this.acceleration = createVector();
    }

    edges() {
        if (this.position.x > width)
            this.position.x = 0;
        else if (this.position.x < 0)
            this.position.x = width;

        if (this.position.y > height)
            this.position.y = 0;
        else if (this.position.y < 0)
            this.position.y = height;
    }

    align(boids) {
        const perceptionRadius = 150;
        let steering = createVector();
        let total = 0;
        for (let other of boids) {
            let distance = dist(this.position.x,
                this.position.y,
                other.position.x,
                other.position.y);
            if (other !== this && distance < perceptionRadius) {
                steering.add(other.velocity);
                total++;
            }
        }
        if (total > 0) {
            steering.div(total);
            steering.setMag(Boid.MAX_SPEED);
            steering.sub(this.velocity);
            steering.limit(Boid.MAX_ACC);
        }
        return steering;
    }

    cohesion(boids) {
        const perceptionRadius = 100;
        let steering = createVector();
        let total = 0;
        for (let other of boids) {
            let distance = dist(this.position.x,
                this.position.y,
                other.position.x,
                other.position.y);
            if (other !== this && distance < perceptionRadius) {
                steering.add(other.position);
                total++;
            }
        }
        if (total > 0) {
            steering.div(total);
            steering.sub(this.position)
            steering.setMag(Boid.MAX_SPEED);
            steering.sub(this.velocity);
            steering.limit(Boid.MAX_ACC);
        }
        return steering;
    }

    separation(boids) {
        const perceptionRadius = 20;
        let steering = createVector();
        let total = 0;
        for (let other of boids) {
            let distance = dist(this.position.x,
                this.position.y,
                other.position.x,
                other.position.y);
            if (other !== this && distance < perceptionRadius) {
                let diff = p5.Vector.sub(this.position, other.position);
                diff.div(distance);
                steering.add(diff);
                total++;
            }
        }
        if (total > 0) {
            steering.div(total);
            steering.setMag(Boid.MAX_SPEED);
            steering.sub(this.velocity);
            steering.limit(Boid.MAX_ACC);
        }
        return steering;
    }

    flock(boids) {
        let alignment = this.align(boids);
        let cohesion = this.cohesion(boids);
        let separation = this.separation(boids);
        this.acceleration.add(alignment);
        this.acceleration.add(cohesion);
        this.acceleration.add(separation);
    }

    update() {
        this.position.add(this.velocity);
        this.velocity.add(this.acceleration);
        this.velocity.limit(Boid.MAX_SPEED);
        this.acceleration.mult(0);
    }

    show() {
        strokeWeight(8);
        stroke(255);
        point(this.position.x, this.position.y);
    }

}
