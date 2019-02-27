let rSlider, gSlider, bSlider;

function setup(){
    var cnv = createCanvas(710,400);
    textSize(15);
    noStroke();
    
  rSlider = createSlider(0, 255, 100);
  rSlider.position(20, 20);
  gSlider = createSlider(0, 255, 0);
  gSlider.position(20, 50);
  bSlider = createSlider(0, 255, 255);
  bSlider.position(20, 80);
    
    

}

function draw(){
  const r = rSlider.value();
  const g = gSlider.value();
  const b = bSlider.value();
  background(r, g, b);
  text('red', rSlider.x * 2 + rSlider.width, 35);
  text('green', gSlider.x * 2 + gSlider.width, 65);
  text('blue', bSlider.x * 2 + bSlider.width, 95);

    translate(width/2, height/2);
    
    //hair
    push();
    fill(82,52,5);
    ellipse(0,0,120,190);
    pop();
//    neck
    fill(245,222,179)
    rect(-10,69,20,20);
    ellipse(0,90,10,10);
    stroke(82,52,5);
    
    //head
    fill(245,222,179);
    ellipse(0,0,100,140);
   
//   left eyebrow
    push();
    fill(82,52,5);
   rect(-40,-25,37,2);
   pop(); 
//    right eyebrow
     push();
    fill(82,52,5);
   rect(40,-25,-37,2);
   pop(); 
    //    glasses
    push();
    stroke(0,0,0);
    ellipse(-20,-10,30,30);
    ellipse(20,-10,-30,30);
    pop();
    push();
    fill(0,0,0);
    rect(-6,-10,11,2);
    
    pop();
    //eyes
    fill(253,253,253,253,);
    ellipse(-20,-10,20,10);
    //eyes
    fill(253,253,253,253);
    ellipse(20,-10,-20,-10);
    
    //pupils_left
    fill(139,69,19);
    ellipse(map(mouseX,0, width, -23,-17), -10, 8, 8);
    //ellipse(-20,-10,8,8);
    
    
    //pupils_right
    fill(139,69,19);
     ellipse(map(mouseX,0, width,17,23), -10, 8, 8);
    //ellipse(20,-10,-8,-8);
    
    //mouth
    fill(255);
    ellipse(0,39,18,10);
    
    
    //hat
   push();
    fill(255,165,0);
    ellipse(-1,-70,100,80);
    stroke(255,127,80);
    pop();
    push();
    fill(220,220,220)
    rect(-15,-80,30,15);
     rect(-60,-60,120,30);
    pop();
    
    //nose
    fill(222,184,135);
//    ellipse(0,90,10,10);
    ellipse(0,18,10,10);
    

        
}