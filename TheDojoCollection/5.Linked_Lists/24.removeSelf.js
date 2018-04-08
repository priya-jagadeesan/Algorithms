var SLNode = require('./_SLNode');
var SList = require('./_SList');

SLNode.prototype.removeSelf = function(){
    var temp = this;
    if(temp.next){
        this.val = temp.next.val;
        this.next = temp.next.next;
        return true;
    }
    return false;
}


//empty list
var list1 = new SList();
//create a list
var node1 = new SLNode(10);
list1.head = node1;
var node2 = new SLNode(20);
var node3 = new SLNode(30);
var node4 = new SLNode(40);
var node5 = new SLNode(50);
node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
console.log("a list : ",list1.SLdisplay());
console.log("remove self from a list : ",node3.removeSelf());
console.log("After remove self from a list : ",list1.SLdisplay());
console.log("-----------------------------------------");
console.log("a list : ",list1.SLdisplay());
console.log("remove self from a list : ",node1.removeSelf());
console.log("After remove self from a list : ",list1.SLdisplay());
console.log("-----------------------------------------");
console.log("a list : ",list1.SLdisplay());
console.log("remove self from a list : ",node5.removeSelf());
console.log("After remove self from a list : ",list1.SLdisplay());
console.log("-----------------------------------------");