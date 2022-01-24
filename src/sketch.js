const flock = [];
const FLOCK_SIZE = 100

function setup() {
    createCanvas(640, 360);

    for (let index = 0; index < FLOCK_SIZE; index++)
        flock.push(new Boid());
}

function draw() {
    background(51);

    flock.forEach(boid => {
        boid.edges();
        boid.flock(flock);
        boid.update();
        boid.show();
    });
}
