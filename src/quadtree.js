class Point {
    constructor(x, y, data) {
        this.x = x;
        this.y = y;
        this.data = data;
    }
}

class Rectangle {
    constructor(x, y, w, h) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
    }

    contains(point) {
        return point.x >= this.x - this.w
            && point.x <= this.x + this.w
            && point.y >= this.y - this.h
            && point.y <= this.y + this.h;
    }

    intersects(range) {
        return !(range.x - range.w > this.x + this.w
            || range.x + range.w < this.x - this.w
            || range.y - range.h > this.y + this.h
            || range.y + range.h < this.y - this.h);
    }
}

class Circle {
    constructor(x, y, r) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.rSquared = this.r * this.r;
    }

    contains(point) {
        let d = Math.pow(point.x - this.x, 2) + Math.pow(point.y - this.y, 2);
        return d <= this.rSquared;
    }

    intersects(range) {
        let xDist = Math.abs(range.x - this.x);
        let yDist = Math.abs(range.y - this.y);

        let edges = Math.pow(xDist - range.w, 2) + Math.pow(yDist - h, 2);

        // no intersection
        if (xDist > this.r + range.w || yDist > this.r + range.h) return false;
        // intersection within the circle
        if (xDist <= range.w || yDist <= range.h) return true;
        // intersection on the edge of the circle
        return edges <= this.rSquared;
    }
}

class QuadTree {
    constructor(boundary, capacity) {
        this.boundary = boundary;
        this.capacity = capacity;
        this.points = [];
        this.divided = false;
    }

    subdivide() {
        let nw = new Rectangle(this.boundary.x - this.boundary.w / 2,
            this.boundary.y + this.boundary.h / 2,
            this.boundary.w / 2, this.boundary.h /2);
        this.northwest = new QuadTree(nw, this.capacity);

        let ne = new Rectangle(this.boundary.x + this.boundary.w / 2,
            this.boundary.y + this.boundary.h / 2,
            this.boundary.w / 2, this.boundary.h /2);
        this.northeast = new QuadTree(ne, this.capacity);

        let sw = new Rectangle(this.boundary.x - this.boundary.w / 2,
            this.boundary.y - this.boundary.h / 2,
            this.boundary.w / 2, this.boundary.h /2);
        this.southwest = new QuadTree(sw, this.capacity);

        let se = new Rectangle(this.boundary.x + this.boundary.w / 2,
            this.boundary.y - this.boundary.h / 2,
            this.boundary.w / 2, this.boundary.h /2);
        this.southeast = new QuadTree(se, this.capacity);

        this.divided = true;
    }

    insert(point) {
        if (!this.boundary.contains(point)) return false;

        if (this.points.length < this.capacity) {
            this.points.push(point);
            return true;
        } else {
            if (!this.divided) this.subdivide();

            if (this.northwest.insert(point)) return true;
            else if (this.northeast.insert(point)) return true;
            else if (this.southwest.insert(point)) return true;
            else if (this.southeast.insert(point)) return true;
        }
    }

    query(range, found) {
        if (!found) found = [];
        if (!this.boundary.intersects(range)) return;
        else {
            for (let p of this.points) {
                if (range.contains(p)) {
                    found.push(p);
                }
            }
            if (this.divided) {
                this.northwest.query(range, found);
                this.northeast.query(range, found);
                this.southwest.query(range, found);
                this.southeast.query(range, found);
            }
        }
        return found;
    }

    show() {
        stroke(255);
        noFill();
        strokeWeight(1);
        rectMode(CENTER);
        rect(this.boundary.x, this.boundary.y, this.boundary.w * 2, this.boundary.h * 2);
        if (this.divided) {
            this.northwest.show();
            this.northeast.show();
            this.southwest.show();
            this.southeast.show();
        }
    }
}
