/*
This example uses the "superformula" to 
both draw and animate shapes.
https://en.wikipedia.org/wiki/Superformula
*/

let m1Slider;
let m1 = 23;

let m2Slider;
let m2 = 23;

let n1Slider;
let n1 = 1;

let n2Slider;
let n2;

let n3Slider;
let n3;

let red;
let redSlider;

let green;
let greenSlider;

let blue;
let blueSlider;

function setup(){
    createCanvas(360,240);
    noFill();
    stroke(red,green,blue);
    strokeWeight(1);

    initializeSliders();
}
   
const scale = 100;
const thetaDelta = 0.01;
let t = 0;
let tDelta = 0.01; 
   
function draw(){
    background(0);

    readAllSliderValues();

    translate(width / 2, height / 2);
    fill(red,green,blue);
    beginShape();
    
    for(theta = 0.0; theta < 2.0*PI; theta+=thetaDelta){
        radius = r(
        theta,
        1, //a
        1, //b
        m1, 
        m2, 
        n1, 
        n2 * sin(t),
        n3 * cos(t)
        );
        //Changing the polar coordinates to cartesian coordinates 
        const x = radius * cos(theta) * scale;
        const y = radius * sin(theta) * scale;
        vertex(x,y);
    }
    endShape();
    t+= tDelta;
}
   
//The superformula
function r( theta,  a,  b,  m1, m2,  n1,  n2,  n3){
    return Math.pow(Math.pow(Math.abs(cos(m1 * theta / 4.0) / a),n2) 
        + Math.pow(Math.abs(Math.sin(m2 * theta / 4.0) / b),n3),-1.0 / n1); 
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
    m1Slider = addSlider('m1', 0.01, 1000, 1, 0.01);
    m2Slider = addSlider('m2', 0.01, 1000, 1, 0.01);
    n1Slider = addSlider('n1', 0.01, 1000, 1, 0.01);
    n2Slider = addSlider('n2', 0.01, 1000, 1, 0.01);
    n3Slider = addSlider('n3', 0.01, 1000, 1, 0.01);
    redSlider = addSlider('red', 0, 255, 255, 1);
    greenSlider = addSlider('green', 0, 255, 255, 1);
    blueSlider = addSlider('blue', 0, 255, 255, 1);
}

function readAllSliderValues(){
    m1 = m1Slider.value();
    m2 = m2Slider.value();
    n1 = n1Slider.value();
    n2 = n2Slider.value();
    n3 = n3Slider.value();

    red = redSlider.value();
    green = greenSlider.value();
    blue = blueSlider.value();
}