const password = prompt("please enter a new password");
if(password.length >=6 && password.indexOf(' ')===-1) {
   console.log("valid password")
}else{
    console.log("Incorrect format for password")
}



const age= 101;
if (age<5 && age>0||age>=65 && age<100) {
    console.log("FREE");
}else if (age<10) {
    console.log('$10');
}else if (age<65) {
console.log('20$')
}


let firstName = prompt("enter your first name");
if(!firstName) {
    firstName=prompt("TRY AGAIN!!!");
};



for (let i=1; i<=10; i++) {
    console.log(`i is: ${i}`)
 

for(let j=1; j<4; j++) {
    console.log(`   j is: ${j}`)
}
}


const seatingChart =[
    ['Kristian', 'Erik', 'Namita'],
    ['Geoffrey','Juanita','Antonio','Kevin'],
    ['Yuma','Sakura', 'Yak','Erika']
]
for (let i=0; i<seatingChart.length; i++) {
    const row = seatingChart[i];
    console.log (`ROW #${1+i}`)
    for (let j=0; j<row.length; j++) {
        console.log (row[j])
    }

}
for(let row of seatingChart) {
    for(let student of row ){
        console.log(student);
    }

}

let count = 0;
while(count<10) {
    console.log(count)
    count++;
}

const SECRET = "babyHippo";
let guess = prompt("enter the secret code....");
while (guess !=SECRET) {
    guess = prompt("Enter the secret code....")
}
console.log ("CONGRATS!!!")

if (password.length >=6){
    console.log("long enough password")
}else{
    console.log("Password too short! Must be 6+ characters")
}


if (password.indexOf(' ') ===-1){
    console.log("valid password! good job!!!!")
} else {
    
    console.log("pls input valid password without space")
};

const userInput = prompt ("Enter something");
if(userInput){
    console.log("truthy")
}else{
    console.log('falsy!')
}

const subreddits = ['cringe','books','chickens','funny','soccer','pics'];
for(let i=0; i<subreddits.length; i++) {
    console.log(`Visit reddit.com/r/${subreddits[i]}`)
}
for (let sub of subreddits) {
    console.log(`Visit reddit.com/r/${sub}`);
}

for (let char of "hello world") {
    console.log(char)
}
const testScores = {
    keenan:80,
    damon:67,
    kim:89,
    shawn:91,
    marlon:72,
    dwayne:77,
    nadia:83,
    elvira:97,
    diedre:81,
    vonnie:60
}
for (let person in testScores ) {
    console.log(`${person} scored ${testScores[person]}`);
}
Object.keys(testScores);
Object.values(testScores);
Object.entries(testScores);
let total = 0;
for(let score of Object.values(testScores));
total +=score;
}