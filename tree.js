class Tree{
  constructor(x,y){
    var options={
        isStatic:true
    }
    this.x=x
    this.y=y
    this.width=700;
    this.height=600;
    this.thickness=10;
    this.image=loadImage("Plucking mangoes/tree.png");
    this.body=Bodies.rectangle(this.x,this.width,this.height,options);
    World.add(world,this.body)
  }  

  display(){
    var pos =this.body.position;
    push()
    translate (pos.x,pos.y);
    fill(255);
    imageMode(CENTER);
    image(this.image,this.x,this.height/2,this.width,this.height);
    pop ();
  }
}