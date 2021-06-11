class Box {
    constructor(){
        this.x = 50;
        this.y = 120;
        this.width = 40;
        this.h = 40;
    }
    display(){
        rect(this.x, this.y, this.width, this.h);
    }
    setWidth(w){
        this.width = w;
    }
    setPosition(x,y){
        this.x = x;
        this.y = y;
    }

    setSpeed(s){
        this.x += s;
    }
}