var SLNode = require('./_SLNode');
var SList = require('./_SList');

SList.prototype.splitOnValue = function (num) {
    var runner = this.head;
    var prev = null;

    if(!runner){
        return null;
    }

    if(runner.val === num){
        // this.head = null;
        return runner;
    }

    while(runner){
        if(runner.next){
            if(runner.next.val === num){
                prev = runner;
                runner = runner.next;
                break;
            }
        }
        runner = runner.next;
    }

    if(prev){
        prev.next = null;
        return runner;
    }
    return null;
}

// create an empty list
var list1 = new SList();
console.log("an empty list : ",list1.SLdisplay());
// if empty list return null
console.log("Split on value in an empty list : ",list1.splitOnValue(10));
console.log("After Split on value in an empty list : ",list1.SLdisplay());
console.log("-----------------------------------------");

//create a list
var node1 = new SLNode(10);
list1.head = node1;
console.log("a list of values: ",list1.SLdisplay());
// if value present and at head, only node, return list
console.log("Split on value which is only node in a list : ",list1.splitOnValue(10));
console.log("After Split on value which is only node in a list : ",list1.SLdisplay());
console.log("-----------------------------------------");

//create a list
var node1 = new SLNode(10);
list1.head = node1;
var node2 = new SLNode(20);
var node3 = new SLNode(30);
var node4 = new SLNode(40);
node1.next = node2;
node2.next = node3;
node3.next = node4;
list1.head = node1;
console.log("a list of values: ",list1.SLdisplay());
// if value present as head, return list
console.log("Split on value which is head in a list : ",list1.splitOnValue(10));
console.log("After Split on value which is head in a list : ",list1.SLdisplay());
console.log("-----------------------------------------");

console.log("a list of values: ",list1.SLdisplay());
// if value not present, return null
console.log("Split on value which is not present in a list : ",list1.splitOnValue(10));
console.log("After Split on value which is not present in a list : ",list1.SLdisplay());
console.log("-----------------------------------------");

console.log("a list of values: ",list1.SLdisplay());
// if value present and not as head, split on value and send the rest of list
console.log("Split on value which is present in a list : ",list1.splitOnValue(30));
console.log("After Split on value which is present in a list : ",list1.SLdisplay());
console.log("-----------------------------------------");

