var arrStack = require('./_ArrStack');
var listStack = require('./_SLStack');
var queue = require('./_SLQueue');

function queueFromStack(stack){
    var newQ = new queue();

    if(!stack.size()){
        console.log("empty stack");
        return newQ;
    }
    var tempS = new arrStack();
    var elem;

    while(stack.size()){
        tempS.push(stack.pop());
    }
    while(tempS.size()){
        elem = tempS.pop();
        newQ.enqueue(elem);
        stack.push(elem);
    }
    return newQ;
}

console.log("-----------------Array Stack-------------------------");
var arrStack1 = new arrStack();
console.log("stack1 : ", arrStack1.SLSdisplay());
console.log("Create queue from empty stack: ", queueFromStack(arrStack1).SLQdisplay());
console.log("After creating : stack : ", arrStack1.SLSdisplay());
console.log("-----------------------------------------------------");
arrStack1.push(10);
console.log("stack : ", arrStack1.SLSdisplay());
console.log("Create queue from a stack only head: ", queueFromStack(arrStack1).SLQdisplay());
console.log("After creating : stack : ", arrStack1.SLSdisplay());
console.log("-----------------------------------------------------");
arrStack1.push(20);
arrStack1.push(30);
arrStack1.push(40);
console.log("stack : ", arrStack1.SLSdisplay());
console.log("Create queue from a stack: ", queueFromStack(arrStack1).SLQdisplay());
console.log("After creating : stack : ", arrStack1.SLSdisplay());
console.log("-----------------------------------------------------");
console.log("------------------List Stack-------------------------");
var listStack1 = new listStack();
console.log("stack1 : ", listStack1.SLSdisplay());
console.log("Create queue from a empty stack: ", queueFromStack(listStack1).SLQdisplay());
console.log("After creating : stack : ", listStack1.SLSdisplay());
console.log("-----------------------------------------------------");
listStack1.push(10);
console.log("stack : ", listStack1.SLSdisplay());
console.log("Create queue from a stack only head: ", queueFromStack(listStack1).SLQdisplay());
console.log("After creating : stack : ", listStack1.SLSdisplay());
console.log("-----------------------------------------------------");
listStack1.push(20);
listStack1.push(30);
listStack1.push(40);
console.log("stack : ", listStack1.SLSdisplay());
console.log("Create queue from a stack: ", queueFromStack(listStack1).SLQdisplay());
console.log("After creating : stack : ", listStack1.SLSdisplay());
console.log("-----------------------------------------------------");
