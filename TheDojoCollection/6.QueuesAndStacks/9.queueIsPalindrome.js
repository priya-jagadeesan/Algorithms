var arrStack = require('./_ArrStack');
var listStack = require('./_SLStack');
var queue = require('./_SLQueue');

function queueIsPalindrome(queueIn){
    if(!queueIn.SLQlength()){
        console.log("empty queue");
        return false;
    }
    var tempS = new arrStack();
    // calculate the mid of the queue
    var queueSize = queueIn.SLQlength();
    var midLen = Math.floor(queueSize/2);
    var midPos, elem;
    if(queueSize % 2 == 0){
        midPos = 0;
    }
    else{
        midPos = midLen + 1;
    }
    while(midLen){
        elem = queueIn.dequeue();
        queueIn.enqueue(elem);
        tempS.push(elem);
        midLen--;
    }
    if(midPos){
        queueIn.enqueue(queueIn.dequeue());
    }
    midLen = tempS.size();
    var flag = true;
    while(midLen){
        if(queueIn.front() === tempS.top()){
            queueIn.enqueue(queueIn.dequeue());
            tempS.pop();
        }
        else{
            queueIn.enqueue(queueIn.dequeue());
            tempS.pop();
            flag = false;
        }
        midLen--;
    }
    return flag;
}

var queue1 = new queue();
console.log("queue : ", queue1.SLQdisplay());
console.log("Check empty queue: ", queueIsPalindrome(queue1));
console.log("After checking : queue : ", queue1.SLQdisplay());
console.log("-----------------------------------------------------");
queue1.enqueue('T');
console.log("queue : ", queue1.SLQdisplay());
console.log("Check queue only head: ", queueIsPalindrome(queue1));
console.log("After checking : queue : ", queue1.SLQdisplay());
console.log("-----------------------------------------------------");
queue1.enqueue('A');
queue1.enqueue('C');
queue1.enqueue('O');
console.log("queue : ", queue1.SLQdisplay());
console.log("Check queue - invalid palindrome : ", queueIsPalindrome(queue1));
console.log("After checking : queue : ", queue1.SLQdisplay());
console.log("-----------------------------------------------------");
queue1.enqueue('C');
queue1.enqueue('A');
queue1.enqueue('T');
console.log("queue1 : ", queue1.SLQdisplay());
console.log("Check queue - valid palindrome - odd : ", queueIsPalindrome(queue1));
console.log("After checking : queue : ", queue1.SLQdisplay());
console.log("-----------------------------------------------------");
var queue1 = new queue();
queue1.enqueue(10);
queue1.enqueue(20);
queue1.enqueue(30);
queue1.enqueue(30);
queue1.enqueue(20);
queue1.enqueue(10);
console.log("queue1 : ", queue1.SLQdisplay());
console.log("Check queue - valid palindrome - even : ", queueIsPalindrome(queue1));
console.log("After checking : queue : ", queue1.SLQdisplay());
console.log("-----------------------------------------------------");