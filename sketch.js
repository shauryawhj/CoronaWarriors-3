var bg;
var doctor
var doctorImage
var corona
var virusGroup
var virus1,virus2,virus3,virus4,virus5
var patient1,patient2,patient1Img,patient2Img;
function preload(){
bg=loadImage("Hospital cw.jpg");
doctorImage=loadImage("Doctor cw.png");
virus1=loadImage("coorona cw.png")
virus2=loadImage("corona1 cw.png")
virus3=loadImage("corona2 cw.png")
virus4=loadImage("corona3 cw.png")
virus5=loadImage("corona4 cw.png")
patient1Img=loadImage("patient 1 cw.png")
patient2Img=loadImage("patient 2 cw.png")
}
function spawnVirus(){
if(frameCount%60===0){
  var virus=createSprite(0,0,50,50)
  virus.velocityX=4;
  virus.y=Math.round(random(50,350))
  var r = Math.round(random(1,5));
  switch(r){
    case 1:virus.addImage(virus1);
    break;
    case 2:virus.addImage(virus2);
    break;
    case 3:virus.addImage(virus3);
    break;
    case 4:virus.addImage(virus4);
    break;
    case 5:virus.addImage(virus5);
    break;
    default:break;
    
    
  }
virus.scale=0.15;
virusGroup.add(virus);
}
}


function setup() {

  createCanvas(800,400);
  doctor=createSprite(450,200,50,50);
  doctor.addImage("doctor",doctorImage);
  doctor.scale=0.4;
  patient1=createSprite(700,250,50,50)
  patient2=createSprite(650,250,50,50)
  patient1.addImage("patient1",patient1Img)
  patient2.addImage("patient2",patient2Img)
  patient1.scale=0.4
  patient2.scale=0.5

  virusGroup=createGroup();
  //createSprite(400, 200, 50, 50);
}



function draw() {
  background(bg); 
  if(keyDown(UP_ARROW)){
doctor.y=doctor.y-5;
  }
  if(keyDown(DOWN_ARROW)){
    doctor.y=doctor.y+5;
      }
  spawnVirus() ;
  drawSprites();
}