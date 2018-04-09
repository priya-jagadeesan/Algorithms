// helper method swap
var swap = require('./swap');

// insertion sort in ascending order
function insertionSort_asc(arr){
    for(var idx1 = arr.length - 1; idx1 > 0; idx1--){
        for(var idx2 = idx1 - 1; idx2 < arr.length - 1; idx2++){
            if(arr[idx2] > arr[idx2 + 1]){
                swap(arr, idx2, idx2 + 1);
            }
            else{
                break;
            }
        }
    }
}

// insertion sort in descending order
function insertionSort_desc(arr){
    for(var idx1 = 0; idx1 < arr.length; idx1++){
        for(var idx2 = idx1 + 1; idx2 > 0; idx2--){
            if(arr[idx2] > arr[idx2 - 1]){
                swap(arr, idx2, idx2 - 1);
            }
            else{
                break;
            }
        }
    }
}

var arr1 = [11,3,1,9,2,5];
var arr2 = [110,30,10,90,20,50];

console.log("before sort :", arr1);
insertionSort_asc(arr1);
console.log("after sort :", arr1);
console.log("------------------------------------------");
console.log("before sort :", arr2);
insertionSort_desc(arr2);
console.log("after sort :", arr2);