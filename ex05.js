function countVowels(str) {
    let result = 0;
    const voyelles = "aeiouy";
    for (let i = 0;i < str.length; i++){
        for (let k = 0; k < array.length; k++) {
            if(str[i] == k){
                result ++
            }
        }
    }
    return result
}


console.log(countVowels("hello")); 
console.log(countVowels("xyz")); 