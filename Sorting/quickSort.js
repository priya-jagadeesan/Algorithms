// helper method swap
var swap = require('./swap');

// helper method to sort in partitions
function partition(arr, low = 0, high = arr.length-1){
    var pivot = arr[low];
    var l = low;
    var h = high;

    while(l < h){
        while(arr[l] <= pivot && l < h){
            l++;
        }
        while(arr[h] > pivot){
            h--;
        }
        if(l < h){
            swap(arr, l, h);
        }
    }

    swap(arr, low, h);
    return h;
}

function quicksort(arr, low = 0, high = arr.length - 1){
    if(low >= high){
        return;
    }

    var pivotIndex = partition(arr, low, high);
    quicksort(arr, low, pivotIndex - 1);
    quicksort(arr, pivotIndex + 1, high);
}

var arr = [10, 3, 1, 9, 5, 4, 2];

console.log("before sort :", arr);
quicksort(arr);
console.log("after sort :", arr);