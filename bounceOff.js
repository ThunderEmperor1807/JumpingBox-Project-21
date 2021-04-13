function bounce(a,b){
    if (a.x-b.x<=a.width/2+b.width/2&&
        b.x-a.x<=a.width/2+b.width/2&&
        a.y-b.y<=a.height/2+b.height/2&&
        b.y-a.y<=a.height/2+b.height/2){
         a.shapeColor=b.shapeColor
         a.velocityY*=-1
         return true
      }
    else{
       return false
    }
  }
 