var winner = function(){
console.log("WINNER")};
var loser = function(){
console.log("LOSER")};
var a = winner;
var b = loser;
var c = loser;
c=a;
a=b;
b=c;
c=a;
a=c;
a=b;
b=c;
a();
