var SLNode = require('./_SLNode');
var SList = require('./_SList');

SList.prototype.removeBack = function(){
    var prev = curr = this.head;
    var runner = null;
    if(!curr){
        console.log("Cannot remove value from an empty list")
        return false;
    }
    else if(!curr.next){
        this.head = null;
        return true;
    }
    else{
        runner = curr.next;
        while(runner){
            prev = curr;
            curr = runner;
            runner = runner.next;
        }
        prev.next = null;
        return true;
    }
}

// create an empty list
var list1 = new SList();
console.log("an empty list : ",list1.SLdisplay());
console.log("Remove last value of an empty list : ",list1.removeBack());
console.log("------------------------------------------------");

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
console.log("Remove last value  of the list : ",list1.removeBack());
console.log("after removing last value in the list : ",list1.SLdisplay());
console.log("-----------------------------------------");
console.log("After adding values to the list : ",list1.SLdisplay());
console.log("Remove last value  of the list : ",list1.removeBack());
console.log("after removing last value in the list : ",list1.SLdisplay());
console.log("-----------------------------------------");
console.log("After adding values to the list : ",list1.SLdisplay());
console.log("Remove last value  of the list : ",list1.removeBack());
console.log("after removing last value in the list : ",list1.SLdisplay());
console.log("-----------------------------------------");
console.log("After adding values to the list : ",list1.SLdisplay());
console.log("Remove last value  of the list : ",list1.removeBack());
console.log("after removing last value in the list : ",list1.SLdisplay());
console.log("-----------------------------------------");