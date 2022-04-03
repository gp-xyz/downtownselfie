class Car{
    constructor()
    {
        this.x= random(width);

        this.gimg = loadImage('gabe.png');


    }
    show(){
        stroke(255,0,0);
        fill(0);
        rect(this.x,420,90,30);
        ellipse(this.x+15,450,20,20);
        ellipse(this.x+75,450,20,20);
        textSize(20);
        // text("👨🏼‍🦲",this.x+55,440)
        this.gimg.resize(20,0);
        image( this.gimg,this.x+55,420);
        
    }
    move(){
        this.x = this.x + 1;
        if (this.x > width){
            this.x=0;
        }
    }

}