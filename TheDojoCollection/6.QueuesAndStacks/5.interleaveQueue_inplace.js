function interleaveQueue(queue) {
    qSize = queue.SLQlength();
    if (!queue.head || qSize < 3) {
        console.log("Interleave Queue : ", queue.SLQdisplay());
    }
    else {

        var firstHalfPos = Math.ceil(qSize / 2);
        // var secondHalfPos = firstHalfPos + 1;
        var secondHalfHead = queue.head;

        while (firstHalfPos > 0) {
            firstHalfPos--;
            secondHalfHead = secondHalfHead.next;
        }

        var prev = queue.head;
        var temp = null;
        var runner = null;
        var curr = secondHalfHead;

        while (curr) {
            temp = prev.next;
            prev.next = new Node(curr.val);
            runner = prev.next;
            runner.next = temp;
            prev = temp;
            curr = curr.next;
        }

        if(qSize%2 == 0){
            runner.next = null;
        }
        else{
            temp.next = null;
        }
        console.log("Interleave Queue : ", queue.SLQdisplay());
    }
}

//require SLNode 
var Node = require('./_SLNode');
//require SLQueue 
var Queue = require('./_SLQueue');

// create queues
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

var queue = new Queue();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(40);
queue.enqueue(50);
queue.enqueue(60);
console.log("Queue values: " , queue.SLQdisplay());
console.log("Interleave queues with even values: ");
interleaveQueue(queue);
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