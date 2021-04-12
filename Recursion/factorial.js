//Using a normal loop

function factorial(num){
    let total = 1
    for(i = num; i > 1; i--){
        total *= i
    }
    return total
}

//Using recursion

function factorial(num){
    if(num ===1){
        return 1
    }
    return num*factorial(num-1)
}