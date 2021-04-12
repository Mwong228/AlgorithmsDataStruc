//Only works on sorted arrays

// function binearSearch(arr, elem){
//     let start = 0
//     let end = arr.length -1
//     var middle = Math.floor((start+end)/2)

//     while(arr[middle] !== elem && start <= end ){
//         console.log(start, middle, end)
//         if(elem < arr[middle]){
//             end = middle - 1
//         }
//         else {
//             start = middle + 1
//         }
//         middle = Math.floor((start + end/2))
//     }
//     console.log(start, middle, elem)
//     if(arr[middle] === elem){
//         return middle
//     }
//     return -1
// }

binearSearch([2,4,5,9,10,15,16,18,30,65], 9)



function binarySearch(arr, elem){
    var start = 0 
    var end = arr.length -1
    var middle = Math.floor((start+end)/2)

    while (arr[middle] !== elem && start <= end){
        if(elem <arr[middle]){
            end = middle - 1
        }
        else {
            start = middle + 1
        }
        middle = Math.floor((start + end)/2)
    }
    if (arr[middle] === elem){
        return middle
    }

    return -1
}