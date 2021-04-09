
//using pointers to find a two number sum within an array

//O(n) time
//O(1) space

function twoNumbers(arr, targetSum){
    let sortArr = arr.sort((a,b) => a-b)

    let left = 0 
    let right = sortArr.length - 1

    while(left < right){
        currentSum = arr[left] + arr[right]
        if(currentSum == targetSum){
            return true
        }
        else if( currentSum < targetSum){
            left ++ 
        }
        else if( currentSum > targetSum){
            right --
        }
    }
    return false
}