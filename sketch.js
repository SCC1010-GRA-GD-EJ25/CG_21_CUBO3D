let foto

function preload() {
  // put preload code here

  foto = loadImage("./images/bobesponja.png")
}

function setup() {
  // put setup code here
  createCanvas(800,800, WEBGL)
}

function draw() {
  // put drawing code here
  background(255)
  rotateX(frameCount*0.01)

 piramide(150)
 fill(255,0,0,0)
 translate(300,0,0)
 piramide(60)
}

function piramide(t){
textureMode(NORMAL)
 
//base
  texture(foto)
  beginShape();
  vertex(-t,-t,-t,0,0);
  vertex(t,-t,-t,1,0);
  vertex(t,t,-t,1,1);
  vertex(-t,t,-t,0,1);
  vertex(-t,-t,-t,0,0);
  endShape()
  
  //cara 1
  texture(foto)
  beginShape()
  vertex(0,0,t,0.5,0)
  vertex(-t,-t,-t,0,1)
  vertex(t,-t,-t,1,1)
  vertex(0,0,t,0.5,0)
  endShape()

  //cara 2
  texture(foto)
  beginShape()
  vertex(0,0,t,0.5,0)
  vertex(t,-t,-t,1,1)
  vertex(t,t,-t,0,1)
  vertex(0,0,t,0.5,0)
  endShape()

  //cara 3
  texture(foto)
  beginShape()
  vertex(0,0,t,0.5,0)
  vertex(t,t,-t,1,1)
  vertex(-t,t,-t,0,1)
  vertex(0,0,t,0.5,0)
  endShape()

  //cara 4
  texture(foto)
  beginShape()
  vertex(0,0,t,0.5,0)
  vertex(-t,t,-t,1,1)
  vertex(-t,-t,-t,0,1)
  vertex(0,0,t,0.5,0)
  endShape()
}
