

let maximum = parseInt(prompt("Welcome! Enter your max number:"));
while (!maximum) {
    maximum = parseInt(prompt("Welcome! Enter a valid  number:"));
}
const targetNum =Math.floor(Math.random()*maximum)+1;
console.log(targetNum);

let guess = parseInt(prompt("enter your first guess:"));
let attempts = 1;
while(guess !== targetNum) {
    if(guess =='q') break;
    attempts++;
if(guess > targetNum) {
   guess = parseInt(prompt("Too hight! Enter a new guess!"));
}else {
    guess = parseInt(prompt("Too low!Enter a new guess:"));
}
}
if(guess === 'q') {
    console.log("OK, You out")
}else{
    console.log('CONGRATS!! You win');
    console.log(`You got it! It took you ${attempts} guesses`);
}







