var arrStack = require('./_ArrStack');
var listStack = require('./_SLStack');
var queue = require('./_SLQueue');

function removeMin(stack){
    if(!stack.size()){
        console.log("empty stack");
        return false;
    }
    var tempQ = new queue();
    // calculate the min
    var min = stack.top();
    while(stack.size()){
        if(stack.top() < min){
            min = stack.top();
        }
        tempQ.enqueue(stack.pop());
    }
    //remove newest min
    var flag = false;
    while(tempQ.SLQlength()){
        if(tempQ.front() === min && !flag){
            tempQ.dequeue();
            flag = true;
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
console.log("remove min value empty stack: ", removeMin(listStack1));
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
console.log("remove min value stack: ", removeMin(listStack1));
console.log("After removing : stack : ", listStack1.SLSdisplay());
console.log("-----------------------------------------------------");
