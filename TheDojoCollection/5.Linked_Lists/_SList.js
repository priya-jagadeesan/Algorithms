// require Singly List Node
var Node = require('./_SLNode');

// Singly List List
function SList(){
    this.head = null;
}

SList.prototype.SLdisplay = function(){
    var myList = '';
    runner = this.head;
    while(runner){
        myList += runner.val + ',';
        runner = runner.next;
    }
    return myList;
}

module.exports = SList;