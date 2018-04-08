function removeMin(queue){
    if(!queue.head){
        return true;
    }
    if(queue.head === queue.tail){
        queue.head = queue.tail = null;
        return true;
    }
    
    var min = queue.head.val;
    var curr = queue.head.next;

    while(curr){
        if(curr.val < min){
            min = curr.val;
        }
        curr = curr.next;
    }

    var minCount = 0;
    curr = queue.head;

    while(curr){
        if(curr.val === min){
            minCount++;
        }
        curr = curr.next;
    }

    var prev = null;
    curr = queue.head;

    while(curr){
        if(curr.val === min){
            if(minCount === 1){
                if(curr == queue.head){
                    queue.head = curr.next;
                    curr.next = null;
                    curr = queue.head
                }   
                else{
                    prev.next = curr.next;
                    curr.next = null;
                    curr = prev.next;
                }
            }
            else{
                minCount--;
                prev = curr;
                curr = curr.next;
            }
        }
        else{
            prev = curr;
            curr = curr.next;
        }
    }
    return true;
}

//require SLQueue 
var Queue = require('./_SLQueue');

// create two queues
var queue1 = new Queue();
console.log("Before remove min Queue values: " , queue1.SLQdisplay());
console.log("Remove min from empty queue : ", removeMin(queue1));
console.log("After remove min Queue values: " , queue1.SLQdisplay());
console.log("------------------------------------------")

queue1.enqueue(10);
console.log("Before remove min Queue values: " , queue1.SLQdisplay());
console.log("Remove min from only head queue : ", removeMin(queue1));
console.log("After remove min Queue values: " , queue1.SLQdisplay());
console.log("------------------------------------------")

queue1.enqueue(10);
queue1.enqueue(22);
queue1.enqueue(3);
queue1.enqueue(4);
queue1.enqueue(50);
queue1.enqueue(2);
queue1.enqueue(22);
console.log("Before remove min Queue values: " , queue1.SLQdisplay());
console.log("Remove single min at tail from a queue : ", removeMin(queue1));
console.log("After remove min Queue values: " , queue1.SLQdisplay());
console.log("-------------------------------------------------------------")

var queue2 = new Queue();
queue2.enqueue(10);
queue2.enqueue(2);
queue2.enqueue(30);
queue2.enqueue(2);
queue2.enqueue(50);
queue2.enqueue(2);
console.log("Before remove min Queue values: " , queue2.SLQdisplay());
console.log("Remove last min in multiple min from a queue : ", removeMin(queue2));
console.log("After remove min Queue values: " , queue2.SLQdisplay());