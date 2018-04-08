var arrStack = require('./_ArrStack');
var listStack = require('./_SLStack');
var queue = require('./_SLQueue');

function removeOldestMin(stack){
    if(!stack.size()){
        console.log("empty stack");
        return false;
    }
    var tempQ = new queue();
    // calculate the min value
    var min = stack.top();
    var stackSize = stack.size();
    while(stackSize){
        if(stack.top() < min){
            min = stack.top();
        }
        stackSize--;
    }
    // calculate number of occurences of min value
    var count = 0;
    while(stack.size()){
        if(stack.top() == min){
            count++;
        }
        tempQ.enqueue(stack.pop());
    }

    //remove oldest min
    var flag = false;
    while(tempQ.SLQlength()){
        if(tempQ.front() === min && !flag && count < 2){
            tempQ.dequeue();
            flag = true;
            count--;
        }
        else if(tempQ.front() === min && count > 1){
            stack.push(tempQ.dequeue());
            count--;
        }
        else{
            stack.push(tempQ.dequeue());
        }
    }
    
    while(stack.size()){
        tempQ.enqueue(stack.pop());
    }
    while(tempQ.SLQlength()){
        stack.push(tempQ.dequeue());
    }
    return true;
}

console.log("------------------List Stack-------------------------");
var listStack1 = new listStack();
console.log("stack1 : ", listStack1.SLSdisplay());
console.log("remove min value empty stack: ", removeOldestMin(listStack1));
console.log("After removing : stack : ", listStack1.SLSdisplay());
console.log("-----------------------------------------------------");
listStack1.push(10);
listStack1.push(20);
listStack1.push(10);
listStack1.push(30);
listStack1.push(10);
listStack1.push(40);
listStack1.push(10);
console.log("stack : ", listStack1.SLSdisplay());
console.log("remove min value stack: ", removeOldestMin(listStack1));
console.log("After removing : stack : ", listStack1.SLSdisplay());
console.log("-----------------------------------------------------");
