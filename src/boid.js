class Boid {

    constructor(position) {
        this.position =  createVector(position.x, position.y);
        this.velocity = p5.Vector.random2D();
        this.velocity.setMag(random(2, 4));
        this.acceleration = createVector();
        this.maxSpeed = 4;
        this.maxForce = 0.2;
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
            steering.setMag(this.maxSpeed);
            steering.sub(this.velocity);
            steering.limit(this.maxForce);
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
            steering.setMag(this.maxSpeed);
            steering.sub(this.velocity);
            steering.limit(this.maxForce);
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
            steering.setMag(this.maxSpeed);
            steering.sub(this.velocity);
            steering.limit(this.maxForce);
        }
        return steering;
    }

    flock(boids) {
        let alignment = this.align(boids);
        let cohesion = this.cohesion(boids);
        let separation = this.separation(boids);

        alignment.mult(alignSlider.value());
        cohesion.mult(cohesionSlider.value());
        separation.mult(separationSlider.value());

        this.acceleration.add(alignment);
        this.acceleration.add(cohesion);
        this.acceleration.add(separation);
    }

    update() {
        this.position.add(this.velocity);
        this.velocity.add(this.acceleration);
        this.velocity.limit(this.maxSpeed);
        this.acceleration.mult(0);
    }

    show() {
        strokeWeight(8);
        stroke(255);
        fill(200);

        const forward = this.velocity.copy();
        forward.setMag(1);
        const left = p5.Vector.rotate(forward, 2 * PI / 3);
        left.setMag(0.5);
        const right = p5.Vector.rotate(forward, - 2 * PI / 3);
        right.setMag(0.5);
        triangle(this.position.x + forward.x,
            this.position.y + forward.y,
            this.position.x + left.x,
            this.position.y + left.y,
            this.position.x + right.x,
            this.position.y + right.y);
    }
}
