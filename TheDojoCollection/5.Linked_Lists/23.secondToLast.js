var SLNode = require('./_SLNode');
var SList = require('./_SList');

SList.prototype.secondToLast = function(){
    var curr = this.head;

    if(!curr || !curr.next){
        return false;
    }
    var prev = null;
    var runner = curr.next;

    while(runner){
        prev = curr;
        curr = runner;
        runner = runner.next;
    }
    return prev.val;
}


var list1 = new SList();
console.log("an empty list : ",list1.SLdisplay());
// if empty list return false
console.log("Second to last in an empty list : ",list1.secondToLast());
console.log("-----------------------------------------");

//create a list
var node1 = new SLNode(10);
list1.head = node1;
console.log("a list with only head : ",list1.SLdisplay());
// if value present and at head, return false
console.log("Second to last in a list with only head  : ",list1.secondToLast());
console.log("-----------------------------------------");

var node1 = new SLNode(10);
list1.head = node1;
var node2 = new SLNode(20);
node1.next = node2;
console.log("a list: ",list1.SLdisplay());
// if value present
console.log("Second to last in a list: ",list1.secondToLast());
console.log("-----------------------------------------");
var node3 = new SLNode(30);
var node4 = new SLNode(40);
var node5 = new SLNode(50);
node2.next = node3;
node3.next = node4;
node4.next = node5;

console.log("a list: ",list1.SLdisplay());
// if value present
console.log("Second to last in a list: ",list1.secondToLast());
console.log("-----------------------------------------");

