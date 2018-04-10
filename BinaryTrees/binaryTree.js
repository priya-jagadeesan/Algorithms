// require node
var Node = require('./btNode');
var qNode = require('../TheDojoCollection/6.QueuesAndStacks/_SLNode');
var Queue = require('../TheDojoCollection/6.QueuesAndStacks/_SLQueue');

function bTree(){
    this.root = null;
    this.add = add;
    this.breathFirstTraversal = breathFirstTraversal;
    this.depthFirstTraversal = depthFirstTraversal;

    function add(val){
        var curr_root = this.root;
        if(!curr_root){
            this.root = new Node(val);
            return true;
        }

        while(curr_root){
            if(curr_root.val > val){
                if(curr_root.left){
                    curr_root = curr_root.left;
                }
                else{
                    curr_root.left = new Node(val);
                    break;
                }
            }
            if(curr_root.val < val){
                if(curr_root.right){
                    curr_root = curr_root.right;
                }
                else{
                    curr_root.right = new Node(val);
                    break;
                }
            }
        }
        return true;
    }

    function breathFirstTraversal(){
        if(!this.root){
            console.log("Empty binary tree");
            return false;
        }

        var qnode = new qNode();
        var queue = new Queue();
        queue.enqueue(this.root);

        while(!queue.isEmpty()){
            qnode = queue.dequeue();
            console.log(qnode.val);
            if(qnode.left){
                queue.enqueue(qnode.left);
            }
            if(qnode.right){
                queue.enqueue(qnode.right);
            }
        }
        return true;
    }

    function depthFirstTraversal(curr_root = this.root,display="pre-order"){
        if(!curr_root){
            console.log("Empty binary tree");
            return false;
        }

        if(display == "pre-order"){
            console.log(curr_root.val);
            if(curr_root.left) { depthFirstTraversal(curr_root.left,"pre-order"); }
            if(curr_root.right) { depthFirstTraversal(curr_root.right,"pre-order"); }
            return true;
        }

        if(display == "in-order"){
            if(curr_root.left) { depthFirstTraversal(curr_root.left,"in-order"); }
            console.log(curr_root.val);
            if(curr_root.right) { depthFirstTraversal(curr_root.right,"in-order"); }
            return true;
        }

        if(display == "post-order"){
            if(curr_root.left) { depthFirstTraversal(curr_root.left,"post-order"); }
            if(curr_root.right) { depthFirstTraversal(curr_root.right,"post-order"); }
            console.log(curr_root.val);
            return true;
        }

    }

}

var tree = new bTree();
tree.add(5);
tree.add(2);
tree.add(9);
tree.add(10);
tree.add(11);
tree.add(3);
console.log("------------breath First Traversal-----------------");
tree.breathFirstTraversal();
console.log("------------depth First Traversal-----------------");
console.log("-----------------pre-order------------------------");
tree.depthFirstTraversal(tree.root,"pre-order");
console.log("-----------------in-order-------------------------");
tree.depthFirstTraversal(tree.root,"in-order");
console.log("-----------------post-order-----------------------");
tree.depthFirstTraversal(tree.root,"post-order");