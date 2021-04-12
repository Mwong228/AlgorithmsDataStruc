function maxSubarraySum(arr, num){
    let maxSum = 0
    let tempSum = 0 
    //if invalid array return null
    if(arr.length < num){
        return null
    }
    //Adds 3 numbers of the array
    for( i=0; i<num; i++){
        maxSum += arr[i]
    }
    //Stores the maxSum from the last for loop to tempSum so it can compare 
    tempSum = maxSum

    //Start loop at index 3, add next number of array to tempSum and minus the first
    for (i = num; i<arr.length; i++){
        tempSum = tempSum - arr[i-num] + arr[i]
        maxSum = Math.max(maxSum, tempSum)
    }

    return maxSum
}