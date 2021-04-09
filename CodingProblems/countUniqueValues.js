
//using frequency 

function countUniqueValues(arr){
    let obj = {}

    for (i of arr){
        obj[i] = (obj[i] || 0 ) + 1
    }
    let results = Object.keys(obj).length
    console.log(results)

}


// using pointers

function countUniqueValues(arr){
    let i=0

    for(j=1; j<arr.length; j++){
        if(!(arr[i] == arr[j])){
            i++
            arr[i] = arr[j]
        }
    }
    return i+1 
}