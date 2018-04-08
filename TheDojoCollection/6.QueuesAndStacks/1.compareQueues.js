function compareQueues(q1,q2){
    if(!q1.head && !q1.head){
        return true;
    }
    if(q1.SLQlength() !== q2.SLQlength()){
        return false;
    }
    q1curr = q1.head;
    q2curr = q2.head;

    while(q1curr && q2curr){
        if(q1curr.val === q2curr.val){
            q1curr = q1curr.next;
            q2curr = q2curr.next;
        }
        else{
            return false;
        }
    }
    return true;
}

//require SLQueue 
var Queue = require('./_SLQueue');

// create two queues
var queue1 = new Queue();
var queue2 = new Queue();

console.log("Queue1 values: " , queue1.SLQdisplay());
console.log("Queue2 values: " , queue2.SLQdisplay());
console.log("Compare empty queues : ", compareQueues(queue1,queue2));
console.log("-------------------------------------------------------------")

queue1.enqueue(10);
console.log("Queue1 values: " , queue1.SLQdisplay());
console.log("Queue2 values: " , queue2.SLQdisplay());
console.log("Compare empty and value queues : ", compareQueues(queue1,queue2));
console.log("-------------------------------------------------------------")

queue1.enqueue(20);
queue1.enqueue(30);
queue1.enqueue(40);
queue1.enqueue(50);
queue1.enqueue(60);

queue2.enqueue(10);
queue2.enqueue(20);
queue2.enqueue(30);
queue2.enqueue(40);
queue2.enqueue(50);
queue2.enqueue(60);

console.log("Queue1 values: " , queue1.SLQdisplay());
console.log("Queue2 values: " , queue2.SLQdisplay());
console.log("Compare identical queues : ", compareQueues(queue1,queue2));
console.log("-------------------------------------------------------------")

queue2.dequeue();
console.log("Queue1 values: " , queue1.SLQdisplay());
console.log("Queue2 values: " , queue2.SLQdisplay());
console.log("Compare different queues : ", compareQueues(queue1,queue2));
console.log("-------------------------------------------------------------")