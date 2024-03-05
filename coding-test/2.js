// Coding Test - 2. Find Prime Number

function findPrimeNumber(arr) {
  return arr.filter((num) => {
    if (num < 2) return false;
    for (let i = 2; i < num; i++) {
      if (num % i === 0) return false;
    }
    return true;
  })
  .sort((a, b) => a - b)
  .filter((num, index, array) => array.indexOf(num) === index);
}

console.log(findPrimeNumber([3, 2, 1, 6, 9, 11])) // [2, 3, 11]
console.log(findPrimeNumber([3, 2, 13, 3, 8, 0])) // [2, 3, 13]
console.log(findPrimeNumber([])) // []