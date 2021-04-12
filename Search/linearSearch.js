function linearSearch(arr, value){
    for(i=0; i<arr.length; i++){
        if(arr[i] == value){
            return i
        }
    }
    return -1
}

//Time O(N)