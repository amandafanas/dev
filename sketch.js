function setup() {
    createCanvas(400, 400);
    background(221,198,255);
  }
  
  function draw() {
    stroke("purple")
    fill("white");
    
  if(mouseIsPressed) {
    rect(mouseX, mouseY, 20, 20);
    }
  }