var SLNode = require('./_SLNode');
var SList = require('./_SList');

SList.prototype.filterList = function(lowVal,highVal){
    if(highVal < lowVal || highVal === lowVal){
        console.log("Incorrect input values");
        return false;
    }
    var curr = this.head;
    if(!curr){
        return null;
    }

    var prev = null;

    while(curr){
        if(curr.val < lowVal || curr.val > highVal){
            if(!prev){
                prev = curr;
                curr = curr.next;
                this.head = curr;
                prev.next = null;
                prev = null;
                continue;
            }
            else{
                prev.next = curr.next;
                curr.next = null;
                curr = prev.next;
            }
        }
        else{
            prev = curr;
            curr = curr.next;
        }
    }
}

var list1 = new SList();
var node1 = new SLNode(1);
var node2 = new SLNode(3);
var node3 = new SLNode(14);
var node4 = new SLNode(2);
var node5 = new SLNode(10);
var node6 = new SLNode(13);
var node7 = new SLNode(4);
var node8 = new SLNode(20);
var node9 = new SLNode(0);
var node10 = new SLNode(40);
node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
node5.next = node6;
node6.next = node7;
node7.next = node8;
node8.next = node9;
node9.next = node10;
list1.head = node1;

console.log("a list : ",list1.SLdisplay());
console.log("filter list in an empty list : ",list1.filterList(4,30));
console.log("after filter list on value in a list : ",list1.SLdisplay());
console.log("----------------------------------------------");