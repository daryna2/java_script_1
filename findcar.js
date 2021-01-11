function findCarInLot(car) {
  for(var i=0; i<lot.length; i++) {
  if (car===lot[i]){
    return i;
  }
  }
  return -1;
}
var chevy = {
  make:"Chevy",
  model:"Bel Air"
};
var taxi = {
  make:"Webville Motors",
  model:"taxi"
};
var fiat1= {
  make:"Fiat",
  model:"500"
};
var fiat2= {
  make:"Fiat",
  model:"500"
};
var lot = [chevy,taxi,fiat1,fiat2];
var loc1= findCarInLot(fiat2);
var loc2= findCarInLot(taxi);
var loc3= findCarInLot(chevy);
var loc4= findCarInLot(fiat1);
console.log(loc1,loc2,loc3,loc4);

function lieDetectorTest(){
  var lies = 0;


  var car = {
    keysInPocket: null
  };
  if(car.keysInPocket) {
    console.log("Uh oh, guess you stole the car!");
    lies++;
  }
  if(car.emptyGasTank) {
    console.log("You drove the car after you drove it!");
    lies++
  }
  var foundYouAtTheCrimeScene = [ ];
  if (foundYouAtTheCrimeScene){
    console.log("a sure sign of guilt");
    lies++;
  }
  if(foundYouAtTheCrimeScene[0]){
    console.log("Caught with a stolen item!");
    lies++;
  }
  var yourName = " ";
  if (yourName) {
    console.log("Guess you lied about your name");
    lies++
  }
  return lies;
  }
  var numberOfLies = lieDetectorTest();
  console.log("You told " + numberOfLies + "lies!");
  if (numberOfLies>=3){
    console.log(" Guilty as charged");
  }

  function Duck(sound){
    this.sound=sound;
    this.quack=function() {console.log(this.sound);}
  }
  var toy=new Duck("quack quack");
  toy.quack();
  console.log(typeof toy);
  console.log(toy instanceof Duck);
