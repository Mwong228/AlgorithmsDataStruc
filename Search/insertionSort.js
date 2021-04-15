function insertionSort(arr){
    for(i=1; i<arr.length; i++){
        let currentVal= arr[i]
        for(j=i-1; j >= 0 && arr[j] > currentVal; j--){
            arr[j+1] = arr[j]
        }
        arr[j+1] = currentVal
    }
    return arr
}

insertionSort([5,10,9,30,28])

//Time complexity O(N^2)
//Space O(1)