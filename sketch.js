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

  cubo3D(0,0,0,100)
}

function cubo3D(x,y,z,t){
  textureMode(NORMAL)
  translate(x,y,z)

  //base
  texture(foto)
  beginShape()
  vertex(-t,-t,-t,0,0)
  vertex(t,-t,-t,1,0)
  vertex(t,t,-t,1,1)
  vertex(-t,t,-t,0,1)
  vertex(-t,-t,-t,0,0)
  endShape()

  //cara arriba
  texture(foto)
    beginShape()
    vertex(-t,-t,t,0,0)
    vertex(t,-t,t,1,0)
    vertex(t,t,t,1,1)
    vertex(-t,t,t,0,1)
    vertex(-t,-t,t,0,0)
    endShape()

  //cara derecha
  texture(foto)
  beginShape()
  vertex(-t,-t,-t,0,0)
  vertex(t,-t,-t,1,0)
  vertex(t,-t,t,1,1)
  vertex(-t,-t,t,0,1)
  vertex(-t,-t,-t,0,0)
  endShape()


  pop()
}  