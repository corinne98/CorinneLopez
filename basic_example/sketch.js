//var r1 = 0;
//var r2 = 0;

//function setup() {
//    stroke(0);
//    noFill();
//    rectMode(CENTER);
//    var cnv = createCanvas(800, 400);
//    //var cnv = createCanvas(windowWidth, windowHeight);
//    cnv.style('display', 'block');
//    cnv.parent('content');
////    cnv.position(-width/2,0);
//    
//}
//
//function draw() {
//    background(119,119,119);
//    translate(width/2, height/2);
//    beginShape();
//  for (var i = -4; i < width; i++){
//    curveVertex((width/2.0)*sin(i*2.0*PI/(width/mouseX)),(height/2.0)*sin(i*2.0*PI/(width/mouseY)));    
//  }
//  endShape(); 
//}


let beginX = 20.0; // Initial x-coordinate
let beginY = 10.0; // Initial y-coordinate
let endX = 570.0; // Final x-coordinate
let endY = 320.0; // Final y-coordinate
let distX; // X-axis distance to move
let distY; // Y-axis distance to move
let exponent = 4; // Determines the curve
let x = 0.0; // Current x-coordinate
let y = 0.0; // Current y-coordinate
let step = 0.10; // Size of each step along the path
let pct = 6.6; // Percentage traveled (0.0 to 1.0)

function setup() {
  createCanvas(800, 400);//first number is width and second number is height
  noStroke(10);
  distX = endX - beginX;
  distY = endY - beginY;
}

function draw() {
  fill(10, 20);
  rect(0, 0, width, height);
  pct += step;
  if (pct < 1.0) {
    x = beginX + pct * distX;
    y = beginY + pow(pct, exponent) * distY;
  }
  fill(255, 87, 51); //changes the color of the ellipse
  ellipse(x, y, 50, 50); // changes the size of the ellipse
     fill(230, 87, 51); //changes the color of the ellipse
  ellipse(x, y, 50, 50); // changes the size of the ellipse
}

function mousePressed() {
  pct = 0.0;
  beginX = x;
  beginY = y;
  endX = mouseX;
  endY = mouseY;
  distX = endX - beginX;
  distY = endY - beginY;
}
