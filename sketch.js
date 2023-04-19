var towerImg, tower;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var ghost, ghostImg;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play"
var score = 0;

function preload() {
  towerImg = loadImage("tower.png");
  doorImg = loadImage("door.png");
  climberImg = loadImage("climber.png");
  ghostImg = loadImage("ghost-standing.png");
  spookySound = loadSound("spooky.wav");
}

function setup() {
  createCanvas(600, 600);
  tower = createSprite(300, 300);
  tower.addImage("tower", towerImg);
  tower.velocityY = 1;

  ghost = createSprite(290, 400)
  ghost.addImage("ghost", ghostImg)
  ghost.scale = 0.4
  
  climbersGroup = new Group()

}

function draw() {
  background(200);

  if (tower.y > 400) {
    tower.y = 300
  }
  if (keyDown("SPACE")) {

    gameState = "PLAY"
    ghost.velocityY = -10
  }
  if (gameState == "PLAY") {
    ghost.velocityY = ghost.velocityY + 0.3
    //console.log("foobar")


    if (keyDown("UP_ARROW")) {
      ghost.y = ghost.y - 10
    }
    if (keyDown("LEFT_ARROW")) {
      ghost.x = ghost.x - 3
    }
    if (keyDown("RIGHT_ARROW")) {
      ghost.x = ghost.x + 3
    }

    ghost.collide(climbersGroup)

    score = score + 1;
    
    console.log(score)
    spawnObstacles();
  }
  drawSprites();
  text("score:"+score, 100, 50);
}

function spawnObstacles() {

  if (frameCount % 120 == 0) {
    climber = createSprite(200, 1)
    climber.x = random(200, 400)
    climber.velocityY = 2
    climber.addImage("climber", climberImg)
    climbersGroup.add(climber)
    
  }

}

