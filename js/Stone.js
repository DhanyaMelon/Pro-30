class Stone
{
  constructor(x, y, w,h) 
  {
    let options = {
     restitution:0.8
    };
    
    this.body = Bodies.rectangle(x, y,w,h,options);
    //this.color= color;
    this.w = w;
    this.h = h;
    this.image= loadImage("../assets/stone.png");
    World.add(world, this.body);
  }

  show() {
    let pos = this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x,pos.y);
    imageMode(CENTER);
    //strokeWeight(1);
    //fill(148,127,146);
    image(this.image,0,0,this.w, this.h);
    pop();
  }
}
