let totalEggs = 0;
function collectEggs() {
     totalEggs = 6;
  
}
console.log(totalEggs);
collectEggs();
console.log(totalEggs);


let bird = 'Scarlet Macaw';
function birdWatch(){
    let bird = 'Great Blue Heron';
    console.log(bird);
}
console.log(bird);
birdWatch();
console.log(bird);

let radius = 8;
if(radius>0) {
    const PI = 3.14159;
    let msg = "hiiiii";
}
console.log(radius);

for(let i = 0;i<5;i++) {
    let msg = "FGFUFJGKJHKJ";
    console.log(msg);
}

function bankRobbery() {
    const heroes = ['Spiderman','Wolverine','Black Panter','Batwomen'];
    function cryForHelp() {
        function inner(){
        for(let hero of heroes){
            console.log(`PLEASE HELP US, ${hero.toUpperCase()}`);
        }
        }
        inner();
    }
    cryForHelp();
}
bankRobbery();

const add = function (x,y) {
    return x+y;
}
add(3,4);

const square = function (x) {
    let y = 2;
    return Math.pow(x,y);
}
square(4);
square(0);
square(3);
square(-1);

function callTwice(func) {
func();
func();
}

function callTenTimes(f) {
    for(let i = 0; i<10;i++){
f();
    }
}
function rollDie() {
    const roll = Math.floor(Math.random()*6)+1;
    console.log(roll)
}
callTwice(rollDie);
callTenTimes(rollDie);

function makeMysteryFunc() {
   const rand =  Math.random();
   if(rand>0.5){
       return function(){
           console.log("CONGRATS!! I'M A GOOD FUNCTION!!");
           console.log("YOU WIN A 100000$");
       }
       }else{
           return function() {
               alert("YOU HAVE BEEN INFECTED BY A COMPUTER VIRUS");
               alert("YOU HAVE TO PAY 100$");
               alert("STOP TRY TO CLOSE THIS WINDOW!!");
               alert("STOP TRY TO CLOSE THIS WINDOW!!");
               alert("STOP TRY TO CLOSE THIS WINDOW!!");
               alert("STOP TRY TO CLOSE THIS WINDOW!!");
               alert("STOP TRY TO CLOSE THIS WINDOW!!");
           }
       }
   }
   makeMysteryFunc();
   const mystery = makeMysteryFunc();

function makeBetweenFunc(min,max){
    return function(num) {
        return num>=min && num<=max;
    }
}
const isChild = makeBetweenFunc(0,18);
console.log(isChild(10));
const isAdult = makeBetweenFunc(18,50);
console.log(isAdult(10));
console.log(isAdult(40));

   const myMath = {
       PI:3.14159,
       square(num){
           return num*num;
       },
       cube (num) {
           return num**3;
       }
   }
    
   const square1 = {
       area(length){
           return length*length;
       },
       perimeter(length){
        return length*4;
       }
   }
   const cat = {
       name: 'Blue Steele',
       color:'grey',
       breed:'scottisch fold',
       meow(){
           console.log(`${this.name} say meow`)
       }

   }
   const meow2 = cat.meow;

   const hen = {
    name: 'Helen',
    eggCount:0,
    layAnEgg(){
        this.eggCount++; 
        return "EGG";
    }
}
console.log(hen.name);
console.log(hen.eggCount);
console.log(hen.layAnEgg());
console.log(hen.layAnEgg());
console.log(hen.layAnEgg());
console.log(hen.eggCount);

try {
    hello.toUpperCase();
} catch {
    console.log("error")
}

function yell(msg) {
    try{
console.log(msg.toUpperCase().repeat(3));
} catch(e){
    console.log(e);
    console.log("Please pass a string next time")
}
}



   
   





