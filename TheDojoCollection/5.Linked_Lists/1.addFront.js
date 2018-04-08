var SLNode = require('./_SLNode');
var SList = require('./_SList');

SList.prototype.addFront = function(val){
    var newNode = new SLNode(val);
    var curHead = this.head;
    newNode.next = curHead;
    this.head = newNode;
}

// create an empty list
var list1 = new SList();
console.log("an empty list : ",list1.SLdisplay());
console.log("-----------------------------------------");

// addFront a list of values
list1.addFront(40);
list1.addFront(30);
list1.addFront(20);
list1.addFront(10);
console.log("After adding values to the list : ",list1.SLdisplay());
console.log("-----------------------------------------");
