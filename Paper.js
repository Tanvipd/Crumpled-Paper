class Paper {
    constructor(x,y){
        var options = {
        'density':1.5,
        'friction': 1.0,
        'restitution':0.5
        };
        this.body = Bodies.rectangle(x, y, 50, 50, options);
        this.width = 50;
        this.height = 50;
        this.image=loadImage("paper.png")
        World.add(world,this.body);
    }
    display(){
     this.body.position.x = mouseX;
     this.body.position.y = mouseY;

     var angle = this.body.angle;
      push();
      translate(this.body.position.x, this.body.position.y);
      imageMode(CENTER);
      image(this.image,0,0,this.width,this.height)
      pop();
    }
}