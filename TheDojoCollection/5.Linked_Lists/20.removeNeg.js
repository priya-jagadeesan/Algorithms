var SLNode = require('./_SLNode');
var SList = require('./_SList');

SList.prototype.removeNeg = function(){
    var prev = null;
    var runner = this.head;

    if(!runner){
        return false;
    }

    while(runner){
        if(runner.val < 0){
            if(!prev){
                this.head = runner.next;
                runner.next = null;
                runner = this.head;
            }
            else{
                prev.next = runner.next;
                runner.next = null;
                runner = prev.next;
            }
        }
        else{
            prev = runner;
            runner = runner.next;
        }
    }
    return true;
}

// create an empty list
var list1 = new SList();
console.log("an empty list : ",list1.SLdisplay());
// if empty list return false
console.log("Remove negative values in an empty list : ",list1.removeNeg());
console.log("After Remove negative values in an empty list : ",list1.SLdisplay());
console.log("-----------------------------------------");

//create a list
var node1 = new SLNode(-10);
list1.head = node1;
console.log("a list of values: ",list1.SLdisplay());
// if negative value present and at only head, remove and return true
console.log("Remove negative values which is only node in a list : ",list1.removeNeg());
console.log("After Remove negative values which is only node in a list : ",list1.SLdisplay());
console.log("-----------------------------------------");

var node1 = new SLNode(-1);
list1.head = node1;
var node2 = new SLNode(-2);
var node3 = new SLNode(-2);
var node4 = new SLNode(-4);
var node5 = new SLNode(4);
var node6 = new SLNode(-1);
var node7 = new SLNode(10);
var node8 = new SLNode(-19);
var node9 = new SLNode(-19);
node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
node5.next = node6;
node6.next = node7;
node7.next = node8;
node8.next = node9;
list1.head = node1;
console.log("a list of values: ",list1.SLdisplay());
// remove negative values and return true
console.log("Remove negative values in a list : ",list1.removeNeg());
console.log("After Remove negative values in a list : ",list1.SLdisplay());
console.log("-----------------------------------------");

