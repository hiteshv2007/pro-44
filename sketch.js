function setup() {
  createCanvas(800,400);
  earth = createSprite(50,250,20,20)
  earth.addImage(earthimg)
  earth.scale=0.7

  sun = createSprite(300,-10,20,20)
  sun.addImage(sunimg)
  sun.scale=0.8
}

function draw() {
  background(255,255,255);  
  drawSprites();
}

function preload (){
earthimg = loadImage("earth.jpg")
sunimg = loadImage("sun and.jpg")

}