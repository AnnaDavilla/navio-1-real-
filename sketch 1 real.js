var sea ,sea_background
var ship, ship_img2

function preload(){

  sea_background= loadAnimation("sea.png")
  ship_img2 = loadAnimation("ship-1.png")

}

function setup(){
  createCanvas(900,400);
  
  sea = createSprite(50,50,900,60)
  ship = createSprite (800,300,50,60)

  sea.addAnimation("background", sea_background);
  ship.addAnimation("img2",ship_img2)
  
  ship.scale=0.2

  

}

function draw() {
  background("blue");
    drawSprites();

    ship.x = mouseX
    ship.y = mouseY

}
