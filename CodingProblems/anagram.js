function anagram(str, str2){

    let compare1 = {}
    let compare2 = {}

    for(i of str){
        compare1[i] = (compare1[i] || 0) + 1 
    }
    for(i of str2){
        compare2[i] = (compare2[i] || 0) + 1 
    }
    console.log(compare1)
    console.log(compare2)

    for(key in compare1){
        if(!(key in compare2)){
            return false
        }
        if(compare1[i] != compare2[i]){
            return false
        }
    }
    return true

}

function anagram2(str, str2){
    if (str.length !== str2.length){
        return false
    }

    const compare = {}

    for(i=0; i<str.length; i++){
        let letter = str[i]

        compare[letter] ? compare[letter] += 1 : compare[letter] = 1
    }

    console.log(compare)

    for(j=0; j<str2.length; j++){
        let letter = str2[j]

        if(!compare[letter]){
            return false
        }
        else{
            compare[letter] -= 1
        }
    }
    return true
}