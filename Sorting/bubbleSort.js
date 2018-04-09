// helper method swap
var swap = require('./swap');

// bubble sort with outer boundary starts from index 0
function bubbleSort2(arr){
    console.log("bubble sort2");
    var swapped = false;
    for(var idx1 = 0; idx1 < arr.length; idx1++ ){
        swapped = false;
        for(var idx2 = arr.length - 1; idx2 > idx1; idx2--){
            if(arr[idx2] < arr[idx2 - 1]){
                swap(arr,idx2,idx2 - 1);
                swapped = true;
            }
        }
        if(!swapped){
            break;
        }
    }
}

// bubble sort with outer boundary starts from index array length - 1
function bubbleSort1(arr){
    console.log("bubble sort1");
    var swapped = false;
    for(var idx1 = arr.length - 1; idx1 > 0; idx1-- ){
        swapped = false;
        for(var idx2 = 0; idx2 < idx1; idx2++){
            if(arr[idx2] > arr[idx2 + 1]){
                swap(arr,idx2,idx2 + 1);
                swapped = true;
            }
        }
        if(!swapped){
            break;
        }
    }
}

var arr1 = [11,3,1,9,2,5];
var arr2 = [110,30,10,90,20,50];

console.log("before sort :", arr1);
bubbleSort1(arr1);
console.log("after sort :", arr1);
console.log("------------------------------------------");
console.log("before sort :", arr2);
bubbleSort2(arr2);
console.log("after sort :", arr2);