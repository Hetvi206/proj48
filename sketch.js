
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint= Matter.Constraint;

var engine, world;
var stiker;
var score=0;


function preload(){

	backgroundimg = loadImage("images/carromb.png");
}
function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    textSize(50);
    fill("0");
    text(score,400,150);

//coin red
cr1= new coinr(200,200,20,20);

//coin white
cw1= new coinw(220,200,20,20);
cw2= new coinw(180,200,20,20);
cw3= new coinw(200,180,20,20);
cw4= new coinw(200,220,20,20);
cw5= new coinw(240,220,20,20);
cw6= new coinw(240,180,20,20);
cw7= new coinw(160,180,20,20);
cw8= new coinw(160,220,20,20);
cw9= new coinw(220,240,20,20);
cw10= new coinw(180,240,20,20);
cw11= new coinw(180,160,20,20);
cw12= new coinw(220,160,20,20);

//coin black
cb1= new coinb(220,180,20,20);
cb2= new coinb(220,220,20,20);
cb3= new coinb(180,180,20,20);
cb4= new coinb(180,220,20,20);


cb5= new coinb(240,160,20,20);
cb6= new coinb(160,160,20,20);
cb7= new coinb(200,160,20,20);
cb8= new coinb(160,200,20,20);
cb9= new coinb(240,200,20,20);
cb10= new coinb(160,240,20,20);
cb11= new coinb(200,240,20,20);
cb12= new coinb(240,240,20,20);

//goals
g1= new goal(30,370,25,25);
g2= new goal(370,370,25,25);
g3= new goal(30,30,25,25);
g4= new goal(370,30,25,25);

//stiker
stiker = new Stiker(200,325,17,17);

//bounce
lower = new border(200,390,400,10);
uper = new border(200,10,400,10);
right = new border(10,200,10,400);
left = new border(390,200,10,400);

//launcher
launcher=new Launcher({x:200,y:315},stiker.body);



// trying everything

/* if(stiker.isTouching(coinw)){
    coinw.Static=false
} else{
   coinw.Static=false
}


if(keyPressed("R")){
  coins and stiker orignal positions
}

if(coimw.isTouching(g1)){
    coinw=invisible;
    score=score+1;
    stikerx=200;
    stikery=325;

}*/






}

function mouseDragged(){

Matter.Body.setPosition(stiker.body,{x: mouseX, y: mouseY});

}

function mouseReleased(){

    launcher.fly();

}

function isTouching(){

    if (launcher.isTouching(cw1)||launcher.isTouching(g1)){
        console.log(123);
                }
                
}

function draw(){
    background(backgroundimg);
    Engine.update(engine);
    rectMode(CENTER);

lower.display();
uper.display();
right.display();
left.display();
g1.display();
g2.display();
g3.display();
g4.display();
cr1.display();
cw1.display();
cw2.display();
cw3.display();
cw4.display();
cb1.display();
cb2.display();
cb3.display();
cb4.display();
cw5.display();
cw6.display();
cw7.display();
cw8.display();
cw9.display();
cw10.display();
cw11.display();
cw12.display();
cb5.display();
cb6.display();
cb7.display();
cb8.display();
cb9.display();
cb10.display();
cb11.display();
cb12.display();
launcher.display();
stiker.display();

//move the stiker left to right

if(keyDown(RIGHT_ARROW) && launcher.pointA.x<300){
    launcher.pointA.x=launcher.pointA.x+3;
  }
  
if(keyDown(LEFT_ARROW) && launcher.pointA.x>100){
    launcher.pointA.x=launcher.pointA.x-3;
  }


findcollision(stiker.body,cb1.body);
findcollision(stiker.body,cb2.body);
findcollision(stiker.body,cb3.body);
findcollision(stiker.body,cb4.body);
findcollision(stiker.body,cb5.body);
findcollision(stiker.body,cb6.body);
findcollision(stiker.body,cb7.body);
findcollision(stiker.body,cb8.body);
findcollision(stiker.body,cb9.body);
findcollision(stiker.body,cb10.body);
findcollision(stiker.body,cb11.body);
findcollision(stiker.body,cb12.body);
findcollision(stiker.body,cw1.body);
findcollision(stiker.body,cw2.body);
findcollision(stiker.body,cw3.body);
findcollision(stiker.body,cw4.body);
findcollision(stiker.body,cw5.body);
findcollision(stiker.body,cw6.body);
findcollision(stiker.body,cw7.body);
findcollision(stiker.body,cw8.body);
findcollision(stiker.body,cw9.body);
findcollision(stiker.body,cw10.body);
findcollision(stiker.body,cw11.body);
findcollision(stiker.body,cw12.body);
findcollision(stiker.body,cr1.body);
}

function findcollision(body1,body2){

    var distance=dist(body1.position.x,body1.position.y,body2.position.x,body2.position.y);

    if(distance<18){
       /* Matter.Body.applyForce(body2,{x:0,y:0},{X:0.1,y:-0.1});
        console.log(body2);*/

        Matter.Body.setStatic(body2,false);
        Matter.Body.setVelocity(body2,{x:0,y:-10});
    }  
    
    setTimeout(()=>{
            Matter.Body.setStatic(body2,true);
            },3000)    
    
}

function keyPressed() {
    if (keyCode === 32) {

        Matter.Body.setPosition(stiker.body,{x:200,y:315});
     launcher.attach(stiker.body);


    }
  }



