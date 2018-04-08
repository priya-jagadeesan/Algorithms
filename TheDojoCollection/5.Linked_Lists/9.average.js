var SLNode = require('./_SLNode');
var SList = require('./_SList');

SList.prototype.average = function(){
    var runner = this.head;
    var sum = 0;
    var length = 0;
    while(runner){
        sum += runner.val;
        length++;
        runner = runner.next;
    }
    return (sum/length);
}

// create an empty list
var list1 = new SList();
console.log("an empty list : ",list1.SLdisplay());
console.log("Average value of an empty list : ",list1.average());
console.log("------------------------------------------------");

// create a list of values
var node1 = new SLNode(10);
list1.head = node1;
var node2 = new SLNode(20);
var node3 = new SLNode(300);
var node4 = new SLNode(4);
var node5 = new SLNode(200);
var node6 = new SLNode(30);
node1.next = node2;
console.log("After adding values to the list : ",list1.SLdisplay());
console.log("Average value of the list : ",list1.average());
console.log("------------------------------------------------");
node2.next = node3;
node3.next = node4;
node4.next = node5;
node5.next = node6;
console.log("After adding values to the list : ",list1.SLdisplay());
console.log("Average value in the list : ",list1.average());
console.log("------------------------------------------------");
