let diameterMultiplier = .99;
let diameterMultiplierSlider;

let xChange;
let xChangeSlider;  

let yChange = 0;
let yChangeSlider;

let startdiameter = 100;
let startdiameterSlider;

let minDiameter;
let minDiameterSlider;

function setup(){
    createCanvas(600, 500);
    initializeSliders();
}

function draw(){
    background(0);
    readAllSliderValues();
    stroke(255);
    noFill();
    drawCircle(width/2, height/2, startDiameter);
}

function drawCircle(x, y, diameter){
    ellipse(x, y, diameter);
    if(diameter > minDiameter)
        drawCircle(x+xChange, y+yChange, diameter * diameterMultiplier);     
}

function adjustMinDiameterSlider(){
    const ratio = minDiameter / Number(minDiameterSlider.elt.max);
    minDiameterSlider.elt.max = startDiameter;
    minDiameterSlider.value(startDiameter * ratio);
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
    startDiameterSlider = addSlider('Start diameter', 10, 300, 100, 0.01);
    minDiameterSlider = addSlider('Min diameter', 0.5, startdiameter, 1, 0.01);
    xChangeSlider = addSlider('X Change', -100, 100, 20, 0.01);
    yChangeSlider = addSlider('Y Change', -100, 100, 0, 0.01);
    diameterMultiplierSlider = addSlider('Diameter Multiplier', .2, .99, .7, 0.01 );
}

function readAllSliderValues(){
    startDiameter = startDiameterSlider.value();
    if(minDiameterSlider.elt.max != startDiameter)
        adjustMinDiameterSlider();
    
    minDiameter = minDiameterSlider.value();

    xChange = xChangeSlider.value();
    yChange = yChangeSlider.value();

    diameterMultiplier = diameterMultiplierSlider.value();
}

