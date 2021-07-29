
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	ground = new Ground(width/2, 670, width, 20);
	left = new Ground(700, 600, 20, 120);
	right = new Ground(750, 600, 20, 120);


	engine = Engine.create();
	world = engine.world;

	var ball_options = {
		isStatic: false,
		restitution: 0.3,
		friction: 0,
		density: 1.2

	}

	//Create the Bodies Here.
	Matter.Bodies.circle(100,10,25,ball_options);
	World.add(world,ball)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ground.show();
  left.show();
  right.show();

  if(keyDown("up")){
	  Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0.05})
  }
  
  drawSprites();
 
}



