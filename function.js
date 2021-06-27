

function repeat(msg,numTimes) {
    let result = '';
   for(let i=0;i<numTimes;i++) {
       result+= msg;
   }
   console.log(result);
}

repeat('$',8);

function lastElement (array) {
    const lastItem = array[array.length - 1];
    if(array.length >0) {
        return lastItem;
    }
    return null;
}
lastElement([]);
lastElement([3,5,7]);
lastElement([1]);
lastElement([0]);

function capitalize (string) {
    const newString = string.charAt(0).toUpperCase() + string.slice(1);
     return newString;
 }


 capitalize('eggplant');
 capitalize('pamplemousse');
 capitalize('squid');

 function sumArray(arrayOfNumbers) {
    let arrayOfNumber = arrayOfNumbers[0];
    for(i=1;i<arrayOfNumbers.length; i++){
        arrayOfNumber +=arrayOfNumbers[i];
    }
    return arrayOfNumber;
}

sumArray([1,2,3]);
sumArray([2,2,2,2]);
sumArray([50,50,1]);

function returnDay(dayOfWeek) {
    let daysOfWeek = {
        Monday: 1,
        Tuesday: 2,
        Wednesday:3,
        Thursday: 4,
        Friday:5,
        Saturday:6,
        Sunday:7
    };
    for (let day in daysOfWeek) {
            if(daysOfWeek[day] === dayOfWeek)
                return day;
            
    }
    return null;
}
returnDay(1);
returnDay(7);
returnDay(4);
returnDay(0);



