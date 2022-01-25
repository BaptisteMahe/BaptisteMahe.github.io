class Boid {

    constructor(position) {
        this.position =  createVector(position.x, position.y);
        this.velocity = p5.Vector.random2D();
        this.velocity.setMag(random(2, 4));
        this.acceleration = createVector();

        this.alignRadius = 150;
        this.cohesionRadius = 100;
        this.separationRadius = 50

        this.maxSpeed = 4;
        this.maxForce = 0.2;

        this.size = 15;
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
        let steering = createVector();
        let flockMates = [];
        for (let other of boids) {
            let distance = dist(this.position.x,
                this.position.y,
                other.position.x,
                other.position.y);
            if (other !== this && distance < this.alignRadius) {
                steering.add(other.velocity);
                flockMates.push(other);
            }
        }
        if (flockMates.length > 0) {
            steering.div(flockMates.length);
            steering.setMag(this.maxSpeed);
            steering.sub(this.velocity);
            steering.limit(this.maxForce);
        }
        return { steering, flockMates };
    }

    cohesion(boids) {
        let steering = createVector();
        let flockMates = [];
        for (let other of boids) {
            let distance = dist(this.position.x,
                this.position.y,
                other.position.x,
                other.position.y);
            if (other !== this && distance < this.cohesionRadius) {
                steering.add(other.position);
                flockMates.push(other);
            }
        }
        if (flockMates.length > 0) {
            steering.div(flockMates.length);
            steering.sub(this.position)
            steering.setMag(this.maxSpeed);
            steering.sub(this.velocity);
            steering.limit(this.maxForce);
        }
        return { steering, flockMates };
    }

    separation(boids) {
        let steering = createVector();
        let flockMates = [];
        for (let other of boids) {
            let distance = dist(this.position.x,
                this.position.y,
                other.position.x,
                other.position.y);
            if (other !== this && distance < this.separationRadius) {
                let diff = p5.Vector.sub(this.position, other.position);
                diff.div(distance);
                steering.add(diff);
                flockMates.push(other);
            }
        }
        if (flockMates.length > 0) {
            steering.div(flockMates.length);
            steering.setMag(this.maxSpeed);
            steering.sub(this.velocity);
            steering.limit(this.maxForce);
        }
        return { steering, flockMates };
    }

    flock(boids) {
        let alignment = this.align(boids);
        let cohesion = this.cohesion(alignment.flockMates);
        let separation = this.separation(cohesion.flockMates);

        alignment.steering.mult(alignSlider.value());
        cohesion.steering.mult(cohesionSlider.value());
        separation.steering.mult(separationSlider.value());

        this.acceleration.add(alignment.steering);
        this.acceleration.add(cohesion.steering);
        this.acceleration.add(separation.steering);
    }

    update() {
        this.position.add(this.velocity);
        this.velocity.add(this.acceleration);
        this.velocity.limit(this.maxSpeed);
        this.acceleration.mult(0);
    }

    show() {
        strokeWeight(2);
        stroke(255);
        fill(150);

        const forward = this.velocity.copy();
        forward.setMag(this.size);
        const left = p5.Vector.rotate(forward, 2 * PI / 3);
        left.setMag(this.size / 2);
        const right = p5.Vector.rotate(forward, - 2 * PI / 3);
        right.setMag(this.size / 2);
        triangle(this.position.x + forward.x,
            this.position.y + forward.y,
            this.position.x + left.x,
            this.position.y + left.y,
            this.position.x + right.x,
            this.position.y + right.y);
    }
}
