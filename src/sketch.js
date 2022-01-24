const flock = [];
const FLOCK_START_SIZE = 50;
const FLOCK_MAX_SIZE = 150;

let alignSlider, cohesionSlider, separationSlider;

function setup() {
    createCanvas(800, 560);

    alignSlider = createSlider(0, 5, 1, 0.1);
    cohesionSlider = createSlider(0, 5, 1, 0.1);
    separationSlider = createSlider(0, 5, 1, 0.1);

    for (let index = 0; index < FLOCK_START_SIZE; index++)
        flock.push(new Boid({ x: random(width), y: random(height) }));
}

function draw() {
    background(51);

    flock.forEach(boid => {
        boid.edges();
        boid.flock(flock);
        boid.update();
        boid.show();
    });

    if (mouseIsPressed && mouseX < width && mouseY < height) {
        flock.push(new Boid({ x: mouseX, y: mouseY }));
        if (flock.length > FLOCK_MAX_SIZE) flock.shift();
    }
}
