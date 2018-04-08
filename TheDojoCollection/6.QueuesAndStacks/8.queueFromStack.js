var arrStack = require('./_ArrStack');
var listStack = require('./_SLStack');

function queue(){
    var fwd_stack = new arrStack(); // for enqueue()
    var rev_stack = new arrStack(); // for dequeue()

    this.enqueue = function(val){
        fwd_stack.push(val);
        return true;
    }

    this.dequeue = function(){
        if(!fwd_stack.isEmpty()){
            while(fwd_stack.size()){
                rev_stack.push(fwd_stack.pop());
            }
            var val = rev_stack.pop();
            while(rev_stack.size()){
                fwd_stack.push(rev_stack.pop());
            }
            return val;
        }
        return null;
    }

    this.front = function(){
        if(!fwd_stack.isEmpty()){
            while(fwd_stack.size()){
                rev_stack.push(fwd_stack.pop());
            }
            var val = rev_stack.top();
            while(rev_stack.size()){
                fwd_stack.push(rev_stack.pop());
            }
            return val;
        }
        return null;
    }

    this.contains = function(val){
        if(!fwd_stack.isEmpty()){
            var flag = false;
            while(fwd_stack.size()){
                if(fwd_stack.top() === val){
                    flag = true;
                    break;
                }
                rev_stack.push(fwd_stack.pop());
            }

            while(rev_stack.size()){
                fwd_stack.push(rev_stack.pop());
            }
            return flag;
        }
        return false;
    }

    this.isEmpty = function(){
        return fwd_stack.isEmpty();
    }

    this.SLQlength = function(){
        var count = 0;
        if(!fwd_stack.isEmpty()){
            while(fwd_stack.size()){
                rev_stack.push(fwd_stack.pop());
            }

            while(rev_stack.size()){
                count++;
                fwd_stack.push(rev_stack.pop());
            }
        }
        return count;
    }

    this.SLQdisplay = function(){
        var str = '';
        if(!fwd_stack.isEmpty()){
            while(fwd_stack.size()){
                rev_stack.push(fwd_stack.pop());
            }

            while(rev_stack.size()){
                str += rev_stack.top() + ',';
                fwd_stack.push(rev_stack.pop());
            }
        }
        return str;
    }
}

// create an empty queue
var queue1 = new queue();
console.log("Queue empty? :" , queue1.isEmpty());
console.log("Empty Queue size : " , queue1.SLQlength());
console.log("Queue contains val? :" , queue1.contains(10));
console.log("Empty Queue front value : " , queue1.front());
console.log("Dequeue empty queue : " , queue1.dequeue());
console.log("Empty Queue values: " , queue1.SLQdisplay());
console.log("-------------------------------------------------");
console.log("Queue enqueue: " ,queue1.enqueue(10));
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