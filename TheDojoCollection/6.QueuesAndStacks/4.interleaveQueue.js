function interleaveQueue(queue) {
    qSize = queue.SLQlength();
    if (!queue.head || qSize < 3) {
        console.log("Interleave Queue : ", queue.SLQdisplay());
    }
    else {
        var tempQ = new Queue();

        var firstHalfPos = Math.ceil(qSize / 2);
        var secondHalfPos = firstHalfPos + 1;

        var firstHalfHead = secondHalfHead = queue.head;

        while (firstHalfPos > 0) {
            firstHalfPos--;
            secondHalfHead = secondHalfHead.next;
        }

        tempQ.head = new Node(firstHalfHead.val);
        firstHalfPos++;
        
        var tempQcurr = tempQ.head;
        tempQcurr.next = new Node(secondHalfHead.val);

        tempQcurr = tempQcurr.next;
        firstHalfHead = firstHalfHead.next;
        secondHalfHead = secondHalfHead.next;

        while (firstHalfPos+1 != secondHalfPos) {
            if (firstHalfPos != secondHalfPos){
                tempQcurr.next = new Node(firstHalfHead.val);
                tempQcurr = tempQcurr.next;
                firstHalfHead = firstHalfHead.next;
                firstHalfPos++;
            }
            if (secondHalfHead){
                tempQcurr.next = new Node(secondHalfHead.val);
                tempQcurr = tempQcurr.next;
                secondHalfHead = secondHalfHead.next;
            }
        }
        console.log("Interleave Queue : ", tempQ.SLQdisplay());
    }
}

var Node = require('./_SLNode');
//require SLQueue 
var Queue = require('./_SLQueue');

// create two queues
var queue1 = new Queue();
console.log("Queue values: ", queue1.SLQdisplay());
console.log("Interleave empty queues : ");
interleaveQueue(queue1)
console.log("-------------------------------------------------------------")

queue1.enqueue(10);
console.log("Queue values: " , queue1.SLQdisplay());
console.log("Interleave queues 1 value: ");
interleaveQueue(queue1)
console.log("-------------------------------------------------------------")

queue1.enqueue(20);
console.log("Queue values: " , queue1.SLQdisplay());
console.log("Interleave queues with 2 values: ");
interleaveQueue(queue1);
console.log("-------------------------------------------------------------")

queue1.enqueue(30);
console.log("Queue values: " , queue1.SLQdisplay());
console.log("Interleave queues with 3 values: ");
interleaveQueue(queue1);
console.log("-------------------------------------------------------------")

queue1.enqueue(40);
queue1.enqueue(50);
queue1.enqueue(60);
console.log("Queue values: " , queue1.SLQdisplay());
console.log("Interleave queues with even values: ");
interleaveQueue(queue1);
console.log("-------------------------------------------------------------")

var queue2 = new Queue();
queue2.enqueue(10);
queue2.enqueue(20);
queue2.enqueue(30);
queue2.enqueue(40);
queue2.enqueue(50);
console.log("Queue values: " , queue2.SLQdisplay());
console.log("Interleave queues with odd values: ");
interleaveQueue(queue2);
console.log("-------------------------------------------------------------")

var queue3 = new Queue();
queue3.enqueue(21);
queue3.enqueue(22);
queue3.enqueue(23);
queue3.enqueue(24);
queue3.enqueue(25);
queue3.enqueue(1);
queue3.enqueue(2);
queue3.enqueue(3);
queue3.enqueue(4);
queue3.enqueue(5);
console.log("Queue values: " , queue3.SLQdisplay());
console.log("Interleave queues with odd values: ");
interleaveQueue(queue3);
console.log("-------------------------------------------------------------")