const rockArray = [];
class Rock {
    constructor(pos, rotating, falling, trembling, actionspeed){
        this.pos = pos
        this.rotating = rotating;
        this.falling = falling;
        this.trembling = trembling;
        this.actionspeed = actionspeed;
    }

    rotate(){

    }

    fall(){

    }

    tremble(){

    }

}

rockTest = New Rock(New Vector(5, 10), false, false, false, 5);


function draw(){
    background(0);
    push();
    Array.foreach((element) => console.log(this.pos));


    pop();
}






function setup(){
    createCanvas(800, 800);
    imageMode(CENTER);
    textAlign(CENTER, CENTER);
}