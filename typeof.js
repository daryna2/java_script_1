var test1 = "abcdf";
var test2 = 123;
var test3 = true;
var test4 = {};
var test5=[];
var test6;
var test7= {"adcdf": 123};
var test8= ["absdf",123];
function test9() {return "abcdf"};
var test10= null;
var test11= 0/0;
if(99=="99") {
  console.log("a number equals a string");
}else{
  console.log("no way a number equals a string");
}

console.log(typeof test1);
console.log(typeof test2);
console.log(typeof test3);
console.log(typeof test4);
console.log(typeof test5);
console.log(typeof test6);
console.log(typeof test7);
console.log(typeof test8);
console.log(typeof test9);
console.log(typeof test10);
console.log(typeof test11);
