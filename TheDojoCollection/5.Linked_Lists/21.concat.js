var SLNode = require('./_SLNode');
var SList = require('./_SList');

SList.prototype.concat = function(listHead){
    var runner = this.head;

    if(!runner){
        this.head = listHead.head;
        return true;
    }

    while(runner.next){
        runner = runner.next;
    }

    runner.next = listHead.head;
    return true;
}

var list1 = new SList();
var list2 = new SList();
console.log("an empty list 1: ",list1.SLdisplay());
console.log("an empty list 2: ",list2.SLdisplay());
// if empty list return false
console.log("Concat two empty list : ",list1.concat(list2));
console.log("After concat two empty list 1: ",list1.SLdisplay());
console.log("After concat two empty list 2: ",list2.SLdisplay());
console.log("-----------------------------------------");

//create a list
var node1 = new SLNode(10);
list1.head = node1;
console.log("a list 1: ",list1.SLdisplay());
console.log("an empty list 2: ",list2.SLdisplay());
// if value present and at head, append list2 at end and return true
console.log("Concat two lists : ",list1.concat(list2));
console.log("After concat two list 1: ",list1.SLdisplay());
console.log("After concat two list 2: ",list2.SLdisplay());
console.log("-----------------------------------------");
console.log("a list 1: ",list1.SLdisplay());
console.log("an empty list 2: ",list2.SLdisplay());
// if value present and at head, append list2 at end and return true
console.log("Concat two lists : ",list2.concat(list1));
console.log("After concat two list 1: ",list1.SLdisplay());
console.log("After concat two list 2: ",list2.SLdisplay());
console.log("-----------------------------------------");

var node1 = new SLNode(10);
list1.head = node1;
var node2 = new SLNode(20);
var node3 = new SLNode(30);
var node4 = new SLNode(40);
var node5 = new SLNode(40);
node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;

var node10 = new SLNode(10);
list2.head = node10;
var node20 = new SLNode(20);
var node30 = new SLNode(30);
var node40 = new SLNode(40);
var node50 = new SLNode(40);
node10.next = node20;
node20.next = node30;
node30.next = node40;
node40.next = node50;
console.log("a list 1: ",list1.SLdisplay());
console.log("a list 2: ",list2.SLdisplay());
// if value present and at head, append list2 at end and return true
console.log("Concat two lists : ",list1.concat(list2));
console.log("After concat two list 1: ",list1.SLdisplay());
console.log("After concat two list 2: ",list2.SLdisplay());
console.log("-----------------------------------------");

