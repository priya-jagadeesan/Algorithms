function CirQueue(cap){
    var head = -1;
    var tail = 0;
    var capacity = cap;
    var arr = [];

    this.front = function(){
        if(!this.isEmpty()){
            return arr[head];
        }
        return null;
    }

    this.isEmpty = function(){
        if(head == -1 ){
            console.log("queue is empty");
            return true;
        }
        return false;
    }

    this.isFull = function(){
        if((tail === capacity -1 && head === 0) || (tail === head -1 )){
            console.log("queue is full");
            return true;
        }
        return false;
    }

    this.size = function() {
        if(!this.isEmpty()){
            if(head === tail){
                return 1;
            }
            var count = 1;
            var idx = head;
            while( idx != tail ){
                count++;
                if(idx == capacity - 1 && head !=0){
                    idx = 0;
                }
                else{
                    idx++;
                }
            }
            return count;
        }
        return 0;
    }

    this.enqueue = function(val){
        if(this.isFull()){
            return false;
        }
        if(tail === capacity - 1 && head!= 0){
            tail = 0;
        }
        else{
            tail++;
        }
        if(head === -1){
            head = tail = 0;
        }
        arr[tail] = val;
        return true;
    }

    this.dequeue = function(){
        if(this.isEmpty()){
            return false;
        }
        var val = arr[head];
        arr[head] = null;
        if(head === tail){
            head = -1;
            tail = 0;
        }
        else{
            if(head === capacity-1){
                head = 0;
            }
            else{
                head++;
            }
        }
        return val;
    }

    this.contains = function(val){
        if(!this.isEmpty()){
            if(head === tail){
                if(arr[head] === val){
                    return true;
                }
                else{
                    return false;
                }
            }
            var flag = false;
            var idx = head;
            while( idx != tail ){
                if(arr[idx] === val){
                    flag = true;
                    break;
                }
                if(idx == capacity - 1 && head !=0){
                    idx = 0;
                }
                else{
                    idx++;
                }
            }
            return flag;
        }
        return false;
    }

    this.grow = function(size){
        capacity = size;
        return true;
    }
}

module.exports = CirQueue;