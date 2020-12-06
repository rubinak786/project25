class Dustbin {
  constructor(x, y, width, height) {
    var options = {
       isStatic:true
    }
   this.image = loadImage("dustbingreen.png");

    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
   image(this.image,700,375,200,200)
    //var angle = this.body.angle;
    push ();
    translate(pos.x,pos.y);
   // rotate(angle)
    stroke("Deepskyblue")
    fill("Deepskyblue")
    rectMode(CENTER);
    rect(0,0, this.width, this.height);
    pop ();
  
  }
};