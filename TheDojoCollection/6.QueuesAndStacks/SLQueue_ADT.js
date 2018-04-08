//require SLQueue 
var Queue = require('./_SLQueue');

// create an empty queue
var queue1 = new Queue();
console.log("Queue empty? :" , queue1.isEmpty());
console.log("Empty Queue size : " , queue1.SLQlength());
console.log("Queue contains val? :" , queue1.contains(10));
console.log("Empty Queue front value : " , queue1.front());
console.log("Dequeue empty queue : " , queue1.dequeue());
console.log("Empty Queue values: " , queue1.SLQdisplay());
console.log("-------------------------------------------------");
queue1.enqueue(10);
console.log("Queue values: " , queue1.SLQdisplay());
console.log("Queue empty? : " , queue1.isEmpty());
console.log("Queue size? : " , queue1.SLQlength());
console.log("Queue contains value 10? : " , queue1.contains(10));
console.log("Queue front value? : " , queue1.front());
console.log("Dequeue : " , queue1.dequeue());
console.log("Queue values: " , queue1.SLQdisplay());
console.log("-------------------------------------------------");

queue1.enqueue(10);
queue1.enqueue(20);
queue1.enqueue(30);
queue1.enqueue(40);
queue1.enqueue(50);
queue1.enqueue(60);
console.log("Queue values: " , queue1.SLQdisplay());
console.log("Queue size? : " , queue1.SLQlength());
console.log("Queue front value? : " , queue1.front());
console.log("Dequeue front : " , queue1.dequeue());
console.log("Queue size? : " , queue1.SLQlength());
console.log("-------------------------------------------------");
console.log("Queue values: " , queue1.SLQdisplay());