
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var dustbin,paper,ground;

function setup() {
	createCanvas(1000,800);
	
	engine = Engine.create();
	world = engine.world;
	
  
	dustbin = new Dustbin(780,680);
	paper = new Paper(200,650,70);
	ground=new Ground(width/2,790,width,20);

	Engine.run(engine);
}


function draw() {
  background(230);
  paper.display();
	dustbin.display();
	ground.display();
	
	
}

function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(paper.body,paper.body.position,{x:105,y:-110});

  
	}
}


