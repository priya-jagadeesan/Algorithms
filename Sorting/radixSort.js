function findMax(arr) {
    var max = arr[0];
    var j = 0;
    for (let idx = 1; idx < arr.length; idx++) {
        if (arr[idx] > max) {
            max = arr[idx];
        }
    }
    return max;
}

function countingSort(arr, exp) {
    var tempArr = [], outArr = [];
    for (idx = 0; idx < 10; idx++) {
        tempArr[idx] = 0;
    }
    // 1 / exp => 1 / 1 = 1 => 1 % 10 = 1
    // 20 / exp => 20 / 1 = 20 => 20 % 10 = 0
    // 802 / exp => 802 / 1 = 802 => 802 % 10 = 2

    // 1 / exp => 1 / 10 = 0 => 0 % 10 = 0
    // 20 / exp => 20 / 10 = 2 => 2 % 10 = 2
    // 802 / exp => 802 / 10 = 80 => 80 % 10 = 0
    
    for (var idx = 0; idx < arr.length; idx++) {
        tempArr[Math.floor((arr[idx] / exp) % 10)] += 1;
    }

    for (var idx = 0; idx < tempArr.length - 1; idx++) {
        tempArr[idx + 1] += tempArr[idx];
    }

    for (var idx = arr.length - 1; idx >= 0; idx--) {
        j = Math.floor((arr[idx] / exp) % 10);
        if (tempArr[j] > 0) {
            tempArr[j]--;
            outArr[tempArr[j]] = arr[idx];
        }
    }

    for (var idx = 0; idx < outArr.length; idx++) {
        arr[idx] = outArr[idx];
    }
    console.log("in count sort : ", arr);
}
function radixSort(arr){
    var max = findMax(arr);
    var exp = 1;

    while(Math.floor(max/exp) > 0){
        countingSort(arr,exp);
        exp *= 10;
    }
}

var arr1 = [1,201,2,606,8,102,103,701,218];
console.log("array to be sorted : ", arr1);
radixSort(arr1);
console.log("array sorted : ", arr1);