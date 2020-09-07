var block_1 , block_2 ;

function setup() {
  createCanvas(800,400);
  block_1 = createSprite(400, 200, 50, 50);
  block_1.shapeColor = 'lightblue'

  block_2 = createSprite(500,200,25,50)
  block_2.shapeColor = 'lightblue'
}

function draw() {
  background(255,255,255);  
block_2.x = World.mouseX
block_2.y = World.mouseY

if (block_2.x - block_1.x < block_1.width/2 + block_2.width/2 
  && block_1.x - block_2.x < block_1.width/2 + block_2.width/2
  && block_1.y - block_2.y < block_1.width/2 + block_2.width/2
  && block_2.y - block_1.y < block_1.width/2 + block_2.width/2)
{
  block_1.shapeColor = 'red'
  block_2.shapeColor = 'red'
}
else {
  block_1.shapeColor = 'lightblue'
  block_2.shapeColor = 'lightblue'
}

  drawSprites();
}