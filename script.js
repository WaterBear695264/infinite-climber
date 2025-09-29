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

    positive(){
        return this.x > 0 && this.y > 0
    }

    inSquare(pos, dimensions){
        if(this.pos.subtract(pos).positive() && this.pos.subtract(pos).x < dimensions.x && this.pos.subtract(pos).y < dimensions.y){
            return true
        }
    }

}

class Player{
    constructor(pos, dimensions, onHold, onGround, speed){
        this.pos = pos;
        this.dimensions = dimensions;
        this.onHold = onHold;
        this.onGround = onGround;
        this.fallingTimer = 0;
        this.speed = speed;
        this.alive = true;
        this.gripstrength = 100;
        this.lastHold;
    }

    move(direction){
        this.pos.x += this.speed;
    }

    handHoldUnder(array){
        for(let i = 0; i < array.length; i++){
            if(Math.abs(array[i].pos.subtract(this.pos).x) < maxXDistFall && Math.abs(array[i].pos.subtract(this.pos).y) < maxYFallDist){
                return true;
            }
        }
        return false;
    }

    dead(array, limit){
        if(!this.handHoldUnder(array) && this.fallingTimer > limit){
            this.alive = false;
        }
    }

    detectHandHold(array){

        for(let i = 0; i < array.length; i++){
            let cond1 = array[i].pos.inSquare(this.pos, this.dimensions) && !this.onHold;
            let cond2 = array[i].id !== this.lastHold || screenSpeed < 0;
                if(cond1 && cond2){
                    this.lastHold = i;
                    this.onHold = true
                }
        }
    }

    update(){
        
    }

}

let screenSpeed = 0;
let gravity = 0;
let maxYFallDist = 0;
let maxXDistFall = 0;




function setup(){
    createCanvas(800, 800);
    imageMode(CENTER);
    textAlign(CENTER, CENTER);
}

function draw(){
    background(0);
    push();



    pop();
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    
  } else if (keyCode === RIGHT_ARROW) {
    value = 0;
  }
  // Uncomment to prevent any default behavior.
  // return false;
}
