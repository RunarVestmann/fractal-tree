let angleSlider;
let angle;

let minBranchLengthSlider;
let minBranchLength;

let startingBranchLengthSlider;
let startingBranchLength;

let branchLengthMultiplierSlider;
let branchLengthMultiplier;

function setup(){
    createCanvas(600, 500);
    initializeSliders();
}

function draw(){
    background(0);
    readAllSliderValues();
    drawTree();
}

function drawTree(){
    translate(width/2, height);
    stroke(255);
    branch(startingBranchLength);
}

function branch(length){
    line(0, 0, 0, -length);
    translate(0, -length);
    if(length > minBranchLength){
        const newLength = length * branchLengthMultiplier;

        push();
        rotate(angle);
        branch(newLength);
        pop();

        push();
        rotate(-angle);
        branch(newLength);
        pop();
    }
}

function addSlider(text, min, max, start, step=1){
    addParagraph(text);
    return createSlider(min, max, start, step);
}

function addParagraph(text){
    const paragraph = document.createElement('p');
    paragraph.innerText = text;
    document.body.appendChild(paragraph);
    return paragraph;
}

function initializeSliders(){
    angleSlider = addSlider('Angle', 0, PI, PI/5, 0.1);
    startingBranchLengthSlider = addSlider('Starting Branch Length', 6, 120, 100, 0.01);
    minBranchLengthSlider = addSlider('Minimum Branch Length', 4, startingBranchLength, startingBranchLength/2, 0.1);
    branchLengthMultiplierSlider = addSlider('Branch Length Multiplier', 0.2, 0.75, 0.67, 0.01);
}

function readAllSliderValues(){
    angle = angleSlider.value();
    startingBranchLength = startingBranchLengthSlider.value();
    minBranchLength = minBranchLengthSlider.value();
    branchLengthMultiplier = branchLengthMultiplierSlider.value();
}