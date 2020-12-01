class paper {
    constructor(){
        var options = {
            isStatic: false,
            restitution: 0.3,
            friction: 0.5,
            density: 1.2
        }

        this.paperBall = Bodies.circle(100,200,25,options)
        World.add(world,this.paperBall);
    }

    display(){
        var angle = this.paperBall.angle;
        push();
        rotate(angle);
        translate(this.paperBall.position.x,this.paperBall.position.y);
        fill("turquoise");
        ellipseMode(RADIUS);
        ellipse(0,0,50/2);
        pop();
    }
}