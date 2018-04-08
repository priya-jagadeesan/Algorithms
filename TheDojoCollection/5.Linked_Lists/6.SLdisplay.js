var SLNode = require('./_SLNode');
var SList = require('./_SList');

SList.prototype.SLdisplay = function(){
    var myList = '';
    var runner = this.head;
    while(runner){
        myList += runner.val + ',';
        runner = runner.next;
    }
    return myList;
}

// create an empty list
var list1 = new SList();
console.log("Display an empty list : ",list1.SLdisplay());
console.log("------------------------------------------------");

// create a list of values
var node1 = new SLNode(10);
list1.head = node1;
var node2 = new SLNode(20);
var node3 = new SLNode(30);
var node4 = new SLNode(40);
var node5 = new SLNode(20);
var node6 = new SLNode(30);
var node7 = new SLNode(40);
node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
node5.next = node6;
node6.next = node7;
console.log("Dispay after adding values to the list : ",list1.SLdisplay());
console.log("------------------------------------------------");
