var firstName = "Xavi";
var stringvar = "String";
var intvar = 17;
var undefinedvar;
var nullvar = null; 

var ellipseX = 400;
var ellipseY = 400;

function setup() {
    var canvas = createCanvas(800, 800);
    canvas.parent("p5container");
    console.log(intvar);
}   background(220);

function draw() {
    

    fill(255, 255, 255);
    ellipse(mouseX, mouseY, 100);

    console.log(width, height);
}