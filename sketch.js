const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground, paper;
var dustbin, launcher;



function setup() {
	var canvas = createCanvas(1200,400);
	engine = Engine.create();
	world = engine.world;

	ground = new Ground(600,height,1200,20);
  paper = new Paper(600,300,45);
	
  dustbin = new Dustbin(750,325,130,130);
   
  launcher = new Launcher(paper.body,{x:100, y:100});

	Engine.run(engine);
}


function draw() {
  background("white");
  Engine.update(engine);
  strokeWeight(3);

  ground.display();
  paper.display();

  dustbin.display();
  launcher.display();
}

function mouseDragged(){
  Matter.Body.setPosition(paper.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
  launcher.fly();
}
