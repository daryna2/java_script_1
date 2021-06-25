let userAsk = prompt ("What woud you like to do?");
const arr = ['buy new dress', 'clean room'];

while (userAsk !== 'quit' && userAsk !== 'q') {
    if(userAsk === 'list') {
        console.log ('****************')
        for (let i=0; i<arr.length; i++) {
       console.log (`${i}: ${arr[i]}`);  
        }
       console.log('*******************') 
    }else if (userAsk === 'new') {
        const newToDo = prompt ('Ok, what is the new todo?');
        arr.push(newToDo);
        console.log(`${newToDo} added to the list`)

    }else if (userAsk === 'delete') {
        const index = parseInt(prompt('Ok, enter an index to delete:'));
if (!Number.isNaN(index)) {
    const deleted = arr.splice(index,1);
    console.log(`OK, deleted ${deleted}`)
}else{
    console.log('Unknown index:')
}
       
    }

    userAsk = prompt ("What woud you like to do?")
}
console.log ("you are quit");




