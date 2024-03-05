// Coding Test - 3. Find the Missing Number

function findMissingNumber(arr, length) {
  let missingNumbers = [];
  for (let i = 1; i <= length; i++) {
    !arr.includes(i) && missingNumbers.push(i);
  }
  return missingNumbers;
}

console.log(findMissingNumber([1, 3, 7, 9, 10], 10)); // [2, 4, 5, 6, 8]
console.log(findMissingNumber([7, 6, 2, 1, 1], 8)); // [3, 4, 5, 8]
console.log(findMissingNumber([], 5)); // [1, 2, 3, 4, 5]
