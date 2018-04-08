var SLNode = require('./_SLNode');
var SList = require('./_SList');

SList.prototype.copyList = function(){
    var curr = this.head;

    if(!curr){
        return null;
    }
    var newNode = new SLNode(this.head.val);
    var list = new SList();
    list.head = newNode;
    newHead = list.head;

    var newList = list.head;
    curr = curr.next;

    while(curr){
        newNode = new SLNode(curr.val);
        newList.next = newNode;
        newList = newList.next;
        curr = curr.next;
    }
    return newHead;
}

var list1 = new SList();
console.log("an empty list : ",list1.SLdisplay());
// if empty list return null
console.log("Copy list in an empty list : ",list1.copyList());
console.log("----------------------------------------------");

//create a list
var node1 = new SLNode(10);
list1.head = node1;
console.log("a list with only head: ",list1.SLdisplay());
// if value present and at head
console.log("Copy list in a list with only head: ",list1.copyList());
console.log("---------------------------------------------");

var node1 = new SLNode(10);
list1.head = node1;
var node2 = new SLNode(20);
node1.next = node2;
console.log("a list: ",list1.SLdisplay());
// if value present
console.log("Copy list in a list : ",list1.copyList());
console.log("---------------------------------------------");
var node3 = new SLNode(30);
var node4 = new SLNode(40);
var node5 = new SLNode(50);
node2.next = node3;
node3.next = node4;
node4.next = node5;

console.log("a list: ",list1.SLdisplay());
// if value present
console.log("Copy list in a list : ",list1.copyList());
console.log("---------------------------------------------");

