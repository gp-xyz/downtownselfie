class Airplane{

        constructor(x,y,width,speed){
            this.x = x;
            this.y = y;
            this.width = width;
            this.speed = speed;
            this.PJ = (random(1)>.8);
            if(this.PJ){
                this.speed=this.speed*2;
            }
        }
        show (){
            if (this.speed==0){
                return;
            }
            var fif = this.width/20
            push();
            stroke(0);
            fill(120);
            if (this.PJ){fill(0);}

            triangle(this.x - fif, this.y, this.x + fif, this.y, this.x + 1.2*fif, this.y - 4*fif);
            rectMode(CENTER);
            rect(this.x, this.y, 6*fif, 2*fif, 3*fif, 0, 0, 1.3*fif);
            fill(255);
            if (!this.PJ){
            rect(this.x - 2*fif, this.y - 5, fif, 5);
            }
            fill(120);
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