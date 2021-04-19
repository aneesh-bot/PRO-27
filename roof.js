class Roof{
    constructor(x,y,width,height){
      var opt = {
       isStatic: true
     }
     this.body = Bodies.rectangle(x,y,width,height,opt);
     this.width = width;
     this.height =height;

     World.add(world,this.body);
    }
  display(){
      var pos = this.body.position;
      rectMode(CENTER);
      strokeWeight(3);
      stroke("gray");
      fill("gray");
      rect(pos.x,pos.y,this.width,this.height);
  }
}