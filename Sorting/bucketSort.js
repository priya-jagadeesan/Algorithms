// helper method swap
var swap = require('./swap');

function bucketSort(arr, bucketSize) {
    if (arr.length === 0) {
        return arr;
    }

    // Determine minimum and maximum values
    var min = arr[0];
    var max = arr[0];
    for (var idx = 1; idx < arr.length; idx++) {
        if (arr[idx] < min) {
            min = arr[idx];
        } else if (arr[idx] > max) {
            max = arr[idx];
        }
    }

    // Initialise buckets
    var DEFAULT_BUCKET_SIZE = 5;
    bucketSize = bucketSize || DEFAULT_BUCKET_SIZE;
    var bucketCount = Math.floor((max - min) / bucketSize) + 1;
    var buckets = new Array(bucketCount);
    for (var idx = 0; idx < buckets.length; idx++) {
        buckets[idx] = [];
    }

    // Distribute input array values into buckets
    for (var idx = 0; idx < arr.length; idx++) {
        buckets[Math.floor((arr[idx] - min) / bucketSize)].push(arr[idx]);
    }

    // Sort buckets and place back into input array
    arr.length = 0;
    for (var idx = 0; idx < buckets.length; idx++) {
        insertionSort(buckets[idx]);
        
        for (var j = 0; j < buckets[i].length; j++) {
            arr.push(buckets[i][j]);
        }
    }

    return arr;
}

function insertionSort(arr){
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

var arr1 = [11,3,1,9,2,5];
// var arr1 = [1,201,2,606,8,102,103,701,218];
console.log("array to be sorted : ", arr1);
bucketSort(arr1);
console.log("array sorted : ", arr1);