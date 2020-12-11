const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine, World;
var box1, box2, box3;
var paper;


function preload()
{
	
}

function setup() {
	createCanvas(1200, 7400);

paper= new paper(200, 400, 10,10);	
box1= new Box(300,590,20,100);
box1.shapeColor=color(255,0,0);

box2=new Box(410,630,200,20);
box2.shapeColor=color(255,0,0);

box3= new Box(520,590,20,100);
box3.shapeColor=color(255,0,0);
ground= new ground(600,height,1200,20);
	engine = Engine.create();
	world = engine.world;

  //Create the Bodies Here.
  
  var ground_options={
    isStatic: true
  }

  ground = Bodies.rectangle(200,390,200,20,ground_options);
  World.add(world,ground);

var paperBody_options= {
  restitution: 1.0
  }
  paperBody=Bodies.circle(width/2, 200, 5, {isStatic: true})
World.add(world,paperBody);

console.log(ground);
  
   Engine.run(engine);
  }


function draw() {
  rectMode(CENTER);
  background(0);

 Engine.update(engine);
  console.log(paper.body.position.x);
  console.log(paper.body.position.y);
  console.log(paper.body.angle);
  paper.display();
  box1.display();
  box2.display();
  box3.display();
  drawSprites();
}

function keyPressed(){
  if(keyCode === UP_ARROW){

    Matter.Body.applyForce(paperBody.body, paperBody.body.position,{x:85, y:-85});
  }
}


