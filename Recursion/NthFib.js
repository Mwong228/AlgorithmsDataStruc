//time O(2^N)
//space O(N) 
function fibonacci(num){
    if(num === 1){
        return 0
    }
    if(num === 2){
        return 1
    }
    else{
        return fibonacci(num-1) + fibonacci(num-2)
    }
}