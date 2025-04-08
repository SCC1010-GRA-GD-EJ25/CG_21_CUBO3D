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

function Cubo3D(x,y,z,t){
  push()
  translate(x,y,z)

  //base
  beginShape()
  vertex(-t,-t,-t)
  vertex(t,-t,-t)
  vertex(t,t,-t)
  vertex(-t,t,-t)
  endShape()


  pop()
}  