var pad1,pad2,pad3,pad4
var box
var wall1,wall2,wall3,wall4
var m1,m2,m3,m4
var music1

function preload(){
    music1=loadSound("music.mp3")
}

function setup(){
    createCanvas(1000,800)

    pad1=createSprite(150,750,200,40)
    pad1.shapeColor="cyan"
    pad2=createSprite(383,750,200,40)
    pad2.shapeColor="magenta"
    pad3=createSprite(616,750,200,40)
    pad3.shapeColor="red"
    pad4=createSprite(850,750,200,40)
    pad4.shapeColor="yellow"

    m1=createSprite(0,400,2,800)
    m2=createSprite(500,800,1000,2)
    m3=createSprite(1000,400,2,800)
    m4=createSprite(500,0,1000,2)

    rand=Math.round(random(20,780))
    box=createSprite(rand,50,50,50)
    box.shapeColor="white"
    box.velocityX=7
    box.velocityY=7
}
function draw(){
    background(0)
    
    m1.shapeColor=box.shapeColor
    m2.shapeColor=box.shapeColor
    m3.shapeColor=box.shapeColor
    m4.shapeColor=box.shapeColor

   if(bounce(box,pad1)){
        music1.play()
   }

    bounce(box,pad2)


    if(bounce(box,pad3)){
        box.velocityX*=0
        box.velocityY*=0
        music1.stop()
    }
    
    bounce(box,pad4)

    if(bounce(box,m1)){
        box.velocityX*=-1
        box.velocityY*=-1
    }
    (bounce(box,m2))
        
    
    if(bounce(box,m3)){
        box.velocityX*=-1
        box.velocityY*=-1

    }
    (bounce(box,m4))
        
    
   

    drawSprites()
    
}