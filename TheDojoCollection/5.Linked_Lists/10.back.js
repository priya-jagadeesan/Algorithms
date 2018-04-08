var SLNode = require('./_SLNode');
var SList = require('./_SList');

SList.prototype.back = function(){
    var runner = prev = this.head;
    while (runner){
        prev = runner;
        runner = runner.next;
    }
    return (prev? prev.val : null);
}

// create an empty list
var list1 = new SList();
console.log("an empty list : ",list1.SLdisplay());
console.log("Peek last value of an empty list : ",list1.back());
console.log("------------------------------------------------");

// peek last value of a list of values
var node1 = new SLNode(10);
list1.head = node1;
var node2 = new SLNode(20);
var node3 = new SLNode(30);
var node4 = new SLNode(40);
node1.next = node2;
node2.next = node3;
node3.next = node4;
console.log("After adding values to the list : ",list1.SLdisplay());
console.log("Peek last value  of the list : ",list1.back());
console.log("No change in the list after back() : ",list1.SLdisplay());
console.log("-----------------------------------------");
