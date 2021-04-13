
//Bubble Sort
function bubbleSort(arr){
    for(i=arr.length; i> 0; i--){
        for(j=0; j<i-1; j++){
            console.log(arr, arr[j], arr[j+1])
            if(arr[j] > arr[j+1]){
                [arr[j],arr[j+1]] = [arr[j+1],arr[j]]
            }
        }
    }
    return arr
}

bubbleSort([37,45,29,8])


//Optimized for almost sorted array
function bubbleSort(arr){
    var noSwaps
    for(i=arr.length; i> 0; i--){
        noSwaps = true
        for(j=0; j<i-1; j++){
            console.log(arr, arr[j], arr[j+1])
            if(arr[j] > arr[j+1]){
                [arr[j],arr[j+1]] = [arr[j+1],arr[j]]
                noSwaps=false
            }
        }
        if(noSwaps){
            break
        }
    }
    return arr
}

bubbleSort([8,1,2,3,4,5,6,7])

//Time complexity of Bubble Sort O(n^2)
//Space complexity is O(1) -> only a single additional memory space is required 