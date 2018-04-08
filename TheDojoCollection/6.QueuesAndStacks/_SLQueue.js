// Singly List Queues - ADT (FIFO / LILO)

// require Singly List Node
var Node = require('./_SLNode');

// SL Queue
function SLQueue(){
    this.head = null;
    this.tail = null;
    this.size = 0;
}

// enqueue(val) - add val to Queue at end
SLQueue.prototype.enqueue = function(val) {
    if(!this.head){
        this.head = this.tail = new Node(val);
        this.size++;
        return true;
    }
    var curr = this.tail;
    curr.next = new Node(val);
    this.tail = curr.next;
    this.size++;
    return true;
}

// dequeue() - remove and return front value of Queue
SLQueue.prototype.dequeue = function(){
    if(this.head){
        var val = this.head.val;
        if(this.head === this.tail){
            this.head = this.tail = null;
            this.size--;
            return val;
        }
        var curr = this.head;
        this.head = curr.next;
        curr.next = null;
        this.size--;
        return val;
    }
    return null;
}

// front() - return (not remove) front value of Queue
SLQueue.prototype.front = function(){
    if(this.size !== 0){
        return this.head.val;
    }
    return null;
}

// contains(val) - Queue contains val?
SLQueue.prototype.contains = function(val){
    if(this.head){
        curr = this.head;
        while(curr){
            if(curr.val === val){
                return true;
            }
            curr = curr.next;
        }
    }
    return false;
}

// isEmpty() - Queue contains no values?
SLQueue.prototype.isEmpty  = function(){
    if(this.size === 0){
        return true;
    }
    return false;
}

// SLQlength() - return number of values in Queue
SLQueue.prototype.SLQlength  = function(){
    return this.size;
}

// SLQdisplay() - return the values in Queue as a string
SLQueue.prototype.SLQdisplay  = function(){
    var curr = this.head;
    var str ='';
    while(curr){
        str += curr.val + ',';
        curr = curr.next;
    }
    return str;
}

module.exports = SLQueue;