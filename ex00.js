function sumArray(arr) {
    arr // [1, 2, 3, 4]
    arr[0] // 1

    let result = 0;
   for (let i = 0; i < arr.length; i++) {
    result = result + arr[i]
   }
   return result
 }
 console.log(sumArray([1, 2, 3, 4]));
 console.log(sumArray([10, -2, 5])); 