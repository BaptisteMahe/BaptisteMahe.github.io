const flock = [];

const FLOCK_START_SIZE = 200;
const FLOCK_MAX_SIZE = 1000;

let alignSlider, cohesionSlider, separationSlider;

let quadtree;

function setup() {
    createCanvas(1000, 700);

    alignSlider = createSliderWithLabel("Alignment", 0, 5, 1.5, 0.1);
    cohesionSlider = createSliderWithLabel("Cohesion", 0, 5, 1.5, 0.1);
    separationSlider = createSliderWithLabel("Separation", 0, 5, 2.5, 0.1);

    for (let index = 0; index < FLOCK_START_SIZE; index++)
        flock.push(new Boid({ x: random(width), y: random(height) }));

}

function draw() {
    background(0);

    quadtree = new QuadTree(new Rectangle(width / 2, height / 2, width / 2, height / 2), 10);
    for (let boid of flock) quadtree.insert(new Point(boid.position.x, boid.position.y, boid));
    quadtree.show();

    for (let boid of flock) {
        boid.edges();
        boid.flock(quadtree);
        boid.update();
        boid.show();
    }

    if (mouseIsPressed && mouseX < width && mouseY < height) {
        flock.push(new Boid({ x: mouseX, y: mouseY }));
        if (flock.length > FLOCK_MAX_SIZE) flock.shift();
        // console.log("Size: " + flock.length, "Frame rate: " + frameRate());
    }
    console.log(frameRate());
}

function createSliderWithLabel(label, start, stop, init, step) {
    const labelDiv = createDiv(label);
    labelDiv.addClass("slider")
    const slider = createSlider(start, stop, init, step);
    slider.parent(labelDiv);
    return slider;
}
