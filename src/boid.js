class Boid {

    constructor(position) {
        this.position =  createVector(position.x, position.y);
        this.velocity = p5.Vector.random2D();
        this.velocity.setMag(random(2, 4));
        this.acceleration = createVector();

        this.alignRadius = 100;
        this.cohesionRadius = 50;
        this.separationRadius = 30;

        this.maxSpeed = 4;
        this.maxForce = 0.2;

        this.size = 15;
    }

    edges() {
        if (this.position.x > width) this.position.x = 0;
        else if (this.position.x < 0) this.position.x = width;

        if (this.position.y > height) this.position.y = 0;
        else if (this.position.y < 0) this.position.y = height;
    }

    align(quadtree) {
        let steering = createVector();
        let flockMates = quadtree.query(new Circle(this.position.x, this.position.y, this.alignRadius))
            .map(point => point.data);

        for (let other of flockMates) {
            if (other === this) continue;
            steering.add(other.velocity);
        }

        if (flockMates.length - 1 > 0) {
            steering.div(flockMates.length - 1);
            steering.setMag(this.maxSpeed);
            steering.sub(this.velocity);
            steering.limit(this.maxForce);
        }
        return steering;
    }

    cohesion(quadtree) {
        let steering = createVector();
        let flockMates = quadtree.query(new Circle(this.position.x, this.position.y, this.cohesionRadius))
            .map(point => point.data);

        for (let other of flockMates) {
            if (other === this) continue;
            steering.add(other.position);
        }

        if (flockMates.length - 1 > 0) {
            steering.div(flockMates.length - 1);
            steering.sub(this.position)
            steering.setMag(this.maxSpeed);
            steering.sub(this.velocity);
            steering.limit(this.maxForce);
        }
        return steering;
    }

    separation(quadtree) {
        let steering = createVector();
        let flockMates = quadtree.query(new Circle(this.position.x, this.position.y, this.separationRadius))
            .map(point => point.data);

        for (let other of flockMates) {
            if (other === this) continue;
            let distance = dist(this.position.x,
                this.position.y,
                other.position.x,
                other.position.y);
            let diff = p5.Vector.sub(this.position, other.position);
            diff.div(distance);
            steering.add(diff);
        }

        if (flockMates.length - 1 > 0) {
            steering.div(flockMates.length - 1);
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
