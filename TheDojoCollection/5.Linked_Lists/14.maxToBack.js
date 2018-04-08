var SLNode = require('./_SLNode');
var SList = require('./_SList');

SList.prototype.max = function(){
    var runner = this.head;
    if (!runner){
        return null;
    }
    if (!runner.next){
        return runner.val;
    }
    var max = runner.val;
    while(runner.next){
        if( runner.next.val > max){
            max = runner.next.val;
        }
        runner = runner.next;
    }
    return max;
}

SList.prototype.maxToBack = function(){
    var max = this.max();
    var maxNode;
    var prev = null;
    var runner = this.head;
    if(!runner){
        console.log("Cannot perform operation on an empty list");
        return false;
    }
    if(!runner.next){
        return true;
    }
    console.log("max value : ", max);
    while(runner){
        if(runner.val === max){
            if(!prev){
                maxNode = runner;
                this.head = runner.next;
                maxNode.next = null;
            }
            else{
                maxNode = runner;
                prev.next = runner.next;
                maxNode.next = null;
            }
        }
        else{
            prev = runner;
        }
        runner = runner.next;
    }

    runner = this.head;
    while(runner.next){
        runner = runner.next;
    }
    runner.next = maxNode;
    return true;
}

// create an empty list
var list1 = new SList();
console.log("an empty list : ",list1.SLdisplay());
console.log("Move max value to back of an empty list : ",list1.maxToBack());
console.log("-----------------------------------------");

// create a list of values
var node1 = new SLNode(400);
list1.head = node1;
console.log("After adding values to the list : ",list1.SLdisplay());
console.log("Move max value to back of the list : ",list1.maxToBack());
console.log("After moving min value to front in the list : ",list1.SLdisplay());
console.log("-----------------------------------------");

var node2 = new SLNode(200);
var node3 = new SLNode(3);
var node4 = new SLNode(10);
node1.next = node2;
node2.next = node3;
node3.next = node4;

console.log("After adding values to the list : ",list1.SLdisplay());
console.log("Move minimum value to front of the list : ",list1.maxToBack());
console.log("After moving min value to front in the list : ",list1.SLdisplay());
console.log("-----------------------------------------");

var list2 = new SList();
var node10 = new SLNode(40);
list2.head = node10;
var node20 = new SLNode(20);
var node30 = new SLNode(3);
var node40 = new SLNode(100);
node10.next = node20;
node20.next = node30;
node30.next = node40;

console.log("After adding values to the list : ",list2.SLdisplay());
console.log("Move minimum value to front of the list : ",list2.maxToBack());
console.log("After moving min value to front in the list : ",list2.SLdisplay());
console.log("-----------------------------------------");

var list3 = new SList();
var node100 = new SLNode(40);
list3.head = node100;
var node200 = new SLNode(20);
var node300 = new SLNode(3000);
var node400 = new SLNode(100);
node100.next = node200;
node200.next = node300;
node300.next = node400;

console.log("After adding values to the list : ",list3.SLdisplay());
console.log("Move minimum value to front of the list : ",list3.maxToBack());
console.log("After moving min value to front in the list : ",list3.SLdisplay());
console.log("-----------------------------------------");