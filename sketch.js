var box1, box2 ; 

function setup() {
  
  createCanvas(400,400);
  box1 = new Box();
  box2 = new Box();
  box2.setPosition(300,300);
}

function draw() 
{

  background(51);
  
  box1.display();
  box2.display();


  box1.setSpeed(2);
  box2.setSpeed(-2);
  


  box2.setWidth(100);



}

