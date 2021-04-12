//Using recursion, the function calls back itself until it reaches the if statement where num is less than or equal to 0

function countdown(num){
    if (num <= 0){
        console.log("Done")
        return
    }
    console.log(num)
    num--
    countdown(num)
}

//first prints num
//then num -1
//re-run function, until num hits if statement



//Normal way looping through

function countdown(num){

    for (i=num; i > 0; i--){
        console.log(i)
    }
    console.log("Done")
}




//Recursion function #2 

//This function calls back itself until it reaches the if statement where it returns 1

//Example: num = 3 

//if statement is skipped becauase num != 3

//So returns (3) + sumRange(3-1)

//Now sumRange (2) is called and repeats until sumRange(1) where it returns 1. Call stack is waiting until sumRange is complete

//So entire function is: return (3) + sumRange(2) + sumRange(1)

//return (3) + (2) + (1)

function sumRange(num){
    if(num===1){
        return 1
    }
    return num + sumRange(num-1)
}

