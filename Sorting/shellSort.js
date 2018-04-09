// helper method swap
var swap = require('./swap');

// helper method insertion sort with start index and increment
function insertionSort(arr, start, increment){
    for(var idx1 = start; idx1 < arr.length; idx1 = idx1 + increment){
        for(var idx2 = Math.min(idx1 + increment, arr.length - 1);
                idx2 - increment >= 0; 
                idx2 = idx2 - increment){
            if(arr[idx2] < arr[idx2 - increment]){
                swap(arr, idx2, idx2 - increment);
            }
            else{
                break;
            }
        }
    }
}

function shellSort(arr){
    var increment = arr.length / 2;

    while(increment >= 1){
        for(var idx = 0; idx < increment; idx++){
            insertionSort(arr, idx, increment);
        }
        increment = increment / 2;
    }
}


var arr1 = [4,30,3,20,2,10,1,40];

console.log("before sort :", arr1);
shellSort(arr1);
console.log("after sort 2:", arr1);