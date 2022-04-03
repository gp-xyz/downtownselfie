class Building{
    constructor(x,y,unit,btype="random",sofars)
    {
        print(x,y,unit);
        this.x= x;
        this.y=y;
        this.u=unit;
        var types = ['therapy','park','lot','skyscraper','casino','smoke'];
        if (btype=="random"){
            this.myType = random(sofars);
        }
        else{
            this.myType = btype;
        }
        // print(sofars.myType);
      

        this.framecount=0;
        this.myColor = "#ffffff";
        this.myxy = [];
        this.myFloors = 10;
        this.myHeight = 10;
        var barcolors = ["#6320ee","#34e4ea","#ce2d4f"]
        var randcolors = ["#7a8b99","#91adc2","#9ba0bc"]
        var scrapercolors = ["#7a8b99","#91adc2","#9ba0bc"]
        var mysymbols = ["🌿","🍺","🍽️","🥂"];
        this.mysymbol = '';
        if (this.myType == "blank"){
            this.myColor = random(randcolors);
        }
        else if(this.myType == "therapy"){
            this.myColor = random(barcolors);
            this.myxy = [int(random(this.x+10,this.x+this.u-6)),this.y+40];
        }
        else if(this.myType == "skyscraper"){
            this.myColor = random(scrapercolors);
            this.myFloors = random([4,10,16,100])
            this.myHeight = random([this.y/4,this.y/2,this.y/10,-100])
        }
        else if(this.myType == "smoke"){
            this.mysymbol = random(mysymbols);
        }

    }
    show(){
        this.framecount++;

        switch(this.myType){

            case 'therapy':
                fill(0,0,0);
                stroke("#ffd400");
                rect(this.x+3,this.y,this.u-6,100);
                fill(225,10,10);
                textSize(this.u/9);
                text("Therapy+",this.x+10,this.y+34); 

                fill(this.myColor);
                stroke(255);
                rect(this.x+10,this.y+40,this.u-20,35);
                for (let dj=0;dj<this.u-20;dj+=5)
                {
                    var colorvar = map(dj,0,this.u-20,0,255);
                    var colorvar2 = this.framecount%255;
                    stroke(colorvar,21,colorvar2);
                
                    line(this.myxy[0],this.myxy[1]+2,this.x+11+dj,this.y+73);
                }
                
                break;
            case 'park':
                fill(230,240,225);
                stroke(230);
                rect(this.x,this.y+40,this.u,60);
                
                stroke(200);
                fill(195,250,160);
                rect(this.x,this.y,this.u/2,100);
                
                fill("#545454");
                rect(this.x+20,this.y+80,this.u-20,17);

                fill(225,45,35);
                textSize(this.u/6);
                var mytxt = "-PARK"
                if (this.framecount>400)
                {
                    mytxt= "CLOSED"
                }
                text("-PARK-",this.x+10,this.y+75); 

                break;
            case 'blank':

                fill(this.myColor);
                stroke(0);
                rect(this.x,this.y,this.u,100);
                break;
            case 'lot':
                fill(222,222,222,125);
                stroke(0);
                rect(this.x,this.y+70,this.u,30);
                rect(this.x+.6*this.u,this.y+40,this.u*.25,30);
                fill(0,255,0);
                rect(this.x+.05*this.u,this.y+55,this.u*.36,15);
                textSize(this.u/5)
                text("$",12+this.x+.6*this.u,20+this.y+40);
                break;
            case 'skyscraper':
                fill(222,100,100);
                stroke(0);
                var starty = this.myHeight;
 
                var floorheights = (450 - starty) / this.myFloors;
                for (let f=0;f<this.myFloors;f+=2)
                {
                    fill(222,222,222);
                    rect(this.x,starty+f*floorheights,this.u,floorheights);
                    fill(222,222,222,80);
                    rect(this.x,starty+(f+1)*floorheights,this.u,floorheights);
                }
 
                break;          
            case 'casino':
                fill(240,180,0);
                stroke(0);
                rect(this.x,this.y-50,this.u,150);   
                noStroke();
                fill(255,0,0);
                rect(this.x+10,this.y-40,this.u-20,150-20);   
                fill("#ffd700")
                textSize(this.u/6);
                if (this.framecount % 5 ==0 || this.framecount % 3 ==0)
                {
                    fill(255);
                }
                var mytxt = "CASINO"
                if (this.framecount > 5000)
                {
                    mytxt = "CLOSED"
                    fill(255);

                }
                text(mytxt,this.x+13,this.y+25); 

                break;  
            
            case 'smoke':
                fill(0,255,0);
                stroke(0);
                rect(this.x,this.y,this.u,100);
                textSize(this.u*2/3);

                text(this.mysymbol,this.x+10,this.y+this.u*.8); 
                break;


            default:
                
                fill(0);
                rect(this.x,this.y,50,50); 

        }
    }

}