var arrStack = require('./_ArrStack');
var listStack = require('./_SLStack');
var queue = require('./_SLQueue');

function copyStack(stack){
    var stackCopy = new arrStack();

    if(!stack.size()){
        console.log("empty stack");
        return stackCopy;
    }
    var tempQ = new queue();
    var elem;

    while(stack.size()){
        tempQ.enqueue(stack.pop());
    }
    while(tempQ.SLQlength()){
        stackCopy.push(tempQ.dequeue());
    }
    while(stackCopy.size()){
        tempQ.enqueue(stackCopy.pop());
    }
    while(tempQ.SLQlength()){
        elem = tempQ.dequeue();
        stack.push(elem);
        stackCopy.push(elem);
    }
    return stackCopy;
}

console.log("-----------------Array Stack-------------------------");
var arrStack1 = new arrStack();
console.log("stack1 : ", arrStack1.SLSdisplay());
console.log("Copy empty stack: ", copyStack(arrStack1).SLSdisplay());
console.log("After copying : stack : ", arrStack1.SLSdisplay());
console.log("-----------------------------------------------------");
arrStack1.push(10);
arrStack1.push(20);
arrStack1.push(30);
arrStack1.push(40);
console.log("stack : ", arrStack1.SLSdisplay());
console.log("Copy a stack: ", copyStack(arrStack1).SLSdisplay());
console.log("After copying : stack : ", arrStack1.SLSdisplay());
console.log("-----------------------------------------------------");
console.log("------------------List Stack-------------------------");
var listStack1 = new listStack();
console.log("stack1 : ", listStack1.SLSdisplay());
console.log("Copy empty stack: ", copyStack(listStack1).SLSdisplay());
console.log("After copying : stack : ", listStack1.SLSdisplay());
console.log("-----------------------------------------------------");
listStack1.push(10);
listStack1.push(20);
listStack1.push(30);
listStack1.push(40);
console.log("stack : ", listStack1.SLSdisplay());
console.log("Copy a stack: ", copyStack(listStack1).SLSdisplay());
console.log("After copying : stack : ", listStack1.SLSdisplay());
console.log("-----------------------------------------------------");
