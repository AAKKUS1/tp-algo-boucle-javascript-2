
function countEvenNumbers(arr) {
    let result = 0
        for (let i = 0;i < arr.length; i++){
          if (arr[i] % 2 === 0){
            result++
          }
        }
    return result
  }
  
  console.log(countEvenNumbers([1, 2, 3, 4])); 
  console.log(countEvenNumbers([7, 11, 19])); 