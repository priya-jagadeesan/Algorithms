function ArrStack() {
    var stack_arr = [];
    var stack_top = -1;
    var stack_size = 0;

    this.push = push;
    this.pop = pop;
    this.top = top;
    this.size = size;
    this.isEmpty = isEmpty;
    this.contains1 = contains1;
    this.contains2 = contains2;
    this.SLSdisplay = SLSdisplay;

    // push(val) - add val to Stack at top
    function push(val) {
        stack_arr[++stack_top] = val;
        stack_size++;
        return true;
    }

    // pop() - remove and return top value of Stack
    function pop() {
        if (stack_top === -1) {
            console.log('Stack is Empty');
            return null;
        }
        var topValue = stack_arr[stack_top--];
        stack_size--;
        return topValue;
    }

    // top() - return top val of Stack
    function top() {
        if (stack_top === -1) {
            console.log('Stack is Empty');
            return null;
        }
        return stack_arr[stack_top];
    }

    // isEmpty() - Stack contains no values?
    function isEmpty() {
        if (stack_top === -1) {
            return true;
        }
        return false;
    }

    // size() - return number of values in Stack
    function size() {
        return stack_size;
    }

    // contains(val) - Stack contains val?
    // by iterating the arr values which is not definiton of Stack
    function contains1(val) {
        if (stack_top === -1) {
            return false;
        }
        var contains = false;
        stack_arr.forEach((stack_val) => {
            if (stack_val === val) {
                contains = true;
            }
        });
        return contains;
    }

    // using temp Stack to follow th definition of Stack(only top available)
    function contains2(val) {
        if (stack_top === -1) {
            return false;
        }

        var tempStack = new ArrStack();
        var contains = false;
        var flag = true;

        while (flag) {
            if (this.isEmpty()) {
                break;
            }
            if (this.top() === val) {
                contains = true;
                break;
            }
            if (this.top() !== val) {
                tempStack.push(this.pop());
            }
        }
        flag = true;
        while (flag) {
            if (!tempStack.isEmpty()) {
                this.push(tempStack.pop());
            }
            else {
                flag = false;
            }
        }
        return contains;
    }

    // SLSdisplay() - return the values in Stack as a string
    function SLSdisplay() {
        return stack_arr;
    }
}

module.exports = ArrStack;