var arrStack = require('./_ArrStack');
var listStack = require('./_SLStack');

function compareStacks(s1, s2){
    if(s1.size() !== s2.size()){
        console.log("Unequal size stacks");
        return false;
    }
    var tempS = new arrStack();
    var equal = true;

    while(s1.size()){
        if(s1.top() === s2.top()){
            tempS.push(s1.top());
            s1.pop();
            s2.pop();
        }
        else{
            equal = false;
            break;
        }
    }
    while(tempS.size()){
        s1.push(tempS.top());
        s2.push(tempS.top());
        tempS.pop();
    }
    return equal;
}

console.log("-----------------Array Stack-------------------------");
var arrStack1 = new arrStack();
var arrStack2 = new arrStack();
console.log("stack1 : ", arrStack1.SLSdisplay());
console.log("stack2 : ", arrStack2.SLSdisplay());
console.log("Comparing empty stacks: ", compareStacks(arrStack1, arrStack2));
console.log("After comparing : stack1 : ", arrStack1.SLSdisplay());
console.log("After comparing : stack2 : ", arrStack2.SLSdisplay());
console.log("-----------------------------------------------------");
arrStack1.push(10);
arrStack1.push(20);
arrStack1.push(30);
arrStack1.push(40);

arrStack2.push(10);
arrStack2.push(20);
console.log("stack1 : ", arrStack1.SLSdisplay());
console.log("stack2 : ", arrStack2.SLSdisplay());
console.log("Comparing different stacks: ", compareStacks(arrStack1, arrStack2));
console.log("After comparing : stack1 : ", arrStack1.SLSdisplay());
console.log("After comparing : stack2 : ", arrStack2.SLSdisplay());
console.log("-----------------------------------------------------");
arrStack2.push(30);
arrStack2.push(40);
console.log("stack1 : ", arrStack1.SLSdisplay());
console.log("stack2 : ", arrStack2.SLSdisplay());
console.log("Comparing equal stacks: ", compareStacks(arrStack1, arrStack2));
console.log("After comparing : stack1 : ", arrStack1.SLSdisplay());
console.log("After comparing : stack2 : ", arrStack2.SLSdisplay());
console.log("-----------------------------------------------------");
console.log("------------------List Stack-------------------------");
var s3 = new listStack();
var s4 = new listStack();
console.log("stack3 : ", s3.SLSdisplay());
console.log("stack4 : ", s4.SLSdisplay());
console.log("Comparing empty stacks: ", compareStacks(s3, s4));
console.log("After comparing : stack3 : ", s3.SLSdisplay());
console.log("After comparing : stack4 : ", s4.SLSdisplay());
console.log("-----------------------------------------------------");
s3.push(10);
s3.push(20);
s3.push(30);
s3.push(40);

s4.push(10);
s4.push(20);
console.log("stack3 : ", s3.SLSdisplay());
console.log("stack4 : ", s4.SLSdisplay());
console.log("Comparing different stacks: ", compareStacks(s3, s4));
console.log("After comparing : stack3 : ", s3.SLSdisplay());
console.log("After comparing : stack4 : ", s4.SLSdisplay());
console.log("-----------------------------------------------------");

s4.push(30);
s4.push(40);
console.log("stack3 : ", s3.SLSdisplay());
console.log("stack4 : ", s4.SLSdisplay());
console.log("Comparing equal stacks: ", compareStacks(s3, s4));
console.log("After comparing : stack3 : ", s3.SLSdisplay());
console.log("After comparing : stack4 : ", s4.SLSdisplay());
console.log("-----------------------------------------------------");

