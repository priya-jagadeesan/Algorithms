// helper method swap
var swap = require('./swap');

function selectionSort(arr){
    for(var idx1=0; idx1 < arr.length; idx1++ ){
        for(var idx2 = idx1 + 1; idx2 < arr.length; idx2++){
            if(arr[idx1] > arr[idx2]){
                swap(arr,idx1,idx2);
            }
        }
    }
}

var arr1 = [10,3,1,9,2,5];

console.log("before sort :", arr1);
selectionSort(arr1);
console.log("after sort :", arr1);