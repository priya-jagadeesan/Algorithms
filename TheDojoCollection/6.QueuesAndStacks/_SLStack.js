// Singly List Stacks - ADT (LIFO / FILO)

// require Singly List Node
var Node = require('./_SLNode');

// SL Stack
function SLStack(){
    this.head = null;
    this.stack_top = null;
    this.stack_size = 0;
}

// push(val) - add val to Stack at top
SLStack.prototype.push = function(val) {
    if(!this.head){
        this.head = this.stack_top = new Node(val);
        this.stack_size++;
        return true;
    }
    this.stack_top.next = new Node(val);
    this.stack_top = this.stack_top.next;
    this.stack_size++;
    return true;
}

// top() - return top val of Stack
SLStack.prototype.top = function(){
    if(this.stack_top){
        return topValue = this.stack_top.val;
    }
    console.log('List Stack is Empty');
    return null;
}

// pop() - remove and return top value of Stack
SLStack.prototype.pop = function(){
    if(this.stack_top){
        var val = this.stack_top.val;
        var runner = this.head;

        if(runner == this.stack_top){
            this.head = this.stack_top = null;
            this.stack_size--;
            return val;
        }
        
        while(runner.next != this.stack_top){
            runner = runner.next;
        }

        runner.next = null;
        this.stack_top = runner;
        this.stack_size--;
        return val;
    }
    console.log('List Stack is Empty');
    return null;
}

// contains(val) - Stack contains val?
SLStack.prototype.contains = function(val){
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

// isEmpty() - Stack contains no values?
SLStack.prototype.isEmpty  = function(){
    if(!this.stack_size){
        return true;
    }
    return false;
}

// size() - return number of values in Stack
SLStack.prototype.size  = function(){
    return this.stack_size;
}

// SLSdisplay() - return the values in Stack as a string
SLStack.prototype.SLSdisplay  = function(){
    var curr = this.head;
    var str ='';
    while(curr){
        str += curr.val + ',';
        curr = curr.next;
    }
    return str;
}

module.exports = SLStack;