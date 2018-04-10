// require node
var Node = require('./btNode');

function BST(){
    this.root = null;
    this.add = add;
    this.rAdd = rAdd;
    this.find = find;
    this.min = min;
    this.depth = depth;
    this.mirror = mirror;

    function add(val){
        var curr_root = this.root;
        if(!curr_root){
            this.root = new Node(val);
            return true;
        }

        while(curr_root){
            if(val < curr_root.val){
                if(curr_root.left){
                    curr_root = curr_root.left;
                }
                else{
                    curr_root.left = new Node(val);
                    break;
                }
            }
            if(val > curr_root.val){
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

    function rAdd(val,curr_root = this.root){
        if(this.root === null){
            this.root = new Node(val);
            return true;
        }

        if(val < curr_root.val){
            if(curr_root.left){
                rAdd(val,curr_root.left);
            }
            else{
                curr_root.left = new Node(val);
            }
        }

        if(val > curr_root.val){
            if(curr_root.right){
                rAdd(val,curr_root.right);
            }
            else{
                curr_root.right = new Node(val);
            }
        }

        return true;
    }

    function find(val){
        var curr_root = this.root;
        if(!curr_root){
            return false;
        }

        while(curr_root){
            if(curr_root.val === val){
                return true;
            }
            if(curr_root.val > val){
                if(curr_root.left){
                    curr_root = curr_root.left;
                }
                else{
                    break;
                }
            }
            if(curr_root.val < val){
                if(curr_root.right){
                    curr_root = curr_root.right;
                }
                else{
                    break;
                }
            }
        }
        return false;
    }

    function min(){
        var curr_root = this.root;

        if(!curr_root){
            return null;
        }

        while(curr_root){
            if(curr_root.left){
                curr_root = curr_root.left;
            }
            else{
                return curr_root.val;
            }
        }
    }

    function depth(curr_root=this.root){

        if(!curr_root){
            return 0;
        }

        if(!curr_root.left && !curr_root.right){
            return 1;
        }

        var leftDepth = 0, rightDepth = 0;

        if(curr_root.left){
            leftDepth += depth(curr_root.left);
        }
        if(curr_root.right){
            rightDepth += depth(curr_root.right);
        }
        // return leftDepth + rightDepth + 1;
        return Math.max(leftDepth , rightDepth) + 1;
    }

    function mirror(curr_root = this.root){
        if(this.root === null){
            return;
        }

        if(!curr_root){
            return;
        }

        mirror(curr_root.left);
        mirror(curr_root.right);

        var temp = new Node();
        temp = curr_root.left;
        curr_root.left = curr_root.right;
        curr_root.right = temp;
    }

}

var tree = new BST();
tree.add(5);
tree.add(2);
tree.add(9);
tree.add(10);
tree.add(11);
tree.add(3);
console.log("find depth of tree: ", tree.depth());
var tree = new BST();
tree.rAdd(5);
tree.rAdd(2);
tree.rAdd(9);
tree.rAdd(10);
tree.rAdd(11);
tree.rAdd(3);
tree.rAdd(13);
console.log("Contains or find existing value : ", tree.find(10));
console.log("Contains or find non-existing value : ",tree.find(100));
console.log("find min value of tree: ", tree.min());
console.log("find depth of tree: ", tree.depth());
console.log(tree.root);
console.log("mirror of tree: ", tree.mirror());
console.log(tree.root);