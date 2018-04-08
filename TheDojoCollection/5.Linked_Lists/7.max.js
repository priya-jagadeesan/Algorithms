var SLNode = require('./_SLNode');
var SList = require('./_SList');

SList.prototype.max = function(){
    var runner = this.head;
    if (!runner){
        return null;
    }
    if (!runner.next){
        return runner.val;
    }
    var max = runner.val;
    while(runner.next){
        if( runner.next.val > max){
            max = runner.next.val;
        }
        runner = runner.next;
    }
    return max;
}

// create an empty list
var list1 = new SList();
console.log("an empty list : ",list1.SLdisplay());
console.log("Max value in an empty list : ",list1.max());
console.log("------------------------------------------------");

// create a list of values
var node1 = new SLNode(10);
list1.head = node1;
var node2 = new SLNode(20);
var node3 = new SLNode(300);
var node4 = new SLNode(40);
var node5 = new SLNode(200);
var node6 = new SLNode(30);
node1.next = node2;
console.log("After adding values to the list : ",list1.SLdisplay());
console.log("Max value in the list : ",list1.max());
console.log("------------------------------------------------");
node2.next = node3;
node3.next = node4;
node4.next = node5;
node5.next = node6;
console.log("After adding values to the list : ",list1.SLdisplay());
console.log("Max value in the list : ",list1.max());
console.log("------------------------------------------------");
