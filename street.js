class Street{
   
constructor(daymode,airplanecount,buildingcount,unit){
        this.unit = unit;
        if (daymode == 'night'){
            this.skycolors = ["#9078aa","#202870"];
            this.sunOut = false;
        }
        else if(daymode == 'day'){
            this.skycolors = ["#ff7890","#702820"];
            this.sunOut = true;
        }
        
        print('haasldkfjsdlfkjds');
        
        this.airplanes = [];
        this.airplanecount = airplanecount;
        this.createplanes();
        print('haasldkfjsdlfkjds');

        this.buidlings = [];
        this.createbuildings(buildingcount);
        print(this.buidlings);
        print(this.buidlings.length)

        this.car = new Car();

        this.kpos = random(20,width-20);
        this.kypos = random(320,420);

        this.cpos = random(20,width-20);
        this.cypos = random(320,420);
        

        
    }
    show(framecount){
        this.showsky();
        this.showroad();
        this.showbuildings();
        this.showcar();
        // textSize(25);
        // text("🧶",this.kpos,this.kypos);
        // text("💍",this.cpos,this.cypos);
        

    }
    showcar(){
        this.car.show();
        this.car.move();
    }
    showroad(){
        fill(0);
        stroke('#ffd700')
        strokeWeight(2);
        rect(0, 450,width,50);
        noStroke();
        fill(45);
        rect(0, 450+50,width,height);
    }
    createbuildings(howmany=3){

        
        var buildingsize = width / howmany;

        var btypes = ['therapy','park','lot','skyscraper','casino','smoke'];
        for (let i=0;i<howmany;i++)
        {
            var ax = i;
            var ay = 350;
           
            var newbuilding = new Building(ax*buildingsize,ay,buildingsize,"random",btypes);
            var thistype = newbuilding.myType;
            for( var j = 0; j < btypes.length; j++){ 
    
                if ( btypes[j] === thistype && ("therapy" === thistype ||"park" === thistype  ||"smoke" === thistype  ) ) { 
            
                    btypes.splice(j, 1); 
                }
            
            }

            
            this.buidlings.push(newbuilding);
            print(i);    
        }

    }
    showbuildings(){
       
        for (let i=0;i<this.buidlings.length;i++){
           
            this.buidlings[i].show();
        }

    }
    
    createplanes(){
        for (let i=0;i<this.airplanecount;i++){
            var ax = random(0,width);
            var ay = random(0,height/2);
            var aspd = random(0,4);
            var aw = 50;
            this.airplanes.push(new Airplane(ax,ay,aw,aspd));
            
        }
    }
    showsky(){
        // print(this.skycolors[0]);
        var c1 = color(this.skycolors[0]);
        var c2 = color(this.skycolors[1]);

        for (let i = 0; i <=  height; i++) {
            let inter =  map(i, 0, height, 0, 1);
            let c = lerpColor(c1, c2, inter);
            stroke(c);
            line(0, i, width, i);
          }
        if (this.sunOut){
        this.drawSun();
        }
        else{
            this.drawMoon();
        }
        for (let i=0;i<this.airplanes.length;i++){
       
            this.airplanes[i].show();
            this.airplanes[i].move();
        }
    }
    createbuilings(){

    }
    

drawSun() {

    fill(245, 187, 87);
    stroke(245, 187, 87);
    push();
    translate(100, 80);
    rotate(radians(frameCount / 2));
    ellipse(0, 0, 60, 60);
    line(0, -60, 0, -40);
    line(0, 40, 0, 60);
    line(-45, -45, -30, -30);
    line(45, -45, 30, -30);
    line(-60, 0, -40, 0);
    line(40, 0, 60, 0);
    line(-45, 45, -30, 30);
    line(45, 45, 30, 30);
    pop();
    // noFill();
}
drawMoon(){

    fill(255);
    ellipse(100, 80, 70, 70);
    
}
}