var SLNode = require('./_SLNode');
var SList = require('./_SList');

SList.prototype.removeFront = function(){
    var runner = this.head;
    if (runner){
        this.head = runner.next;
        runner.next = null;
        return true;
    }
    console.log("Cannot remove front from an empty list")
    return false;
}

// create an empty list
var list1 = new SList();
console.log("an empty list : ",list1.SLdisplay());
console.log("Remove front of an empty list : ",list1.removeFront());
console.log("------------------------------------------------");

// create a list of values
var node1 = new SLNode(10);
list1.head = node1;

// removeFront Head value
console.log("After adding values to the list with only head : ",list1.SLdisplay());
console.log("Remove front of the list with only head : ",list1.removeFront());
console.log("After remove front value of the list with only head : ",list1.SLdisplay());
console.log("------------------------------------------------");

list1.head = node1;
var node2 = new SLNode(20);
var node3 = new SLNode(30);
var node4 = new SLNode(40);
node1.next = node2;
node2.next = node3;
node3.next = node4;
console.log("After adding values to the list : ",list1.SLdisplay());

console.log("Remove front of the list : ",list1.removeFront());
console.log("After remove front value of the list : ",list1.SLdisplay());
console.log("------------------------------------------------");

console.log("Remove front of the list : ",list1.removeFront());
console.log("After remove front value of the list : ",list1.SLdisplay());
console.log("------------------------------------------------");

console.log("Remove front of the list : ",list1.removeFront());
console.log("After remove front value of the list : ",list1.SLdisplay());
console.log("------------------------------------------------");