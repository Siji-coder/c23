class Box
{
    constructor(x,y,width,height)
    {
        var option={
            restitution:1.0,
            friction:1.0,
            density:1.0
        };
        this.body=Bodies.rectangle(x,y,width,height,option);
        this.width=width;
        this.height=height;
        World.add(myworld,this.body);
    }
display()
{var pos=this.body.position;
    var angle=this.body.angle;
    push();
    translate(pos.x,pos.y);
    rotate(angle);
    stroke("red");
    rectMode(CENTER);
    rect(0,0,this.width,this.height);
    pop();
}
};