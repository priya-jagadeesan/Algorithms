// helper method swap
var swap = require('./swap');

function bubbleSort(arr,n=arr.length){
    if(n == 1){
        return;
    }

    for(var idx = 0; idx < n-1; idx++ ){
        if(arr[idx] > arr[idx + 1]){
            swap(arr,idx,idx + 1);
        }
    }

    bubbleSort(arr,n-1);
}

var arr1 = [11,3,1,9,2,5];
var arr2 = [110,30,10,90,20,50];

console.log("before sort :", arr1);
bubbleSort(arr1);
console.log("after sort :", arr1);
console.log("------------------------------------------");
console.log("before sort :", arr2);
bubbleSort(arr2);
console.log("after sort :", arr2);