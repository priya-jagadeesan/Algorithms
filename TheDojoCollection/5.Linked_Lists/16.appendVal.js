var SLNode = require('./_SLNode');
var SList = require('./_SList');

// append method with new value, 'val' and the append after node, 'after'
SList.prototype.appendVal = function(val,after){
    var newNode = new SLNode(val);
    var runner = this.head;

    if(!runner){
        this.head = newNode;
        return true;
    }

    var curr = null;

    while(runner.next){
        if(runner.val === after){
            curr = runner;
            break;
        }
        runner = runner.next;
    }

    if(curr){
        newNode.next = curr.next;
        curr.next = newNode;
    }
    else{
        runner.next = newNode;
    }
    return true;
}

// create an empty list
var list1 = new SList();
console.log("an empty list : ",list1.SLdisplay());
// if empty list append and make it head
console.log("Append value in an empty list : ",list1.appendVal(10,30));
console.log("After append value in an empty list : ",list1.SLdisplay());
console.log("-----------------------------------------");

console.log("a list with no append",list1.SLdisplay());
// if after not present (one node) append at end
console.log("Append value in a list with no Append: ",list1.appendVal(5,1));
console.log("After Append value a list with no Append: ",list1.SLdisplay());
console.log("-----------------------------------------");

console.log("a list with append as head",list1.SLdisplay());
// if after present as head, append after
console.log("Append value in a list with Append as head: ",list1.appendVal(50,10));
console.log("After Append value a list with Append as head: ",list1.SLdisplay());
console.log("-----------------------------------------");

console.log("a list with after not present",list1.SLdisplay());
// if after not present, append at end
console.log("Append value in a list with no Append: ",list1.appendVal(150,1));
console.log("After Append value a list with no Append: ",list1.SLdisplay());
console.log("-----------------------------------------");
 
console.log("a list with Append and its not the head",list1.SLdisplay());
// if after present and not head, append after
console.log("Append value in a list with no Append: ",list1.appendVal(12,5));
console.log("After Append value a list with no Append: ",list1.SLdisplay());
console.log("-----------------------------------------");