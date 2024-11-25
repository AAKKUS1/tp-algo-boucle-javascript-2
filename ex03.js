function multiplyArray(arr, multiplier) {
    let array = []
    for (let i = 0;i < arr.length; i++){
        let result = arr[i] * multiplier
        array.push(result) 
    }
    return array
}

console.log(multiplyArray([1, 2, 3], 2)); // Résultat attendu : [2, 4, 6]
console.log(multiplyArray([4, 0, -3], 3));