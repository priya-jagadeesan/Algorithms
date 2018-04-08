function SLNode(value){
    this.val = value;
    this.next = null;
}

function SList(){
    this.head = null;
}

SList.prototype.SLdisplay = function(){
    var myList = '';
    runner = this.head;
    while(runner){
        myList += runner.val + ' , ';
        runner = runner.next;
    }
    return myList;
}

SList.prototype.createList = function () {
    var input = prompt("Please enter a number to add to the list");
    while (input) {
        var newNode = new SLNode(input);
        var runner = this.head;
        if (!this.head) {
            this.head = newNode;
        }
        else {
            while (runner.next) {
                runner = runner.next;
            }
            runner.next = newNode;
        }
        input = prompt("Please enter a number to add to the list");
    }
    return this.SLdisplay();
}
