function countingSort(arr, max){
    var tempArr = [], outArr = [];
    for (idx = 0; idx <= max; idx++) {
        tempArr[idx] = 0;
    }

    for(var idx = 0; idx < arr.length; idx++){
        tempArr[arr[idx]] += 1;
    }

    // console.log("temp count array : ", tempArr);

    for(var idx = 0; idx < tempArr.length - 1; idx++){
        tempArr[idx + 1] += tempArr[idx];
    }

    // console.log("after sum count array : ", tempArr);

    for(var idx = arr.length - 1; idx >= 0; idx--){
        if(tempArr[arr[idx]] > 0){
            tempArr[arr[idx]]--;
            outArr[tempArr[arr[idx]]] = arr[idx];
        }
    }

    // console.log("after sorting array : ", outArr);

    for(var idx = 0; idx < outArr.length; idx++){
        arr[idx] = outArr[idx];
    }
}

var arr1 = [1,2,2,6,8,2,1,7,2];
console.log("array to be sorted : ", arr1);
countingSort(arr1,8);
console.log("array sorted : ", arr1);
console.log("----------------------------------------------------------------");
var arr2 = [10,40,20,60,800,20,10,70,50];
console.log("array to be sorted : ", arr2);
countingSort(arr2,800);
console.log("array sorted : ", arr2);