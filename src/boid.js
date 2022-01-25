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

    align(quadtree) {
        let steering = createVector();
        let total = 0;
        let others = quadtree.query(new Circle(this.position.x, this.position.y, this.alignRadius))
            .map(point => point.data);
        for (let other of others) {
            let distance = dist(this.position.x,
                this.position.y,
                other.position.x,
                other.position.y);
            if (other !== this && distance < this.alignRadius) {
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

    cohesion(quadtree) {
        let steering = createVector();
        let total = 0;
        let others = quadtree.query(new Circle(this.position.x, this.position.y, this.cohesionRadius))
            .map(point => point.data);
        for (let other of others) {
            let distance = dist(this.position.x,
                this.position.y,
                other.position.x,
                other.position.y);
            if (other !== this && distance < this.cohesionRadius) {
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

    separation(quadtree) {
        let steering = createVector();
        let total = 0;
        let others = quadtree.query(new Circle(this.position.x, this.position.y, this.separationRadius))
            .map(point => point.data);
        for (let other of others) {
            let distance = dist(this.position.x,
                this.position.y,
                other.position.x,
                other.position.y);
            if (other !== this && distance < this.separationRadius) {
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

    flock(quadtree) {
        let alignment = this.align(quadtree);
        let cohesion = this.cohesion(quadtree);
        let separation = this.separation(quadtree);

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

    show(debug = false) {
        const forward = this.velocity.copy();
        forward.setMag(this.size);
        const left = p5.Vector.rotate(forward, 2 * PI / 3);
        left.setMag(this.size / 2);
        const right = p5.Vector.rotate(forward, - 2 * PI / 3);
        right.setMag(this.size / 2);

        strokeWeight(2);
        stroke(255);
        fill(150);
        triangle(this.position.x + forward.x,
            this.position.y + forward.y,
            this.position.x + left.x,
            this.position.y + left.y,
            this.position.x + right.x,
            this.position.y + right.y);

        if (debug) {
            strokeWeight(1);
            stroke(0, 0, 255);
            noFill();
            circle(this.position.x, this.position.y, this.alignRadius);
            stroke(0, 255, 0);
            circle(this.position.x, this.position.y, this.cohesionRadius);
            stroke(255, 0, 0);
            circle(this.position.x, this.position.y, this.separationRadius);
        }
    }
}
