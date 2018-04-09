// helper method merge two arrays
function merge(arr1, arr2){
    var idx = idx1 = idx2 = 0;
    var arr = [];
    while(idx1 < arr1.length && idx2 < arr2.length){
        if(arr1[idx1] < arr2[idx2]){
            arr[idx] = arr1[idx1];
            idx1++;
        }
        if(arr2[idx2] < arr1[idx1]){
            arr[idx] = arr2[idx2];
            idx2++;
        }
        idx++;
    }
    // below steps 18 to 32 can be replaced with this return if using in-built methods
    // return result.concat(arr1.slice(idx1)).concat(arr2.slice(idx2));
    if(idx1 != arr1.length){
        while(idx1 < arr1.length){
            arr[idx] = arr1[idx1];
            idx1++;
            idx++
        }
    }
    if(idx2 != arr2.length){
        while(idx2 < arr2.length){
            arr[idx] = arr2[idx2];
            idx2++;
            idx++
        }
    }
    return arr;
}

function mergeSort(arr){

    if(arr.length === 1 ){
        return arr;
    }

    var half = Math.floor(arr.length / 2);

    var first_half = arr.slice(0,half);
    var second_half = arr.slice(half);

    return merge(mergeSort(first_half),mergeSort(second_half));
}

var arr = [20,10,40,30,60,50,80,70];
console.log(mergeSort(arr));