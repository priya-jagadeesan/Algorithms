var SLNode = require('./_SLNode');
var SList = require('./_SList');

SList.prototype.removeVal = function(val){
    var runner = this.head;

    if(!runner){
        return false;
    }

    if(runner && runner.val === val){
        this.head = runner.next;
        return true;
    }

    var curr = null;
    var prev = runner;

    while(runner){
        if(runner.val === val){
            curr = runner;
            break;
        }
        prev = runner;
        runner = runner.next;
    }

    if(curr){
        prev.next = curr.next;
        curr.next = null;
        return true
    }
    return false;
}

// create an empty list
var list1 = new SList();
console.log("an empty list : ",list1.SLdisplay());
// if empty list return false
console.log("Remove value in an empty list : ",list1.removeVal(10));
console.log("After Remove value in an empty list : ",list1.SLdisplay());
console.log("-----------------------------------------");

//create a list
var node1 = new SLNode(10);
list1.head = node1;
console.log("a list of values: ",list1.SLdisplay());
// if value present and at head, remove and make next node as head return true
console.log("Remove value which is head in a list : ",list1.removeVal(10));
console.log("After Remove value which is head in a list : ",list1.SLdisplay());
console.log("-----------------------------------------");

var node1 = new SLNode(10);
list1.head = node1;
var node2 = new SLNode(20);
var node3 = new SLNode(30);
var node4 = new SLNode(40);
node1.next = node2;
node2.next = node3;
node3.next = node4;

console.log("a list of values: ",list1.SLdisplay());
// if value present as head, remove and relink the list return true
console.log("Remove value which is head in a list of values  : ",list1.removeVal(10));
console.log("After Remove value which is head in a list of values: ",list1.SLdisplay());
console.log("-----------------------------------------");

console.log("a list of values: ",list1.SLdisplay());
// if value not present, return false
console.log("Remove value which is not present in a list of values  : ",list1.removeVal(15));
console.log("After Remove value which is not present in a list of values: ",list1.SLdisplay());
console.log("-----------------------------------------");

console.log("a list of values: ",list1.SLdisplay());
// if value present and not as head, remove  and return true
console.log("Remove value which is present and not head in a list of values  : ",list1.removeVal(30));
console.log("After Remove value which is present and not head in a list of values: ",list1.SLdisplay());
console.log("-----------------------------------------");

// create another list of values
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
console.log("a list of values: ",list1.SLdisplay());
console.log("Remove value which is present and not head in a list of values  : ",list1.removeVal(30));
console.log("After Remove value which is present and not head in a list of values: ",list1.SLdisplay());
console.log("-----------------------------------------");