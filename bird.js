class Bird{

    constructor(x,y,width,speed){
        this.x = x;
        this.y = y;
        this.width = width;
        this.speed = speed;
        this.PJ = (random(1)>.8);
        if(this.PJ){
            this.speed=this.speed*2;
        }
        this.mycolor = random(["#ff0000","#0000ff","#00ff00"])
    }
    show (){
        if (this.speed==0){
            return;
        }
        var fif = this.width/20
        push();
        noStroke();
        fill(this.mycolor);
        if (this.PJ){fill(0);}

        triangle(this.x - fif, this.y, this.x + fif, this.y, this.x + 1.2*fif, this.y - 4*fif);
        rectMode(CENTER);
        
        fill(this.mycolor);
        if (this.PJ){fill(0);}
        triangle(this.x - fif, this.y, this.x + fif, this.y, this.x + 2*fif, this.y + 5*fif);
        triangle(this.x + 2*fif, this.y + fif, this.x + 4*fif, this.y - 2.5*fif, this.x + 4*fif, this.y + fif);
       pop();
    }
    move(){
        this.x = this.x - this.speed;
        if (this.x < 0 ){
            this.x = width + this.x;
            if(this.PJ){
                this.speed=0;
            }

        }

    }

}