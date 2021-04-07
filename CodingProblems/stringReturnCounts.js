
function word(str){
    result={}

    for(i=0; i<str.length; i++){
        str = str.replace(/[^A-Z0-9]/ig,"")
        char = str[i].toLowerCase()
        if(result[char] > 0){
            result[char]++
        }
        else{
            result[char] = 1
        }
    }
    return result
}

word("Hello")
word("HELLO, my name is Bob")