var SLNode = require('./_SLNode');
var SList = require('./_SList');

SList.prototype.addBack = function(val){
    var runner = this.head;
    var newNode = new SLNode(val);
    if(!this.head){
        this.head = newNode;
        return true;
    }

    while (runner.next){
        runner = runner.next;
    }
    runner.next = newNode;
    return true;
}

// create an empty list
var list1 = new SList();
console.log("an empty list : ",list1.SLdisplay());
console.log("-----------------------------------------");

console.log("Add value to the end of the list : ",list1.addBack(10));
console.log("After adding values to the list : ",list1.SLdisplay());
console.log("-----------------------------------------");
console.log("Add value to the end of the list : ",list1.addBack(20));
console.log("After adding values to the list : ",list1.SLdisplay());
console.log("-----------------------------------------");
console.log("Add value to the end of the list : ",list1.addBack(30));
console.log("After adding values to the list : ",list1.SLdisplay());
console.log("-----------------------------------------");
console.log("Add value to the end of the list : ",list1.addBack(40));
console.log("After adding values to the list : ",list1.SLdisplay());
console.log("-----------------------------------------");