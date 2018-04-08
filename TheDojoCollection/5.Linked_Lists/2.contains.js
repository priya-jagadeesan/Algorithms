var SLNode = require('./_SLNode');
var SList = require('./_SList');

SList.prototype.contains = function(val){
    var runner = this.head;
    while(runner){
        if(runner.val === val ){
            return true;
        }
        runner = runner.next;
    }
    return false;
}

// create an empty list
var list1 = new SList();
console.log("an empty list : ",list1.SLdisplay());
console.log("list contains value 30? : ",list1.contains(30));
console.log("-----------------------------------------");

// create a list of values
var node1 = new SLNode(10);
list1.head = node1;
var node2 = new SLNode(20);
var node3 = new SLNode(30);
var node4 = new SLNode(40);
node1.next = node2;
node2.next = node3;
node3.next = node4;
console.log("After adding values to the list : ",list1.SLdisplay());
console.log("list contains value 10? : ",list1.contains(10));
console.log("list contains value 30? : ",list1.contains(30));
console.log("list contains value 50? : ",list1.contains(50));
console.log("-----------------------------------------");