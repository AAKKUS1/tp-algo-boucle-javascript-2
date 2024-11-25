function filterPositiveNumbers(arr) {
    let array = []

    for (let i = 0;i < arr.length; i++){
       let compare = 1;
       if ( arr[i] >= compare){
        array.push(arr[i])
       } 
    }
    return array
}



console.log(filterPositiveNumbers([-3, 5, -1, 2])); 
console.log(filterPositiveNumbers([-1, -2, -3]));