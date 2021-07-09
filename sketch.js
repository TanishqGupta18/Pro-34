const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, box3,box4;
var hero,monster,rope,ground;

function preload() {
  bg = loadImage("gamingbackground2.png");
}

function setup() {
  createCanvas(1000, 500);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(200, 490, 1200, 20);

  hero = new Hero(400,400,100);
  rope = new Rope(hero.body, { x: 500, y: 50 });
  monster = new Monster(610,-300,80);

  box1 = new Box(540, 100, 50, 70);
  box2 = new Box(590, 100, 50, 70);
  box3 = new Box(640, 100, 50, 70);
  box4 = new Box(690, 100, 50, 70);
  box5 = new Box(490,100,50,70);
  box6 = new Box(740,100,50,70);
  box7 = new Box(540, 30, 50, 70);
  box8 = new Box(590, 30, 50, 70);
  box9 = new Box(640, 30, 50, 70);
  box10 = new Box(690, 30, 50, 70);
  box11= new Box(590,-100,50,70);
  box12 = new Box(640,-100,50,70);

}

function draw() {
  background(bg);
  Engine.update(engine);
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display()
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();

  hero.display();
  rope.display();
  monster.display();

}
function mouseDragged(){
	Matter.Body.setPosition(hero.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
	attach.fly();
}

