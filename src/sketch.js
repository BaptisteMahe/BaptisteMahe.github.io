const flock = [];
const FLOCK_START_SIZE = 200;
const FLOCK_MAX_SIZE = 100;

let alignSlider, cohesionSlider, separationSlider;

function setup() {
    createCanvas(800, 560);

    alignSlider = createSliderWithLabel("Alignment", 0, 5, 1, 0.1);
    cohesionSlider = createSliderWithLabel("Cohesion", 0, 5, 1, 0.1);
    separationSlider = createSliderWithLabel("Separation", 0, 5, 1, 0.1);

    for (let index = 0; index < FLOCK_START_SIZE; index++)
        flock.push(new Boid({ x: random(width), y: random(height) }));
}

function draw() {
    background(0);

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

function createSliderWithLabel(label, start, stop, init, step) {
    const labelDiv = createDiv(label);
    labelDiv.addClass("slider")
    const slider = createSlider(start, stop, init, step);
    slider.parent(labelDiv);
    return slider;
}
