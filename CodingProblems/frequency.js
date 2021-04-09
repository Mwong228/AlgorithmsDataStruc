// Write a function that accepts two arrays. Function returns true if every value in the array has a corresponding squared value in the second array. Frequency of values must be the same

function frequency(array1, array2){

    let freqCounter1 = {}
    let freqCounter2= {}

    if(array1.length != array2.length){
        return false
    }
    for(i of array1){
        freqCounter1[i] = (freqCounter1[i] || 0 ) + 1
    }
    for(i of array2){
        freqCounter2[i] = (freqCounter2[i] || 0 ) + 1
    }
    console.log(freqCounter1)
    console.log(freqCounter2)
    for(key in freqCounter1){
        if(!(key ** 2 in freqCounter2)){
            return false
        }
    }
    return true

}

frequency([1,2,3], [1,4,9])
frequency([2,8,10], [1,3,8])
frequency([2,3,8,10], [4,9])