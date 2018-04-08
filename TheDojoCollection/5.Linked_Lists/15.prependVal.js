var SLNode = require('./_SLNode');
var SList = require('./_SList');

// prepend method with new value, 'val' and the prepend node, 'before'
SList.prototype.prependVal = function(val,before){
    var newNode = new SLNode(val);
    curr = this.head;
    if(!curr){
        this.head = newNode;
        return true;
    }

    prev = null;
    runner = curr;

    if(curr.val === before){
        newNode.next = curr;
        this.head = newNode;
        return true;
    }

    while(curr){
        if(curr.next){
            if(curr.next.val === before){
                prev = curr;
            }
        }
        runner = curr;
        curr = curr.next;
    }
    
    if(prev){
        newNode.next = prev.next;
        prev.next = newNode;
    }
    else{
        runner.next = newNode;
    }
    return true;
}

// create an empty list
var list1 = new SList();
console.log("an empty list : ",list1.SLdisplay());
console.log("prepend value in an empty list : ",list1.prependVal(10,30));
console.log("After prepend value in an empty list : ",list1.SLdisplay());
console.log("-----------------------------------------");

console.log("a list with prepend",list1.SLdisplay());
console.log("prepend value in a list with prepend : ",list1.prependVal(30,10));
console.log("After prepend value a list with prepend : ",list1.SLdisplay());
console.log("-----------------------------------------");

// if before not present (one node) add at end
console.log("a list with no prepend",list1.SLdisplay());
console.log("prepend value in a list with no prepend : ",list1.prependVal(5,1));
console.log("After prepend value a list with no prepend : ",list1.SLdisplay());
console.log("-----------------------------------------");

// if before present as head, prepend before and make it as head
console.log("a list with prepend as head",list1.SLdisplay());
console.log("prepend value in a list with prepend as head : ",list1.prependVal(15,30));
console.log("After prepend value a list with prepend as head : ",list1.SLdisplay());
console.log("-----------------------------------------");