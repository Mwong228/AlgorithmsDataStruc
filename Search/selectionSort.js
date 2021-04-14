function selectionSort(arr){
    
    for(i=0; i<arr.length; i++){
        let lowest = i
        for(j=i+1; j<arr.length; j++){
            if(arr[j] < arr[lowest]){
                lowest = j
            }
        }
        if( i !== lowest){
        [arr[i],arr[lowest]] = [arr[lowest],arr[i]]
        console.log(arr)
        console.log("**")
        }
    }
    
    return arr
}

selectionSort([34,22,10,19,17])

//Time complexity O(n^2)