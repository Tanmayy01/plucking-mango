
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
const Render = Matter.Render;
var stone
var boy
var chain
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10,mango11,mango12;
function preload()
{
	boy =loadImage("Plucking mangoes/boy.png")
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	tree=new Tree(1000,0)

	stone =new Stone(235,420,30)
	chain=new Chain(stone.body,{x:235,y:420})

	mango1=new Mango(1100,100,30);
    mango2=new Mango(1170,130,30);
	mango3=new Mango(1010,140,30);
	mango4=new Mango(1000,70,30);
	mango5=new Mango(1100,70,30);
	mango6=new Mango(1000,230,30);
	mango7=new Mango(900,230,40);
	mango8=new Mango(1140,150,40);
	mango9=new Mango(1100,230,40);
	mango10=new Mango(1200,200,40);
	mango11=new Mango(1120,50,40);
	mango12=new Mango(900,160,40);

	var render = Render.create({
		element: document.body,
		engine: engine,
		options: {
		  width: 1300,
		  height: 600,
		  wireframes: false
		}
	  });


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightpink");

  textSize(25);
  text("Press Space to get a second Chance to Play!!",50 ,50);

  tree.display()
  stone.display()
  chain.display()

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();
  mango12.display();
 image(boy,200,340,200,300)

 detectollision(stone,mango1);
 detectollision(stone,mango2);
 detectollision(stone,mango3);
 detectollision(stone,mango4);
 detectollision(stone,mango5);
 detectollision(stone,mango6);
 detectollision(stone,mango7);
 detectollision(stone,mango8);
 detectollision(stone,mango9);
 detectollision(stone,mango10);
 detectollision(stone,mango11);
 detectollision(stone,mango12);
}

function mouseDragged(){
	Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
chain.fly()
}

function detectollision(lstone,lmango){

  mangoBodyPosition=lmango.body.position
  stoneBodyPosition=lstone.body.position
  
  var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
  
  	if(distance<=lmango.r+lstone.r)
    {
   
  	  Matter.Body.setStatic(lmango.body,false);
    }

  }

  function keyPressed(){
	  if (keyCode === 32){
		Matter.Body.setPosition(stone.body,{x:235,y:420})
		chain.attach(stone.body)
	  }
  }