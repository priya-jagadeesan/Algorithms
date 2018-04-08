var SLNode = require('./_SLNode');
var SList = require('./_SList');

SList.prototype.partition = function(val){
    var present = this.contains(val);
    if (!present){
        return false;
    }
    var runner = this.head;
    var flag = false;
    var removeAdd;

    var newNode = new SLNode(val);
    var newList = new SList();
    newList.head = newNode;

    while(runner){
        if(runner.val < val){
            newList.prependVal(runner.val,val);
        }
        if(runner.val > val){
            newList.appendVal(runner.val,val);
        }
        runner = runner.next;
    }
    this.head = newList.head;
    return true;
}

SList.prototype.contains = function(val){
    var runner = this.head;
    while(runner){
        if(runner.val === val ){
            return true;
        }
        runner = runner.next;
    }
    return false;
}

SList.prototype.appendVal = function(val,after){
    var newNode = new SLNode(val);
    runner = this.head;

    if(!runner){
        this.head = newNode;
        return true;
    }

    if(!runner.next){
        this.head.next = newNode;
        return true;
    }

    curr = null;

    while(runner.next){
        if(runner.val === after){
            curr = runner;
        }
        runner = runner.next;
    }

    if(curr){
        newNode.next = curr.next;
        curr.next = newNode;
    }
    else{
        runner.next = newNode;
    }
    return true;
}

SList.prototype.prependVal = function(val,before){
    var newNode = new SLNode(val);
    curr = this.head;
    if(!curr){
        this.head = newNode;
        return true;
    }

    prev = null;
    runner = curr;

    if(curr.val === before){
        newNode.next = curr;
        this.head = newNode;
        return true;
    }

    while(curr){
        if(curr.next){
            if(curr.next.val === before){
                prev = curr;
            }
        }
        runner = curr;
        curr = curr.next;
    }
    
    if(prev){
        newNode.next = prev.next;
        prev.next = newNode;
    }
    else{
        runner.next = newNode;
    }
    return true;
}

SList.prototype.removeVal = function(val){
    runner = this.head;

    if(!runner){
        return false;
    }

    if(runner && runner.val === val){
        this.head = runner.next;
        return true;
    }

    curr = null;
    prev = runner;

    while(runner){
        if(runner.val === val){
            curr = runner;
            break;
        }
        prev = runner;
        runner = runner.next;
    }

    if(curr){
        prev.next = curr.next;
        curr.next = null;
        return true
    }
    return false;
}

var list1 = new SList();
var node1 = new SLNode(21);
var node2 = new SLNode(3);
var node3 = new SLNode(14);
var node4 = new SLNode(2);
var node5 = new SLNode(10);
var node6 = new SLNode(13);
var node7 = new SLNode(4);
var node8 = new SLNode(20);
var node9 = new SLNode(0);
var node10 = new SLNode(40);
node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
node5.next = node6;
node6.next = node7;
node7.next = node8;
node8.next = node9;
node9.next = node10;
list1.head = node1;
console.log("Before a paritition of a list : ",list1.SLdisplay());
console.log("paritition on value in a list : ",list1.partition(10));
console.log("After paritition on value in a list : ",list1.SLdisplay());
console.log("-------------------------------------------------------------");