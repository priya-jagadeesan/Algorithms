var SLNode = require('./_SLNode');
var SList = require('./_SList');

SList.prototype.min = function(){
    var runner = this.head;
    if (!runner){
        return null;
    }
    if (!runner.next){
        return runner.val;
    }
    var min = runner.val;
    while(runner.next){
        if( runner.next.val < min){
            min = runner.next.val;
        }
        runner = runner.next;
    }
    return min;
}

SList.prototype.minToFront = function(){
    var min = this.min();
    var minNode;
    var runner = this.head;
    if(!runner){
        console.log("Cannot perform operation on an empty list")
        return false;
    }
    if(runner.val === min){
        return true;
    }
    while(runner.next){
        if(runner.next.val === min){
            minNode = runner.next;
            break;
        }
        runner = runner.next;
    }

    runner.next = minNode.next;
    minNode.next = this.head;
    this.head = minNode;
    return true;
}

// create an empty list
var list1 = new SList();
console.log("an empty list : ",list1.SLdisplay());
console.log("Move minimum value to front of an empty list : ",list1.minToFront());
console.log("-----------------------------------------");

// create a list of values
var node1 = new SLNode(10);
list1.head = node1;
console.log("After adding values to the list : ",list1.SLdisplay());
console.log("Move minimum value to front of the list : ",list1.minToFront());
console.log("After moving min value to front in the list : ",list1.SLdisplay());
console.log("-----------------------------------------");

var node2 = new SLNode(20);
var node3 = new SLNode(3);
var node4 = new SLNode(40);
node1.next = node2;
node2.next = node3;
node3.next = node4;

console.log("After adding values to the list : ",list1.SLdisplay());
console.log("Move minimum value to front of the list : ",list1.minToFront());
console.log("After moving min value to front in the list : ",list1.SLdisplay());
console.log("-----------------------------------------");

var node5 = new SLNode(1);
node4.next = node5;

console.log("After adding values to the list : ",list1.SLdisplay());
console.log("Move minimum value to front of the list : ",list1.minToFront());
console.log("After moving min value to front in the list : ",list1.SLdisplay());
console.log("-----------------------------------------");