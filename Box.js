class Box {
  constructor(x, y, width, height) {
    var options = {
        'setStatic':false,
        'restitution':0.8,
        'friction':1.0,
        'density':1.0
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    push();
    rectMode(CENTER);
    strokeWeight(.5);
    stroke("Yellow");
    fill("Red");
    rect(pos.x, pos.y, this.width, this.height);
    pop();
  }
};
