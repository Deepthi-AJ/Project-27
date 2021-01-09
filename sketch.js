const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob1, bob2, bob3, bob4, bob5, bob6;
var rope1, rope2, rope3, rope4, rope5, rope6;

function preload(){
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bob1 = new Bob(250,500,50);	
	bob2 = new Bob(300,500,50);
	bob3 = new Bob(350,500,50);
	bob4 = new Bob(400,500,50);
	bob5 = new Bob(450,500,50);
	bob6 = new Bob(500,500,50);

	roof = new Roof(400,200,400,20);

	rope1 = new Rope(bob1.body, roof.body,2, 0);
	rope2 = new Rope(bob2.body, roof.body,2, 0);
	rope3 = new Rope(bob3.body, roof.body,2, 0);
	rope4 = new Rope(bob4.body, roof.body,2, 0);
	rope5 = new Rope(bob5.body, roof.body,2, 0);
	rope6 = new Rope(bob6.body, roof.body,2, 0);

	Engine.run(engine);
  
}


function draw() {
  //rectMode(CENTER);
  background(225);
  
  ellipseMode(CENTER);
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  bob6.display();

  rectMode(CENTER);
  roof.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  rope6.display();
  //drawSprites();
 
}