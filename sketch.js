
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const MouseConstraint=Matter.MouseConstraint;
const Constraint = Matter.Constraint;
const Mouse=Matter.Mouse;

function preload()
{
	
}

function setup() {
	canvas=createCanvas(1000,1000)
	engine = Engine.create();
	world = engine.world;

	let canvasmouse = Mouse.create(canvas.elt)
	canvasmouse.pixelRatio=pixelDensity();
	let options = {
		mouse:canvasmouse
	}
	mConstraint = MouseConstraint.create(engine,options);
	World.add(world,mConstraint)


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	Roof1 = new Roof(500,100,400,40)
bob1 = new Bobball(400,400,25)
	chain1 = new Chain(bob1.body,{x:400,y:100})
	bob2 = new Bobball(450,400,25)
chain2 = new Chain(bob2.body,{x:450,y:100})
	bob3 = new Bobball(500,400,25)
	chain3 = new Chain(bob3.body,{x:500,y:100})
	bob4 = new Bobball(550,400,25)
	chain4 = new Chain(bob4.body,{x:550,y:100})
	bob5 = new Bobball(600,400,25)
	chain5 = new Chain(bob5.body,{x:600,y:100})
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  Roof1.display();
  chain1.display();
  chain2.display();
  chain3.display();
  chain4.display();
  chain5.display();
  drawSprites();
 
}
function mouseDragged(){
	Matter.Body.setPosition(bob1.body,{x:mouseX,y:mouseY})
}



