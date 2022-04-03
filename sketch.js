var fremont ;
var counter=0;


function setup() {
  createCanvas(500, 600);
  var daymode = random(['night','day']);
  fremont = new Street(daymode,random([1,2,3,4]),random([5,6,9]),random([0,0,1,2,3,100]),width/10);

}

function draw() {
  background(220);
  fremont.show(counter);
}
