const rockArray = [];
const numRocks = 3;
const canvasX = 1000;
const canvasY = 1000;

class Rock {
    constructor(pos/*(center)*/, rotating, falling, trembling, actionspeed, id){
        this.pos = pos
        this.rotating = rotating;
        this.falling = falling;
        this.trembling = trembling;
        this.actionspeed = actionspeed;
        this.id = id;
    }

    rotate(degrees, direction){
        if(direction === "clockwise"){

        }else{

        }
    }

    fall(){

    }

    tremble(){

    }

}

class Vector{
    constructor(x, y){
        this.x = x;
        this.y = y;
    }

    distance(vec){
        return Math.sqrt(((vec.x-this.x)**2) + ((vec.y - this.y)**2))
    }

    add(vec){
        return new Vector(this.x + vec.x, this.y + vec.y)
    }

    subtract(vec){
        return new Vector(this.x - vec.x, this.y - vec.y)
    }

    normalize(){
        let magnitude = Math.hypot(this.x, this.y);
        return new Vector(this.x/magnitude, this.y/magnitude);
    }

    scale(m){
        return new Vector(this.x*m, this.y*m);
    }

}

class Player{
    constructor(pos, onHold, onGround, speed){
        this.pos = pos;
        this.onHold = onHold;
        this.onGround = onGround;
        this.fallingTimer = 0;
        this.speed = speed;
    }

    move(directions){
        this.pos.x += speed;
    }

    handHoldUnder(array){
        for(let i = 0; i < array.length; i++){
            if(Math.abs(array[i].pos.subtract(this.pos).x) < maxXDistFall && Math.abs(array[i].pos.subtract(this.pos).y) < maxYFallDist){
                return true;
            }
        }
        return false;
    }
}

let screenSpeed = 0;
let gravity = 0;

function setup(){
    createCanvas(canvasX, canvasY);
    imageMode(CENTER);
    textAlign(CENTER, CENTER);
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    
  } else if (keyCode === RIGHT_ARROW) {
    value = 0;
  }
  // Uncomment to prevent any default behavior.
  // return false;
}

//let rockTest = new Rock(new Vector(5, 10), false, false, false, 5);
//let rockTest1 = new Rock(new Vector(10, 20), false, false, false, 5);
//rockArray.push(rockTest.pos, rockTest1.pos);

for(let i = 0; i < numRocks; i++){
    var tempRock = new Rock(new Vector(Math.floor(Math.random() * canvasX), Math.floor(Math.random() * canvasY)));
    rockArray.push(tempRock);
}

function draw(){
    background(0);
    push();
    //rockArray.forEach()
    console.log(rockArray);


    pop();
}


