var fremont ;
var counter=0;


function setup() {
  createCanvas(500, 600);
  var daymode = random(['night','day']);
  fremont = new Street(daymode,random([1,3,10]),random([4,6,10]),width/10);

}

function draw() {
  background(220);
  fremont.show(counter);
}
