var fighter, asteroid, bg;
var fighterImg;
var obstacleGrp;
var lives = 3

function preload() {
  bg = loadImage("Images/gamingbackground1.jpg")
  fighterImg = loadImage("Images/fighter.gif")
  alienImg = loadImage("Images/alien.png")
  ast1Img = loadImage("Images/asteroid1.gif")
  ast2Img = loadImage("Images/asteroid2.gif")
  earthImg = loadImage("Images/earth.gif")
  spaceshipImg = loadImage("Images/Spaceship.png")
  lifeImg = loadImage("Images/life.png")
}
function setup() {
  createCanvas(800, 800);

  fighter = createSprite(400, 750);
  fighter.addImage(fighterImg);
  fighter.setCollider("circle", 0, 0, 70)
  life1 = createSprite(50, 50, 50, 50)
  life1.addImage(lifeImg);
  life1.scale = 0.2
  life2 = createSprite(100, 50, 50, 50)
  life2.addImage(lifeImg);
  life2.scale = 0.2
  life3 = createSprite(150, 50, 50, 50)
  life3.addImage(lifeImg);
  life3.scale = 0.2

  obstacleGrp = new Group()
  

}

function draw() {
  background(bg);
  //arrow keys
  if (keyDown("RIGHT_ARROW")) {
    fighter.x = fighter.x + 7
  }
  if (keyDown("LEFT_ARROW")) {
    fighter.x = fighter.x - 7
  }
  //life deduction
  for (var i = 0; i < obstacleGrp.length; i++) {
    if (obstacleGrp.get(i).isTouching(fighter)) {
      lives = lives - 1
      obstacleGrp.get(i).destroy();
    }
  }
  if (lives === 2) {
    life3.visible = false
  }
  if (lives === 1) {
    life2.visible = false
  }
  if (lives === 0) {
    life1.visible = false
  }

  Spawnobstacle();
  console.log(frameCount)
  drawSprites();
}
function Spawnobstacle() {

  if (frameCount % 100 === 0) {

    obstacle = createSprite(Math.round(random(100, 700)), 0, 20, 20)
    obstacle.velocityY = 4
    var ran = Math.round(random(1, 4))

    switch (ran) {
      case 1: obstacle.addImage(alienImg)
        break;

      case 2: obstacle.addImage(ast1Img)
        break;


      case 3: obstacle.addImage(ast2Img)
        break;

      case 4: obstacle.addImage(spaceshipImg)
        break;

      default: break;
    }
    obstacle.scale = 0.5
    obstacle.lifetime = 220
    obstacleGrp.add(obstacle)
    obstacle.debug = true
  }


}